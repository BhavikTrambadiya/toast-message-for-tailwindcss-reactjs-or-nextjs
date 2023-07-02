import './globals.css'
import {Inter} from 'next/font/google'
import ToastProvider from "@/providers/toast/ToastProvider";

const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}


export default function RootLayout({children}) {

    const dir = "ltr"
    return (
        <html lang="en" dir={dir}>
        <body className={inter.className + " relative"}>
        <ToastProvider>
            {children}
        </ToastProvider>
        </body>
        </html>
    )
}
