import Navigation from "../../components/Navigation/Navigation";
import { getAllProjectsSlugs, getCurrentProjectData } from "../../components/Projects/getProjectsData";
import ProjectPageTemplate from "../../components/Projects/ProjectPageTemplate";

export default function Projects(props) {
    const project = props.project;

    return (
        <Navigation>
            <ProjectPageTemplate project={project} goBackButtonText='Назад към СТУДЕНТСКИ ПРОЕКТИ' />
        </Navigation >
    )
};

export async function getStaticPaths() {
    return {
        paths: getAllProjectsSlugs(),
        fallback: false,
    }
};

export async function getStaticProps(props) {
    return {
        props: { project: getCurrentProjectData(props.params.project) }
    }
};