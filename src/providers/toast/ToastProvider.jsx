"use client"
import ToastContext from "@/providers/toast/ToastService";
import {useState} from "react";
import {BOTTOM_CENTER, BOTTOM_LEFT, BOTTOM_RIGHT, TOP_CENTER, TOP_LEFT, TOP_RIGHT} from "@/enums/ToastPosistionEnum";
import ToastElements from "@/providers/toast/ToastElements";

export default function ToastProvider({children}) {
    const [toasts, setToasts] = useState([]);

    const open = (type, position, component, timeout) => {
        const id = Date.now();
        setToasts(toasts => [...toasts, {id, type, position, component}]);
        setTimeout(() => close(id), timeout);
    }

    const close = (id) => setToasts((toasts) => toasts.filter((toast) => toast.id !== id))

    const success = (position, component, timeout = 5000) => {
        open("success", position, component, timeout);
    }

    const error = (position, component, timeout = 5000) => {
        open("error", position, component, timeout);
    }

    const warning = (position, component, timeout = 5000) => {
        open("warning", position, component, timeout);
    }

    const info = (position, component, timeout = 5000) => {
        open("info", position, component, timeout);
    }

    const custom = (position, component, timeout = 5000) => {
        position = BOTTOM_LEFT;
        open("custom", position, component, timeout);
    }

    return (<ToastContext.Provider value={{success, error, warning, info, custom, close}}>
        {children}
        <div className={"space-y-2 fixed h-auto z-toast top-4 left-4 right-4 lg:right-auto lg:left-auto"}>
            {toasts.filter((ele) => ele.position === TOP_LEFT).map(({id, type, component}) => (
                <ToastElements key={id} type={type} close={(id) => close(id)} component={component}
                               id={id}/>))}
        </div>
        <div className={"space-y-2 fixed h-auto z-toast top-4 left-1/2 right-auto -translate-x-1/2"}>
            {toasts.filter((ele) => ele.position === TOP_CENTER).map(({id, type, component}) => (
                <ToastElements key={id} type={type} close={(id) => close(id)} component={component}
                               id={id}/>))}
        </div>
        <div className={"space-y-2 fixed h-auto z-toast flex flex-col top-4 right-4 left-4 lg:left-auto items-end"}>
            {toasts.filter((ele) => ele.position === TOP_RIGHT).map(({id, type, component}) => (
                <ToastElements key={id} type={type} close={(id) => close(id)} component={component}
                               id={id}/>))}
        </div>
        <div
            className={"space-y-2 fixed h-auto z-toast flex flex-col bottom-4 right-4 left-4 lg:right-auto"}>
            {toasts.filter((ele) => ele.position === BOTTOM_LEFT).map(({id, type, component}) => (
                <ToastElements key={id} type={type} close={(id) => close(id)} component={component}
                               id={id}/>))}
        </div>
        <div
            className={"space-y-2 fixed h-auto z-toast flex flex-col bottom-4 left-1/2 right-auto -translate-x-1/2"}>
            {toasts.filter((ele) => ele.position === BOTTOM_CENTER).map(({id, type, component}) => (
                <ToastElements key={id} type={type} close={(id) => close(id)} component={component}
                               id={id}/>))}
        </div>
        <div
            className={"space-y-2 fixed h-auto z-toast flex flex-col bottom-4 right-4 left-4 lg:left-auto items-end"}>
            {toasts.filter((ele) => ele.position === BOTTOM_RIGHT).map(({id, type, component}) => (
                <ToastElements key={id} type={type} close={(id) => close(id)} component={component}
                               id={id}/>))}
        </div>
    </ToastContext.Provider>)
}