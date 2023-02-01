const fs = require('fs');
const yaml = require('js-yaml');

const getProjectDirectory = () => {
    return process.cwd() + '/public/projects/';
};

const getAllProjects = () => {
    return fs.readdirSync(getProjectDirectory());
};

const loadYamlContent = () => {
    const allProjects = getAllProjects();

    return allProjects.map(project => {
        return yaml.load(fs.readFileSync(getProjectDirectory() + project, 'utf-8'));
    })
};

const getProjectsBySector = () => {
    const allProjects = loadYamlContent();

    const INTERIOR = 'interior';
    const PUBLIC_BUILDINGS = 'public_buildings';
    const CIVIL_BUILDINGS = 'civil_buildings'
    const URBAN_PLANNING = 'urban_planning';

    return {
        INTERIOR: allProjects.filter(proj => proj.sector == INTERIOR),
        PUBLIC_BUILDINGS: allProjects.filter(proj => proj.sector == PUBLIC_BUILDINGS),
        CIVIL_BUILDINGS: allProjects.filter(proj => proj.sector == CIVIL_BUILDINGS),
        URBAN_PLANNING: allProjects.filter(proj => proj.sector == URBAN_PLANNING),
    }
};

const getAllProjectsSlugs = () => {
    const allProjects = getAllProjects();

    return allProjects.map(project => {
        return { params: { project: project.replace('.yml', '') } };
    })
};

const getCurrentProjectData = (project_slug) => {
    return yaml.load(fs.readFileSync(getProjectDirectory() + `${project_slug}.yml`, 'utf-8'));
}

export {
    getProjectsBySector,
    getAllProjectsSlugs,
    getCurrentProjectData
};