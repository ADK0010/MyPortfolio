import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
function App() {
  return (
    <div className="App"> 
    <header>
    <Navbar />
    </header>
    <section>
      <Hero />
    </section>  
    <section>
      <Skills />
    </section>
    </div>
  );
}

export default App;
