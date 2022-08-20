import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Images from "./Components/Images";
import GridLoader from "react-spinners/GridLoader";

function App() {
  const [images, setImages] = useState([]);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = `https://salty-cliffs-58044.herokuapp.com/products`;
    setLoading(true);

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setImages(data);
        console.log(data);
        setLoading(false);
      });
  }, []);

  return(
    <>
    {!images.length ? (
      <div className="text-center">
      <GridLoader color={"#3498db"} loading={loading} size={15} />
    </div>
    ):(
       <Images data={images} />
    )}
    </>
  ) ;
}

export default App;
