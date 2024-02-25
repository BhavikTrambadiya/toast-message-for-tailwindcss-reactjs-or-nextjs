import './globals.css'
import {Inter} from 'next/font/google'
import ToastProvider from "@/providers/toast/ToastProvider";

const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'Bhavik Trambadiya', description: 'Toast Message in React Or Next using TailwindCss',
}


export default function RootLayout({children}) {

    const dir = "ltr"
    return (<html lang="en" dir={dir}>
        <body className={inter.className + " relative"}>
        <ToastProvider>
            {children}
        </ToastProvider>
        </body>
        </html>)
}
