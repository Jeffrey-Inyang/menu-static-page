import AboutState from "./learning/AboutState";
import styles from "../src/styles/secondstyle.module.css";
import Menu from "./components/Menu";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;
