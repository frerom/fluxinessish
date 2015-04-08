import React      from 'react';
import { fromJS } from 'immutable';
import Component  from './Component';
import Store      from './Store';
import Actions    from './Actions';

var state = fromJS({
    numberApp: {
        numbers: [1, 2, 3, 4]
    }
});

var path = ['numberApp'];
var cursor = state.getIn(path); //Something something cursor yay

/*
    Actions for numbers
*/
var actions = Actions('addNumber');

/*
    Store for numbers, takes a state and actions
    The return value from the action handlers is the stores new state.
    First argument to an action handler is the stores state, 
    and the remaining arguments are the payload from the action.
*/
var numberStore = Store(cursor, actions, {
    onAddNumber(todo, number) {
        return todo.updateIn(['numbers'], numbers => numbers.push(number));
    }
});

/*
    Component takes a store. When ever the store is updated the component
    is updated. The state from the store can be found in this.state.data
*/
var Numbers = Component(numberStore, 'Numbers', {
    click() {
        actions.addNumber(this.state.data.get('numbers').size + 1);
    },
    render() {
        return (
            <div>
                <div>{this.state.data.get('numbers').join(',')}</div>
                <button onClick={this.click}>Add number</button>
            </div>
        );
    }
});

React.render(<Numbers/>, document.body);


