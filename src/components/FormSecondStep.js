import React from 'react';


const FormSecondStep = (props) => {
    return(
        <div style={props.style}>
            <div style={container}>
                <br/>
                <br/>
                <br/>
            <h3 style={text}>
                We’ll be in touch to get your trial set up.
            </h3>
                <p style={text1}>
                    Fill Out Form
                </p>
                <div style ={{marginLeft:70}}>
                    <div style={container1}>
                        <input
                            style={input}
                            type = "text"
                            name = "firstName"
                            placeholder="First Name *"
                        />
                        <input
                            style={input1}
                            type = "text"
                            name = "lastName"
                            placeholder="Last Name*"
                        />
                    </div>
                    <div style={container2}>
                        <input
                            style={input2}
                            name = "email"
                            placeholder="Work Email*"
                        />
                        <input
                            style={input3}
                            name = "budget"
                            placeholder="Monthly Advertising Budget *"
                        />
                        <input
                            style={input4}
                            type = "number"
                            name = "phone"
                            placeholder="Romania (Roman)"
                        />
                    </div>
                    <button style={button}>
                        GET FREE TRIAL
                    </button>
                </div>
            </div>
        </div>
    );
}
 const container = {
     width:651,
     height: 724,
     boxShadow: '0px 4px 20px #00000029',
     borderRadius: 30,
     backgroundColor:'#FBFBFB',
 }
const text = {
    fontSize: "34px",
    lineHeight: "41px",
    textAlign:'center',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 700,
    width: 533,
    height: 83,
    marginLeft:65
}
const text1 = {
    textAlign:'center',
    marginTop: 19,
    fontSize: "16px",
    lineHeight: "19px",
    fontFamily: "Roboto, sans-serif"
}
const container1 = {
    display: 'flex',
    flexDirection:'row',
    marginTop: 20,
}
const input = {
    height: 48,
    width: 246,
    border: '1px solid #DEDEDE',
    borderRadius: 10,
}

const input1 = {
    height: 48,
    width: 246,
    border: '1px solid #DEDEDE',
    borderRadius: 10,
    marginLeft: 18,
    marginRight: 70
}
const container2 = {
    display:'flex',
    flexDirection:'column',
    marginRight:70
}
const input2 = {
    marginTop:40,
    height: 48,
    border: '1px solid #DEDEDE',
    borderRadius: 10,
}
const input3 = {
    marginTop:40,
    height: 48,
    border: '1px solid #DEDEDE',
    borderRadius: 10,
}
const input4 = {
    marginTop:40,
    height: 48,
    border: '1px solid #DEDEDE',
    borderRadius: 10,
}
const button = {
    marginTop: 48,
    width: 521,
    height: 48,
    backgroundColor: '#FF6E4E',
    boxShadow: '0px 4px 20px #00000029',
    borderRadius: 10,
    color: 'white',
    border: '1px solid #DEDEDE',
    fontSize: "20px",
    lineHeight: "24px",
    fontFamily: "Roboto, sans-serif",
    fontWeight: 540,
    marginBottom: 50
}

export default FormSecondStep;
