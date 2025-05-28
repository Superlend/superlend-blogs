const fs = require('fs');
const path = require('path');
const readline = require('readline');

/**
 * Interactive blog post formatter
 * Helps format copy-pasted content into the required markdown structure
 */

function generateSlug(title) {
  return title.toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function generateFrontmatter(data) {
  const slug = generateSlug(data.title);
  
  return `---
title: "${data.title}"
excerpt: "${data.excerpt}"
coverImage: "/assets/blog/${slug}/cover.jpg"
date: "${data.date || new Date().toISOString()}"
author:
  name: "${data.author}"
  picture: "/assets/blog/authors/${generateSlug(data.author)}.jpeg"
ogImage:
  url: "/assets/blog/${slug}/cover.jpg"
---

`;
}

async function promptUser(question) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

async function formatBlogPost() {
  console.log('🖋️  Blog Post Formatter\n');
  console.log('This tool will help you format your blog content into the required markdown structure.\n');
  
  try {
    // Collect metadata
    const title = await promptUser('📝 Enter the blog post title: ');
    const author = await promptUser('👤 Enter the author name (default: Superlend Team): ') || 'Superlend Team';
    const excerpt = await promptUser('📄 Enter a brief excerpt (summary): ');
    
    console.log('\n📋 Now paste your blog content below. Press Ctrl+D (Linux/Mac) or Ctrl+Z (Windows) when done:');
    
    // Read content from stdin
    let content = '';
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    
    for await (const line of rl) {
      content += line + '\n';
    }
    
    // Generate the markdown
    const frontmatter = generateFrontmatter({
      title,
      author,
      excerpt,
      date: new Date().toISOString()
    });
    
    const fullContent = frontmatter + content.trim();
    
    // Generate filename
    const filename = generateSlug(title) + '.md';
    const outputPath = path.join('_posts', filename);
    
    // Write to file
    fs.writeFileSync(outputPath, fullContent, 'utf8');
    
    console.log(`\n✅ Blog post created successfully!`);
    console.log(`📁 File: ${outputPath}`);
    console.log(`📝 Title: ${title}`);
    console.log(`👤 Author: ${author}`);
    console.log(`📄 Content length: ${content.length} characters\n`);
    
    console.log('📋 Preview of frontmatter:');
    console.log(frontmatter);
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

// Quick format function for command line arguments
function quickFormat() {
  const args = process.argv.slice(2);
  
  if (args.length < 3) {
    console.log(`
📚 Quick Blog Formatter

Usage:
  node scripts/blog-formatter.js quick "Title" "Author" "Excerpt" < content.txt

Example:
  echo "Your blog content here" | node scripts/blog-formatter.js quick "My Blog Post" "John Doe" "This is a summary"
    `);
    return;
  }
  
  const [mode, title, author, excerpt] = args;
  
  if (mode !== 'quick') {
    console.error('❌ Invalid mode. Use "quick" or run without arguments for interactive mode.');
    return;
  }
  
  // Read content from stdin
  let content = '';
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', (chunk) => {
    content += chunk;
  });
  
  process.stdin.on('end', () => {
    try {
      const frontmatter = generateFrontmatter({
        title,
        author,
        excerpt,
        date: new Date().toISOString()
      });
      
      const fullContent = frontmatter + content.trim();
      const filename = generateSlug(title) + '.md';
      const outputPath = path.join('_posts', filename);
      
      fs.writeFileSync(outputPath, fullContent, 'utf8');
      
      console.log(`✅ Blog post created: ${outputPath}`);
    } catch (error) {
      console.error('❌ Error:', error.message);
    }
  });
}

// CLI interface
if (require.main === module) {
  const args = process.argv.slice(2);
  
  if (args.length > 0 && args[0] === 'quick') {
    quickFormat();
  } else if (args.length === 0) {
    formatBlogPost();
  } else {
    console.log(`
📚 Blog Post Formatter

Usage:
  node scripts/blog-formatter.js                           # Interactive mode
  node scripts/blog-formatter.js quick "Title" "Author" "Excerpt" < content.txt  # Quick mode

Interactive mode will prompt you for all the required information.
Quick mode takes arguments and reads content from stdin.
    `);
  }
}

module.exports = { generateFrontmatter, generateSlug }; 