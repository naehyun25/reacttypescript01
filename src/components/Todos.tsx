import Todo from "../models/todos";
import classes from "./Todos.module.css"
import TodoItem from "./TodoItem";
import { useContext } from "react";
import { TodoContext } from "../store/todos.context";

const Todos:React.FC = () => {
	const todoCtx=useContext(TodoContext);
	return (
		<ul className={classes.item}>
            { todoCtx.items.map((item)=>(
			<TodoItem key={item.id} text={item.text}
			onDeleteTodo={todoCtx.deleteTodo.bind(null, item.id)}
			></TodoItem>
            ))}
		</ul>
	);
};
export default Todos;