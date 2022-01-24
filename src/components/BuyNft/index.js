// PACKAGES
import React, { useState } from "react";
// import { Table } from "react-bootstrap";
import { Button, Form, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { postNftSuccess, fetchNfts, postOffer } from "../../store/nft/actions";
// import { fetchNfts, offerNft } from "../../store/nft/actions";

export default function BuyNftCard() {
  // props
  // declare a const dispatch that holds a call of our react hook useDispatch
  const dispatch = useDispatch();
  // props is a gathering of attributes, all these are gathered
  // in a props object (basic building react) --> deconstruct so that become consts

  const [offer, setOffer] = useState();

  function submitForm(event) {
    event.preventDefault();

    console.log(offer);
    dispatch(postOffer(offer));
  }
  return (
    <Card style={{ width: "60rem" }} src="holder.js/100px180" className="box">
      <Card.Body>
        <Form>
          <Card.Title>Buy NFT</Card.Title>
          <Card.Img src="https://i.imgur.com/iYsytWZ.png" />
          <Form.Group className="mb-3" controlId="formOffer">
            <Form.Label>Offer</Form.Label>
            <Form.Control
              type="offer"
              value={offer}
              onChange={(event) => setOffer(event.target.value)}
              required
            />

            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Button variant="primary" type="submit" onClick={submitForm}>
            Offer on NFT
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}
