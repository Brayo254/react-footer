import React from "react";
import Footer from "../components/footer";
import Icon from "../components/icons"

export function FooterContainer() {
  return (
    <Footer>
      <Footer.wrapper>
        <Footer.Row>
          <Footer.Column>
            <Footer.Title>About Us</Footer.Title>
            <Footer.Link href="#">Story</Footer.Link>
            <Footer.Link href="#">Clients</Footer.Link>
            <Footer.Link href="#">Testimonial</Footer.Link>
          </Footer.Column>

          <Footer.Column>
            <Footer.Title>Services</Footer.Title>
            <Footer.Link href="#">Marketing</Footer.Link>
            <Footer.Link href="#">Development</Footer.Link>
            <Footer.Link href="#">Design</Footer.Link>
          </Footer.Column>

          <Footer.Column>
            <Footer.Title>Contact Us</Footer.Title>
            <Footer.Link href="#">Kenya</Footer.Link>
            <Footer.Link href="#">Tanzania</Footer.Link>
            <Footer.Link href="#">Uganda</Footer.Link>
          </Footer.Column>

          <Footer.Column>
            <Footer.Title>Social Media</Footer.Title>
            <Footer.Link href="#">
              <Icon className="fab fa-facebook" />
              Facebook
            </Footer.Link>
            <Footer.Link href="#"> <Icon className="fab fa-twitter" />Twitter</Footer.Link>
            <Footer.Link href="#"> <Icon className="fab fa-instagram" />Instagram</Footer.Link>
          </Footer.Column>
        </Footer.Row>
      </Footer.wrapper>
    </Footer>
  );
}
