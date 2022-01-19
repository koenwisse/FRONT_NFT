import { apiUrl } from "../../config/constants";
import axios from "axios";
// F1.3. export the const that goes to the reducer -> does reducer care about this action? (event handler)
export const FETCH_NFTS_SUCCESS = "FETCH_NFTS_SUCCESS";
// export const NFT_DETAILS_FETCHED = "NFT_DETAILS_FETCHED";
// F1: Write an action
export const fetchNftsSuccess = (nfts) => ({
  type: FETCH_NFTS_SUCCESS,
  payload: nfts,
});

// const nftDetailsFetched = (nft) => ({
//   type: NFT_DETAILS_FETCHED,
//   payload: nft,
// });

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

// export const fetchNftById = (id) => {
//   return async (dispatch, getState) => {
//     try {
//       const response = await axios.get(`${apiUrl}/nfts/${id}`);
//       console.log(response);
//       dispatch(nftDetailsFetched(response.data.nft));
//     } catch (e) {
//       console.log(e);
//     }
//   };
// };

// 1. its two function because of the thunk
// 2. we have an API call in this function
// 3. Instead of asserting on a return, we have to do so on a function call (dispatch).
