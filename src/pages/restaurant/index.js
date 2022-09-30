import React from "react";
import TemplateEmail from "../../Atomic/template/TemplateEmail";
import Blog from "./components/Blog";
import Breakfasts from "./components/Breakfast";
import Count from "./components/Count";
import Dessert from "./components/Dessert";
import Dinner from "./components/Dinner";
import Header from "./components/Header";
import Lunch from "./components/Lunch";
import Menu from "./components/Menu";
import Says from "./components/Says";
import Services from "./components/Services";
import TakeOrders from "./components/TakeOrders";
import WatchOurVideo from "./components/WatchOurVideo";
import Welcome from "./components/Welcome";
import Footer from "./components/Footer";

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
