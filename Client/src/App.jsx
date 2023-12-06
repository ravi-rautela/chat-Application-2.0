import "./App.css";
import MessageSection from "./Components/MessageSection";
import Sidebar from "./Components/Sidebar";


function App() {
  return (
    <>
      <div className="mainSection">
        <Sidebar />
        <MessageSection/>
      </div>   
    </>
  );
}

export default App;
