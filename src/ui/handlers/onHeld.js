const onHeld = (() => {
    let timeout;
    let interval;
    const delayBeforeFirstCallbackMs = 400;

    const clearTimers = () => {
        clearTimeout(timeout);
        clearInterval(interval);
    };

    return (event, callback, delayBetweenCallback) => {
        callback();
        timeout = setTimeout(() => {
            interval = setInterval(() => {
                callback();
            }, delayBetweenCallback);
        }, delayBeforeFirstCallbackMs);

        event.target.addEventListener("mouseup", () => clearTimers());
        event.target.addEventListener("mouseleave", () => clearTimers());

        event.target.removeEventListener("mouseup", () => clearTimers());
        event.target.removeEventListener("mouseleave", () => clearTimers());
    }
})();

export default onHeld;
