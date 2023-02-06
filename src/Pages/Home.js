import React ,{useEffect}from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import PdfMarker from '../Component/PdfMarker'
import PdfViewer from '../Component/PdfViewer'
import { connect } from "react-redux";
import * as $ from "../redux/action";

function Home(props) {
    
    useEffect(() => {
        console.log("home",props)
    }, [props.ADD_NAME])
    
    return (
        <Container>
            <Row>
                <Col xs={5}><PdfMarker /></Col>
                {props.ADD_NAME_LOADER ? <Col xs={7}><PdfViewer ADD_NAME={props.ADD_NAME}/></Col>:<></>}
                
            </Row>

        </Container>
    )
}
const mapStateToProps = (state, props) => {
    const { ADD_NAME_LOADER, ADD_NAME_STATUS, ADD_NAME } = state.app;
    return { ADD_NAME_LOADER, ADD_NAME_STATUS, ADD_NAME };
  };
  
  const mapDispatchToProps = (dispatch, props) => ({
    insert: (
      name,
      subtitle,
      email,
    ) => {
      dispatch({
        type: $.ADD_NAME,
        payload: {
            name,
            subtitle,
            email,
          
        },
      });
    },
    
  
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(Home);