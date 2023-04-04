import Navigation from "../../components/Navigation/Navigation";
import ProjectPageTemplate from "../../components/Projects/ProjectPageTemplate";
import sanityClient from "../../utils/sanityClient";

export default function Projects(props) {
    const project = props.project;

    return (
        <Navigation>
            <ProjectPageTemplate project={project} goBackButtonText='Назад към СТУДЕНТСКИ ПРОЕКТИ' />
        </Navigation >
    )
};

export async function getStaticPaths() {
    const projectsSlugs = await sanityClient.fetch(
        '*[_type == "studentProject" && isProjectVisible == true]["slug"].current'
    );

    return {
        paths: projectsSlugs.map(project => {
            return { params: { project: project } }
        }),
        fallback: false,
    }
};

export async function getStaticProps(props) {
    return {
        props: {
            project: await sanityClient.fetch(`
                *[_type == "studentProject" && slug.current == "${props.params.project}"]
            `)
        }
    }
};