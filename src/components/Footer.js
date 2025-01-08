import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/signature.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
          <a href="/">
            <img src={logo} alt="Logo" />
          </a>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon" style={{ marginTop: "10px" }}>
            <a href="https://www.linkedin.com/in/vineet-bothra-720697a7/"><img src={navIcon1} alt="" /></a>
            <a href="https://www.facebook.com/vineet.jain.9231"><img src={navIcon2} alt="" /></a>
            <a href="https://www.instagram.com/bothravineet/?hl=en"><img src={navIcon3} alt="" /></a>
            </div>
            <p>Copyright 2025. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
