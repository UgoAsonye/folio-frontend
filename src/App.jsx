import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { Signup } from "./Signup";
import { Login } from "./Login";

function App() {
  return (
    <div>
      <Header />
      <Signup />
      <Login />
      <Content />
      <Navbar />
      <Footer />
    </div>
  );
}

export default App;
