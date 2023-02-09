
import ReactPDF, {
    Link,
    Text,
    Font,
    Page,
    View,
    Image,
    Document,
    StyleSheet,
    PDFViewer,
} from "@react-pdf/renderer";


const headerStyles = StyleSheet.create({
    container: {
        flexDirection: "row",
        borderBottomWidth: 2,
        borderBottomColor: "#112131",
        borderBottomStyle: "solid",
        alignItems: "stretch",
    },
    detailColumn: {
        flexDirection: "column",
        flexGrow: 9,
        textTransform: "uppercase",
    },
    linkColumn: {
        flexDirection: "column",
        flexGrow: 2,
        alignSelf: "flex-end",
        justifySelf: "flex-end",
    },
    name: {
        fontSize: 24,
        fontFamily: "Lato Bold",
    },
    subtitle: {
        fontSize: 10,
        justifySelf: "flex-end",
        fontFamily: "Lato",
    },
    link: {
        fontFamily: "Lato",
        fontSize: 10,
        color: "black",
        textDecoration: "none",
        alignSelf: "flex-end",
        justifySelf: "flex-end",
    },
});

const Header = (props) => (
    <View style={headerStyles.container}>
        <View style={headerStyles.detailColumn}>
            <Text style={headerStyles.name}>{props.name}</Text>
            <Text style={headerStyles.subtitle}>{props.subtitle}</Text>
        </View>
        <View style={headerStyles.linkColumn}>
            <Link href="mailto:luke@theforce.com" style={headerStyles.link}>
                <Text>{props.email}</Text>
            </Link>
        </View>
    </View>
);

const titleStyles = StyleSheet.create({
    title: {
        fontFamily: "Lato Bold",
        fontSize: 14,
        marginBottom: 10,
        textTransform: "uppercase",
    },
});

const Title = ({ children }) => (
    <Text style={titleStyles.title}>{children}</Text>
);

const listStyles = StyleSheet.create({
    item: {
        flexDirection: "row",
        marginBottom: 5,
    },
    bulletPoint: {
        width: 10,
        fontSize: 10,
    },
    itemContent: {
        flex: 1,
        fontSize: 10,
        fontFamily: "Lato",
    },
});

const List = ({ children }) => children;

export const Item = ({ children }) => (
    <View style={listStyles.item}>
        <Text style={listStyles.bulletPoint}>•</Text>
        <Text style={listStyles.itemContent}>{children}</Text>
    </View>
);

const skilsStyles = StyleSheet.create({
    title: {
        fontFamily: "Lato Bold",
        fontSize: 11,
        marginBottom: 10,
    },
    skills: {
        fontFamily: "Lato",
        fontSize: 10,
        marginBottom: 10,
    },
});

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

const educationStyles = StyleSheet.create({
    container: {
        marginBottom: 10,
    },
    school: {
        fontFamily: "Lato Bold",
        fontSize: 10,
    },
    degree: {
        fontFamily: "Lato",
        fontSize: 10,
    },
    candidate: {
        fontFamily: "Lato Italic",
        fontSize: 10,
    },
});

const Education = (props) => (
    <View style={educationStyles.container}>
        <Title>Education</Title>
        <Text style={educationStyles.school}>{props.school?.yLisnans}</Text>
        <Text style={educationStyles.degree}>{props.school?.lisnans}</Text>
        <Text style={educationStyles.candidate}>{props.school?.lise}</Text>
    </View>
);

const expStyles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        paddingLeft: 15,
        "@media max-width: 400": {
            paddingTop: 10,
            paddingLeft: 0,
        },
    },
    entryContainer: {
        marginBottom: 10,
    },
    date: {
        fontSize: 11,
        fontFamily: "Lato Italic",
    },
    detailContainer: {
        flexDirection: "row",
    },
    detailLeftColumn: {
        flexDirection: "column",
        marginLeft: 10,
        marginRight: 10,
    },
    detailRightColumn: {
        flexDirection: "column",
        flexGrow: 9,
    },
    bulletPoint: {
        fontSize: 10,
    },
    details: {
        fontSize: 10,
        fontFamily: "Lato",
    },
    headerContainer: {
        flexDirection: "row",
        marginBottom: 10,
    },
    leftColumn: {
        flexDirection: "column",
        flexGrow: 9,
    },
    rightColumn: {
        flexDirection: "column",
        flexGrow: 1,
        alignItems: "flex-end",
        justifySelf: "flex-end",
    },
    title: {
        fontSize: 11,
        color: "black",
        textDecoration: "none",
        fontFamily: "Lato Bold",
    },
});

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
                        {detail}
                    </Item>
                ))}
            </List>
        </View>
    );
};

const experienceData = [
    {
        company: "Jedi Temple, Coruseant",
        date: "A long time ago...",
        details: [
            "Started a new Jedi Temple in order to train the next generation of Jedi Masters",
            "Discovered and trained a new generation of Jedi Knights, which he recruited from within the New Republic",
            "Communicates with decesased Jedi Masters such as Anakin Skywalker, Yoda, Obi-Wan Kenobi in order to learn the secrets of the Jedi Order",
        ],
        position: "Head Jedi Master",
    },
    {
        company: "Rebel Alliance",
        date: "A long time ago...",
        details: [
            "Lead legions of troops into battle while demonstrating bravery, competence and honor",
            "Created complicated battle plans in conjunction with other Rebel leaders in order to ensure the greatest chance of success",
            "Defeated Darth Vader in single-combat, and convinced him to betray his mentor, the Emperor",
        ],
        position: "General",
    },
    {
        company: "Rebel Alliance",
        date: "A long time ago...",
        details: [
            "Destroyed the Death Star by using the force to find its only weakness and delivering a torpedo into the center of the ship",
            "Commanded of squadron of X-Wings into battle",
            "Defeated an enemy AT-AT single handedly after his ship was destroyed",
            "Awarded a medal for valor and bravery in battle for his successful destruction of the Death Star",
        ],
        position: "Lieutenant Commander",
    },
    {
        company: "Tatooine Moisture Refinery",
        date: "A long time ago...",
        details: [
            "Replaced damaged power converters",
            "Performed menial labor thoughout the farm in order to ensure its continued operation",
        ],
        position: "Moisture Farmer",
    },
];

const Experience = ({experience}) => (
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

const resumeStyles = StyleSheet.create({
    page: {
        padding: 30,

    },
    container: {
        flex: 1,
        flexDirection: "row",
        "@media max-width: 400": {
            flexDirection: "column",
        },
    },
    image: {
        marginBottom: 10,
    },
    leftColumn: {
        flexDirection: "column",
        width: 170,
        paddingTop: 30,
        paddingRight: 15,
        "@media max-width: 400": {
            width: "100%",
            paddingRight: 0,
        },
        "@media orientation: landscape": {
            width: 200,
        },
    },
    footer: {
        fontSize: 12,
        fontFamily: "Lato Bold",
        textAlign: "center",
        marginTop: 15,
        paddingTop: 5,
        borderWidth: 3,
        borderColor: "gray",
        borderStyle: "dashed",
        "@media orientation: landscape": {
            marginTop: 10,
        },
    },
});

Font.register({
    family: "Open Sans",
    src: "https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFVZ0e.ttf",
});

Font.register({
    family: "Lato",
    src: "https://fonts.gstatic.com/s/lato/v16/S6uyw4BMUTPHjx4wWw.ttf",
});

Font.register({
    family: "Lato Italic",
    src: "https://fonts.gstatic.com/s/lato/v16/S6u8w4BMUTPHjxsAXC-v.ttf",
});

Font.register({
    family: "Lato Bold",
    src: "https://fonts.gstatic.com/s/lato/v16/S6u9w4BMUTPHh6UVSwiPHA.ttf",
});

const Resume = (props) => (
    <Document
        author="Luke Skywalker"
        keywords="awesome, resume, start wars"
        subject="The resume of Luke Skywalker"
        title="Resume"
    >
        <Page  {...props} style={resumeStyles.page}>
            <Header name={props.ADD_NAME?.name} subtitle={props.ADD_NAME?.subtitle} email={props.ADD_NAME?.email} />
            <View style={resumeStyles.container}>
                <View style={resumeStyles.leftColumn}>
                    <Image
                        src={URL.createObjectURL(props.ADD_NAME?.selectedImage)}
                        style={resumeStyles.image}
                    />
                    <Education school={props.ADD_NAME?.school}/>
                    <Skills skill={props.ADD_NAME?.skill}/>
                </View>
                <Experience experience={props.ADD_NAME?.experience}/>
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
            <Resume size="A4" ADD_NAME={props.ADD_NAME} />
        </PDFViewer>
    </div>
);

