import './App.css';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import MainContainer from "./Components/MainContainer";
import data from "./data.json";

function App() {
  return (
    <div className="App">
      <Header />
      <MainContainer />
      <Footer />
    </div>
  );
}

export default App;
