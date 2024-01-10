import Counter from "./components/Counter";

function App() {
  return (
    <div className="d-flex align-items-center justify-content-center w-100 flex-column" style={{height:'100vh'}}>
      <div className="d-flex align-items-center justify-content-center flex-column p-5 rounded" style={{backgroundColor:'white'}}>
        <Counter></Counter>

      </div>

    </div>
  );
}

export default App;
