// PACKAGES
import React, { useEffect, useState } from "react";
// import { Table } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { postNftSuccess, fetchNfts } from "../../store/nft/actions";
import { selectNfts } from "../../store/nft/selectors";
import { selectUser } from "../../store/user/selectors";

export default function BuyNftPage() {
// props
  // declare a const dispatch that holds a call of our react hook useDispatch
  const dispatch = useDispatch();
  // props is a gathering of attributes, all these are gathered
  // in a props object (basic building react) --> deconstruct so that become consts
  //   const { nft } = props;
  //   const { nfts } = nft; //useSelector(selectNfts);

  const [nft, newNft] = useState([]);
  const user = useSelector(selectUser);

  console.log({ newNft });
  useEffect(() => {
    // dispatch a "thunk action" by calling the "thunk action creator" named `fetchNfts`
    dispatch(fetchNfts()); // goes to `redux-thunk`
    // array contains variables that trigger the useEffect
  }, [dispatch]);

  useEffect(() => {}, []);

  return (
    <div>
      <h1>Buy NFT </h1>

      <div>
        
          <form
            onSubmit={(event) => {
              // dispatch an event to place the nft with the back-end
              dispatch(newNft());
              // prevent leaving  the page:
              event.preventDefault();
            }}
          >
            <label>
              Amount €
              <input
                type="number"
                name="Senior Training Skill"
                value="Senior Training Skill"
                onChange={(event) => "what is returned"}
              />
            </label>
            <input type="submit" value="Bid" />
          </form>
      
      </div>
    </div>
  );
}
