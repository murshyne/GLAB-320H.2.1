import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Content from "./components/Content/Content";
import Footer from './components/Footer/Footer'
import Button from './components/Button/Button';





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Button />
      <Content color="yellow" text="This is my first React Application!" />
      <Content color="red" text="Wish me luck..." />
      <Content color="green" text="I think I've got it!" />
      <Footer />
    </>
  );
}

export default App
