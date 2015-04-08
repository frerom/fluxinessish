import React from 'react';

var Component = (store, name, options) => {
    var reactClass = {
        displayName: name,
        getInitialState() {
            return {
                data: store.data
            };
        },

        componentDidMount() {
            store.onChange(data => this.setState({data}));
        }
    };

    Object.keys(options).forEach(option => reactClass[option] = options[option]);

    return React.createClass(reactClass);
};

export default Component;