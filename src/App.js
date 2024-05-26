import { useState } from "react";
import Buttons from "./components/Buttons";
import FormInfo from "./components/FormInfo";
import StepBar from "./components/StepBar";
import ThankYou from "./components/ThankYou";

function App() {
  
  const [submited,setSubmited] = useState(false)
  const [step,setStep]= useState(1)
  return (
    <div className="App">
      <main>
        <StepBar step={step}/>
        <section>
          {
            (submited)
            ?
            <ThankYou/>
            :
            <>
              <FormInfo/>
              <Buttons step={step} setStep={setStep} setSubmited={setSubmited}/>
            </>
          }
        </section>
      </main>
    </div>
  );
}

export default App;
