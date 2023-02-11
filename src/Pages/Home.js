import React ,{useEffect}from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import PdfMarker from '../Component/PdfMarker'
import PdfViewer from '../Component/PdfViewer'
import { connect } from "react-redux";
import * as $ from "../redux/action";

function Home(props) {
    
    useEffect(() => {
        console.log("home",props)
    }, [props.INFO])
    
    return (
        <Container>
            <Row>
                <Col xs={5}><PdfMarker /></Col>
                {props.INFO_LOADER ? <Col xs={7}><PdfViewer INFO={props.INFO}/></Col>:<></>}
                
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