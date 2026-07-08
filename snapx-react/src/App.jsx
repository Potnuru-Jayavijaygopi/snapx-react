import { useState } from 'react'
import Navbar from "./component/Navbar";
import Banner from "./component/Banner";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
    </>
  )
}

export default App
