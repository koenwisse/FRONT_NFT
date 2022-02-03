import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  Button,
  ListGroup,
  Row,
  Col,
  Badge,
  ListGroupItem,
} from "react-bootstrap";

export default function Nft(props) {
  return (
    <div style={{ margin: "50" }}>
      {/* props is a gathering of attributes, all these are gathered in a props object (basic building react) *
F1: Each nft is displayed with the id, image, price, specialAbility, seniorTrainingSkill and the youthTrainingSkill */}
      {/* make this a card -> cointainerthat has flex, isude put each nft in a card from a library 
https://react-bootstrap.github.io/components/cards/ 
https://www.youtube.com/watch?v=IhWFs0diAPE*/}
      {/* https://css-tricks.com/snippets/css/a-guide-to-flexbox/ 
https://styled-components.com/ */}
      <Card style={{ width: "21rem" }}>
        <Card.Body>
          <ListGroup>
            <Card.Img style={{ width: 300, height: 300 }} src={props.image} />
          </ListGroup>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Badge pill bg="secondary">{`# ${props.id}`}</Badge>
            </ListGroup.Item>
          </ListGroup>
          <ListGroup variant="horizontal">
            <ListGroup.Item variant="danger">
              <div>SPECIAL ABILITY: </div>
              {props.specialAbility}
            </ListGroup.Item>
            <ListGroup.Item variant="success">
              <div>SENIOR TRAINING SKILL: </div>
              {props.seniorTrainingSkill}
            </ListGroup.Item>
            <ListGroup.Item variant="secondary">
              <div>YOUTH TRAINING SKILL: </div>
              {props.youthTrainingSkill}
            </ListGroup.Item>
          </ListGroup>

          <ListGroup variant="horizontal">
            <ListGroup.Item style={{ width: "21 rem" }} variant="warning">
              <div>PRICE: </div>
              {`€ ${props.price}`}
            </ListGroup.Item>

            <ListGroupItem style={{ width: "21 rem" }}>
              {props.showLink && (
                <Link to={`/nfts/${props.id}/buy`}>
                  <Button variant="primary">Details..</Button>
                </Link>
              )}
            </ListGroupItem>
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
  );
}
