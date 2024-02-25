// Player.js
import React from "react";
import Card from "react-bootstrap/card";

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  return (
    <Card style={{ width: "70%" }}>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <div> Team: {team} </div>
          <br />
          <br />
          <div> Nationality: {nationality}</div>
          <br />
          <div>Jersey Number: {jerseyNumber}</div>
          <br />
          <div> Age: {age}</div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Player;
