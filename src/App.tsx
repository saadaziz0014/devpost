import { Route, Routes } from "react-router-dom";
import "./App.css";
import Financial from "./pages/Financial";
import Roadmap from "./pages/Roadmap";
import Task from "./pages/Task";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Financial />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/task" element={<Task />} />
      </Routes>
    </>
  );
}

export default App;
