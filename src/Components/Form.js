import React, { useState } from "react";
import { Display } from "./Display";

export const Form = ({ addList }) => {
  const [name, setName] = useState("");
  const onchange = (e) => {
    const { value } = e.target;
    setName(value);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    addList(name);
  };
  return (
    <div>
      <Display name={name}></Display>
      <form className="form" onSubmit={handleOnSubmit}>
        <input type="text" className="text ml-2" onChange={onchange}></input>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};
