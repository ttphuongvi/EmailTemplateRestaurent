import React from "react";
import Table from "../atoms/Table";
import TableHead from "../atoms/TableHead";
import TableRow from "../atoms/TableRow";
import TableBody from "../atoms/TableBody";
import Header from "../molecules/Header";
import Blog from "../organisms/Blog";
import Services from "../organisms/Services";
import TakeOrders from "../organisms/TakeOrders";
import Menu from "../organisms/Menu";
import Welcome from "../organisms/Welcome";
import Says from "../organisms/Says";
import Footer from "../organisms/Footer";
import TableCellNoneBorderBottom from "../molecules/TableCellNoneBorderBottom";
import TableContainer from "../atoms/TablContainer";
import Paper from '../atoms/Paper';
import WatchOurVideo from "../organisms/WatchOurVideo";

const TemplateEmail = ({ header,takeOrders, welcome, services, watchOurVideo, menu, blog, says, footer }) => {
  const content = [
    takeOrders,
    welcome,
    services,
    watchOurVideo,
    menu,
    blog,
   says,
    footer,
  ];

  return (
    <TableContainer component={Paper} elevation={0}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCellNoneBorderBottom align="center" variant="head">       
            {header}
          </TableCellNoneBorderBottom>
        </TableRow>
      </TableHead>
      <TableBody>
        {content.map((value, index) => {
          const key = index;
          return (
            <TableRow key={key}>
              <TableCellNoneBorderBottom
                padding="none"
                align="center"
                variant="body"
              >
                {value}
              </TableCellNoneBorderBottom>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
    </TableContainer>
  );
};


TemplateEmail.defaultProps ={
  header: <Header/>,
  takeOrders: <TakeOrders/>,
  welcome: <Welcome/>,
  services: <Services/>,
  watchOurVideo: <WatchOurVideo/>,
  menu: <Menu/>,
  blog:<Blog/>,
  says: <Says/>,
  footer: <Footer/>
}

export default TemplateEmail;
