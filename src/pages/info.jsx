import {useState, useEffect} from "react";
import {useParams} from "react-router-dom"

export default function Price (props) {
  // Grabbing the Currency symbol from the URL Params
  const params = useParams()
  const caliber = params.caliber
  const name = params.name
  // Using the other two variables to create our URL
  const url = `https://zelda.fanapis.com/api/${caliber}?name=${name}`;

  //state to hold the coin data
  const [cap, setCap] = useState("null");

  //function to fetch coin data
  // const getCoin = async () => {
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   setCoin(data);
  // };

  const getCap = async () => {
    try{
      const response = await fetch(url);
      const data = await response.json();
      setCap(data);
    } catch(e){
      console.error(e)
    }
  };

  // useEffect to run getCoin when component mounts
  useEffect(() => {
    getCap();
  }, []);

  // loaded function for when data is fetched
  const loaded = () => {
    return (
      <div>
        <h1 className="thing">{cap.name}</h1>
        <p className="desc">{cap.description}</p>
      </div>
    );
  };

  // Function for when data doesn't exist
  const loading = () => {
    return <h1>Loading...</h1>;
  };

  // if coin has data, run the loaded function, otherwise, run loading
  return cap && cap.description ? loaded() : loading();
};