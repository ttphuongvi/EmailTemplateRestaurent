import React from "react";
import Header from "../Common/Header";
import Blog from "../Common/Blog";
import Breakfasts from "../Common/Breakfast";
import Count from "../Common/Count";
import Dessert from "../Common/Dessert";
import Dinner from "../Common/Dinner";
import Lunch from "../Common/Lunch";
import Footer from "../Common/Footer";
import Menu from "../Common/Menu";
import Says from "../Common/Says";
import Services from "../Common/Services";
import TakeOrders from "../Common/TakeOrders";
import WatchOurVideo from "../Common/WatchOurVideo";
import Welcome from "../Common/Welcome";
import TemplateEmail from "../Atomic/template/TemplateEmail";

const content = [
  <Header />,
  <TakeOrders />,
  <Welcome />,
  <Services />,
  <WatchOurVideo />,
  <Menu />,
  <Breakfasts />,
  <Lunch />,
  <Dinner />,
  <Dessert />,
  <Count />,
  <Blog />,
  <Says />,
  <Footer />,
];

const EmailTemplateRestaurant = () => {
  return <TemplateEmail content={content} />;
};

export default EmailTemplateRestaurant;
