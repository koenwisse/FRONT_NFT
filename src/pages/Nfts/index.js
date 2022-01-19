import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//PACKAGES
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
// REDUX
import { fetchNfts } from "../../store/nft/actions";
import { selectNfts } from "../../store/nft/selectors";
//COMP
import Nft from "../../components/Nft";

export default function Nfts() {
  // F1: Each nft is displayed with the id, image, price, special_ability, senior_training_skill and the youth_training_skill
  const dispatch = useDispatch();
  // F1: this is the selector that selects the nfts from our Redux store
  const nfts = useSelector(selectNfts);

  useEffect(() => {
    // F1: dispatch a "thunk action" by calling the "thunk action creator" named `fetchNfts`
    console.log("In the useEffect");
    dispatch(fetchNfts()); // goes to `redux-thunk`
    // F1: array contains variables that trigger the useEffect
  }, [dispatch]);

  return (
    <>
      <Jumbotron>
        <p>In the Jumbotron</p>
        <h1>Recently listed</h1>
      </Jumbotron>
      <Container>
        <div classname="grid">
          {nfts.map((nft) => {
            return (
              // F1: Each nft is displayed with the id, image, price, special_ability, senior_training_skill and the youth_training_skill

              <Nft
                key={nft.id}
                id={nft.id}
                image={nft.image_url}
                price={nft.price}
                special_ability={nft.special_ability}
                senior_training_skill={nft.senior_training_skill}
                youth_training_skill={nft.youth_training_skill}
                showLink={true}
              />
            );
          })}
        </div>
      </Container>
    </>
  );
}
