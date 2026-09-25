import React from "react";

function Card(props) {
  console.log(props);
  return (
    <div className="card">
      <img
        src="https://plus.unsplash.com/premium_photo-1715876268339-10ef751ac0de?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1M3x8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <h1>{props.username}</h1>
      <p>
        {props.about_you}
      </p>
      <button>View Profile</button>
    </div>
  );
}

export default Card;
