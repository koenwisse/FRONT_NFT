// PACKAGES
import React, { useState } from "react";
import { Button, Form, Card, Badge, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
//REDUX
import { postNftSuccess, fetchNfts, postOffer } from "../../store/nft/actions";
import { selectNfts } from "../../store/nft/selectors";
import { selectLastPurchase } from "../../store/nft/selectors";

export default function NewPurchase() {
  const lastPurchase = useSelector(selectLastPurchase);
  console.log(lastPurchase);

  //   // declare a const dispatch that holds a call of our react hook useDispatch
  //   const dispatch = useDispatch();

  //   const [yourPurchase, setYourPurchase] = useState();
  //   const { id: lastPurchase } = useParams();

  //   console.log(lastPurchase);

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
            You bought NFT ID 2983197
            {/* <Badge pill bg="secondary">{`# ${"NFT ID: 027138917"}`}</Badge> */}
            {/* {`This is your last purchase: ${lastPurchase}`} */}
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
}
