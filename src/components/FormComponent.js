import React, {useState} from 'react';
import FormFirstStep from "./FormFirstStep";
import FormSecondStep from "./FormSecondStep";

const FormComponent = (props) => {
    const [step, setStep] = useState(1);

    switch (step){
        case 1: return <FormFirstStep style={props.style} onSubmit={()=>setStep(2)}/>
        case 2: return <FormSecondStep style={props.style}/>
    }

}

export default FormComponent;
