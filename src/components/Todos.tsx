//typescript의 클래스역할
//1. 객체를 생성하는 생성자역할
//2. 클래스 자체를 타입으로 사용할 수 있다.
import Todo from "../models/todos";

const Todos:React.FC<{items:Todo[];}>  = (props) => {
	return (
		<ul>
            {props.items.map((item)=>(
            <li key={item.id}>{item.text}{item.id}</li>
            ))}
		</ul>
	);
};
export default Todos;
