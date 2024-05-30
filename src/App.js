import { useState,useEffect } from "react";
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
  const [errors, setErrors] = useState({});
  const [submited,setSubmited] = useState(false)
  const [step,setStep]= useState(1)

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePhoneNumber = (phoneNumber) => {
    const re = /^\+?[0-9\s\-()]{7,15}$/;
    return re.test(String(phoneNumber));
  };

  const validateField = (name, value) => {
    let error;
    switch (name) {
      case "name":
        error = value.trim() === "" ? "Name is required" : "";
        break;
      case "email":
        error = !validateEmail(value) ? "Invalid email address" : "";
        break;
      case "phoneNumber":
        error = !validatePhoneNumber(value) ? "Invalid phone number" : "";
        break;
      default:
        break;
    }
    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    validateField(name, value);
  };


  function updateFields(fields) {
    setData(prev => {
      return { ...prev, ...fields };
    });
  }

  useEffect(() => {
    const newErrors = {};
    Object.keys(data).forEach((key) => {
      validateField(key, data[key]);
    });
    setErrors(newErrors);
  }, [data]);

  return (
    <div className="App">
      <main>
        <StepBar step={step}/>
        <section>
          {
            submited ?
            <ThankYou/>
            :
            <>
              {
               step===1 ? <FormInfo data={data} updateFields={updateFields} errors={errors}  handleBlur={handleBlur}/> :
               step===2 ? <FormSelect data={data} updateFields={updateFields}/> :
               step===3 ? <FormPick data={data} updateFields={updateFields}/> :
               <FormFinish data={data} setStep={setStep}/>
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
