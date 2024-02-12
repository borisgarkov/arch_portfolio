import {defineField} from "sanity"

export default {
	name: "technicalProject",
	type: "document",
	title: "Технически проекти",
	fields: [
		{
			name: "title",
			type: "string",
			title: "Заглавие",
		},
		{
			name: "category",
			type: "string",
			title: "Категория",
			options: {
				list: [
					{title: "архитектурни проекти", value: "architecture"},
					{title: "заснемане на сгради", value: "existing"},
					{title: "реконструкция и преустройство", value: "reconstruction"},
					{title: "други", value: "other"},
				],
				layout: "radio",
			},
		},
		{
			name: "slug",
			type: "slug",
			title: "URL линк",
		},
		{
			name: "mainPagePicture",
			type: "image",
			title: "Снимка главна страница",
		},
		{
			name: "isProjectVisible",
			title: "Видим Проект?",
			type: "boolean",
		},
		defineField({
			name: "pictures",
			title: "Снимки",
			type: "array",
			of: [{type: "image"}],
		}),
		defineField({
			name: "programmes",
			title: "Използвани програми",
			type: "array",
			of: [{type: "string"}],
		}),
		defineField({
			name: "content",
			title: "Текстове",
			type: "array",
			of: [{type: "text"}],
		}),
	],
}
