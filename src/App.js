import { useState } from "react";
import Buttons from "./components/Buttons";
import FormInfo from "./components/FormInfo";
import StepBar from "./components/StepBar";
import ThankYou from "./components/ThankYou";

function App() {
  const [step,setStep] = useState(5)
  return (
    <div className="App">
      <main>
        <StepBar step={step}/>
        <section>
          {
            (step>4)
            ?
            <ThankYou/>
            :
            <>
              <FormInfo step={step}/>
              <Buttons step={step} setStep={setStep}/>
            </>
          }
        </section>
      </main>
    </div>
  );
}

export default App;
