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
import { Table } from "@mui/material";
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
  ];

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "0 auto",
      }}
    >
      <TableSynthetic>
        <tr>{header}</tr>
        <tr>{takeOrders}</tr>
        <tr>
          <td style={{ background: "#fff" }}>
            <TableSynthetic>
              {content.map((item) => {
                const key = item;
                return <tr key={key}>{item}</tr>;
              })}
            </TableSynthetic>
          </td>
        </tr>
      </TableSynthetic>

      <TableSynthetic>
        <tr>{footerInfo}</tr>
        <tr>{footerCopyrights}</tr>
      </TableSynthetic>
    </div>
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
