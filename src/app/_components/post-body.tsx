import markdownStyles from "./markdown-styles.module.css";

type Props = {
  content: string;
};

export function PostBody({ content }: Props) {
  return (
    <div className="max-w-3xl mx-auto">
      <div
        className={`${markdownStyles["markdown"]} prose prose-lg dark:prose-invert max-w-none`}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
