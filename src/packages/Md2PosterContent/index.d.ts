import { ReactNode } from 'react';
interface Md2PosterContentProps {
    children: string | ReactNode;
    className?: string;
    markdownProps?: Record<string, any>;
    articleClassName?: string;
}
declare const Md2PosterContent: ({ children, className, markdownProps, articleClassName }: Md2PosterContentProps) => import("react/jsx-runtime").JSX.Element;
export type { Md2PosterContentProps };
export default Md2PosterContent;
