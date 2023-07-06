import React, {ReactNode} from "react";
import {MDXProvider} from "@mdx-js/react";
import MDXComponents from "@/components/MDXComponents";
import CodeBlock from "@/components/CodeBlock";

export default function MdxProvider({children}: Props) {
    return <MDXProvider components={MDXComponents}>
        <MDXProvider components={{pre: CodeBlock}}>
            {children}
        </MDXProvider>
    </MDXProvider>;
}

type Props = {
    children: ReactNode;
};
