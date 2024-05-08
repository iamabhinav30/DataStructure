
import './App.css';
import { Provider } from 'react-redux';
import { store } from './redux/store'
import CounterWithRedux from './components/withRedux';
import Counter from './components/withoutRedux';


function App() {

  return (
    <>
      <Provider store={store}>
        <CounterWithRedux />
      </Provider>
      <br />
      --------------------------------------

      <Counter />
    </>
  )
}

export default App
