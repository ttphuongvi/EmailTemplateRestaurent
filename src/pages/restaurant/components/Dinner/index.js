import React from "react";
import DINNER from "../../../../cdn/images/dinner.jpg";
import TableFood from "../../../../Atomic/organisms/TableFood";

const Dinner = () => {
  return (
    <TableFood
      id="dinner"
      caption="Dinner"
      image={DINNER}
      title="Grilled Beef with potatoes"
      content="A small river named Duden flows by their place and supplies it with the necessary regelialia."
    />
  );
};

export default Dinner;
