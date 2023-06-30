import {useState} from "react";
import {Link } from "react-router-dom";
import Income from "./Income";

const DATA =[
  {groupId:1, name:"astransia-pink", categoryName:"Income"},
  {groupId:4, name:"puego", categoryName:"Rose"},
]

const category =["Income", "Rose", "etc"];

function FilterButton({name, isPressed, setFilter}){
  return(
    <button
      className={`${isPressed && "active"}`}
      onClick={()=> setFilter(name)}
    >
      {name}
    </button>
  )
}

export default function Group(){
  const [filter, setFilter] = useState("Income");
  
  const groupList = DATA.filter(group => group.categoryName === filter).map(group => (
    <Income key={group.name}>
    </Income>
  ))

  return(
    <>
      <div className="Group-page">
        {category.map(name =>(
          <FilterButton
            key={name}
            name={name}
            isPressed={filter === name}
            setFilter ={setFilter}
          />
        ))}
      </div>
      <div>
        {groupList}
      </div>
    </>
  )
}