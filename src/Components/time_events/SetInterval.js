import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function SetInterval() {
    const [images, setImages] = useState([
        "images/mobile1.jpg",
        "images/mobile2.jpg"
      ]);
  const [image, setImage] = useState("");

  var count = 0;
  function LoadImages() {
    if (count === images.length) {
      count = 0;
    } else {
      setImage(images[count]);
      count++;
    }
  }

  useEffect(() => {
    setInterval(LoadImages, 4000);
  }, []);

  return (
    <div>
      <h1>real Me Mobile </h1>
      <img width="200" height="300" src={image} />
    </div>
  );
}
