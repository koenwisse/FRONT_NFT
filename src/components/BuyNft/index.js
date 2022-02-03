// PACKAGES
import React, { useState } from "react";
import { Button, Form, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
//REDUX
import { postNftSuccess, fetchNfts, postOffer } from "../../store/nft/actions";
// import { selectNfts } from "../../store/nft/selectors";

export default function BuyNftCard() {
  // declare a const dispatch that holds a call of our react hook useDispatch
  const dispatch = useDispatch();

  const [offer, setOffer] = useState();
  const { id: nftId } = useParams();

  console.log(nftId);
  function submitForm(event) {
    event.preventDefault();

    console.log(offer);

    dispatch(postOffer(offer, nftId));
  }
  return (
    <Card style={{ width: "60rem" }} src="holder.js/100px180" className="box">
      <Card.Body>
        <Form>
          <Card.Title>Buy NFT</Card.Title>
          <Card.Img src="https://i.imgur.com/iYsytWZ.png" />
          {/* <Card.Img src={nfts.image} /> */}
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
