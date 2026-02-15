import { MDXContent } from "@content-collections/mdx/react";
import { CodeBlock } from "@/components/code-block.tsx";

const components = {
    h1: (props) => <h1 className="font-inter text-3xl font-semibold mt-12 mb-6" {...props} />,
    h2: (props) => <h2 className="font-inter text-2xl font-semibold mt-12 mb-6" {...props} />,
    pre: (props) => <CodeBlock props={{...props}} />,
    a: (props) => <a className="font-semibold underline" {...props} />,
    p: (props) => <p className="font-inter first:mt-0 my-5" {...props} />,
    ul: (props) => <ul className="text-primary pl-6" {...props} />,
    li: (props) => <li className="text-primary list-disc my-1 marker:text-muted-foreground marker:text-xs pt-1" {...props} />,
};

export function MDX({content} : {content: string}) {
    return <MDXContent code={content} components={components} />;
}