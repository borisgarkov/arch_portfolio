import { defineField } from "sanity";

export default {
    name: 'certificates',
    type: 'document',
    title: 'Сертификати в CV',
    fields: [
        defineField({
            name: 'title',
            title: 'Заглавие',
            type: 'string',
        }),
        defineField({
            name: 'file',
            title: 'Сертификат',
            type: 'file',
        }),
    ]
}