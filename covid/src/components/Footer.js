import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";

const Footer = () => {
  return (
    <Box>
      <h1 style={{ color: "green", 
                   textAlign: "center", 
                   marginTop: "-50px" }}>
        Siguroje veten dhe të tjerët, mbaje masken.
        
      </h1>
      <Container>
        <Row>
          <Column>
            <Heading>Rreth nesh</Heading>
            <FooterLink href="#">Developer</FooterLink>
            <FooterLink href="#">Kosovo Hospital</FooterLink>
            <FooterLink href="#">Covid-19</FooterLink>
          </Column>
          <Column>
            <Heading>Sherbimet</Heading>
            <FooterLink href="#">Zhvillim të web-it</FooterLink>
            <FooterLink href="#">Dizajnim të logos</FooterLink>
            <FooterLink href="#">Menaxhim të rrjeteve sociale</FooterLink>
            
          </Column>
          <Column>
            <Heading>Ne punojm</Heading>
            <FooterLink href="#">Websites</FooterLink>
            <FooterLink href="#">Applications</FooterLink>
            <FooterLink href="#">Database system</FooterLink>
            
          </Column>
          <Column>
            <Heading>Rrjetet Sociale</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                  Youtube
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
      
    </Box>
  );
};


export default Footer;