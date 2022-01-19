import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function Nft() {
  return (
    <>
      <Jumbotron>
        <p>In the Jumbotron</p>
        <h1>Nfts</h1>
      </Jumbotron>
      <Container>
        <p>In the Container</p>
        {/* F1 */}
        {nfts.map((nft) => {
          return <Nft key={nft.id} nft={nft} />;
        })}
      </Container>
    </>
  );
}
