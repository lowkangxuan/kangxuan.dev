import { MDXContent } from "@content-collections/mdx/react";
import { CodeBlock } from "@/components/code-block.tsx";

const components = {
    h1: (props) => <h1 className="font-geist text-3xl font-semibold mt-12 mb-4" {...props} />,
    h2: (props) => <h2 className="font-geist text-2xl font-semibold mt-12 mb-4" {...props} />,
    h3: (props) => <h3 className="font-geist text-xl font-semibold mt-8 mb-4" {...props} />,
    strong: (props) => <strong className="text-primary" {...props} />,
    pre: (props) => <CodeBlock props={{...props}} />,
    a: (props) => <a className="font-semibold underline" {...props} />,
    p: (props) => <p className="font-geist first:mt-0 my-5 text-neutral-700 dark:text-neutral-400" {...props} />,
    ul: (props) => <ul className="font-geist pl-6 text-neutral-600 dark:text-neutral-400" {...props} />,
    li: (props) => <li className="list-disc my-1 marker:text-muted-foreground marker:text-xs pt-1 text-neutral-600 dark:text-neutral-400" {...props} />,
};

export function MDX({content} : {content: string}) {
    return <MDXContent code={content} components={components} />;
}