import React from "react";
import "../styles.css";
function heading() {
  const date = new Date();
  const currentTime = date.getHours();
  const cstomStyle = {
    color: ""
  };

  let greeting;

  if (currentTime < 12) {
    greeting = "Good Morning";
    cstomStyle.color = "red";
  } else if (currentTime < 18) {
    greeting = "Good Evening";
    cstomStyle.color = "green";
  } else {
    greeting = "Good Night";
    cstomStyle.color = "blue";
  }

  return (
    <div>
      <h1 className="head" style={cstomStyle}>
        {greeting}
      </h1>
      <h1>My Favourite Food</h1>
    </div>
  );
}

export default heading;
