import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        {/* <Signup /> */}
        {/* <Login /> */}
        <Content />
        <Navbar />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
