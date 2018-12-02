import React, { Component } from 'react';
import short from 'shortid';
import 'bulma/css/bulma.min.css';
import '../assets/global.css';

import TodoList from './TodoList';
import TodoItem from './TodoItem';

class App extends Component {
    inputElement = React.createRef();

    constructor() {
        super();
        this.state = {
            items: [],
            currentItem: {
                text: '',
                key: '',
                create: '',
            },
        };
        this.handleInput = this.handleInput.bind(this);
        this.addItem = this.addItem.bind(this);
    }

    handleInput(e) {
        const itemText = e.target.value;
        const currentItem = {
            text: itemText,
            key: short.generate(),
            create: Date.now(),
        };
        this.setState({ currentItem });
    }

    addItem(e) {
        e.preventDefault();
        const newItem = this.state.currentItem;
        if (newItem.text !== '') {
            const items = [...this.state.items, newItem];
            this.setState({
                items,
                currentItem: {
                    text: '',
                    key: '',
                    create: '',
                },
            });
            console.log('addItem got called');
        }
    }

    deleteItem = (key) => {
        const remainedItems = this.state.items.filter(item => item.key !== key);
        this.setState({ items: remainedItems });
    }

    render() {
        return (
            <div className="App columns">
                <div className="is-half is-offset-one-quarter column">
                    <h2 className="title">Simple Todo</h2>
                    <TodoList
                        addItem={this.addItem}
                        inputElement={this.inputElement}
                        handleInput={this.handleInput}
                        currentItem={this.state.currentItem}
                    />
                    <TodoItem
                        entries={this.state.items}
                        deleteItem={this.deleteItem}
                    />
                </div>
            </div>
        );
  }
}

export default App;
