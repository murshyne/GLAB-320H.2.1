import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Content from "./components/Content/Content";
import Footer from './components/Footer/Footer'






function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Content />
      <Footer />
    </>
  );
}

export default App
