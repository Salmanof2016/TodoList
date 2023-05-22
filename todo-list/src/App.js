import Header from "./components/Header";
import Form from './components/Form'
import {useState} from "react";
import TodoList from './components/TodoList'
import PortalModal from "./components/Modal";

function App() {
    let [todo, setTodo] = useState('')
    let [todoList, setTodoList] = useState([])
    return (
        <div className="App">
            <Header/>
            <Form todo={todo} setTodo={setTodo} todoList={todoList} setTodoList={setTodoList}></Form>
            <TodoList todolist={todoList} setTodoList={setTodoList}></TodoList>
            <PortalModal></PortalModal>
        </div>
    );
}

export default App;
