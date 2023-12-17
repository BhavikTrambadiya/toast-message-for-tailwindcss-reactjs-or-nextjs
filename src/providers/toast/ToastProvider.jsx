"use client"
import ToastContext from "@/providers/toast/ToastService";
import {useState} from "react";
import {
    BOTTOM_CENTER,
    BOTTOM_LEFT,
    BOTTOM_RIGHT,
    TOP_CENTER,
    TOP_LEFT,
    TOP_RIGHT
} from "@/providers/toast/enums/ToastPositionEnum";
import ToastElements from "@/providers/toast/ToastElements";
import ToastTypeEnum, {SUCCESS} from "@/providers/toast/enums/ToastTypeEnum";

export default function ToastProvider({children}) {
    const initialObject = {
        type: SUCCESS?.type,
        position: TOP_RIGHT,
        timeout: 5000,
        component: "",
        progress: true,
        iconElement: SUCCESS?.iconElement ?? '',
        progressBarClassName: SUCCESS?.progressBarClasses ?? '',
        backgroundClasses: "bg-white dark:bg-gray-900"
    }
    const [toasts, setToasts] = useState([]);

    const open = (object) => {
        object.id = Date.now();
        for (let prop in object) {
            initialObject[prop] = object[prop];
        }
        let newObject = {...initialObject};
        setToasts((toasts) => {
            return [...toasts, newObject]
        });
    }

    const close = (id) => setToasts((toasts) => toasts.filter((toast) => toast.id !== id))

    const createToastFunctions = (types) => {
        const toastFunctions = {};

        for (const key of Object.keys(types)) {
            const type = types[key];
            toastFunctions[key.toLowerCase()] = (component, object = {}) => {
                object.component = component;
                object.type = type?.type;
                object.progressBarClassName = type?.progressBarClasses;
                object.iconElement = type?.iconElement;
                open(object);
            };
        }

        return toastFunctions;
    };

    const toastFunctions = createToastFunctions(ToastTypeEnum);

    const dismiss = () => {
        setToasts([]);
    }

    return (<ToastContext.Provider value={{...toastFunctions, close, dismiss}}>
        {children}
        <div className={"space-y-2 fixed h-auto z-toast top-4 left-4 right-4 lg:right-auto lg:left-auto"}>
            {toasts.filter((ele) => ele.position === TOP_LEFT).map((toast) => (
                <ToastElements key={toast.id} close={close} toast={toast}/>))}
        </div>
        <div className={"space-y-2 fixed h-auto z-toast top-4 left-1/2 right-auto -translate-x-1/2"}>
            {toasts.filter((ele) => ele.position === TOP_CENTER).map((toast) => (
                <ToastElements key={toast.id} close={close} toast={toast}/>))}
        </div>
        <div className={"space-y-2 fixed h-auto z-toast flex flex-col top-4 right-4 left-4 lg:left-auto items-end"}>
            {toasts.filter((ele) => ele.position === TOP_RIGHT).map((toast) => (
                <ToastElements key={toast.id} close={close} toast={toast}/>))}
        </div>
        <div
            className={"space-y-2 fixed h-auto z-toast flex flex-col bottom-4 right-4 left-4 lg:right-auto"}>
            {toasts.filter((ele) => ele.position === BOTTOM_LEFT).map((toast) => (
                <ToastElements key={toast.id} close={close} toast={toast}/>))}
        </div>
        <div
            className={"space-y-2 fixed h-auto z-toast flex flex-col bottom-4 left-1/2 right-auto -translate-x-1/2"}>
            {toasts.filter((ele) => ele.position === BOTTOM_CENTER).map((toast) => (
                <ToastElements key={toast.id} close={close} toast={toast}/>))}
        </div>
        <div
            className={"space-y-2 fixed h-auto z-toast flex flex-col bottom-4 right-4 left-4 lg:left-auto items-end"}>
            {toasts.filter((ele) => ele.position === BOTTOM_RIGHT).map((toast) => (
                <ToastElements key={toast.id} close={close} toast={toast}/>))}
        </div>
    </ToastContext.Provider>)
}