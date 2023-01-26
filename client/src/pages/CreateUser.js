import { Button, Container } from "@mui/material";
import React, { useState } from "react";
import Footer from "../component/Footer";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { toast } from "react-toastify";
function CreateUser() {
  const [data, setData] = useState({
    name: "",
    email: "",
    role: "",
    twoStep: "",
  });

  const navigate =useNavigate();

  const readValue = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("Insert data:-", data);
    try {
      const result = await axios.post(`http://localhost:4000/api/v1/Create`, data);
      console.log(result);
      toast.success(result.data.msg);
      navigate('/User');
    } catch (err) {
      console.log(err);
      toast.error(err.response.data.msg)

    }
  };

  return (
    <Container sx={{ mt: 12 }}>
      <div className="row my-4">
        <div className="offset-md-3 col-md-6">
          <div className="card">
            <h2 className="text-center my-3"> Create User</h2>
            <div className="card-body">
              <form autoComplete="off" onSubmit={submitHandler}>
                <div className="input-group my-3 ">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    placeholder="Enter User Name"
                    onChange={readValue}
                    required
                  />
                </div>
                <div className="input-group my-3 ">
                  <input
                    type="text"
                    id="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter User Email"
                    onChange={readValue}
                    required
                  />
                </div>
                <div className="input-group my-3 ">
                  <input
                    type="text"
                    id="role"
                    name="role"
                    className="form-control"
                    placeholder="Enter User Role"
                    onChange={readValue}
                    required
                  />
                </div>
                <div className="input-group my-3 ">
                  <select
                    id="twoStep"
                    name="twoStep"
                    className="form-select"
                    value={data.twoStep}
                    onChange={readValue}
                  >
                    <option value={""}>Select Two Step </option>
                    <option value="1">Enable</option>
                    <option value="0">Disable</option>
                  </select>
                </div>
                <div className="input-group my-4 d-flex justify-content-center">
                  <Button
                    type="submit"
                    variant="outlined"
                    className="button_Background"
                  >
                    Registration
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer className="mt-5" />
    </Container>
  );
}

export default CreateUser;
