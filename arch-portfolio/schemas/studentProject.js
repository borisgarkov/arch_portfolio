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
                    { title: 'жилищни сгради', value: 'civil_buildings' },
                    { title: 'обществени сгради', value: 'public_buildings' },
                    { title: 'интериор', value: 'interior' },
                    { title: 'градоустройство', value: 'urban' },
                    { title: 'индустриални сгради', value: 'industrial_buildings' },
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
        {
            name: 'mainPagePicture',
            type: 'image',
            title: 'Снимка главна страница'
        },
        {
            name: 'album',
            type: 'file',
            title: 'Албум'
        },
        {
            name: 'isProjectVisible',
            title: 'Видим Проект?',
            type: 'boolean'
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