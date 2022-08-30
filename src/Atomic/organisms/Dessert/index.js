import React from "react";
import { IMAGE_DESSERT } from "../../../constants";
import TableFoodImageLeft from "../../molecules/TableFoodImageLeft";

const Dessert = () => {
  return (
    <TableFoodImageLeft
      id="dessert"
      caption="Dessert"
      title="Grilled Beef with potatoes"
      content="A small river named Duden flows by their place and supplies it with the necessary regelialia."
      image={IMAGE_DESSERT}
    ></TableFoodImageLeft>
  );
};

export default Dessert;
