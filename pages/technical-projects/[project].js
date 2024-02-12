import Navigation from "../../components/Navigation/Navigation"
import ProjectPageTemplate from "../../components/Projects/ProjectPageTemplate"
import Seo from "../../components/Seo/Seo"
import FadeInTransition from "../../components/Transitions/FadeInTransition"
import sanityClient from "../../utils/sanityClient"
import { projectType } from "../../components/Projects/projectsConstants"

export default function Projects({ projectsContainer }) {
    const project = projectsContainer[0]

    return (
        <>
            <Seo
                siteMetadata={{
                    title: `${project.title}`,
                    description: `${project.category}`,
                }}
            ></Seo>
            <FadeInTransition>
                <Navigation>
                    <ProjectPageTemplate
                        project={project}
                        type={projectType.TECHNICAL_PROJECT}
                        goBackButtonText="Назад към ТЕХНИЧЕСКИ ПРОЕКТИ"
                    />
                </Navigation>
            </FadeInTransition>
        </>
    )
}

export async function getStaticPaths() {
    const projectsSlugs = await sanityClient.fetch(
        '*[_type == "technicalProject" && isProjectVisible == true]["slug"].current'
    )

    return {
        paths: projectsSlugs.map((project) => {
            return { params: { project: project } }
        }),
        fallback: false,
    }
}

export async function getStaticProps(props) {
    return {
        props: {
            projectsContainer: await sanityClient.fetch(`
                *[_type == "technicalProject" && slug.current == "${props.params.project}"]{
                    _id,
                    album{asset->{url}},
                    category,
                    city,
                    content,
                    isProjectVisible,
                    mainPagePicture,
                    pictures,
                    programmes,
                    slug,
                    title
                  }
            `),
        },
    }
}
