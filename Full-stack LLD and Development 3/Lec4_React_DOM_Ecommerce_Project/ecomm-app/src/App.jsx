import Child from "./components/contextAPI/Child"
import Counter from "./components/contextAPI/counter"
import CounterProvider from "./context/CounterProvider"
import AppRoutes from "./routes/AppRoutes"

function App() {

  return (
    <>
      <CounterProvider>
        <AppRoutes />
        {/* <Parent /> */}
        <Counter />
        <Child/>
      </CounterProvider>
    </>
  )
}

export default App

