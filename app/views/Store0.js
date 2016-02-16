import React, {View} from 'react-native'
import { createStore } from 'redux'
import todoApp from '../reducers'
import {Provider} from 'react-redux/native'
let store = createStore(todoApp)

import { addTodo, completeTodo, setVisibilityFilter, VisibilityFilters } from '../actions';
console.log(store.getState());

let unsubscribe = store.subscribe(() => console.log(store.getState()));

store.dispatch(addTodo('learn redux1'));
store.dispatch(addTodo('learn redux2'));
store.dispatch(addTodo('learn redux3'));

unsubscribe();

import TodoList from './Test'

export default class Store0 extends React.Component{
    render () {
        return (
            <Provider store={store}>
                {() => <TodoList
                    todos={[{
            text: 'Use Redux',
            completed: true
          }, {
            text: 'Learn to connect it to React',
            completed: false
          }]}
                    onTodoClick={todo =>
            console.log('todo clicked', todo)
          }
                />}
            </Provider>
        )
    }
}