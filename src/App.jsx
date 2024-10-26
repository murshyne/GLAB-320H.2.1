import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Content from "./components/Content/Content";
import Footer from './components/Footer/Footer'
import Button from './components/Button/Button';


function App() {
  const [message, setMessage] = useState("Wish me luck...🙁");
  const [contentText, setContentText] = useState("I think I've got it!");

  const toggleMessage1 = () => {
    setMessage((prevMessage) =>
      prevMessage === "Wish me luck...🙁"
        ? "I don't need luck...😁"
        : "Wish me luck...🙁"
    );
     setContentText((prevMessage) =>
       prevMessage === "I think I've got it!"
         ? "I got this, HECKING YEAH!!! 🤟"
         : "I think I've got it!"
     ); 
  };

  return (
    <>
      <Header />
      <Content color="yellow" text="This is my first React Application!" />
      <Button onClick={toggleMessage1} />
      <Content color="red" text={message} />
      <Content color="green" text={contentText} />
      <Footer />
    </>
  );
}

export default App
