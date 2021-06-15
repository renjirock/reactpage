import Nav from './components/nav';
import About from './components/about';
import Experience from './components/experience';
import Education from './components/education';
import Skills from './components/skills';
import Interests from './components/interests';
import Awards from './components/awards';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav/>
        <div className="container-fluid p-0">
          <About/>
          <Experience/>
          <Education/>
          <Skills/>
          <Interests/>
          <Awards/>
        </div>
      </header>
    </div>
  );
}

export default App;
