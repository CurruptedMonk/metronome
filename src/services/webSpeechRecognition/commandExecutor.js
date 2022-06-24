const commandExecutor = (sequencer, bpm,  disableCallback) => {

    const execute = (command) => {
        command = command.toLowerCase();

        if(command.startsWith("play")) {
            sequencer.play();
            return;
        }
        if(command.startsWith("stop")) {
            sequencer.stop();
            return;
        }
        if(command.startsWith("set")) {
            executeCommandIntValue(
                commandValue("set", command),
                bpm.set
            );
            return;
        }
        if(command.startsWith("increase by")) {
            executeCommandIntValue(
                commandValue("increase by", command),
                bpm.increaseBy
            );
            return;
        }
        if(command.startsWith("decrease by")) {
            executeCommandIntValue(
                commandValue("decrease by", command),
                bpm.decreaseBy
            );
            return;
        }
        if(command.startsWith("disable voice control")) {
            disableCallback();
            return;
        }
    };

    const commandValue = (commandStartWith, command) => {
        return command.split(commandStartWith)[1];
    };

    const executeCommandIntValue = (commandValue, callback) => {
        const commandIntPart = commandIntValue(commandValue);
        if(commandIntPart) {
            callback(commandIntPart);
        }
    };

    const commandIntValue = (commandValue) => {
        const verbalNumberRepresentation = {
            one: 1,
            two: 2,
            three: 3,
            four: 4,
            five: 5,
            six: 6,
            seven: 7,
            eight: 8,
            nine: 9,
            ten: 10,
        };
        return parseInt(commandValue) || verbalNumberRepresentation[firstWordOf(commandValue)];
    };

    const firstWordOf = (commandValue) => {
        return commandValue.trim().split(" ")[0];
    };

    return Object.freeze({
        execute,
    });
};

export default commandExecutor;