import React from "react";

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    children: React.ReactNode;
};

export function NavItem({ children, ...props }: Props) {
    return <a {...props} className="flex items-center gap-2 text-lg font-bold">
        {children}
    </a>;
}
