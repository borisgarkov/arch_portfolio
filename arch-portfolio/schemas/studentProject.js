import { defineField } from "sanity";

export default {
    name: 'studentProject',
    type: 'document',
    title: 'Студентски Проекти',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Заглавие'
        },
        {
            name: 'category',
            type: 'string',
            title: 'Категория',
            options: {
                list: [
                    { title: 'ЖИЛИЩНИ СГРАДИ', value: 'civil_buildings' },
                    { title: 'ОБЩЕСТВЕНИ СГРАДИ', value: 'public_buildings' },
                    { title: 'ИНТЕРИОР', value: 'interior' },
                    { title: 'ГРАДОУСТРОЙСТВО', value: 'urban' },
                ],
                layout: 'radio'
            }
        },
        {
            name: 'city',
            type: 'string',
            title: 'Град'
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'URL линк'
        },
        defineField({
            name: 'pictures',
            title: 'Снимки',
            type: 'array',
            of: [{ type: 'image' }],
        }),
        defineField({
            name: 'programmes',
            title: 'Използвани програми',
            type: 'array',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'content',
            title: 'Текстове',
            type: 'array',
            of: [{ type: 'text' }],
        }),
    ]
}