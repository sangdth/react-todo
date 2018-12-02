import React, { Component } from 'react';

class TodoItem extends Component {
    createTasks = item => {
        return (
            <li
                className="todo-item"
                key={item.key}
                onClick={() => this.props.deleteItem(item.key)}
            >
                <a className="button is-light is-fullwidth" href={'#' + item.key}>
                    {item.text}
                </a>
            </li>
        )
    }

    render() {
        const todoEntries = this.props.entries;
        const listItems = todoEntries.map(this.createTasks);
        return <ul>{listItems}</ul>
    }
}

export default TodoItem;
