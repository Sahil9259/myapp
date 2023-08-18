import React, { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { Alert, Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../utils/UserAuthContext";

const PhoneSignUp =() =>{
  const [number,setNumber] =useState("");
  const [error, setError] = useState("");
  const [otp, setOtp] = useState("");
  const [flag, setFlag] = useState(false);
  // const [result, setResult] = useState("");
  const [confirmObj , setConfirmObj] = useState("");
  const {setUpRecaptcha} = useUserAuth();
  const navigate = useNavigate();
  const getOtp = async(e)=>{
    e.preventDefault();
    setError("");
    if(number === "" || number === undefined)
      return setError("Enter a valid  phone number.")
      try {
        const response = await setUpRecaptcha(number);
        console.log(response);
        setConfirmObj(response);
        setFlag(true);
      } catch (error) {
        setError(error.message);
        console.log(error.message);
      }
    console.log(number);
  }
  const verifyOtp = async(e) =>{
    e.preventDefault();
    setError("");
    if (otp === "" || otp === null) return;
    try {
      await confirmObj.confirm(otp);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  }
  return (
    <>
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <div className="text-center">
        <h2 className="mb-3">Sign in With Phone</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={getOtp} style={{display: !flag?"block":"none"}}>
          <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
            <PhoneInput defaultCountry="IN" 
            value={number} 
            onChange={setNumber}
            placeholder = "Enter Your Number"
            />
            <div id="recaptcha-container"></div>
          </Form.Group>
          <div className="button-right">
            <Link to ='/'>
            <Button variant="secondary">Cancel</Button> &nbsp;
            </Link>
            <Button variant="primary" type = "submit">Send OTP</Button>
          </div>

        </Form>
        <Form onSubmit={verifyOtp} style={{display:flag?"block":"none"}}>
          <Form.Group className="mb-3" controlId="formBasicOtp">
            <Form.Control
              type="text"
              placeholder = "Enter Otp"
              onChange = {(e)=> setOtp(e.target.value)}>
            </Form.Control>
          </Form.Group>
          <div className="button-right">
            <Link to ='/'>
            <Button variant="secondary">Cancel</Button> &nbsp;
            </Link>
            <Button variant="primary" type = "submit">Verify</Button>
          </div>

        </Form>
      </div>
      </div>
    </>
  );
}
export default PhoneSignUp;
