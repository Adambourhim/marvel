import React, { useState, useContext } from "react";
import { FirebaseContext } from "../Firebase";

function Signup() {
  const firebase = useContext(FirebaseContext);

  const data = {
    pseudo: "",
    email: "",
    password: "",
    Confirmpassword: "",
  };

  const [loginData, setLoginData] = useState(data);
  const [error, setError] = useState("");
  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.id]: e.target.value });
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    const { email, password } = loginData;
    firebase
      .signupUser(email, password)
      .then((user) => {
        setLoginData({ ...data });
      })
      .catch((error) => {
        setError(error);
        setLoginData({ ...data });
      });
  };
  const { pseudo, email, password, Confirmpassword } = loginData;
  const btn =
    pseudo === "" ||
    email === "" ||
    password === "" ||
    password !== Confirmpassword ? (
      <button disabled>Inscription</button>
    ) : (
      <button>Inscription</button>
    );

  const errorMsg = error !== "" && <span>{error.message}</span>;

  return (
    <div className="signUpLoginBox">
      <div className="slContainer">
        <div className="formBoxLeftSignup"></div>
        <div className="formBoxRight">
          <div className="formContent">
            <h2>Inscription</h2>
            {errorMsg}
            <form onSubmit={handelSubmit}>
              <div className="inputBox">
                <input
                  onChange={handleChange}
                  value={pseudo}
                  type="text"
                  id="pseudo"
                  autoComplete="off"
                  required
                />
                <label htmlFor="pseudo">Pseudo</label>
              </div>
              <div className="inputBox">
                <input
                  onChange={handleChange}
                  value={email}
                  type="email"
                  id="email"
                  autoComplete="off"
                  required
                />
                <label htmlFor="email">Email</label>
              </div>
              <div className="inputBox">
                <input
                  onChange={handleChange}
                  value={password}
                  type="password"
                  id="password"
                  autoComplete="off"
                  required
                />
                <label htmlFor="password">Password</label>
              </div>
              <div className="inputBox">
                <input
                  onChange={handleChange}
                  value={Confirmpassword}
                  type="password"
                  id="Confirmpassword"
                  autoComplete="off"
                  required
                />
                <label htmlFor="password">Confirm Password</label>
              </div>
              {btn}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
