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
import Paper from "../atoms/Paper";
import WatchOurVideo from "../organisms/WatchOurVideo";
import Container from "../atoms/Container";
import TableCell from "../atoms/TableCell";
import { IMAGE_BACKGROUND_TAKEORDERS } from "../../constants";

const TemplateEmail = ({
  header,
  takeOrders,
  welcome,
  services,
  watchOurVideo,
  menu,
  blog,
  says,
  footer,
}) => {
  const content = [welcome, services, watchOurVideo, menu, blog, says];

  return (
    <Container maxWidth="sm">
      <Table>
        <TableBody>
          <TableRow>
            <TableCellNoneBorderBottom align="center">
              {header}
            </TableCellNoneBorderBottom>
          </TableRow>
          <TableRow>
            <TableCellNoneBorderBottom align="center" padding="none">
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCellNoneBorderBottom
                      align="center"
                      sx={{
                        backgroundImage: `url(${IMAGE_BACKGROUND_TAKEORDERS})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        width: "100%",
                        height: "400px",
                      }}
                    >
                      {takeOrders}
                    </TableCellNoneBorderBottom>
                  </TableRow>
                </TableBody>
              </Table>
            </TableCellNoneBorderBottom>
          </TableRow>
          <TableRow>
            <TableCellNoneBorderBottom padding="none" align="center">
              <Table>
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
            </TableCellNoneBorderBottom>
          </TableRow>
        </TableBody>
      </Table>
      <Table>{footer}</Table>
    </Container>
  );
};

TemplateEmail.defaultProps = {
  header: <Header />,
  takeOrders: <TakeOrders />,
  welcome: <Welcome />,
  services: <Services />,
  watchOurVideo: <WatchOurVideo />,
  menu: <Menu />,
  blog: <Blog />,
  says: <Says />,
  footer: <Footer />,
};

export default TemplateEmail;
