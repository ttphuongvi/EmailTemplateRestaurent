import React from "react";
import Header from "../molecules/Header";
import Blog from "../organisms/Blog";
import Services from "../organisms/Services";
import TakeOrders from "../organisms/TakeOrders";
import Menu from "../organisms/Menu";
import Welcome from "../organisms/Welcome";
import Says from "../organisms/Says";
import Footer from "../organisms/Footer";
import WatchOurVideo from "../organisms/WatchOurVideo";
import Breakfast from "../organisms/Breakfast";

const TemplateEmail = ({
  header,
  takeOrders,
  welcome,
  services,
  watchOurVideo,
  menu,
  breakfast,
  blog,
  says,
  footer,
}) => {
  const content = [
    welcome,
    services,
    watchOurVideo,
    menu,
    breakfast,
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
      <table cellSpacing={0} cellPadding={0}>
        <tbody>
          <tr>{header}</tr>
          <tr>{takeOrders}</tr>
          <tr>
            <td style={{ background: "#fff" }}>
              <table cellSpacing={0} cellPadding={0}>
                <tbody>
                  {content.map((item) => {
                    const key = item;
                    return <tr key={key}>{item}</tr>;
                  })}
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
      <table>
        <tbody>
          <tr>{footer}</tr>
          <tr>{footer}</tr>
        </tbody>
      </table>
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
  blog: <Blog />,
  says: <Says />,
  footer: <Footer />,
};

export default TemplateEmail;
