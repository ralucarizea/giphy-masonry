import React from "react";
import "./GalleryItem.css";
import { Card, CardBody, Image } from "@chakra-ui/react";

const GalleryItem = (props) => {
  return (
    // <li className="listItem">
    //   <img src={props.src}  alt=""/>
    // </li>
    <Card w={props.width+"px"} h={props.height + 'px'}>
      <CardBody p={0} m={0} align="center">
        <Image m={0} src={props.src} alt="" />
      </CardBody>
    </Card>
  );
};

export default GalleryItem;
