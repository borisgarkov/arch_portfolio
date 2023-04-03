import { defineField } from "sanity";

export default {
    name: 'activities',
    type: 'document',
    title: 'Дейности',
    fields: [
        defineField({
            name: 'title',
            title: 'Заглавие',
            type: 'string',
        }),
        defineField({
            name: 'picture',
            title: 'Снимка',
            type: 'image',
        }),
        defineField({
            name: 'order_number',
            title: 'Подредба номер',
            type: 'number',
        }),
        defineField({
            name: 'description',
            title: 'Описание',
            type: 'array',
            of: [{ type: 'text' }],
        }),
    ]
}