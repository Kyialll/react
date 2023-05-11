import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Button from "./components/Button/Button";
import Text from "./components/Text/Text";
import Info from "./components/Info/Info";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
        <Text/>
      <Button/>
        <Info title={'Thank you'}/>
        <Info title={'for your attention.'}/>
        <Info title={'Goodbye!'}/>
        <Footer/>


    </div>
  );
}

export default App;
