import * as React from "react";
import { withRouter } from "react-router-dom";
import { useState, useCallback } from "react";
import "./HomePage.scss";
import LoginData from "../../mock-data/LoginData.json";
import { isValidEmail } from "../../shared/ValidationHelper";

/**
 * @function HomePage
 * @summary Renders the home page component
 */
export function HomePage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isErrorEmail, setErrorEmail] = useState(false);
  const [isErrorPassword, setErrorPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Set the email to the state
  const handleChangeEmail = useCallback((event) => {
    setErrorEmail(false);
    setErrorMessage(null);
    setEmail(event.target.value);
  }, []);

  // Set the password to the state
  const handleChangePassword = useCallback((event) => {
    setErrorPassword(false);
    setErrorMessage(null);
    setPassword(event.target.value);
  }, []);

  // Function fired when the user click login button
  const handleLogin = () => {
    if (!email) {
      return setErrorEmail(true);
    }
    if (!password) {
      return setErrorPassword(true);
    }
    console.log(isValidEmail(email));
    console.log(!isValidEmail(email), email != LoginData.username);
    console.log(password != LoginData.password);
    if (!isValidEmail(email) || email !== LoginData.username) {
      return setErrorMessage("Please enter the valid email address!");
    }
    if (password !== LoginData.password) {
      return setErrorMessage("Please enter the valid password!");
    }
    props.history.push("/dashBoard");
  };

  return (
    <React.Fragment>
      <div className="container center-item">
        <div className="card card-item">
          <div className="card-body">
            <div className="text-center">
              <h4 className="card-title">Appiness Login</h4>
            </div>
            <div className="form-group m-t-20">
              <label>Email Address:</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter the email address"
                id="email"
                name="email"
                value={email}
                onChange={handleChangeEmail}
              />
              {isErrorEmail ? (
                <div className="red">Please enter the email address!</div>
              ) : null}
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter the password"
                id="password"
                name="password"
                value={password}
                onChange={handleChangePassword}
              />
              {isErrorPassword ? (
                <div className="red">Please enter the password!</div>
              ) : null}
            </div>
            {errorMessage ? (
              <div className="text-center red">{errorMessage}</div>
            ) : null}
            <div className="text-center">
              <button className="btn btn-primary" onClick={handleLogin}>
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default withRouter(HomePage);
