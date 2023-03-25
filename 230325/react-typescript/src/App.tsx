import './App.css';




function App() {
  const showAlert = () => {
  alert("alert");
}

  return (
    <div>
<button onClick={showAlert}>버튼</button>
</div>
  );
}

export default App;
