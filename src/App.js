import "./App.scss";
import ProgramsPage from "./modules/programs/index";

function App() {
  return (
    <div className="App">
      <div className="App-header"> SpaceX Launch Programs</div>
      <header className="App-content">
        <ProgramsPage />
      </header>
      <footer className="App-footer">Developed By : Pavan Kumar</footer>
    </div>
  );
}

export default App;
