import './App.css';
import Particles from './components/Particles/Particles';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank'

function App() {
  return (
    <div className="App">
      <Particles />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      

      {/* {
      <FaceRecognition />
      } */}
    </div>
  );
}

export default App;
