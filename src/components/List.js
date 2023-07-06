import React, {useState } from "react";
import Item from "./Item";

function List({items}){
  return(
    <div>
      {
        items.reverse().map((item)=>
          <Item item={item}></Item>
        )
      }
    </div>
  )
}

export default List;