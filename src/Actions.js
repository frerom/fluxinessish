var Actions = function (...args) {
    var actions = {};
    args.forEach(actionName => {
        var listeners = [];
        var action = function () {
            listeners.forEach(listener => listener.apply(null, arguments));
        };
        action.listen = function (listener) {
            listeners.push(listener);
        };
        actions[actionName] = action;
    });

    return actions;
};

export default Actions;