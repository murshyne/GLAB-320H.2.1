import { useState } from "react";

function Button() {
    const [message, setMessage] = useState("Wish me luck...");

  const handleClick = () => {
    setMessage((prevMessage) =>
      prevMessage === "Wish me luck..."
        ? "You don't need luck"
        : "Wish me luck..."
    );
  };
  return (
    <>
      <button onClick={handleClick}>Click for Luck</button>
      <p>{message}</p> 
    </>
  );
}

export default Button