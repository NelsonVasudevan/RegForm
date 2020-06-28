import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styled from 'styled-components';
import "bootstrap/dist/css/bootstrap.css";

import Select from "react-select";

const Years = [
  { value: '2020', label: '2020' },
  { value: '2019', label: '2019' },
  { value: '2018', label: '2018' },
];

const Councils = [
  { value: 'Andhra Pradesh Medical Council', label: 'Andhra Pradesh Medical Council' },
  { value: 'Arunachal Pradesh Medical Council', label: 'Arunachal Pradesh Medical Council' },
  { value: 'Assam Medical Council', label: 'Assam Medical Council'},
  { value: 'Bhopal Medical Council', label: 'Bhopal Medical Council' },
  { value: 'Bihar Medical Council', label: 'Bihar Medical Council' },
  { value: 'Chandigarh Medical Council', label: 'Chandigarh Medical Council'},
  { value: 'Chattisgarh Medical Council', label: 'Chattisgarh Medical Council' },
  { value: 'Delhi Medical Council', label: 'Delhi Medical Council' },
  { value: 'Gujarat Medical Council', label: 'Gujarat Medical Council'},
  { value: 'Goa Medical Council', label: 'Goa Medical Council' },
  { value: 'Haryana Medical Council', label: 'Haryana Medical Council' },
  { value: 'Himanchal Pradesh Medical Council', label: 'Himanchal Pradesh Medical Council'},
  { value: 'Hyderabad Medical Council', label: 'Hyderabad Medical Council' },
  { value: 'Jammu & Kashmir Medical Council', label: 'Jammu & Kashmir Medical Council' },
  { value: 'Jharkhand Medical Council', label: 'Jharkhand Medical Council'},
]
class LoginForm extends React.Component {

  state = {
    selectedYear: null,
    selectedCouncil: null
  };

  handleYearChange = selectedYear => {
    this.setState({ selectedYear });
    console.log(`Option selected:`, selectedYear);
  };

  handleCouncilChange = selectedCouncil => {
    this.setState({selectedCouncil});
    console.log(`Council Selected:`, selectedCouncil);
  }
  render() {
    const emailTest = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const { selectedYear } = this.state;
    const { selectedCouncil } = this.state;

//   const Select = styled.select`
//   width: 100%;
//   height:35px;
//   background: white;
//   color: white;
//   padding-left: 5px;
//   font-size: 14px;
//   border:none;
//   margin-left: 10px;

//        option {
//          color: black;
//          background: white;
//          font-weight: small;
//          display: flex;
//          white-space: pre;
//          min-height: 20px;
//          padding: 0px 2px 1px;
//        }
// `;
    return (
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-12 text-center">
            <h1 className="mt-5">Medical Registration</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <Formik
              initialValues={{ regNumber: "", regCouncil: "", regYear: "" }}
              validate={values => {
                let errors = {};
                if (values.regNumber  === "") {
                  errors.regNumber = "Registration Number is required";
                } else if (!emailTest.test(values.regNumber)) {
                  errors.regNumber = "Invalid registration number format";
                }
                if (values.regCouncil === "") {
                  errors.regCouncil = "Registration Council is required";
                } else if (values.regCouncil.length < 3) {
                  errors.password = "Registratin Council must be 3 characters at minimum";
                }

                if (values.regYear === "") {
                  errors.regYear = "Registration Year is required";
                } else if (values.regYear.length < 3) {
                  errors.password = "Registratin Year must be 3 characters at minimum";
                }

                return errors;
              }}
              onSubmit={({ setSubmitting }) => {
                alert("Form is validated! Submitting the form...");
                setSubmitting(false);
              }}
              onSubmit={({ setBack }) => {
                alert("Form is validated! Returning to the previous page..");
                setBack(false);
              }}
            >
              {({ touched, errors, isSubmitting, isBack }) => (
                <Form>
                  <div className="form-group">
                    <label htmlFor="regNumber">Registration Number</label>
                    <Field
                      type="regNumber"
                      name="regNumber"
                      placeholder="Type Registration Number"
                      className={`form-control ${
                        touched.regNumber && errors.regNumber ? "is-invalid" : ""
                      }`}
                    />
                    <ErrorMessage
                      component="div"
                      name="regNumber"
                      className="invalid-feedback"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="Registration Council">Registration Council</label>

                    <Select
                  
                    value={selectedCouncil}
                        onChange={this.handleCouncilChange}
                        options={Councils}
                        placeholder="Select Registration Council"
                       />
                        {/* <Field
                      type="Registration Council"
                      name="Registration Council"
                      placeholder="Type Registration Council"
                      className={`form-control ${
                        touched.regCouncil && errors.regCouncil ? "is-invalid" : ""
                      }`}
                    /> */}
                    <ErrorMessage
                      component="div"
                      name="Registration Council"
                     
                      className="invalid-feedback"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="Registration Year">Registration Year</label>

                      <Select 

                        
                        type="Registration Year"
                        name="Registration Year"
                        placeholder="Select Registration Year"
                       
                        width='300px'
                        value={selectedYear}
                        onChange={this.handleYearChange}
                        options={Years}
                        
                        
                        /> 
                    {/* <Field
                       
                      type="Registration Year"
                      name="Registration Year"
                      placeholder="Select Registration Year"
                      
                      className={`form-control ${
                        touched.regYear && errors.regYear ? "is-invalid" : ""
                        
                      }`} >

                  
                     </Field> */}
                    <ErrorMessage
                      component="div"
                      name="Registration Year"
                      className="invalid-feedback"
                    />
                  </div>
                 <div style={{display:"flex", flexDirection: "row", width:'500px'}}>
                 
                  <button 
                    type="Back"
                    className="btn btn-primary btn-back"
                    disabled={isBack}
                    style={{width: '100px'}}
                    
                  >
                    {isSubmitting ? "Please wait..." : "Back"}
                  </button>
                 
                  <button
                    type="submit"
                    className="btn btn-primary btn-submit"
                    disabled={isSubmitting}
                    style={
                    
                      {width: '100px'}
                    }
                  >
                    {isSubmitting ? "Please wait..." : "Submit"}

                  </button>
                  
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>

      </div>
    );
    }
  
}

// const rootElement = document.getElementById("root");
// ReactDOM.render(<LoginForm />, rootElement);

export default LoginForm;