import { useState } from "react";
import Buttons from "./components/Buttons";
import FormInfo from "./components/FormInfo";
import StepBar from "./components/StepBar";
import ThankYou from "./components/ThankYou";
import FormSelect from "./components/FormSelect";
import FormPick from "./components/FormPick";
import FormFinish from "./components/FormFinish";

function App() {
  const INITIAL_DATA = {
    name: "",
    email: "",
    phoneNumber: "",
    monthly:true, //if false => yearly
    plan: 1, //there's 3 plans by default it's the first one
    bonus:[] //by default no bonus
  };

  const[data,setData]=useState(INITIAL_DATA);
  function updateFields(fields) {
    setData(prev => {
      return { ...prev, ...fields };
    });
  }
  const [submited,setSubmited] = useState(false)
  //TODO: a modifier a la fin!
  const [step,setStep]= useState(3)
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
               step===1 ? <FormInfo data={data} updateFields={updateFields}/> :
               step===2 ? <FormSelect data={data} updateFields={updateFields}/> :
               step===3 ? <FormPick data={data} updateFields={updateFields}/> :
               <FormFinish data={data}/>
              }

              <Buttons step={step} setStep={setStep} setSubmited={setSubmited} data={data}/>
            </>
          }
        </section>
      </main>
    </div>
  );
}

export default App;
