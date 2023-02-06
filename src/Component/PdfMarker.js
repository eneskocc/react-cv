import React, { useState } from 'react'
import { Card, Button, Form, InputGroup, ListGroup, Pagination, Badge } from 'react-bootstrap'
import { act } from 'react-dom/test-utils';
import { connect } from "react-redux";
import * as $ from "../redux/action";
function PdfMarker(props) {
    const [name, setname] = useState("")
    const [subtitle, setsubtitle] = useState("")
    const [email, setemail] = useState("")
    const [school, setschool] = useState({})
    const [skill, setSkill] = useState([])
    const [skillNumber, setSkillNumber] = useState([])
    const [active, setActive] = useState(2)

    let items = [];
    for (let number = 1; number <= 5; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active} onClick={() => setActive(number)}>
                {number}
            </Pagination.Item>,
        );
    }

    const renderSwitch = (param) => {
        switch (param) {
            case 1:
                return <>
                    <h1>
                        Person     <Badge bg="danger">1</Badge>
                    </h1>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="TextInput">Name</Form.Label>
                        <Form.Control id="subtitle" placeholder="Name" value={name} onChange={(e) => setname(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="TextInput">Subtitle</Form.Label>
                        <Form.Control id="subtitle" placeholder="Subtitle" value={subtitle} onChange={(e) => setsubtitle(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="TextInput">Email</Form.Label>
                        <Form.Control id="email" placeholder="Email" value={email} onChange={(e) => setemail(e.target.value)} />
                    </Form.Group>
                </>;
            case 2:
                return <>
                    <h1>
                        Education  <Badge bg="danger">2</Badge>
                    </h1>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="TextInput">Yüksek Lisans</Form.Label>
                        <Form.Control id="subtitle" placeholder="Yüksek Lisans" value={school[0]} onChange={(e) => setschool({...school,yLisnans:e.target.value})} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="TextInput">Lisans</Form.Label>
                        <Form.Control id="subtitle" placeholder="Lisans" value={school[1]} onChange={(e) => setschool({...school,lisnans:e.target.value})} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="TextInput">Lise</Form.Label>
                        <Form.Control id="email" placeholder="Lise" value={school[2]} onChange={(e) => setschool({...school,lise:e.target.value})} />
                    </Form.Group>
                </>;
            case 3:
                return <>
                    <h1>
                        Experience  <Badge bg="danger">3</Badge>
                    </h1>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="TextInput">Yüksek Lisans</Form.Label>
                        <Form.Control id="subtitle" placeholder="Yüksek Lisans" value={school[0]} onChange={(e) => setschool([...$, e.target.value])} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="TextInput">Lisans</Form.Label>
                        <Form.Control id="subtitle" placeholder="Lisans" value={school[1]} onChange={(e) => setschool([...$, e.target.value])} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="TextInput">Lise</Form.Label>
                        <Form.Control id="email" placeholder="Lise" value={school[2]} onChange={(e) => setschool([...$, e.target.value])} />
                    </Form.Group>
                </>;
            case 4:
                return <>
                    <h1>
                        Skills  <Badge bg="danger">4</Badge>
                    </h1>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="TextInput">Yetenek 1</Form.Label>
                        <Form.Control id="subtitle" placeholder="Yüksek Lisans" value={school[0]} onChange={(e) => setSkill([...skill, {yetenek:e.target.value}])} />
                    </Form.Group>
                    {skillNumber.map((item, i) => <>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="TextInput">Yetenek {i+2}</Form.Label>
                        <Form.Control id="subtitle" placeholder="Yüksek Lisans" value={school[0]} onChange={(e) =>  setSkill([...skill, {yetenek:e.target.value}])} />
                    </Form.Group>
                    </>)}
                    <Button variant="danger" onClick={() => {
                        setSkillNumber([...skillNumber, {number:"e.target.value"}])}}>Add Skill</Button>
                </>;
            case 5:
                return <h1>
                    Finish  <Badge bg="danger">5</Badge>
                </h1>;
            default:
                return
                <h1>
                    Finish  <Badge bg="danger">5</Badge>
                </h1>;
        }
    }
    console.log(skill)
    return (


        <Form>
            <fieldset>
                <br />
                {renderSwitch(active)}
                <div>
                    <br />
                    <Pagination size="lg">{items}</Pagination>
                    <br />
                </div>
                <Button variant="danger" onClick={() => props.addName(name, subtitle, email,school,skill)}>Save All</Button>
            </fieldset>
        </Form>

    )
}

const mapStateToProps = (state, props) => {
    const { ADD_NAME_LOADER, ADD_NAME_STATUS, ADD_NAME } = state.app;
    return { ADD_NAME_LOADER, ADD_NAME_STATUS, ADD_NAME };
};

const mapDispatchToProps = (dispatch, props) => ({
    addName: (
        name,
        subtitle,
        email,
        school,
        skill
    ) => {
        dispatch({
            type: $.ADD_NAME,
            payload: {
                name,
                subtitle,
                email,
                school,
                skill
            },
        });
    },


});

export default connect(mapStateToProps, mapDispatchToProps)(PdfMarker);