import { useState } from "react";
import "./App.css";

// src/App.jsx

const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [zombieFighters, setZombieFighters] = useState([
    {
      id: 1,
      name: "Survivor",
      price: 12,
      strength: 6,
      agility: 4,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png",
    },
    {
      id: 2,
      name: "Scavenger",
      price: 10,
      strength: 5,
      agility: 5,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png",
    },
    {
      id: 3,
      name: "Shadow",
      price: 18,
      strength: 7,
      agility: 8,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png",
    },
    {
      id: 4,
      name: "Tracker",
      price: 14,
      strength: 7,
      agility: 6,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png",
    },
    {
      id: 5,
      name: "Sharpshooter",
      price: 20,
      strength: 6,
      agility: 8,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png",
    },
    {
      id: 6,
      name: "Medic",
      price: 15,
      strength: 5,
      agility: 7,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png",
    },
    {
      id: 7,
      name: "Engineer",
      price: 16,
      strength: 6,
      agility: 5,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png",
    },
    {
      id: 8,
      name: "Brawler",
      price: 11,
      strength: 8,
      agility: 3,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png",
    },
    {
      id: 9,
      name: "Infiltrator",
      price: 17,
      strength: 5,
      agility: 9,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png",
    },
    {
      id: 10,
      name: "Leader",
      price: 22,
      strength: 7,
      agility: 6,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png",
    },
  ]);
  let totalStrength=0;
  let totalAgilty=0;

  function handleAddFighter(fighter) {
    console.log('add: ',fighter.id); // this is the guy we want
    // check if we have enough money to add to team or not
    if (money - fighter.price >= 0) { 
      setMoney(money - fighter.price); // subtract the price of the fighter from our money
      // replace team array with a new array and add fighter into this new array
      setTeam([...team, fighter]); // https://react.dev/learn/updating-arrays-in-state
      // use filter method to geta new array without the guy that was added to the team (found using id)
      const leftOvers = zombieFighters.filter(
        (zombieFighter) => zombieFighter.id !== fighter.id
      );
      setZombieFighters([...leftOvers]);
    } else {
      // dont have money to afford new guy, cannot add to team and no money deducted
      console.log("not enough money");
      return;
    }
  }
  function handleRemoveFighter(fighter){
    console.log('remove: ',fighter); // this is the guy we want
    setMoney(money + fighter.price); // add the money back after we remove from our team
    // use filter method to get a new array without the guy we clicked 'remove', set this new array to replace team state array
    const leftOvers = team.filter(
      (team) => team.id !== fighter.id
    );
    setTeam([...leftOvers]);
    setZombieFighters([...zombieFighters, fighter]); // add the guy back into zombiefighter array
  }
  // getting total strength of the team
  const strengthArray = team.map(getStrength);
  function getStrength(fighter) {
    return fighter.strength;
  }
  for (let i=0; i<strengthArray.length; i++) {
    totalStrength+=strengthArray[i];
  }
  // getting total agility of the team
  const agilityArray = team.map(getAgility);
  function getAgility(fighter) {
    return fighter.agility;
  }
  for (let i=0; i<agilityArray.length; i++) {
    totalAgilty+=agilityArray[i];
  }

  return (
    <>
      <h1>Money: {money}</h1>
      <h1>Team Strength: {team.length===0? 0: totalStrength}</h1>
      <h1>Team Agility: {team.length===0? 0: totalAgilty}</h1> 
      <h1>Team:  </h1>
      {team.length === 0? "Pick some team members!": 
       <ul>
        {team.map((zombieFighter) => (
          <section key={zombieFighter.id}>
            <li>
              <img src={zombieFighter.img} />
            </li>
            <li>Name: {zombieFighter.name}</li>
            <li>Price: {zombieFighter.price}</li>
            <li>Strength: {zombieFighter.strength}</li>
            <li>Agility: {zombieFighter.agility}</li>
            <button onClick={() => handleRemoveFighter(zombieFighter)}>Remove</button>
          </section>
        ))}
      </ul> }
       
      
          <h1>Fighters: </h1>
      <ul>
        {zombieFighters.map((zombieFighter) => (
          <section key={zombieFighter.id}>
            <li>
              <img src={zombieFighter.img} />
            </li>
            <li>Name: {zombieFighter.name}</li>
            <li>Price: {zombieFighter.price}</li>
            <li>Strength: {zombieFighter.strength}</li>
            <li>Agility: {zombieFighter.agility}</li>
            <li>
              <button onClick={() => handleAddFighter(zombieFighter)}>
                Add
              </button>
            </li>
          </section>
        ))}
      </ul>
    </>
  );
};

export default App;
