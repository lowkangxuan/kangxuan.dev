import { MDXContent } from "@content-collections/mdx/react";
import { CodeBlock } from "@/components/code-block.tsx";

const components = {
    h1: (props) => <h1 className="font-inter text-3xl font-bold mt-12 mb-6" {...props} />,
    h2: (props) => <h2 className="font-inter text-2xl font-bold mt-12 mb-6" {...props} />,
    pre: (props) => <CodeBlock props={{...props}} />,
    a: (props) => <a className="font-bold underline" {...props} />,
    p: (props) => <p className="font-inter" {...props} />,
};

export function MDX({content} : {content: string}) {
    return <MDXContent code={content} components={components} />;
}