import React from "react";
import Header from "../molecules/Header";
import Blog from "../organisms/Blog";
import Services from "../organisms/Services";
import TakeOrders from "../organisms/TakeOrders";
import Menu from "../organisms/Menu";
import Welcome from "../organisms/Welcome";
import Says from "../organisms/Says";
import WatchOurVideo from "../organisms/WatchOurVideo";
import Breakfast from "../organisms/Breakfast";
import Lunch from "../organisms/Lunch";
import TableSynthetic from "../molecules/TableSynthetic";
import Dinner from "../organisms/Dinner";
import Dessert from "../organisms/Dessert";
import Count from "../organisms/Count";
import FooterInfo from "../organisms/FooterInfo";
import FooterCopyrights from "../organisms/FooteCopyrights";

const TemplateEmail = ({
  header,
  takeOrders,
  welcome,
  services,
  watchOurVideo,
  menu,
  breakfast,
  lunch,
  dinner,
  dessert,
  count,
  blog,
  says,
  footerCopyrights,
  footerInfo,
}) => {
  const content = [
    header,
    takeOrders,
    welcome,
    services,
    watchOurVideo,
    menu,
    breakfast,
    lunch,
    dinner,
    dessert,
    count,
    blog,
    says,
    footerInfo,
    footerCopyrights,
  ];

  return (
    <table
      cellPadding={0}
      cellSpacing={0}
      border={0}
      width="100%"
      style={{
        maxWidth: "600px",
        margin: "0 auto",
      }}
    >
      <tbody>
        {content.map((item, index) => {
          const key = index;
          return <tr key={key}>{item}</tr>;
        })}
      </tbody>
    </table>
  );
};

TemplateEmail.defaultProps = {
  header: <Header />,
  takeOrders: <TakeOrders />,
  welcome: <Welcome />,
  services: <Services />,
  watchOurVideo: <WatchOurVideo />,
  menu: <Menu />,
  breakfast: <Breakfast />,
  lunch: <Lunch />,
  dinner: <Dinner />,
  dessert: <Dessert />,
  count: <Count />,
  blog: <Blog />,
  says: <Says />,
  footerInfo: <FooterInfo />,
  footerCopyrights: <FooterCopyrights />,
};

export default TemplateEmail;
