import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Charities = (props) => {
    {props.charities.needs.map}
}

useEffect(() => {
    async function getCharities() {
      const response = await fetch(`http://localhost:5050/charities/`);
      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        console.error(message);
        return;
      }
      const charities = await response.json();
      setCharities(charities);
    }
    getCharities();
    return;
  }, [charities.length]);

  export default function(){
    
  }