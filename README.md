Hii, I am Bhavik Trambadiya [Github](https://github.com/BhavikTrambadiya)

# Toast Message in React Or Next using TailwindCss

#### If you have any idea or suggestion please create new pull request
#### If you like that provide star to my repo and visit my [website](https://bhaviktrambadiya.netlify.app/)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Many of you have question how this repo. help me with toast message? 🤔 right,
## 😎 Don't worry I will help to do this 😎

First just copy and paste the folder of the 
### src / providers / toast

Then goto to  your root layout file then after 
```jsx
import ToastProvider from "@/providers/toast/ToastProvider";

 <ToastProvider>
    {children}
</ToastProvider>
```

just open toast / enums / ToastTypeEum.jsx and edit according to your need

Ex you want to add gradient colors in process-bar then check below 
```jsx
export const SUCCESS = {
    type: "success",
    progressBarClasses: "bg-gradient-to-r from-cyan-500 to-blue-500",
    iconElement: <span className="bg-green-100 dark:bg-green-600 p-1 rounded-lg">
        <CheckIcon className="stroke-green-500 dark:stroke-white h-6 w-6"/>
    </span>
};
```

if you want to change icon then just replace ```<CheckIcon>``` component with your component

## okay, 👍 but what if, I want to add new type of toast in this? 🤨

### Then No problem, 😉 just make new object as ToastTypeEum have checkout below code

```jsx
export const MYCUSTOMTOASTTYPE = {
    type: "message",
    progressBarClasses: "bg-teal-500",
    iconElement: <span className="bg-teal-100 dark:bg-teal-600 p-1 rounded-lg">
        <CheckIcon className="stroke-green-500 dark:stroke-white h-6 w-6"/>
    </span>
};
```

## Above all things are look good 🤩 but now I want set my own component's with some actions on it.

### Why not 😌 you can just set up as I mention below 

```jsx
 const CustomToastMessage = <div
    className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6 flex-wrap">
    <div className="flex flex-1 items-center">
        <svg className="h-5 w-5 flex-shrink-0 text-gray-400" viewBox="0 0 20 20" fill="currentColor"
             aria-hidden="true">
            <path fillRule="evenodd"
                  d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z"
                  clipRule="evenodd"/>
        </svg>
        <div className="ml-4 flex flex-1 gap-2">
            <span className="truncate font-medium">toast-message-for-react-js-or-next-js.pdf</span>
            <span className="flex-shrink-0 text-gray-400">4.5mb</span>
        </div>
    </div>
    <div className="ml-4 flex-shrink-0">
        <button type={"button"} onClick={() => OnDownload()}
                className="font-medium text-indigo-600 hover:text-indigo-500">Download
        </button>
    </div>
</div>;

const handleCustom = () => {
    toast.custom(CustomToastMessage, {
        position: BOTTOM_LEFT,
    })
}
```

### If you are still have some other doubt then contact me I will help you Please not forgot to give ⭐ on repo.



## 🚀 About Me
### Hii, I am Bhavik Trambadiya 😎 A Full Stack Web Developer.
#### You can check out my portfolio [Website](https://bhaviktrambadiya.netlify.app/)