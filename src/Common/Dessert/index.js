import React from "react";
import { IMAGE_DESSERT } from "../../constants";
import TableFood from "../../Atomic/organisms/TableFood";

const Dessert = () => {
  return (
    <TableFood
      reverse
      id="dessert"
      caption="Dessert"
      title="Grilled Beef with potatoes"
      content="A small river named Duden flows by their place and supplies it with the necessary regelialia."
      image={IMAGE_DESSERT}
    ></TableFood>
  );
};

export default Dessert;
