import Todos from './components/Todos';
import Todo from './models/todos';
import MyTodo from './components/MyTodo';
import {useState} from "react";

function App() {

  const [todo, setTodo] = useState<Todo[]>([]);
  // const todo = [
  //   new Todo("리액트"),
  //   new Todo("타입스크립트"),
  //   new Todo("아이고"),
  // ];
  
   const addTodoHandler = (text:string) =>{
    const newTodo = new Todo(text);
    setTodo((prevTodo)=>{
      return [...prevTodo, newTodo];
    })
   }
  return (
    <div className="App">
      <MyTodo addTodo={addTodoHandler}/>
      <Todos items={todo}/>  
    </div>
  );
}

export default App;