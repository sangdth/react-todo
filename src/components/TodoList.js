import React, { Component } from 'react';

class TodoList extends Component {
    componentDidUpdate() {
        this.props.inputElement.current.focus();
    }

    render() {
        return (
            <div className="todo-main">
                <form
                    onSubmit={this.props.addItem}
                >
                    <div className="field is-grouped">
                      <p className="control is-expanded">
                          <input
                            className="input is-success is-large"
                            type="text"
                            placeholder="Enter task"
                            ref={this.props.inputElement}
                            value={this.props.currentItem.text}
                            onChange={this.props.handleInput}
                          />
                      </p>
                      <p className="control">
                          <button
                              className="button is-success is-large"
                              type="submit"
                          >
                            Add Task
                        </button>
                      </p>
                    </div>
                </form>
            </div>
        );
    }
}

export default TodoList;
