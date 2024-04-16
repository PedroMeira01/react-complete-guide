import Header from './components/Header/Header';
import CoreConcepts from './components/CoreConcepts/CoreConcepts';
import Examples from './components/Examples/Examples';


function App() {

  return (
    <div>
      <Header/>
      <main>
        <CoreConcepts/>
        <Examples/>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
