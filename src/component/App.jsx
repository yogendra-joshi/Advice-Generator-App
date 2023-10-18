import React, { useEffect, useState } from "react";
import { BsFillDice5Fill } from "react-icons/bs";
import "../styles/css/app.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([""]);
  const [error, setError] = useState(null);
  console.log(data);

  const API = "https://api.adviceslip.com/advice";

  const fetchApiData = async () => {
    try {
      const response = await fetch(API);
      const result = await response.json();
      console.log(result);
      setData(result.slip);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchApiData();
  }, []);

  return (
    <section className="AdviceSection">
      <div className="AdviceBox">
        {isLoading ? (
          <p className="loading">Loading...</p>
        ) : error ? (
          <p>Error: {error.message}</p>
        ) : (
          <div className="AdviceDiv">
            <p className="AdviceId">Advice# {data.id} </p>
            <p className="advice">"{data.advice}"</p>
            <hr className="line" />
          </div>
        )}
        <div className="BtnDiv">
          <BsFillDice5Fill
            className="btn"
            onClick={() => window.location.reload(false)}
          />
        </div>
      </div>
    </section>
  );
}

export default App;
