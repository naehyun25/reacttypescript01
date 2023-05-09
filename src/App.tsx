import Todos from './components/Todos';
import MyTodo from './components/MyTodo';
import {TodosContextProvider} from './store/todos.context';

function App() {

  return (
    <TodosContextProvider>
      <MyTodo/>
      <Todos/>  
    </TodosContextProvider>
  );
}

export default App;