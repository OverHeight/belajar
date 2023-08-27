import React, { useState } from "react";
import Button from "./components/button";

const App = () => {
  const [text, setText] = useState("testing");
  const [email, setEmail] = useState("");
  const [alamat, setAlamat] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleInputAlamat = (e) => {
    setAlamat(e.target.value);
  };

  const handleclick = () => {
    setText("click");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
    console.log(`Email : ${email}`);
    console.log(`Alamat: ${alamat}`);
    console.log(loading);
  };

  return (
    <div className="p-3">
      <form>
        <div class="mb-3">
          <label for="emailAddress" class="form-label">
            Email
          </label>
          <input
            type="email"
            class="form-control"
            onChange={handleInputEmail}
            id="emailAddress"
            aria-describedby="email"
          />
        </div>
        <div class="mb-3">
          <label for="alamat">Alamat</label>
          <textarea
            class="form-control"
            placeholder="Alamat Rumah"
            onChange={handleInputAlamat}
            id="alamat"
          ></textarea>
        </div>
        <Button
          nama={text}
          type="primary"
          Click={handleclick}
          loading={loading}
        ></Button>
      </form>
    </div>
  );
};

export default App;
