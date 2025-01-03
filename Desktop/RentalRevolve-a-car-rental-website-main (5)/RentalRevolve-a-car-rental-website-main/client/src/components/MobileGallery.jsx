import { IconButton } from "@mui/material";
import React, { useState } from "react";

// import prod1 from "../Pictures/image-product-1.jpg";
// import prod2 from "../Pictures/image-product-2.jpg";
// import prod3 from "../Pictures/image-product-3.jpg";
// import prod4 from "../Pictures/image-product-4.jpg";

// const IMAGES = [prod1, prod2, prod3, prod4];

const MobileGallery = ({IMAGES}) => {
  const [currentMobileImage, setCurrentMobileImage] = useState(IMAGES[0]);
  const [mobileImageIndex, setMobileImageIndex] = useState(1);

  const handleIncrement = () => {
    if (mobileImageIndex === IMAGES.length - 1) {
      setCurrentMobileImage(IMAGES[0]);
      setMobileImageIndex(0);
    } else {
      setCurrentMobileImage(IMAGES[mobileImageIndex + 1]);
      setMobileImageIndex(mobileImageIndex + 1);
    }
  };

  const handleDecrement = () => {
    if (mobileImageIndex === 0) {
      setCurrentMobileImage(IMAGES[IMAGES.length - 1]);
      setMobileImageIndex(IMAGES.length - 1);
    } else {
      setCurrentMobileImage(IMAGES[mobileImageIndex - 1]);
      setMobileImageIndex(mobileImageIndex - 1);
    }
  };

  return (
    <section className="mobile-gallery hide-in-desktop" style={{height:"100px",marginTop:"10px",padding:"50px"}}>
      <IconButton
        className="icon-button-prev"
        disableRipple
        onClick={handleDecrement}
        sx={{
          height: "42px",
          width: "42px",
          bgcolor: "#fff",
        }}
      >
      </IconButton>
      <img src={currentMobileImage} alt="featured-product" />
      <IconButton
        className="icon-button-next"
        disableRipple
        onClick={handleIncrement}
        sx={{
          height: "42px",
          width: "42px",
          bgcolor: "#fff",
        }}
      >
        {/* <NextIcon /> */}
      </IconButton>
    </section>
  );
};

export default MobileGallery;