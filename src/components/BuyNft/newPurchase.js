// PACKAGES
import React, { useState } from "react";
import { Button, Form, Card, Badge, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
//REDUX
import { postNftSuccess, fetchNfts, postOffer } from "../../store/nft/actions";
import { selectNfts } from "../../store/nft/selectors";

export default function NewPurchase() {
  // declare a const dispatch that holds a call of our react hook useDispatch
  //   const dispatch = useDispatch();

  //   const [yourPurchase, setYourPurchase] = useState();
  //   const { id: nftId } = useParams();

  //   console.log(nftId);

  //   console.log(yourPurchase);
  //   console.log(setYourPurchase);

  return (
    //     <Card style={{ width: "25rem" }} src="holder.js/100px180" className="box">
    //       <Card.Body>
    //          <Card.Title>You just bought:</Card.Title>
    //           <Card.Img src="https://i.imgur.com/iYsytWZ.png" />
    //           Card.Title
    //           {/* <Card.Img src={nfts.image} /> */}
    //           </Card.Body>
    //     </Card>
    //   );
    // }

    <Card style={{ width: "25rem" }}>
      <Card.Body>
        <ListGroup variant="flush">
          <ListGroup.Item>
            {/* <Badge pill bg="secondary">{`# ${"NFT ID: 027138917"}`}</Badge> */}
            You bought NFT with ID: 027138917
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
}
