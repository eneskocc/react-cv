
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
        <Text style={listStyles.bulletPoint}>•</Text>
        <Text style={listStyles.itemContent}>{children}</Text>
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
    <View>
        <Title>Skills</Title>
        <SkillEntry
            name="Combat Abilities"
            skills={props.skill}
        />
    </View>
);

const Education = (props) => (
    <View style={educationStyles.container}>
        <Title>Education</Title>
        <Text style={educationStyles.school}>{props.school?.yLisnans}</Text>
        <Text style={educationStyles.degree}>{props.school?.lisnans}</Text>
        <Text style={educationStyles.candidate}>{props.school?.lise}</Text>
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
                    <Item key={i} style={expStyles.detailContainer}>
                        {detail.info}
                    </Item>
                ))}
            </List>
        </View>
    );
};



const Experience = ({ experience }) => (
    <View style={expStyles.container}>
        <Title>Experience</Title>
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
        title="Resume"
    >
        <Page  {...props} style={resumeStyles.page}>
            <Header name={props.INFO?.name} subtitle={props.INFO?.subtitle} email={props.INFO?.email} />
            <View style={resumeStyles.container}>
                <View style={resumeStyles.leftColumn}>
                    {props.INFO?.selectedImage && <Image
                        src={URL.createObjectURL(props.INFO?.selectedImage)}
                        style={resumeStyles.image}
                    />}
                    <Education school={props.INFO?.school} />
                    <Skills skill={props.INFO?.skill} />
                </View>
                <Experience experience={props.INFO?.experience} />
            </View>
            <Text style={resumeStyles.footer}>
                This IS the candidate you are looking for
            </Text>
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

