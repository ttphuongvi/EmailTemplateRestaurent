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
import WelcomToRestoBar from "../organisms/WelcomToRestoBar";
import Says from "../organisms/Says";
import Footer from "../organisms/Footer";
import TableCellNoneBorderBottom from "../molecules/TableCellNoneBorderBottom";

const TemplateEmail = ({ header, footer }) => {
  const content = [
    <TakeOrders />,
    <WelcomToRestoBar />,
    <Services />,
    <Menu />,
    <Blog />,
    <Says />,
    <Footer />
  ];

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCellNoneBorderBottom align="center" variant="head">
            <Header />
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
  );
};

export default TemplateEmail;
