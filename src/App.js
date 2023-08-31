import './App.css';
import ListaPeliculas from "./listaPeliculas";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Blog from "./blog";
function App() {
    return (
        <Router>
            <Routes>
            <Route path={'/blog'} element={<Blog/>}/>
            <Route path={'/'} element={<ListaPeliculas/>}/>
            </Routes>
        </Router>
  );
}

export default App;
