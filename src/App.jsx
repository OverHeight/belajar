import React, { useState } from "react";
import Button from "./components/button";

const App = () => {
  const [text, setText] = useState("testing");
  const [loading, setLoading] = useState(false);
  const handleclick = () => {
    setText("click");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    console.log(loading);
  };

  return (
    <div>
      <button className="btn btn-primary">tes</button>
      <Button
        nama={text}
        type="danger"
        Click={handleclick}
        loading={loading}
      ></Button>
    </div>
  );
};

export default App;
