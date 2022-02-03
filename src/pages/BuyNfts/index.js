import React from "react";

import BuyNftCard from "../../components/BuyNft";
import Nfts from "../Nfts";
import NewPurchase from "../../components/BuyNft/newPurchase";

// F4 the form
export default function BuyNft() {
  return (
    <div>
      <NewPurchase />
      <BuyNftCard />
      <Nfts />
    </div>
  );
}
