import XIcon from "@/providers/toast/icons/XIcon";
import {useEffect, useState} from "react";

export default function ToastElements({toast, close}) {

    const [progress, setProgress] = useState(100);
    const [elementState, setElementState] = useState(false);
    const [remainingTime, setRemainingTime] = useState(toast.timeout);
    const [intervalTime, setIntervalTime] = useState();

    useEffect(() => {
        setElementState(true);
    }, []);

    useEffect(() => {
        setIntervalTime(toast.timeout / 100);
    }, [toast]);

    useEffect(() => {
        const progressInterval = setInterval(() => {
            if (elementState && remainingTime > 0) {
                setProgress((prevProgress) => prevProgress - 1);
                setRemainingTime((prevTime) => prevTime > 0 ? prevTime - intervalTime : 0);
            }
        }, intervalTime);

        return () => {
            clearInterval(progressInterval);
        };
    }, [elementState]);

    useEffect(() => {
        if (remainingTime === 0) {
            close(toast.id)
        }
    }, [remainingTime]);

    return (<div onMouseEnter={() => setElementState(false)} onMouseLeave={() => setElementState(true)}
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