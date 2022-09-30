import React from "react";
import BREAKFAST from "../../../../cdn/images/breakfast.jpg";
import TableFood from "../../../../Atomic/organisms/TableFood";

const Breakfasts = () => {
  return (
    <TableFood
      id="breakfast"
      caption="Breakfast"
      image={BREAKFAST}
      title="Grilled Beef with potatoes"
      content="A small river named Duden flows by their place and supplies it with the necessary regelialia."
    />
  );
};

export default Breakfasts;
