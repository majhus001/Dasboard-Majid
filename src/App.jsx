import Dashboard from "./components/Dashboard";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div className="container">
      <Sidebar />
      <Dashboard />
    </div>
  );
}

export default App;
