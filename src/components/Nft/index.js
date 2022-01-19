import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

export default function Space(props) {
  return (
    <div classname="App">
      {/* props is a gathering of attributes, all these are gathered in a props object (basic building react) *
F1: Each nft is displayed with the id, image, price, special_ability, senior_training_skill and the youth_training_skill */}
      {/* make this a card -> cointainerthat has flex, isude put each nft in a card from a library 
https://react-bootstrap.github.io/components/cards/ 
https://www.youtube.com/watch?v=IhWFs0diAPE*/}
      <Card style={{ width: "18rem" }} src="holder.js/100px180" className="box">
        <div style={{ textAlign: "center" }}>
          <Card.Body>
            <Card.Img variant="Top" src={props.image} />
            <Card.Title>{props.id}</Card.Title>
            <Card.Text>{props.price}</Card.Text>
            <Card.Text>{props.special_ability}</Card.Text>
            <Card.Text>{props.senior_training_skill}</Card.Text>
            {props.showLink && (
              <Link to={`/nfts/${props.id}`}>
                <Button variant="primary">More details</Button>
              </Link>
            )}
          </Card.Body>
        </div>
      </Card>
    </div>
  );
}
