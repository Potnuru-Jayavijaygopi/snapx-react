import { useState } from 'react'
import Navbar from "./component/Navbar";
import Banner from "./component/Banner";
import Categories from './component/Categories';
import Winners from './component/Winners';
import Pricing from './component/Pricing';
import Footer from './component/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Categories></Categories>
      <Winners></Winners>
      <Pricing></Pricing>
      <Footer></Footer>
    </>
  )
}

export default App
