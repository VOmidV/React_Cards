import React , {useState}from "react";
import axios from "axios";
import uuid from "uuid";

const Facing = () =>{
  const [FacingUp, setFacingUp] = useState(true);
  const flipCard = () => {
    setFacingUp(FacingUp => !FacingUp);
  };
  return [FacingUp, flipCard]
}

const useAxios = (baseURL) =>{
  const [allCards, setAllCards] = useState([]);
  const addCard = async (name='') =>{
    const response = await axios.get(`${baseURL}${name.length > 0 ? name : ''}`);
    setAllCards(allCards => [...allCards, { ...response.data, id: uuid() }]);
  }
  return [allCards, addCard];
}


export{Facing, useAxios}

