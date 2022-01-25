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
import "./Style.css";

export default function Nfts() {
  // F1: Each nft is displayed with the id, image, price, specialAbility, seniorTrainingSkill and the youthTrainingSkill
  const dispatch = useDispatch();
  // F1: this is the selector that selects the nfts from our Redux store
  const nfts = useSelector(selectNfts);

  useEffect(() => {
    // F1: dispatch a "thunk action" by calling the "thunk action creator" named `fetchNfts`
    // F1: upon page opening react mounts this page (component) and we fetch the latest list of NFT's from backend
    // F1: This action callss backend
    dispatch(fetchNfts()); // goes to `redux-thunk` and executes axios.get
    // F1: array contains variables that trigger the useEffect
  }, [dispatch]);

  return (
    <Container>
      {nfts.map((nft) => {
        return (
          // F1: Each nft is displayed with the id, image, price, specialAbility, seniorTrainingSkill and the youthTrainingSkill

          <Nft
            key={nft.id}
            id={nft.id}
            image={nft.imageUrl}
            price={nft.price}
            specialAbility={nft.specialAbility}
            seniorTrainingSkill={nft.seniorTrainingSkill}
            youthTrainingSkill={nft.youthTrainingSkill}
            showLink={true}
          />
        );
      })}
    </Container>
  );
}
