import CheckIcon from "@/components/icons/CheckIcon";
import ExclamationCircleIcon from "@/components/icons/ExclamationCircleIcon";
import ExclamationIcon from "@/components/icons/ExclamationIcon";
import InformationCircleIcon from "@/components/icons/InformationCircleIcon";
import XIcon from "@/components/icons/XIcon";

export default function ToastElements({id, type, component, close}) {

    return (<div
        className={"relative w-full lg:min-w-lg h-full max-w-fit bg-white p-2 flex justify-start items-start text-black rounded-lg shadow-xl gap-4"}>
        {(() => {
            switch (type) {
                case 'success':
                    return (<span className="bg-green-100 p-1 rounded-lg">
                        <CheckIcon className="stroke-green-500 h-6 w-6"/>
                        </span>)
                case 'error':
                    return (<span className="bg-red-100 p-1 rounded-lg">
                        <ExclamationCircleIcon className="stroke-red-500 h-6 w-6"/>
                        </span>)
                case 'warning':
                    return (<span className="bg-yellow-100 p-1 rounded-lg">
                        <ExclamationIcon className="stroke-yellow-500 h-6 w-6"/>
                        </span>)
                case 'info':
                    return (<span className="bg-blue-100 p-1 rounded-lg">
                        <InformationCircleIcon className="stroke-blue-500 h-6 w-6"/>
                        </span>)
                default:
                    return (<></>)
            }
        })()}
        <div className={"grow"}>
            {component}
        </div>
        <button type={"button"} onClick={() => close(id)}
                className={"p-1 ml-2 rounded-lg bg-gray-50 text-gray-800/60"}>
            <XIcon className={"h-6 w-6 text-gray-500"}/>
        </button>
    </div>)
}