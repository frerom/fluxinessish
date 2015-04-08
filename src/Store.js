var Store = function (state, actions, config) {
    var listeners = [];

    var trigger = function (data) {
        listeners.forEach(listener => listener(data));
    };

    var store = {
        onChange(callback) {
            listeners.push(callback);
        },
        data: state
    };

    Object.keys(config).forEach(configKey => {
        store[configKey] = function (...args) {
            store.data = state = state.update(a => config[configKey].apply(config, [a].concat(args)));
            trigger(state);
        };
    });

    Object.keys(actions).forEach(
        actionName => actions[actionName].listen(
            function (...args) {
                store['on' + actionName[0].toUpperCase() + actionName.slice(1)].apply(store, args)
            }
        )
    );

    return store;
};

export default Store;