import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
function App() {
  const User = () => {

    // yeha per hum useParams ka user kary gay
    console.log(useParams())
    const { id } = useParams()
    return <h2>User profile id is: {id}. </h2>
  };

  const Secret = () =>{
    return <h2>Secret Component show when passkey is true</h2>

  }
  return (
    <BrowserRouter>
      <h1>React Routing Working</h1>
      <nav>
        <Link to="/">Home</Link> |
        {/* <Link to="/secret">Secret</Link>| */}
        <Link to="/about">About</Link> |
        <Link to="/contact">Contact</Link> |
        <Link to="user/10">User</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/secret" element={<Secret />}>Secret</Route>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* yeha per nichay id aik varible hay jo uppar user/10 say value ley ga */}
        <Route path="/user/:id" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
