import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Image, ButtonGroup, Button } from 'react-bootstrap'
import PdfViewer from '../Component/UI/PdfViewer'
import { connect } from "react-redux";
import * as $ from "../redux/action";
import PdfViewer1 from '../Component/PdfViewer1';
import PdfMarker from '../Component/PdfMarker';
import bir from '../assets/1.png';
import iki from '../assets/2.png';
import uc from '../assets/3.png';
import dort from '../assets/4.png';
import PdfViewer2 from '../Component/UI2/PdfViewer2';
import PdfViewer3 from '../Component/UI3/PdfViewer3';
function Home(props) {
  const [template, setTemplate] = useState(0)
  useEffect(() => {
    console.log("home", props)
  }, [props.INFO])

  return (
    <Container>
      <Row>
        <Col xs={4}><PdfMarker /></Col>
        {
          props.INFO_LOADER ?
            <Col xs={7}>
              {
                template == 0 ?
                  <PdfViewer INFO={props.INFO} />
                  :
                  template == 1 ?
                    <PdfViewer1 INFO={props.INFO} />
                    :
                    template == 2 ?
                      <PdfViewer2 INFO={props.INFO} />
                      :
                      <PdfViewer3 INFO={props.INFO} />

              }

            </Col>
            : <></>

        }
        <Col xs={1}>
          <ButtonGroup aria-label="Basic example" vertical>
            <Button variant="secondary" onClick={() => setTemplate(0)}>
              <Image src={bir} rounded width="100" />
            </Button>
            <Button variant="secondary" onClick={() => setTemplate(1)}>
              <Image src={iki} rounded width="100" />
            </Button>
            <Button variant="secondary" onClick={() => setTemplate(2)}>
              <Image src={uc} rounded width="100" />
            </Button>
            <Button variant="secondary" onClick={() => setTemplate(3)}>
              <Image src={dort} rounded width="100" />
            </Button>
          </ButtonGroup>
        </Col>
      </Row>

    </Container>
  )
}
const mapStateToProps = (state, props) => {
  const { INFO_LOADER, INFO_STATUS, INFO } = state.app;
  return { INFO_LOADER, INFO_STATUS, INFO };
};

const mapDispatchToProps = (dispatch, props) => ({
  insert: (
    name,
    subtitle,
    email,
  ) => {
    dispatch({
      type: $.INFO,
      payload: {
        name,
        subtitle,
        email,

      },
    });
  },


});

export default connect(mapStateToProps, mapDispatchToProps)(Home);