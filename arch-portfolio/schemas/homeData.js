import {defineField} from 'sanity'

export default {
  name: 'homeData',
  type: 'document',
  title: 'Начална страница',
  fields: [
    defineField({
      name: 'picture_1',
      title: 'Главна снимка 1',
      type: 'image',
    }),
    defineField({
      name: 'picture_2',
      title: 'Главна снимка 2',
      type: 'image',
    }),
    defineField({
      name: 'picture_3',
      title: 'Главна снимка 3',
      type: 'image',
    }),
    defineField({
      name: 'side_picture',
      title: 'Странична снимка',
      type: 'image',
    }),
    defineField({
      name: 'updating_text',
      title: 'Променящ се текст',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'subtitle',
      title: 'Подзаглавие',
      type: 'string',
    }),
    defineField({
      name: 'profile_picture',
      title: 'Профилна снимка',
      type: 'image',
    }),
    defineField({
      name: 'some_words_about_me',
      title: 'Няколко думи за мен',
      type: 'string',
    }),
    defineField({
      name: 'sub_text_some_words_about_me',
      title: 'Текст под "Няколко думи за мен"',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],
}
