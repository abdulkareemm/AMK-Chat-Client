import  {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import { Login, Register } from './components';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/messenger/login" element={<Login />} />
          <Route path="/messenger/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
