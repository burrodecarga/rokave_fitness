import React, { createContext, useState } from "react";

const FitnessItems = createContext()

const FitnessContext = ({children})=>{
  const [completed, setCompleted] = useState([])
  const [time, setTime] = useState([])
  const [workout,setWorkout] = useState(0)
  const [calories,setCalories] = useState(0)
  const [minutes,setMinutes] = useState(0)
  const [inicio,setInicio] = useState(0)
  const [fin,setFin] = useState(0)


  return (
    <FitnessItems.Provider
    value={{
     completed,setCompleted,
     workout,setWorkout,
     calories,setCalories,
     minutes,setMinutes,
     inicio,setInicio,
     fin,setFin,
     time,setTime 
    }}
    >
      {children}
    </FitnessItems.Provider>
  )
}

export {FitnessContext,FitnessItems}