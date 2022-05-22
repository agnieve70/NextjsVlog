import PostHeader from "./post-header";
import classes from "./post-content.module.css";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import atomDark from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";
import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import css from "react-syntax-highlighter/dist/cjs/languages/prism/css";


SyntaxHighlighter.registerLanguage('js', js);
SyntaxHighlighter.registerLanguage("css", css);

function PostContent(props) {
  const { post } = props;
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown
        components={{
          img: ({ node, ...props }) => (
            <Image
              src={`/images/posts/${post.slug}/${props.src}`}
              alt={props.alt}
              width={600}
              height={300}
              priority={true}
            />
          ),
          code: ({ node, ...props }) => (
            <SyntaxHighlighter language={props.className.replace('language-', '')} style={atomDark}>
              {props.children}
            </SyntaxHighlighter>
          ),
        }}
      >
        {post.content}
      </ReactMarkdown>
    </article>
  );
}

export default PostContent;
