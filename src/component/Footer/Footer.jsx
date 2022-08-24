import React from "react";
import { CDBBox, CDBFooter, CDBIcon } from "cdbreact";
import CustomButton from "../Buttom/Buttom";

const Footer = () => {
  return (
    <CDBFooter
      className="fixed-bottom shadow"
      style={{ backgroundColor: "#161616", height: "5rem" }}
    >
      <CDBBox
        display="flex"
        justifyContent="between"
        alignItems="center"
        className="mx-auto py-4 flex-wrap"
        style={{ width: "80%" }}
        color="white"
      >
        <CDBBox display="flex" alignItems="center">
          <a href="/" className="d-flex align-items-center p-0 text-dark">
            <img
              alt="logo"
              src="https://cdn-icons-png.flaticon.com/512/187/187064.png"
              style={{ width: "30px", height: "30px" }}
            />
            <span
              className="ml-1 h5 mb-0 mr-5 font-weight-bold color-white"
              style={{
                marginLeft: "0.5rem",
                marginRight: "0.5rem",
              }}
            >
              Eagle
            </span>
          </a>
          <small className="ml-2">
            &copy; Eagle, 2022. All rights reserved.
          </small>
        </CDBBox>
        <CDBBox display="flex">
          <CustomButton mRight="1rem" width="50px" height="37px">
            <CDBIcon fab icon="facebook" />
          </CustomButton>
          <CustomButton mRight="1rem" width="50px" height="37px">
            <CDBIcon fab icon="twitter" />
          </CustomButton>
          <CustomButton mRight="1rem" width="50px" height="37px">
            <CDBIcon fab icon="instagram" />
          </CustomButton>
        </CDBBox>
      </CDBBox>
    </CDBFooter>
  );
};

export default Footer;
