"use client"
import {useToast} from "@/providers/toast/ToastService";
import {BOTTOM_LEFT, BOTTOM_RIGHT, TOP_CENTER, TOP_LEFT, TOP_RIGHT} from "@/enums/ToastPosistionEnum";

export default function ToastButtons() {
    const toast = useToast();
    const handleSuccess = () => {
        toast.success(TOP_LEFT, "success")
    }

    const handleError = () => {
        toast.error(TOP_CENTER, "Please add category into this field. Beautiful hand-crafted SVG icons, by the makers of Tailwind CSS.")
    }

    const handleWarning = () => {
        toast.warning(TOP_RIGHT, "Warning")
    }

    const handleInfo = () => {
        toast.info(BOTTOM_RIGHT, "Info Toast Message this is good for all")
    }

    const handleCustom = () => {
        toast.custom(BOTTOM_LEFT, <div
            className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6 flex-wrap">
            <div className="flex flex-1 items-center">
                <svg className="h-5 w-5 flex-shrink-0 text-gray-400" viewBox="0 0 20 20" fill="currentColor"
                     aria-hidden="true">
                    <path fillRule="evenodd"
                          d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z"
                          clipRule="evenodd"/>
                </svg>
                <div className="ml-4 flex flex-1 gap-2">
                    <span className="truncate font-medium">cover-letter_back_end_developer.pdf</span>
                    <span className="flex-shrink-0 text-gray-400">4.5mb</span>
                </div>
            </div>
            <div className="ml-4 flex-shrink-0">
                <button type={"button"} onClick={() => handleError()}
                        className="font-medium text-indigo-600 hover:text-indigo-500">Download
                </button>
            </div>
        </div>)
    }

    return (<div
            className="flex w-full items-end justify-center from-white via-white dark:from-black dark:via-black lg:h-auto lg:w-auto bg-none">
            <button type={"button"} onClick={() => handleSuccess()}
                    className="w-full border border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:from-inherit lg:w-auto rounded-xl bg-gray-200 lg:p-4 dark:bg-zinc-800/30">
                Success
            </button>
            <button type={"button"} onClick={() => handleError()}
                    className="w-full border border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:from-inherit lg:w-auto rounded-xl bg-gray-200 lg:p-4 dark:bg-zinc-800/30">
                Error
            </button>
            <button type={"button"} onClick={() => handleWarning()}
                    className="w-full border border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:from-inherit lg:w-auto rounded-xl bg-gray-200 lg:p-4 dark:bg-zinc-800/30">
                Warning
            </button>
            <button type={"button"} onClick={() => handleInfo()}
                    className="w-full border border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:from-inherit lg:w-auto rounded-xl bg-gray-200 lg:p-4 dark:bg-zinc-800/30">
                Info
            </button>
            <button type={"button"} onClick={() => handleCustom()}
                    className="w-full border border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:from-inherit lg:w-auto rounded-xl bg-gray-200 lg:p-4 dark:bg-zinc-800/30">
                Custom
            </button>
        </div>

    )
}