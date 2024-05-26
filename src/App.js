import { useState } from "react";
import Buttons from "./components/Buttons";
import FormInfo from "./components/FormInfo";
import StepBar from "./components/StepBar";
import ThankYou from "./components/ThankYou";
import FormSelect from "./components/FormSelect";
import FormPick from "./components/FormPick";
import FormFinish from "./components/FormFinish";

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
              {
               step===1 ? <FormInfo/> :
               step===2 ? <FormSelect/> :
               step===3 ? <FormPick/> :
               <FormFinish/>
              }
              
              <Buttons step={step} setStep={setStep} setSubmited={setSubmited}/>
            </>
          }
        </section>
      </main>
    </div>
  );
}

export default App;
