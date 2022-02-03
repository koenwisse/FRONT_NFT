import { FETCH_NFTS_SUCCESS } from "./actions";
import { POST_NFT_SUCCESS } from "./actions";
import { POST_OFFER_SUCCESS } from "./actions";

const initialState = { nfts: {} };
// 2nd param of reducer ()=action) is the action you get from the "Action creator"
export default function reducer(state = initialState, action) {
  switch (action.type) {
    // case: does reducer care about case?
    case FETCH_NFTS_SUCCESS:
      // if yes, updated state is returned
      //////////////////////////////
      // copy of state I have now (see above nfts:{},)
      // The property "nfts" of the state object (= the state of the nftsReducer) is updated
      //with the value of the "payload" property from the "action" object --> so you
      // copy state and change the nfts with action.payload, that contains nfts from our backend
      const nftsArray = action.payload;
      const nftsMap = {};
      nftsArray.forEach((nft) => (nftsMap[nft.id] = nft));
      // returns the state from our backend
      return { ...state, nfts: nftsMap };
    case POST_NFT_SUCCESS:
      const newNft = action.payload;
      const oldNft = state.nfts;
      const newNfts = { ...oldNft };
      console.log(newNft);

      newNfts[newNft.id] = newNft;

      return { ...state, newNfts: newNft };
    // case POST_OFFER_SUCCESS:
    //   // purchase add in initial state
    //   // newPurchase
    //   const newNft = action.payload;
    //   const oldNft = state.nfts;
    //   const newNfts = { ...oldNft };
    //   newNfts[newNft.id] = newNft;
    //   return { ...state, nfts: newNfts };

    default:
      return state;
  }
}

// add newPurchase to purchase from the body from purchases endpoint

// // if offer to low show bad request in frontend by rendering
