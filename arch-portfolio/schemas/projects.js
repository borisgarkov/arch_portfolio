import { defineField } from "sanity";

export default {
    name: 'project',
    type: 'document',
    title: 'Проекти',
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
                    { title: 'архитектурни проекти', value: 'architecture' },
                    { title: 'интериорни проекти', value: 'interior' },
                    { title: 'заснемане на сгради', value: 'buildings' },
                ],
                layout: 'radio'
            }
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