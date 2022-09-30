import React from "react";
import DESSERT from "../../../../cdn/images/dessert.jpg";
import TableFood from "../../../../Atomic/organisms/TableFood";

const Dessert = () => {
  return (
    <TableFood
      reverse
      id="dessert"
      caption="Dessert"
      title="Grilled Beef with potatoes"
      content="A small river named Duden flows by their place and supplies it with the necessary regelialia."
      image={DESSERT}
    ></TableFood>
  );
};

export default Dessert;
