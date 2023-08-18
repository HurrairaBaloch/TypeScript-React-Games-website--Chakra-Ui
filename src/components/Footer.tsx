import { HStack, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <div>
      <Text style={{ textAlign: "center" }}>
        © 2022 GameHub Created By{" "}
        <a href="https://huraira.srksol.com/">
          <strong style={{ color: "Yellow" }}>Huraira Baloch</strong>
        </a>
      </Text>
    </div>
  );
};

export default Footer;
