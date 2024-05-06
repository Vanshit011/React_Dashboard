import "./App.css";
import Sidebar from "./component/Sidebar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import ProtectedRoute from "./services/ProtectedRoute";
import Register from './pages/Register';
import Login from './pages/Login';
import HelloWorld from "./pages/ HelloWorld";
import KeyUpPrint from "./pages/KeyUpPrint";
import ShowHide from "./pages/ShowHide";
import PriceQty from "./pages/PriceQty";
// import { RiIncreaseDecreaseFill } from "react-icons/ri";
import Increment from "./pages/Increment";
import Movietmdb from "./pages/Movietmdb";
import CloneElementWithCounter from "./pages/CloneElementWithCounter";


function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/dashboard" element={<Sidebar />} /> */}
          <Route
            path="/login"
            element={<Login />}
          />
          <Route path="/" element={<Register />} />

          <Route path='/' element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Sidebar />} />

            <Route
              path="/one"
              element={<HelloWorld />}
            />
            <Route
              path="/two"
              element={<KeyUpPrint />}
            />
            <Route
              path="/three"
              element={<ShowHide />}
            />
            <Route
              path="/four"
              element={<PriceQty />}
            />
            <Route
              path="/five"
              element={<Increment />}
            />
            <Route
              path="/six"
              element={<Movietmdb />}
            />
             <Route
              path="/seven"
              element={<CloneElementWithCounter />}
            />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;