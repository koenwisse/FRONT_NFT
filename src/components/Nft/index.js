import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

export default function Nft(props) {
  return (
    <div classname="App">
      {/* props is a gathering of attributes, all these are gathered in a props object (basic building react) *
F1: Each nft is displayed with the id, image, price, specialAbility, seniorTrainingSkill and the youthTrainingSkill */}
      {/* make this a card -> cointainerthat has flex, isude put each nft in a card from a library 
https://react-bootstrap.github.io/components/cards/ 
https://www.youtube.com/watch?v=IhWFs0diAPE*/}
      {/* https://css-tricks.com/snippets/css/a-guide-to-flexbox/ 
https://styled-components.com/ */}
      <Card style={{ width: "18rem" }} src="holder.js/100px180" className="box">
        <Card.Body>
          <Card.Img src={props.image} />
          <Card.Title>{props.id}</Card.Title>
          <Card.Text>{props.price}</Card.Text>
          <Card.Text>{props.specialAbility}</Card.Text>
          <Card.Text>{props.seniorTrainingSkill}</Card.Text>
          <Card.Text>{props.youthTrainingSkill}</Card.Text>
          {props.showLink && (
            <Link to={`/nfts/${props.id}/buy`}>
              <Button variant="primary">Buy NFT</Button>
            </Link>
          )}
        </Card.Body>
      </Card>
    </div>
  );
}
