import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function About() {
  return (
    <div className="background-index">
      <Hero backgroundImage="./img/scuba.png">
        <h1>Rafael Vasquez</h1>
        <h2>Full Stack Developer</h2>
      </Hero>
      <Container background ={" container"} style={{ marginTop: 10 }}>
        <Row>
          <Col size="md-12">
          <article className="container-fluid p-5">
    <div className="container last">
      <div className="d-flex p-3 flex-column">
        <Col size="md-12" className="col-xs-12 col-sm-10 col-md-6 col-lg-4 col-xl-4 ml-auto mr-auto bg-light border-bottom rounded-top">
          <h1 class="display-4"><u>About Me</u></h1>
        </Col>
        <Col size="md-12"
          className="col-xs-12 col-sm-10 col-md-6 col-lg-4 col-xl-4 text-justify ml-auto mr-auto bg-light rounded-bottom">
          <p>I was born in 1983 in Puerto Plata, Dominican Republic. I currently live in Orlando, Fl. Father of two
            beautiful daughters and have my own online company for selling used refrigerator parts on eBay.
          </p>
          <p class="mt-3">
            I graduated in college of BEng. Computing and System Engineering in 2005 in the PUCMM, Sto Dgo, DR. After i
            went to Buenos Aires, Argentina and made a MBA that i graduated in 2008. After that i went to Barcelona,
            Spain and did a Master in Marketing. I've been working in different fields in my live from server, bartender
            to Manager of Projects in Engineering.
          </p>
          <Row size="md-12">
            <Col size="md-6">
              <ul className="list-group list-group-flush">
                <li className="list-group-item list-group-item-info font-weight-bold">Hobbies:</li>
                <li className="list-group-item list-group-item-ligh">Scubadiving</li>
                <li className="list-group-item list-group-item-ligh">Reading Chinese Novels</li>
                <li className="list-group-item list-group-item-ligh">Gaming</li>
                <li className="list-group-item list-group-item-ligh">Outdoor Activities</li>
              </ul>
            </Col>
            <Col size="md-6">
              <ul className="list-group list-group-flush">
                <li className="list-group-item list-group-item-info font-weight-bold">Interest:</li>
                <li className="list-group-item list-group-item-ligh">Javascript</li>
                <li className="list-group-item list-group-item-ligh">Sports</li>
                <li className="list-group-item list-group-item-ligh">Photography</li>
                <li className="list-group-item list-group-item-ligh">Travel</li>
              </ul>
            </Col>
          </Row>
        </Col>
      </div>
    </div>
  </article>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
