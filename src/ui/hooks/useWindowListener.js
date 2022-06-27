import {useEffect} from "react";

const useWindowListener = (eventType, handler) => {
    useEffect(() => {
        window.addEventListener(eventType, handler);

        return () => {
            window.removeEventListener(eventType, handler);
        }
    }, []);
};

export default useWindowListener;