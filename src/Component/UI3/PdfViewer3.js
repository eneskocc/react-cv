
import {
    Text,
    Page,
    View,
    Image,
    Document,
    PDFViewer,
} from "@react-pdf/renderer";
import { educationStyles, expStyles, headerStyles, listStyles, resumeStyles, skilsStyles, titleStyles } from "./PdfViewerStyles";

const Header = (props) => (
    <View style={headerStyles.container}>
        <View style={headerStyles.detailColumn}>
            <Text style={headerStyles.name}>{props.name}</Text>
            <Text style={headerStyles.subtitle}>{props.subtitle}</Text>
        </View>
        <View style={headerStyles.linkColumn}>
            <Text style={headerStyles.subtitle}>{props.phoneNumber}</Text>
            <Text style={headerStyles.subtitle}>{props.email}</Text>
        </View>
    </View >
);

const Title = ({ children }) => (
    <Text style={titleStyles.title}>{children}</Text>
);


const List = ({ children }) => children;

export const Item = ({ children }) => (
    <View style={listStyles.item}>
        <Text style={educationStyles.school}>-  </Text>
        <Text style={educationStyles.school}>{children}</Text>
    </View>
);

const SkillEntry = ({ name, skills }) => (
    <View>

        <Text style={skilsStyles.title}>{name}</Text>

        <List>
            {skills.map((skill, i) => (
                <Item key={i}>{skill.yetenek}</Item>
            ))}
        </List>
    </View>
);

const Skills = (props) => (
    <View style={educationStyles.container}>
        <View style={{ backgroundColor: 'white', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', width: '100%' }}>
            <Title>Skills</Title>
        </View>
        <View style={{ padding: 5 }}>
            <SkillEntry
                name="Software"
                skills={props.skill}
            />
        </View>

    </View>
);

const Education = (props) => (
    <View style={educationStyles.container}>
        <View style={{ backgroundColor: 'white', flexDirection: 'column', alignItems: 'flex-start', width: '100%' }}>
            <Title>Education</Title>
        </View>
        <View style={{ padding: 5 }}>
            <Text style={educationStyles.school}>{props.school?.yLisnans}</Text>
            <Text style={educationStyles.degree}>{props.school?.lisnans}</Text>
            <Text style={educationStyles.candidate}>{props.school?.lise}</Text>
        </View>

    </View>
);

const ExperienceEntry = ({ company, details, position, date }) => {
    const title = `${company} | ${position}`;
    return (
        <View style={expStyles.entryContainer}>
            <View style={expStyles.headerContainer}>
                <View style={expStyles.leftColumn}>
                    <Text style={expStyles.title}>{title}</Text>
                </View>
                <View style={expStyles.rightColumn}>
                    <Text style={expStyles.date}>{date}</Text>
                </View>
            </View>
            <List>
                {details.map((detail, i) => (
                    <View style={listStyles.item}>
                        <Text style={{
                            fontFamily: "Roboto Bold",
                            fontWeight: 'bold',
                            color: 'black',
                            fontSize: 10,
                            paddingVertical: 2
                        }}>-  </Text>
                        <Text style={{


                            fontSize: 8,
                            paddingVertical: 2
                        }}>{detail.info}</Text>
                    </View>
                ))}
            </List>
        </View>
    );
};



const Experience = ({ experience }) => (
    <View style={expStyles.container}>
        <View style={{ backgroundColor: '#1D76E2', flexDirection: 'column', alignItems: 'flex-start', width: '100%' }}>
            <Text style={{
                fontFamily: "Roboto Bold",
                fontWeight: 'bold',
                color: 'white',
                fontSize: 14,
                marginVertical: 5,
                paddingHorizontal: 8,
                textTransform: "uppercase",
            }}>Experience</Text>
        </View>
        {experience.map((e) => (
            <ExperienceEntry
                company={e.company}
                date={e.date}
                details={e.details}
                key={e.company + e.position}
                position={e.position}
            />
        ))}
    </View>
);

const Resume = (props) => (
    <Document
        author="Luke Skywalker"
        keywords="awesome, resume, start wars"
        subject="The resume of Luke Skywalker"
        title="cvim"
    >
        <Page  {...props} style={resumeStyles.page}>

            <View style={resumeStyles.leftColumn}>
                {props.INFO?.selectedImage && <Image
                    src={URL.createObjectURL(props.INFO?.selectedImage)}
                    style={resumeStyles.image}
                />}
                <Education school={props.INFO?.school} />
                <Skills skill={props.INFO?.skill} />
            </View>
            <View style={{
                flexDirection: "column",
                padding: 10,
                borderBottomWidth: 2,
                borderBottomColor: "#112131",
                borderBottomStyle: "solid",
                alignItems: "stretch",
                width: '100%',
            }}>
                <Header name={props.INFO?.name} subtitle={props.INFO?.subtitle} email={props.INFO?.email} />

                <View style={resumeStyles.container}>
                    <Experience experience={props.INFO?.experience} />

                </View>

                <Text style={resumeStyles.footer}>
                    This IS the candidate you are looking for
                </Text>
            </View>
        </Page>
    </Document>
);

export default (props) => (
    <div
        className="loader"
        style={{
            width: "595.28",
            height: "841.89",
            aspectRatio: `595.28 / 841.89`,
        }}
    >
        <PDFViewer

            className="loader"
            style={{
                width: "595.28",
                height: "841.89",
                aspectRatio: `595.28 / 841.89`,
            }}>
            <Resume size="A4" INFO={props.INFO} />
        </PDFViewer>
    </div>
);

