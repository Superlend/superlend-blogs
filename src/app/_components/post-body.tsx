import markdownStyles from "./markdown-styles.module.css";

type Props = {
  content: string;
};

export function PostBody({ content }: Props) {
  return (
    <div className="max-w-3xl mx-auto">
      <div
        className={`
            ${markdownStyles["markdown"]} 
            prose prose-lg dark:prose-invert max-w-none
            prose-headings:text-secondary-navy
            prose-p:text-secondary-navy
            prose-a:text-primary
            prose-strong:text-secondary-navy
            prose-code:text-secondary-navy
            prose-code:bg-gray-100
            prose-pre:bg-gray-50
            dark:prose-headings:text-white
            dark:prose-p:text-gray-300
            dark:prose-code:bg-gray-800
            dark:prose-pre:bg-gray-900
            first-letter:uppercase
            prose-p:first-of-type:mt-0
            prose-h1:first-of-type:mt-0
            prose-h2:first-of-type:mt-0
            prose-h3:first-of-type:mt-0
            prose-h4:first-of-type:mt-0
            prose-h5:first-of-type:mt-0
            prose-h6:first-of-type:mt-0
          `}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
