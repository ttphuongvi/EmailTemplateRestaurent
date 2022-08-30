import React from "react";
import { IMAGE_DINNER } from "../../../constants";
import TableFoodImageRight from "../../molecules/TableFoodImageRight";

const Dinner = () => {
  return (
    <TableFoodImageRight
      id="dinner"
      caption="Dinner"
      image={IMAGE_DINNER}
      title="Grilled Beef with potatoes"
      content="A small river named Duden flows by their place and supplies it with the necessary regelialia."
    />
  );
};

export default Dinner;
