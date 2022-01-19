// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
//PACKAGES
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
// REDUX
// import { fetchArtworks } from "../../store/artworks/actions";
// import { selectArtworks } from "../../store/artworks/selectors";
//COMP
import Nft from "../../components/Nft";

export default function Nfts(props) {
  // F1: Each nft is displayed with the id, image, price, special_ability, senior_training_skill and the youth_training_skill
  const {
    id,
    image_url,
    price,
    special_ability,
    senior_training_skill,
    youth_training_skill,
  } = props.artwork;
  return (
    <Jumbotron
    // props is a gathering of attributes, all these are gathered in a props object (basic building react)
    >
      <h3>{id}</h3>
      <img src={image_url} alt="new" />
      <div key={id}>
        <p>{id}</p>
        <p>{price}</p>
        <p>{special_ability}</p>
        <p>{senior_training_skill}</p>
        <p>{youth_training_skill}</p>

        <Link to={`/nfts/${id}`}>
          <Button>Buy</Button>
        </Link>
      </div>
    </Jumbotron>
  );
}
