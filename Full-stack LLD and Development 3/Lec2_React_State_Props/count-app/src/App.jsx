
import './App.css'
// import Todo from './components/Todo'
import ControlledComponent from './components/controlledComponent'
import Counter from './components/counter'
import Todo from './components/todo';

function App() {

  return (
    <>
      <Todo /> <br /><hr />
      <Counter counter={2} /><br /><hr />
      <ControlledComponent />
    </>
  )
}

export default App
