import { useState } from "react";
import Buttons from "./components/Buttons";
import FormInfo from "./components/FormInfo";
import StepBar from "./components/StepBar";
import ThankYou from "./components/ThankYou";

function App() {
  const submited = false
  const step= 4
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
              <FormInfo step={step}/>
              <Buttons step={step}/>
            </>
          }
        </section>
      </main>
    </div>
  );
}

export default App;
