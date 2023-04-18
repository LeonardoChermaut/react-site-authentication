import React from "react";
import { Button } from "../index";
import { CDBBox, CDBModalFooter, CDBIcon } from "cdbreact";

const styles = {
  footer: {
    backgroundColor: "#161616",
    height: "5rem",
  },
  link: {
    textDecoration: "none",
  },
  logo: {
    width: "30px",
    height: "30px",
  },
  span: {
    marginLeft: "0.5rem",
    marginRight: "0.5rem",
  },
};

const Footer = () => (
  <CDBModalFooter className="fixed-bottom shadow" style={styles.footer}>
    <CDBBox
      color="white"
      display="flex"
      justifyContent="around"
      className="mx-auto py-4 flex-wrap"
    >
      <CDBBox display="flex" alignItems="center">
        <a
          href="/"
          className="d-flex align-items-center p-0 text-dark"
          style={styles.link}
        >
          <img
            alt="logo"
            src="https://cdn-icons-png.flaticon.com/512/187/187064.png"
            style={styles.logo}
          />
          <span
            className="ml-1 h5 mb-0 mr-5 font-weight-bold color-white"
            style={styles.span}
          >
            Eagle
          </span>
        </a>
        <small className="ml-2">&copy; Eagle, 2022. All rights reserved.</small>
      </CDBBox>
      <CDBBox>
        <Button mRight="1rem" width="50px" height="37px">
          <CDBIcon fab icon="facebook" />
        </Button>
        <Button mRight="1rem" width="50px" height="37px">
          <CDBIcon fab icon="twitter" />
        </Button>
        <Button mRight="1rem" width="50px" height="37px">
          <CDBIcon fab icon="instagram" />
        </Button>
      </CDBBox>
    </CDBBox>
  </CDBModalFooter>
);

export const MemorizedFooter = React.memo(Footer);
