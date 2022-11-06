import React, { useState } from 'react';
import './App.css';

import { createDetails } from "./actions/detailActions";
import { validateEmail, validateTelephone, validateDateOfBirth } from "./validate/validateHelper";

function App() {
  const [email, setEmail] = useState<String>("");
  const [firstName, setFirstName] = useState<String>("");
  const [surName, setSurName] = useState<String>("");
  const [telephone, setTelephone] = useState<String>("");
  const [comment, setComment] = useState<String>("");
  const [gender, setGender] = useState<String>("");
  const [dob1, setDOB1] = useState<String>("");
  const [dob2, setDOB2] = useState<String>("");
  const [dob3, setDOB3] = useState<String>("");

  const [isFormDone, setIsFormDone] = useState<Boolean>(true);
  const [isFormOneDone, setIsFormOneDone] = useState<Boolean>(true);
  const [isFormTwoDone, setIsFormTwoDone] = useState<Boolean>(true);
  // const [isFormThreeDone, setIsFormThreeDone] = useState<Boolean>(true);

  const [isFormOneClicked, setIsFormOneClicked] = useState<Boolean>(true);
  const [isFormTwoClicked, setIsFormTwoClicked] = useState<Boolean>(false);
  const [isFormThreeClicked, setIsFormThreeClicked] = useState<Boolean>(false);
  const [isEmailValidated, setIsEmailValidated] = useState<Boolean>(true);
  const [isTelephoneValidated, setIsTelephoneValidated] = useState<Boolean>(true);
  const [isDateOfBirthValidated, setIsDateOfBirthValidated] = useState<Boolean>(true);


  console.log("email>>>>", email)
  console.log("gender>>>>", gender)

  const state = {
    firstName: firstName,
    surName: surName,
    email: email,
    telephone: telephone,
    gender: gender,
    dateOfBirth: dob1 + "-" + dob2 + "-" + dob3,
    comment: comment,
  }

  const handleSubmit = () => {
    const isEmpty = Object.values(state).includes(null || '');
    if (isEmpty) {
      setIsFormDone(false);
    } else {
      createDetails(state);
    }
  }

  const handleNextOne = () => {
    if (email === "" || firstName === "" || surName === "") {
      setIsFormOneDone(false);
    } else {
      if (validateEmail(email)) {
        setIsFormOneClicked(false);
        setIsFormThreeClicked(false);
        setIsFormTwoClicked(true);
      }
      else {
        setIsEmailValidated(false);
      }
    }
  }

  const handleNextTwo = () => {
    if (telephone === "" || gender === "" || state?.dateOfBirth === "") {
      setIsFormTwoClicked(true);
      setIsFormOneClicked(false);
      setIsFormThreeClicked(false);
      setIsFormTwoDone(false);
    } else {
      console.log("validating tele info?>>>>>", validateTelephone(telephone))
      if (validateTelephone(telephone)) {
        if (validateDateOfBirth(dob1, dob2, dob3)) {
          setIsFormTwoClicked(false);
          setIsFormOneClicked(false);
          setIsFormThreeClicked(true);
        } else {
          setIsDateOfBirthValidated(false);
          setIsFormTwoClicked(true);
          setIsFormOneClicked(false);
          setIsFormThreeClicked(false);
        }
      }
      else {
        setIsTelephoneValidated(false);
        setIsFormTwoClicked(true);
        setIsFormOneClicked(false);
        setIsFormThreeClicked(false);
      }
    }
  }

  const handleFormOneExpandCollapse = () => {
    if (isFormOneClicked) {
      setIsFormOneClicked(false);
    } else {
      setIsFormOneClicked(true);
    }
  }

  const handleFormTwoExpandCollapse = () => {
    if (isFormTwoClicked) {
      setIsFormTwoClicked(false);
    } else {
      setIsFormTwoClicked(true);
    }
  }

  const handleFormThreeExpandCollapse = () => {
    if (isFormThreeClicked) {
      setIsFormThreeClicked(false);
    } else {
      setIsFormThreeClicked(true);
    }
  }



  console.log("state", state)
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-main bg-white rounded">
          <div className="form-one d-flex flex-column rounded m-2">
            <div className="main-header d-flex justify-content-start p-3 bg-warning rounded" onClick={() => {
              handleFormOneExpandCollapse()
            }}>
              <h6 className="form-dropdown-header">Step 1: Your details </h6>
            </div>
            {isFormOneClicked && (
              <>
                <div className="d-flex justify-content-start px-4 py-2">
                  <div className="dropdown-item d-flex flex-column first-name-input-container">
                    <label className="form-label d-flex justify-content-start">First Name</label>
                    <input type="name" className="form-control form-text" id="exampleInputName" aria-describedby="emailHelp" onChange={(e) => { setFirstName(e.target.value) }} />
                  </div>
                  <div className="dropdown-item d-flex flex-column sur-name-input-container">
                    <label className="form-label d-flex justify-content-start" id="surname">Surname</label>
                    <input type="surName" className="form-control form-text" id="exampleInputDOB" aria-describedby="emailHelp" onChange={(e) => { setSurName(e.target.value) }} />
                  </div>
                </div>
                <div className="d-flex justify-content-start p-4">
                  <div className="dropdown-item d-flex flex-column">
                    <label className="form-label d-flex justify-content-start">Email Address:</label>
                    <input type="email" className="form-control form-text" id="exampleInputEmail" aria-describedby="emailHelp" onChange={(e) => { setEmail(e.target.value) }} />
                    {!isFormOneDone && (
                      <>
                        <span className="mt-4 d-flex justify-content-start error-text">Please fill in the details.</span>
                      </>
                    )}
                    {!isEmailValidated && (
                      <>
                        <span className="mt-4 d-flex justify-content-start error-text">Email format is not correct. Invalid Email.</span>
                      </>
                    )}
                  </div>
                </div>
                <div className="d-flex justify-content-end px-4 py-2" >
                  <button type="button" className="btn text-white next-button" onClick={() => {
                    handleNextOne()
                  }}>Next &gt;</button>
                </div>
              </>
            )}

          </div>

          <div className="form-two d-flex flex-column  rounded m-2">
            <div className="main-header d-flex justify-content-start p-3 bg-warning rounded" onClick={() => {
              handleFormTwoExpandCollapse()
            }}>
              <h6 className="form-dropdown-header">Step 2. More comments</h6>
            </div>
            {isFormTwoClicked && (
              <>
                <div className="d-flex justify-content-start px-4 py-2">
                  <div className="dropdown-item d-flex flex-column telephone-input-container">
                    <label className="form-label d-flex justify-content-start">Telephone number</label>
                    <input type="telephone" className="form-control form-text" id="exampleInputTelephone" aria-describedby="emailHelp" onChange={(e) => { setTelephone(e.target.value) }} />
                  </div>
                  <div className="dropdown-item d-flex flex-column gender-input-container">
                    <label className="form-label d-flex justify-content-start">Gender</label>
                    <select className="form-select" aria-label="Default select example" onChange={(e: any) => { setGender(e.target.value) }}>
                      <option selected>Select Gender</option>
                      <option value="M">M</option>
                      <option value="F">F</option>
                      <option value="Prefer not to say">Prefer not to say</option>
                    </select>
                  </div>
                </div>
                <div className="d-flex justify-content-start px-4 py-2">
                  <div className="dropdown-item d-flex flex-column">
                    <label className="form-label d-flex justify-content-start">Date of Birth</label>
                    <div className="d-flex justify-content-start">
                      <input type="dateOfBirth" className="form-control form-text-dob" id="exampleInputDOB1" aria-describedby="emailHelp" onChange={(e) => { setDOB1(e.target.value) }} />
                      <input type="dateOfBirth" className="form-control form-text-dob" id="exampleInputDOB2" aria-describedby="emailHelp" onChange={(e) => { setDOB2(e.target.value) }} />
                      <input type="dateOfBirth" className="form-control form-text-dob" id="exampleInputDOB3" aria-describedby="emailHelp" onChange={(e) => { setDOB3(e.target.value) }} />
                    </div>
                    {!isFormTwoDone && (
                      <>
                        <span className="mt-4 d-flex justify-content-start error-text">Please fill in comments.</span>
                      </>
                    )}
                    {!isTelephoneValidated && (
                      <>
                        <span className="mt-4 d-flex justify-content-start error-text">Telephone requires number. Please put in number.</span>
                      </>
                    )}
                    {!isDateOfBirthValidated && (
                      <>
                        <span className="mt-4 d-flex justify-content-start error-text">Date of Birth is invalid.</span>
                      </>
                    )}
                  </div>
                </div>
                <div className="d-flex justify-content-end px-4 py-2">
                  <button type="button" className="btn text-white next-button" onClick={() => {
                    handleNextTwo()
                  }}>Next &gt;</button>
                </div>
              </>
            )}
          </div>

          <div className="form-three d-flex flex-column  rounded m-2">
            <div className="main-header d-flex justify-content-start px-4 py-2 bg-warning rounded" onClick={() => {
              handleFormThreeExpandCollapse()
            }}>
              <h6 className="form-dropdown-header">Step 3. Final comments</h6>
            </div>
            {isFormThreeClicked && (
              <>
                <div className="d-flex justify-content-start px-4 py-2">
                  <div className="dropdown-item d-flex flex-column">
                    <label className="form-label d-flex justify-content-start">Comments</label>
                    <textarea id="textarea" name="textarea" onChange={(e) => { setComment(e.target.value) }}></textarea>
                    {!isFormDone && (
                      <>
                        <span className="mt-4 d-flex justify-content-start error-text">Please fill in the missing blanks to submit the form</span>
                      </>
                    )}
                  </div>
                </div>
                <div className="d-flex justify-content-end p-4">
                  <button type="button" className="btn text-white next-button" onClick={() => { handleSubmit() }}>Next   &gt;</button>
                </div>
              </>
            )}

          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
