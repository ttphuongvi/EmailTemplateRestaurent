import React from "react";
import { IMAGE_LUNCH } from "../../../constants";
import TableFoodImageLeft from "../../molecules/TableFoodImageLeft";

const Lunch = () => {
  return (
    <TableFoodImageLeft
      id="lunch"
      caption="Lunch"
      title="Grilled Beef with potatoes"
      content="A small river named Duden flows by their place and supplies it with the necessary regelialia."
      image={IMAGE_LUNCH}
    ></TableFoodImageLeft>
  );
};

export default Lunch;
