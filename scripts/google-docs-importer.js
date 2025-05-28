const fs = require('fs');
const path = require('path');
const { google } = require('googleapis');

// Configuration
const CONFIG = {
  // You'll need to replace this with your Google Doc ID
  GOOGLE_DOC_ID: 'YOUR_GOOGLE_DOC_ID_HERE',
  // Path to your service account key JSON file
  SERVICE_ACCOUNT_KEY_PATH: './google-service-account-key.json',
  // Output directory for the markdown file
  OUTPUT_DIR: '_posts'
};

/**
 * Extract Google Doc ID from a sharing URL
 * URL format: https://docs.google.com/document/d/DOCUMENT_ID/edit
 */
function extractDocId(url) {
  const match = url.match(/\/document\/d\/([a-zA-Z0-9-_]+)/);
  return match ? match[1] : null;
}

/**
 * Convert Google Docs content to markdown
 */
function convertToMarkdown(doc) {
  let content = '';
  
  if (doc.body && doc.body.content) {
    for (const element of doc.body.content) {
      if (element.paragraph) {
        const paragraph = element.paragraph;
        let text = '';
        
        if (paragraph.elements) {
          for (const elem of paragraph.elements) {
            if (elem.textRun) {
              text += elem.textRun.content;
            }
          }
        }
        
        // Handle different paragraph styles
        const style = paragraph.paragraphStyle;
        if (style && style.namedStyleType) {
          switch (style.namedStyleType) {
            case 'HEADING_1':
              content += `# ${text.trim()}\n\n`;
              break;
            case 'HEADING_2':
              content += `## ${text.trim()}\n\n`;
              break;
            case 'HEADING_3':
              content += `### ${text.trim()}\n\n`;
              break;
            default:
              if (text.trim()) {
                content += `${text.trim()}\n\n`;
              }
          }
        } else if (text.trim()) {
          content += `${text.trim()}\n\n`;
        }
      }
    }
  }
  
  return content.trim();
}

/**
 * Generate frontmatter for the blog post
 */
function generateFrontmatter(title, author = 'Superlend Team') {
  const date = new Date().toISOString();
  const slug = title.toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
  
  return `---
title: "${title}"
excerpt: "Auto-generated excerpt from Google Docs content..."
coverImage: "/assets/blog/${slug}/cover.jpg"
date: "${date}"
author:
  name: "${author}"
  picture: "/assets/blog/authors/team.jpeg"
ogImage:
  url: "/assets/blog/${slug}/cover.jpg"
---

`;
}

/**
 * Main function to import from Google Docs
 */
async function importFromGoogleDocs(docIdOrUrl, outputFileName) {
  try {
    // Extract doc ID if URL is provided
    const docId = docIdOrUrl.includes('docs.google.com') ? 
      extractDocId(docIdOrUrl) : docIdOrUrl;
    
    if (!docId) {
      throw new Error('Invalid Google Docs URL or ID');
    }
    
    // Set up Google Docs API
    const auth = new google.auth.GoogleAuth({
      keyFile: CONFIG.SERVICE_ACCOUNT_KEY_PATH,
      scopes: ['https://www.googleapis.com/auth/documents.readonly']
    });
    
    const docs = google.docs({ version: 'v1', auth });
    
    // Fetch the document
    console.log(`Fetching document: ${docId}`);
    const response = await docs.documents.get({
      documentId: docId
    });
    
    const doc = response.data;
    const title = doc.title || 'Untitled Blog Post';
    
    console.log(`Document title: ${title}`);
    
    // Convert content to markdown
    const markdownContent = convertToMarkdown(doc);
    
    // Generate frontmatter
    const frontmatter = generateFrontmatter(title);
    
    // Combine frontmatter and content
    const fullContent = frontmatter + markdownContent;
    
    // Create output filename if not provided
    if (!outputFileName) {
      outputFileName = title.toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '') + '.md';
    }
    
    // Ensure output filename ends with .md
    if (!outputFileName.endsWith('.md')) {
      outputFileName += '.md';
    }
    
    // Write to file
    const outputPath = path.join(CONFIG.OUTPUT_DIR, outputFileName);
    fs.writeFileSync(outputPath, fullContent, 'utf8');
    
    console.log(`✅ Blog post created: ${outputPath}`);
    console.log(`📝 Title: ${title}`);
    console.log(`📄 Content length: ${markdownContent.length} characters`);
    
    return {
      success: true,
      outputPath,
      title,
      content: fullContent
    };
    
  } catch (error) {
    console.error('❌ Error importing from Google Docs:', error.message);
    return {
      success: false,
      error: error.message
    };
  }
}

// CLI interface
if (require.main === module) {
  const args = process.argv.slice(2);
  
  if (args.length === 0) {
    console.log(`
📚 Google Docs to Blog Importer

Usage:
  node scripts/google-docs-importer.js <GOOGLE_DOC_URL_OR_ID> [output-filename.md]

Examples:
  node scripts/google-docs-importer.js "https://docs.google.com/document/d/1ABC...XYZ/edit"
  node scripts/google-docs-importer.js "1ABC...XYZ" "my-blog-post.md"

Setup required:
1. Create a Google Cloud Project
2. Enable Google Docs API
3. Create a service account and download the JSON key
4. Place the key file as: ./google-service-account-key.json
5. Share your Google Doc with the service account email

Current config:
- Service account key: ${CONFIG.SERVICE_ACCOUNT_KEY_PATH}
- Output directory: ${CONFIG.OUTPUT_DIR}
    `);
    process.exit(1);
  }
  
  const docIdOrUrl = args[0];
  const outputFileName = args[1];
  
  importFromGoogleDocs(docIdOrUrl, outputFileName)
    .then(result => {
      if (!result.success) {
        process.exit(1);
      }
    });
}

module.exports = { importFromGoogleDocs, extractDocId }; 