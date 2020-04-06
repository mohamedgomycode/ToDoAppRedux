import React, { Component } from "react";
import { connect } from "react-redux";
import { AddTodo, DeleteTodo, CompleteTodo, EditTodo } from "./Actions/action";
import './App.css'
class App extends Component {
  state = {
    val: ""
  };

  handleOnChange = e => {
    this.setState({
      val: e.target.value
    });
  };

  HandelSubmit = () => this.props.AddTodoo(this.state.val);

  render() {
    return (
      <div>
        <h1>Todo Liste</h1>
        <input type="text" onChange={this.handleOnChange} />
        <input type="button" value="+" onClick={this.HandelSubmit} />
        {this.props.Todos.map((el, i) => (
          <div key={i}>
            <input
              type="checkBox"
              onClick={() => this.props.CompleteTodoo(el.id)}
            />
            <input
              style={{
                textDecoration: el.isComplete ? "line-through" : "none"
              }}
              value={el.text}
              readOnly
              onClick={e => (e.target.readOnly = false)}
              onBlur={e => (e.target.readOnly = true)}
              onChange={e => this.props.EditTodoo(e.target.value, el.id)}
            />
            <button onClick={() => this.props.DeleteTodoo(el.id)}>x</button>
          </div>
        ))}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { Todos: state };
};
const mapDispatchToProps = dispatch => {
  return {
    AddTodoo: payload => dispatch(AddTodo(payload)),
    DeleteTodoo: payload => dispatch(DeleteTodo(payload)),
    CompleteTodoo: payload => dispatch(CompleteTodo(payload)),
    EditTodoo: (payload, id) => dispatch(EditTodo(payload, id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
