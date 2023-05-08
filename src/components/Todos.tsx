import Todo from "../models/todos";
import classes from "./Todos.module.css"
import TodoItem from "./TodoItem";

const Todos:React.FC<{items:Todo[];}>  = (props) => {
	return (
		<ul className={classes.item}>
            { props.items.map((item)=>(
			<TodoItem key={item.id} text={item.text}></TodoItem>
            ))}
		</ul>
	);
};
export default Todos;