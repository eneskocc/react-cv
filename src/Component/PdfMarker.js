import React, { useState } from 'react'
import { Button, Pagination, Badge } from 'react-bootstrap'
import { connect } from "react-redux";
import * as $ from "../redux/action";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
function PdfMarker(props) {
    const [name, setname] = useState("")
    const [subtitle, setsubtitle] = useState("")
    const [email, setemail] = useState("")
    const [phoneNumber, setphoneNumber] = useState("")
    const [school, setschool] = useState({})
    const [skill, setSkill] = useState([{ id: 0, yetenek: "" }])
    const [skillNumber, setSkillNumber] = useState([])
    const [experience, setExperience] = useState([{ id: 0, company: "", position: "", date: "", details: [{ id: 0, info: "" }] }])
    const [experienceNumber, setExperienceNumber] = useState([])
    const [active, setActive] = useState(1)
    const [selectedImage, setSelectedImage] = useState(null);

    let items = [];

    for (let number = 1; number <= 5; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active} onClick={() => setActive(number)}>
                {number}
            </Pagination.Item>,
        );
    }

    const updateSkill = (id, yetenek) => {
        const nextskill = skill.map(skill => {
            if (skill.id != id) {

                return skill;
            } else {

                return {
                    ...skill,
                    yetenek: yetenek,
                };
            }
        });

        setSkill(nextskill);
    }

    const updateExperience = (id, company, position, date, info, i) => {
        const nextexperience = experience.map(experience => {
            if (experience.id != id) {

                return experience;
            } else {
                return {
                    ...experience,
                    company: company == "" ? experience.company.length == 1 ? "" : experience.company : company,
                    position: position == "" ? experience.position.length == 1 ? "" : experience.position : position,
                    date: date == "" ? experience.date.length == 1 ? "" : experience.date : date,
                    details: updateExperienceDetail(i, experience.details, info)
                };
            }
        });

        setExperience(nextexperience);
    }

    const updateExperienceDetail = (id, details, info) => {
        const nextExperienceDetail = details.map(item => {
            if (item.id != id) {

                return item;
            } else {

                return {
                    ...item,
                    info: info == "" ? item.info.length == 1 ? "" : item.info : info,
                };
            }
        });

        return nextExperienceDetail;
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
                        <Form.Control id="name" placeholder="Name" value={name} onChange={(e) => setname(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="TextInput">Subtitle</Form.Label>
                        <Form.Control id="subtitle" placeholder="Subtitle" value={subtitle} onChange={(e) => setsubtitle(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="TextInput">Email</Form.Label>
                        <Form.Control id="email" placeholder="Email" value={email} onChange={(e) => setemail(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="TextInput">Phone Number</Form.Label>
                        <Form.Control id="phoneNumber" placeholder="Phone Number" value={phoneNumber} onChange={(e) => setphoneNumber(e.target.value)} />
                    </Form.Group>
                </>;
            case 2:
                return <>
                    <h1>
                        Education  <Badge bg="danger">2</Badge>
                    </h1>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="TextInput">Yüksek Lisans</Form.Label>
                        <Form.Control id="yLisnans" placeholder="Yüksek Lisans" value={school?.yLisnans} onChange={(e) => setschool({ ...school, yLisnans: e.target.value })} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="TextInput">Lisans</Form.Label>
                        <Form.Control id="lisnans" placeholder="Lisans" value={school?.lisnans} onChange={(e) => setschool({ ...school, lisnans: e.target.value })} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="TextInput">Lise</Form.Label>
                        <Form.Control id="lise" placeholder="Lise" value={school?.lise} onChange={(e) => setschool({ ...school, lise: e.target.value })} />
                    </Form.Group>
                </>;
            case 3:
                return <>
                    <h1>
                        Experience  <Badge bg="danger">3</Badge>
                    </h1>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="TextInput">Şirket</Form.Label>
                        <Form.Control id="sirket" placeholder="Şirket" value={experience[0]?.company} onChange={(e) => updateExperience(0, e.target.value, "", "", "")} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="TextInput">Ünvan</Form.Label>
                        <Form.Control id="subtitle" placeholder="Ünvan" value={experience[0]?.position} onChange={(e) => updateExperience(0, "", e.target.value, "", "")} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="TextInput">Yıl</Form.Label>
                        <Form.Control id="email" placeholder="Yıl" value={experience[0]?.date} onChange={(e) => updateExperience(0, "", "", e.target.value, "")} />
                    </Form.Group>

                    {
                        experience[0].details.length > 0 && experience[0].details.map((item, i) => <>
                            <hr />
                            <Form.Group className="ml-3 mr-3 p-6">
                                <Form.Label htmlFor="TextInput">Detay {i + 1}</Form.Label>
                                <Form.Control id="detay" placeholder="Detay" value={item.info} onChange={(e) => updateExperience(0, "", "", "", e.target.value, i)} />
                            </Form.Group>
                        </>
                        )}
                    <br />
                    <Button variant="danger" onClick={() => {
                        experience[0].details.push({ id: experience[0].details.length, info: "" });
                        updateExperience(0, "", "", "", "", experience[0].details.length)
                    }}>
                        Add Experience Detail
                    </Button>
                    {
                        experienceNumber.map((item, i) => <>
                            <hr />
                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="TextInput">Şirket</Form.Label>
                                <Form.Control id="sirket" placeholder="Şirket" value={experience[i + 1]?.company} onChange={(e) => {
                                    if (experience[i + 1]?.company != undefined) {
                                        updateExperience(i + 1, e.target.value, "", "", "")
                                    } else {
                                        setExperience([...experience, { id: i + 1, company: e.target.value }])
                                    }
                                }} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="TextInput">Ünvan</Form.Label>
                                <Form.Control id="subtitle" placeholder="Ünvan" value={experience[i + 1]?.position} onChange={(e) => {
                                    if (experience[i + 1]?.company != undefined) {
                                        updateExperience(i + 1, "", e.target.value, "", "", "")
                                    } else {
                                        setExperience([...experience, { id: i + 1, position: e.target.value }])
                                    }
                                }} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="TextInput">Yıl</Form.Label>
                                <Form.Control id="email" placeholder="Yıl" value={experience[i + 1]?.date} onChange={(e) => {
                                    if (experience[i + 1]?.company != undefined) {
                                        updateExperience(i + 1, "", "", e.target.value, "")
                                    } else {
                                        setExperience([...experience, { id: i + 1, date: e.target.value }])
                                    }
                                }} />
                            </Form.Group>
                            {
                                experience[i + 1].details.length > 0 && experience[i + 1].details.map((item, index) => <>
                                    <hr />
                                    <Form.Group className="mb-3 p-6">
                                        <Form.Label htmlFor="TextInput">Detay {index + 1}</Form.Label>
                                        <Form.Control id="detay" placeholder="Detay" value={item.info} onChange={(e) => updateExperience(i + 1, "", "", "", e.target.value, index)} />
                                    </Form.Group>
                                </>
                                )}
                            <Button variant="danger" onClick={() => {
                                experience[i + 1].details.push({ id: experience[i + 1].details.length, info: "" });
                                updateExperience(i + 1, "", "", "", "", experience[i + 1].details.length)
                            }}>
                                Add Experience Detail
                            </Button>
                        </>
                        )}
                    <br />
                    <Button variant="danger mt-3" onClick={() => {
                        setExperienceNumber([...experienceNumber, { number: "e.target.value" }])
                        setExperience([...experience, { id: experienceNumber.length + 1, company: "", position: "", date: "", details: [{ id: 0, info: "" }] }]);
                    }}>
                        Add Experience

                    </Button>
                </>;
            case 4:
                return <>
                    <h1>
                        Skills  <Badge bg="danger">4</Badge>
                    </h1>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="TextInput">Yetenek 1</Form.Label>
                        <Form.Control id={skill[0]?.yetenek} placeholder="Yetenek" value={skill[0]?.yetenek} onChange={(e) => { updateSkill(0, e.target.value) }} />
                    </Form.Group>
                    {
                        skillNumber.map((item, i) => <>
                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="TextInput">Yetenek {i + 2}</Form.Label>
                                <Form.Control id={skill[i]?.yetenek} placeholder="Yetenek" value={skill[i + 1]?.yetenek} onChange={(e) => {
                                    if (skill[i + 1]?.yetenek != undefined) {
                                        updateSkill(i + 1, e.target.value)
                                    } else {
                                        setSkill([...skill, { id: i + 1, yetenek: e.target.value }])
                                    }

                                    //
                                }} />
                            </Form.Group>
                        </>
                        )}
                    <Button variant="danger" onClick={() => {
                        setSkillNumber([...skillNumber, { number: "e.target.value" }])
                    }}>
                        Add Skill
                    </Button>
                </>;
            case 5:
                return <h1>
                    Finish  <Badge bg="danger">5</Badge>
                    <div>
                        {
                            selectedImage && (
                                <div>
                                    <img alt="not fount" width={"250px"} src={URL.createObjectURL(selectedImage)} />
                                    <br />
                                    <Button variant="danger" onClick={() => setSelectedImage(null)}>Remove</Button>
                                </div>
                            )}
                        <InputGroup className="mb-3">
                            <Form.Control
                                type="file"
                                name="myImage"
                                onChange={(event) => {
                                    setSelectedImage(event.target.files[0]);
                                }}
                            />
                        </InputGroup>
                        <input

                        />
                    </div>
                </h1>;
            default:
                return
                <h1>
                    Finish  <Badge bg="danger">5</Badge>
                </h1>;
        }
    }

    return (
        <Form>
            <fieldset>
                <br />
                {
                    renderSwitch(active)
                }
                <div>
                    <br />
                    <Pagination size="lg">
                        {items}
                    </Pagination>
                    <br />
                </div>
                <Button variant="danger" onClick={() => props.addName(name, subtitle, email, phoneNumber, school, skill, experience, selectedImage)}>Save All</Button>
            </fieldset>
        </Form>

    )
}

const mapStateToProps = (state, props) => {
    const { INFO_LOADER, INFO_STATUS, INFO } = state.app;
    return { INFO_LOADER, INFO_STATUS, INFO };
};

const mapDispatchToProps = (dispatch, props) => ({
    addName: (
        name,
        subtitle,
        email,
        phoneNumber,
        school,
        skill,
        experience, selectedImage,
    ) => {

        dispatch({
            type: $.INFO,
            payload: {
                name,
                subtitle,
                email,
                phoneNumber,
                school,
                skill,
                experience, selectedImage
            },
        });
    },


});

export default connect(mapStateToProps, mapDispatchToProps)(PdfMarker);