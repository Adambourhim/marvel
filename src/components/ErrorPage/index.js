import React from "react";
import batman from "../../images/batman.png";

const centerH2 = {
  textAlign: "center",
  margin: "50px",
};
const centerImg = {
  display: "block",
  margin: "40px autp",
};
function ErrorPage() {
  return (
    <div className="quiz-bg">
      <div className="container">
        <h2 style={centerH2}>Oops, this page does not exist</h2>
        <img style={centerImg} src={batman} alt=" error page" />
      </div>
    </div>
  );
}

export default ErrorPage;
