import React from "react";
import Button from "../../molecules/Button";
import { IMAGE_BACKGROUND_TAKEORDERS } from "../../../constants";
import TitleDark from "../../molecules/TitleDark";
import ContentDark from "../../molecules/ContentDark";

const TakeOrders = () => {
  return (
    <td
      style={{
        backgroundImage: `url(${IMAGE_BACKGROUND_TAKEORDERS})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100%",
        height: "400px",
      }}
    >
      <table>
        <tbody>
          <tr>
            <td align="center">
              <div align="center" style={{ padding: "0 20px" }}>
                <TitleDark
                  variant="title"
                  sx={(theme) => ({ color: theme.palette.text.darktitle })}
                >
                  We Serve Healthy & Delicious Foods
                </TitleDark>

                <>
                  <ContentDark>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia. It is a paradisematic
                    country, in which roasted parts of sentences fly into your
                    mouth.
                  </ContentDark>
                  <Button>Get Your Order Here!</Button>
                </>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </td>
  );
};
export default TakeOrders;
