import React from "react";
import LUNCH from "../../../../cdn/images/lunch.jpg";
import TableFood from "../../../../Atomic/organisms/TableFood";

const Lunch = () => {
  return (
    <TableFood
      reverse
      id="lunch"
      caption="Lunch"
      title="Grilled Beef with potatoes"
      content="A small river named Duden flows by their place and supplies it with the necessary regelialia."
      image={LUNCH}
    ></TableFood>
  );
};

export default Lunch;
