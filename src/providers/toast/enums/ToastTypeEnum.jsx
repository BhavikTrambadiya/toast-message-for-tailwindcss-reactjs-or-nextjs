import CheckIcon from "@/providers/toast/icons/CheckIcon";
import ExclamationCircleIcon from "@/providers/toast/icons/ExclamationCircleIcon";
import ExclamationIcon from "@/providers/toast/icons/ExclamationIcon";
import InformationCircleIcon from "@/providers/toast/icons/InformationCircleIcon";

export const SUCCESS = {
    type: "success",
    progressBarClasses: "bg-green-500",
    iconElement: <span className="bg-green-100 dark:bg-green-600 p-1 rounded-lg">
                        <CheckIcon className="stroke-green-500 dark:stroke-white h-6 w-6"/>
                        </span>

};
export const ERROR = {
    type: "error",
    progressBarClasses: "bg-red-500",
    iconElement: <span className="bg-red-100 dark:bg-red-600 p-1 rounded-lg">
                        <ExclamationCircleIcon className="stroke-red-500 dark:stroke-white h-6 w-6"/>
                        </span>
};
export const WARNING = {
    type: "warning",
    progressBarClasses: "bg-yellow-500",
    iconElement: <span className="bg-yellow-100 dark:bg-yellow-600 p-1 rounded-lg">
                        <ExclamationIcon className="stroke-yellow-500 dark:stroke-white h-6 w-6"/>
                        </span>
};
export const INFO = {
    type: "info",
    progressBarClasses: "bg-blue-500",
    iconElement: <span className="bg-blue-100 dark:bg-blue-600 p-1 rounded-lg">
                        <InformationCircleIcon className="stroke-blue-500 dark:stroke-white h-6 w-6"/>
                        </span>
};

export const CUSTOM = {
    type: "custom", progressBarClasses: "", iconElement: <></>
};

export default {SUCCESS, ERROR, WARNING, INFO, CUSTOM};