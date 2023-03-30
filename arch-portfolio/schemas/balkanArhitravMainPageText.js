import { defineField } from "sanity";

export default {
    name: 'balkanArhitravMainPageText',
    type: 'document',
    title: 'БалканАрхитрав главна страница текст',
    fields: [
        defineField({
            name: 'text',
            title: 'Текст',
            type: 'array',
            of: [{ type: 'text' }],
        }),
    ]
}