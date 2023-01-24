import axios from "axios";
import Joi from "joi";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [user, setuser] = useState({
    first_name: "",
    last_name: "",
    age: "",
    email: "",
    password: "",
  });
  const [errorMsg, seterrorMsg] = useState("");
  const [errorsList, setErrorsList] = useState([]);
  let navigate = useNavigate();

  let formSubmit = async (e) => {
    e.preventDefault();
    let validationResponse = validationFormData();

    if (validationResponse.error) {
      setErrorsList(validationResponse.error.details);
    } else {
      let { data } = await axios.post(
        "https://route-movies-api.vercel.app/signup",
        user
      );

      if (data.message === "success") {
        goToLogin();
      } else {
        seterrorMsg(data.message);
      }
    }
  };
  let goToLogin = () => {
    navigate("/login");
  };
  let getInputValue = (e) => {
    let myUser = { ...user };
    myUser[e.target.name] = e.target.value;
    setuser(myUser);
  };
  let validationFormData = () => {
    const schema = Joi.object({
      first_name: Joi.string().alphanum().required().min(2).max(10),
      last_name: Joi.string().alphanum().required().min(2).max(10),
      age: Joi.number().required().min(20).max(80),
      email: Joi.string()
        .required()
        .email({ tlds: { allow: ["com", "net"] } }),
      password: Joi.string()
        .required()
        .pattern(new RegExp(/^[a-zA-Z0-9!@#$%^&*]{6,16}$/)),
    });
    return schema.validate(user, { abortEarly: false });
  };
  return (
    <>
      <div className='w-75 m-auto py-5'>
        <h2>Regiterion Form</h2>
        {errorsList.map((error, index) => (
          <div key={index} className='alert alert-danger p-2'>
            {error.message.includes("pattern")
              ? "Password needed to be more 6 numbers and included capital letters and special character."
              : error.message.replace(/("|_)/g, " ") + "."}
          </div>
        ))}
        {errorMsg ? (
          <div className='alert alert-danger p-2'>{errorMsg}</div>
        ) : (
          ""
        )}

        <form onSubmit={formSubmit}>
          <div className='input-data my-2'>
            <label htmlFor='first_name '>first Name</label>
            <input
              onChange={getInputValue}
              type='text'
              id='first_name'
              name='first_name'
              className='form-control my-2'
            />
          </div>
          <div className='input-data my-2'>
            <label htmlFor='last_name '>Last Name</label>
            <input
              type='text'
              id='last_name'
              onChange={getInputValue}
              name='last_name'
              className='form-control my-2'
            />
          </div>
          <div className='input-data my-2'>
            <label htmlFor='age '>Age</label>
            <input
              type='number'
              id='age'
              name='age'
              onChange={getInputValue}
              className='form-control my-2'
            />
          </div>
          <div className='input-data my-2'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              name='email'
              onChange={getInputValue}
              className='form-control my-2'
            />
          </div>
          <div className='input-data my-2'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              id='password'
              name='password'
              onChange={getInputValue}
              className='form-control my-2'
            />
          </div>
          <button type='submit' className='btn btn-info float-end my-2'>
            Register
          </button>
          <div className='clear-fix'></div>
        </form>
      </div>
    </>
  );
};

export default Register;
