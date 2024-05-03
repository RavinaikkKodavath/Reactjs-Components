import React, { useState } from "react";

export default function Stylebinding() {
  const [username, setUsername] = useState("");
  const [styleobj, setStyleobj] = useState({ border: "", boxShadow: "" });
  const [styles, setStyle] = useState({ fontSize: "50px", color: "orange" });

  function VerifyName(e) {
    setUsername(e.target.value);
    if (username == "") {
      setStyleobj({
        border: "2px solid red",
        boxShadow: "2px 2px 2px red",
      });
    } else {
      setStyleobj({
        border: "2px solid green",
        boxShadow: "2px 2px 2px green",
      });
    }
  }

function handleFontSize(e){
    setStyle({
        fontSize:e.target.value + 'px',
        color:styles.color
    })
}
function handleChangeColor(e){
    setStyle({
        fontSize:styles.color,
        color:e.target.value
    })
}

  return (
    <div className="container">
      <dl>
        <dt>Username</dt>
        <dd>
          <input type="text" style={styleobj} onBlur={VerifyName} />
        </dd>
      </dl>
      <hr></hr>
      <br></br>
      <h2>style binding</h2>
      <dl>
        <dt>Font Size</dt>
        <dd>
          <input type="range" onChange={handleFontSize} min="30" max="100" />
        </dd>
        <dt>Font Size</dt>
        <dd>
          <input type="color" onChange={handleChangeColor} min="10" max="100" />
        </dd>
      </dl>
      <p className="text-center" style={styles}>
        {" "}
        Sample Text{" "}
      </p>
    </div>
  );
}
