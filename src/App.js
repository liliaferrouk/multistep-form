import Buttons from "./components/Buttons";
import FormInfo from "./components/FormInfo";
import StepBar from "./components/StepBar";

function App() {
  return (
    <div className="App">
      <main>
        <StepBar/>
        <section>
          <FormInfo/>
          <Buttons/>
        </section>
      </main>
    </div>
  );
}

export default App;
