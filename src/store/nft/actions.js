// PACKS
import { apiUrl } from "../../config/constants";
import axios from "axios";
// SELECTORS
// F4 export the const that goes to the reducer -> does reducer care about this action? (event handler)
import { selectUser } from "../user/selectors";
// CASES
export const FETCH_NFTS_SUCCESS = "FETCH_NFTS_SUCCESS";
export const POST_NFT_SUCCESS = "POST_NFT_SUCCES";
export const POST_OFFER_SUCCESS = "POST_NFT_SUCCES";
// F1: Write an action
export const fetchNftsSuccess = (nfts) => ({
  type: FETCH_NFTS_SUCCESS,
  payload: nfts,
});

// "Thunk action creator" returns async function
export const fetchNfts = () => {
  //F1.1. Write an async function in action (thunk) and make axios request
  // its a "thunk funtion" (Middleware) so we need to pass 2 params
  // p1=dispatch: dispatch actions to the reducer (from redux lib)
  // p2=getState: to get data from redux state
  return async (dispatch, getState) => {
    try {
      // const nftsCount = getState().nfts.allNfts.length;
      // From endpoint in backend

      const response = await axios.get(`${apiUrl}/nfts`);
      console.log(response.data);
      // F1. dispatch action returned by "action creater"
      // this dispatch goes to redux
      dispatch(fetchNftsSuccess(response.data.nfts));
    } catch (e) {
      console.log(e.message);
    }
  };
};
//F4 Write an action SELL
export const postNftSuccess = (newNft) => ({
  type: POST_NFT_SUCCESS,
  payload: newNft,
});

// "THUNK ACTION CREATOR" returns async function
export function postNft(
  specialAbility,
  youthTrainingSkill,
  seniorTrainingSkill,
  imageUrl,
  price
) {
  // F4. Write an async function in action (thunk) and make axios request
  // its a "THUNK FUNCTION" (Middleware) so we need to pass 2 params
  // p1=dispatch: dispatch actions to the reducer
  // p2=getState: to get data from redux state
  return async (dispatch, getState) => {
    try {
      console.log({ getstatepostNft: getState() });
      // we extract the authorization token from the currently loggedin user
      // to post the nft with the right userId
      const { token } = selectUser(getState());
      // what we post here is being handled by server/EP and added to DB
      const response = await axios.post(
        // F4: tested endpoint with httpie, we now need to call that endpoint from FE
        `${apiUrl}/nfts/`,
        // the argument is an object that holds the data we want to post to the server
        {
          specialAbility,
          youthTrainingSkill,
          seniorTrainingSkill,
          imageUrl,
          price,
        },

        // the headers are specified separately from the POST data, we use the third argument for this:
        // (the auth middleware will automatically recognize the token and handle the rest for us)
        // --> we need a token to be able to do a request to the server. Auth middleware handles this for us
        // we post this object "header" with key "Authorization" and value an string with the value of token"
        // in backend token is checked and see if valid token, if valid endpoint does its work
        // if unvalid not, you get a 403 response back from server
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(token);
      console.log(`post response from frontend to backend ${response}`);
      // response.data is an object which contains 1 property:
      // - nft: an nft object

      // F4. dispatch action returned by "ACTION CREATOR"
      // this dispatch goes to redux
      const nft = response.data.nft;
      dispatch(
        postNftSuccess(
          specialAbility,
          youthTrainingSkill,
          seniorTrainingSkill,
          imageUrl,
          price
        )
      );
    } catch (e) {
      console.error(e);
    }
  };
}

//F4 Write an action BUY
export const postOfferSuccess = (newOffer) => ({
  type: POST_OFFER_SUCCESS,
  payload: newOffer,
});

// "THUNK ACTION CREATOR" returns async function
export function postOffer(nftId, offer) {
  // F3. Write an async function in action (thunk) and make axios request
  // its a "THUNK FUNCTION" (Middleware) so we need to pass 2 params
  // p1=dispatch: dispatch actions to the reducer
  // p2=getState: to get data from redux state
  return async (dispatch, getState) => {
    try {
      console.log({ getstatepostOffer: getState() });
      // we extract the authorization token from the currently loggedin user
      // to post the nft with the right userId
      const { token } = selectUser(getState());
      // what we post here is being handled by server/EP and added to DB
      const response = await axios.post(
        // F4: tested endpoint with httpie, we now need to call that endpoint from FE
        `${apiUrl}/nfts/${nftId}/offers`,
        // the argument is an object that holds the data we want to post to the server
        {
          offer,
          nftId,
        },

        // the headers are specified separately from the POST data, we use the third argument for this:
        // (the auth middleware will automatically recognize the token and handle the rest for us)
        // --> we need a token to be able to do a request to the server. Auth middleware handles this for us
        // we post this object "header" with key "Authorization" and value an string with the value of token"
        // in backend token is checked and see if valid token, if valid endpoint does its work
        // if unvalid not, you get a 403 response back from server
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(token);
      console.log(`post response from frontend to backend ${response}`);
      // response.data is an object which contains 1 property:
      // - nft: an nft object

      // dispatch action returned by "ACTION CREATOR"
      // this dispatch goes to redux
      const offer = response.data.offer;
      dispatch(postOfferSuccess(offer));
    } catch (e) {
      console.error(e);
    }
  };
}
