import {Routes,Route} from "react-router-dom"
import Skills from "./pages/Skills";
import Addskillpage from "./pages/Addskillpage";
// import Header from "./components/Header"

function App() {
  return (
    <>
     <Routes>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/addskills" element={<Addskillpage/>}/>
     </Routes>
    </>
  );
}

export default App;
