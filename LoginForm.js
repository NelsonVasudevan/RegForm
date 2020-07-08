import React from "react";
import { Formik, Form, Field, ErrorMessage, validateYupSchema } from "formik";
import styled from 'styled-components';
import * as Yup from 'yup'
import "bootstrap/dist/css/bootstrap.css";

import Select from "react-select";

const Years = [
  
  { value: '2020', label: '2020' },
  { value: '2019', label: '2019' },
  { value: '2018', label: '2018' },
];

const initialValues = { 
  regNumber: "", 
  regCouncil: "", 
  regYear: "" 
}

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

const validationSchema = Yup.object().shape({
  regNumber: Yup.number().test('len', "Must be exactly 6 characters", (val) => { if(val) return val.toString().length === 6 }),
  regCouncil:  Yup.object().shape({
    label: Yup.string().required('Required').label('Registration Council'),
    value: Yup.string().required('Required'),
  }),
  regYear:  Yup.object().shape({
    label: Yup.string().required().label('Registration Year'),
    value: Yup.string().required(),
  })
});

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
    const { selectedYear } = this.state;
    const { selectedCouncil } = this.state;

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
              initialValues={initialValues}
              validationSchema={validationSchema}

              onSubmit={({ setSubmitting }) => {
                alert("Form is validated! Submitting the form...");
                setSubmitting(false);
              }}
              onBack={({ setBack }) => {
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
                      ErrorMessage name = "regNumber"
                      
                      className={`form-control $
                      
                      }`}

                    />
                     
                        {touched.regNumber && errors.regNumber ? (<div>{errors.regNumber}</div>) : null}
                  </div>

                  <div className="form-group">
                    <label htmlFor="Registration Council">Registration Council</label>

                    <Select
                  
                       value={selectedCouncil}
                        onChange={this.handleCouncilChange}
                        options={Councils}
                        ErrorMessage name = "regCouncil"
                        placeholder="Select Registration Council"
                        
                       />
                   {touched.regCouncil && errors.regCouncil &&   <div>{errors.regCouncil}</div> }
                  </div>

                  <div className="form-group">
                    <label htmlFor="Registration Year">Registration Year</label>

                      <Select 

                        type="Registration Year"
                        name="Registration Year"
                        placeholder="Select Registration Year"
                        ErrorMessage name = "regYear"
                        width='300px'
                        value={selectedYear}
                        onChange={this.handleYearChange}
                        options={Years}
                      
                        /> 
                 {touched.regYear && errors.regYear ? (<div>{errors.regYear}</div>) : null}
                  </div>
                 <div style={{display:"flex", flexDirection: "row", width:'500px'}}>
                 
                  <button 
                    type="Back"
                    className="btn btn-primary btn-back"
                    disabled={isBack}
                    style={{width: '100px'}}
                    
                  >
                    {isBack ? "Please wait..." : "Back"}
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

export default LoginForm;