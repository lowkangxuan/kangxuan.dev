import { MDXContent } from "@content-collections/mdx/react";
import { CodeBlock } from "@/components/code-block.tsx";

const components = {
    h1: (props) => <h1 className="text-3xl font-bold" {...props} />,
    h2: (props) => <h2 className="text-2xl font-bold" {...props} />,
    pre: (props) => <CodeBlock props={{...props}} />,
};

export function MDX({content} : {content: string}) {
    return <MDXContent code={content} components={components} />;
}