import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <div className="userlist">
        <div>as you typing</div>
        <hr />
        <div className="form">
          <input type="text" className="text ml-2"></input>
          <button className="btn btn-primary">Submit</button>
        </div>
        <br />
        <div>
          <ul>
            <li>Bhavesh</li>
            <li>sadhu</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
