import React from "react";
import { IMAGE_BREAKFAST } from "../../../constants";
import TableFoodImageRight from "../../molecules/TableFoodImageRight";

const Breakfasts = () => {
  return (
    <TableFoodImageRight
      id="breakfast"
      caption="Breakfast"
      image={IMAGE_BREAKFAST}
      title="Grilled Beef with potatoes"
      content="A small river named Duden flows by their place and supplies it with the necessary regelialia."
    />
  );
};

export default Breakfasts;
