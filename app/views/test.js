'use strict'

import React, {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    PropTypes
} from 'react-native'

class AddTodo extends React.Component{
    render () {
        return (
            <View>
                <TextInput ref="input" height={30}
                    onEndEditing={(e)=>this.handleClick(e)}
                />
                <TouchableOpacity
                    style={{backgroundColor:'#eee'}}
                >
                    <Text>add</Text>
                </TouchableOpacity>
            </View>
        )
    }
    handleClick (e) {
        const node = this.refs.input;
        let text = e.nativeEvent.text.toLowerCase();
        this.props.onAddClick(text);
        if(node) {node.value = '';}
    }
}

AddTodo.propTypes = {
    onAddClick: PropTypes.func.isRequired
};

class Todo extends React.Component{
    render () {
        return (
            <TouchableOpacity
                onPress={this.props.onClick}
            >
                <Text>{this.props.text}</Text>
            </TouchableOpacity>
        )
    }
}

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
};

export default class TodoList extends React.Component{
    state = {
      num: 0
    };
    render () {
        return (
            <View style={{paddingTop:20}}>
                <AddTodo onAddClick={text =>
            console.log('add todo', text)
          }/>
                {this.props.todos.map((todo, index) =>
                <Todo {...todo}
                    key={index}
                    onClick={()=>this.props.onTodoClick(index)} />
                )}
            </View>
        )
    }
}

TodoList.propType = {
    onTodoClick: PropTypes.func.isRequired,
    todos: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    }).isRequired).isRequired
}