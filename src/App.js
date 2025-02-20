import "./App.css";
import { useState } from "react";
import { Form } from "./Components/Form";
import { List } from "./Components/List";

function App() {
  const [list, setList] = useState([]);

  const addList = (name) => {
    setList([...list, name]);
  };

  return (
    <div className="wrapper">
      <div className="userlist">
        <hr />
        <Form addList={addList}></Form>
        <br />
        <List list={list}></List>
      </div>
    </div>
  );
}

export default App;
