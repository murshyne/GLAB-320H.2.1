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
      <Content color="blue" text="This is my first React Application!" />
      <Content color="red" text="Wish me luck..." />
      <Content color="green" text="I think I've got it!" />
      <Footer />
    </>
  );
}

export default App
