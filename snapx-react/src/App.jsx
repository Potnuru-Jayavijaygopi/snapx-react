import { useState } from 'react'
import Navbar from "./component/Navbar";
import Banner from "./component/Banner";
import Categories from './component/Categories';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Categories></Categories>
    </>
  )
}

export default App
