import { Routes, Route } from "react-router-dom";
import { DefaultPage } from "./Pages/DefaultPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<DefaultPage />} />
      </Routes>
    </div>
  );
}

export default App;
