import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import nft from "./nft/reducer";

export default combineReducers({
  appState,
  user,
  nft,
});
