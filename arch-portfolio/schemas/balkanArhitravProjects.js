import { defineField } from "sanity";

export default {
    name: 'balkanArhitravProjects',
    type: 'document',
    title: 'БалканАрхитрав проекти',
    fields: [
        defineField({
            name: 'title',
            title: 'Заглавие',
            type: 'string',
        }),
        defineField({
            name: 'year',
            title: 'Година',
            type: 'string',
        }),
        defineField({
            name: 'picture_main_page',
            title: 'Снимка - Главна страница',
            type: 'image',
        }),
        defineField({
            name: 'text',
            title: 'Текстове',
            type: 'array',
            of: [{ type: 'text' }],
        }),
        defineField({
            name: 'project_pictures',
            title: 'Снимки от проект',
            type: 'array',
            of: [{ type: 'image' }],
        }),
    ]
}