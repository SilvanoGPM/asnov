import * as React from 'react';

import { GlobalStyle } from '../styles/global';

interface LayoutProps {
    children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
    return (
        <>
            <GlobalStyle />
            {children}
        </>
    );
}