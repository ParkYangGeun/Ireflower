import React from "react";
import Item from "./Item";

function List({items}){
  return(
    <div className="Curious_list">
      {
        items.reverse().map((item)=>
          <Item key={item.id} item={item}></Item>
        )
      }
    </div>
  )
}

export default List;