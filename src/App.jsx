import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Colors from "./components/Colors.json";

function App() {
  return (
    <>
      <Header />
      <div id="main_container">
        {Colors.map((color, index) => (
          <Card key={index} color={color} colorcode={color} />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default App;
