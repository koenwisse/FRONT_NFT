// Selector: get the nfts from the redux store by reading the current state (nfts is in a specific state in your app)
export const selectNfts = (state) => {
  console.log("state", state);
  // 1st nfts comes from rootR, second nfts comes from spaceReducer and not from backend
  // state.nfts is state object of spaceR
  // state.nfts.nfts is the array of nft objects from the backend
  // state is all reducers together but we need only nfts from spaceR
  // We use Object.values because we need only the values from an object. This way it
  // becomes an array of values. We also have "Object.keys", this only gives us the keys
  return Object.values(state.nft.nfts);
};

export const selectLastPurchase = (state) => {
  console.log("state", state);
  // return { ...state, lastPurchase };
};
