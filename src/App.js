import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Images from "./Components/Images";

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/albums/1/photos`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setImages(data);
      });
  }, []);

  return(
    <>
      <Images data={images} />
    </>
  ) ;
}

export default App;
