import React from "react";

const Post = (props) => {
    console.log(props)
    return <>
        <li onClick={props.clickHandler} style={{ marginBottom: '1rem', width: '30%' }}>
            <img src={props.data.image} style={{width:'50px'}} alt={props.data.image}/>
            <h3>{props.data.title}</h3>
            <span>{props.data.description}</span>
            <div style={{color:"red", marginTop:'1rem'}}>{props.data.count}</div>
        </li>
    </>
}


export default Post;