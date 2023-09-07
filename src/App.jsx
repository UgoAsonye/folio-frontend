import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { Signup } from "./Signup";

function App() {
  return (
    <div>
      <Header />
      <Signup />
      <Content />
      <Navbar />
      <Footer />
    </div>
  );
}

export default App;
