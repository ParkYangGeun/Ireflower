import React, {useState} from "react";
function Item ({item}){
  return(
    <div className="question_list">
      <span>{item.id}</span>
      <span className="question_list_title">{item.title}</span>
      <span>{item.createdAt}</span>
    </div>
  )
}

export default Item;