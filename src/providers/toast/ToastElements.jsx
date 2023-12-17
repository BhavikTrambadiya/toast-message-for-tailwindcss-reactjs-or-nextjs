import XIcon from "@/components/icons/XIcon";
import {useEffect, useState} from "react";

export default function ToastElements({toast, close}) {

    const [progress, setProgress] = useState(100);

    useEffect(() => {
        const progressInterval = setInterval(() => {
            setProgress((prevProgress) => prevProgress - 1);
        }, (toast.timeout / 100));

        setTimeout(() => close(toast.id), (toast.timeout + 100));

        return () => {
            clearInterval(progressInterval);
        };
    }, []);

    return (
        <div
            className={"relative w-[calc(100vw-24px)] lg:w-full lg:min-w-lg h-full overflow-hidden max-w-fit rounded-lg shadow-xl " + toast.backgroundClasses}>
            <div
                className={"p-2 flex justify-start items-start text-black gap-4"}>
                {toast?.iconElement ?? ''}
                <div className={"grow mt-0.5 dark:text-white"}>
                    {toast.component}
                </div>
                <button type={"button"} onClick={() => close(toast.id)}
                        className={"p-1 ml-2 rounded-lg bg-gray-50 dark:bg-gray-800"}>
                    <XIcon className={"h-6 w-6 text-gray-500 dark:text-gray-300"}/>
                </button>
            </div>
            {toast.progress ? <div className={"relative w-full h-1 overflow-hidden " + toast.backgroundClasses}>
                        <span style={{width: `${progress}%`}}
                              className={"absolute h-full duration-300 ease-linear " + toast.progressBarClassName}></span>
            </div> : <></>}
        </div>)
}