import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Mular <> STR',
    description: 'Mular <> STR',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" data-oid="gigc-3l">
            <body className={inter.className} data-oid=":-:vkio">
                {children}
            </body>
        </html>
    );
}
