import React from "react";
import Spinner from "./spinner";

const Button = ({ nama, type, Click, loading }) => {
  return (
    <button className={`btn btn-${type}`} onClick={Click} disabled={loading}>
      {loading ? <Spinner /> : nama}
    </button>
  );
};

export default Button;
