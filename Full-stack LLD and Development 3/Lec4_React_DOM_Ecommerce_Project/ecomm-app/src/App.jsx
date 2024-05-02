import Data from "./components/contextAPI/Data"
import Child from "./components/contextAPI/counter/Child"
import Counter from "./components/contextAPI/counter/Counter"
import Loader from "./components/loader/Loader"
import CounterProvider from "./context/CounterProvider"
import AppRoutes from "./routes/AppRoutes"

function App() {

  return (
    <>
      <CounterProvider>
        <AppRoutes />
        {/* <Parent /> */}

        <Counter />
        <Child />

        <Data/>
        {/* 
        <Loader /> */}
      </CounterProvider>
    </>
  )
}

export default App

