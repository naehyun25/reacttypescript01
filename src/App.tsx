import Todos from './components/Todos';
import Todo from './models/todos';

function App() {
  const todo = [
    new Todo("리액트"),
    new Todo("타입스크립트"),
    new Todo("아이고"),
  ];
  return (
    <div className="App">
      <Todos items={todo}/>
    </div>
  );
}

export default App;

