import { v4 as uuidv4 } from "https://deno.land/std/uuid/mod.ts"

export interface IBook {
	id: string;
	name: string;
	authors: string[];
}

const data: IBook[] = [
	{
		id: "1",
		name: "Go Bootcamp",
		authors: ["Matt Aimonetti",]
	},
	{
		id: "2",
		name: "Learn Go With Tests",
		authors: ["Denise Yu",]
	},
	{
		id: "3",
		name: "Programming in Go: Creating Applications for the 21st Century",
		authors: ["Mark Summerfield",]
	},
	{
		id: "4",
		name: "Rust Standard Library Cookbook: Over 75 recipes to leverage the power of Rust",
		authors: ["Jan Nils Ferner", "Daniel Durante",]
	},
	{
		id: "5",
		name: "Network Programming with Rust",
		authors: ["Abhishek Chanda",]
	},
	{
		id: "6",
		name: "Rust in Action",
		authors: ["Tim McNamara",]
	},
	{
		id: "7",
		name: "Mastering Rust: Learn about memory safety, type system, concurrency, and the new features of Rust 2018 edition, 2nd Edition",
		authors: ["Rahul Sharma","Vesa Kaihlavirta",]
	},
	{
		id: "8",
		name: "Hands-On Concurrency with Rust: Confidently build memory-safe, parallel, and efficient software in Rust",
		authors: ["Brian L. Troutwine",]
	},
	{
		id: "9",
		name: "AI and Machine Learning for Coders: A Programmer's Guide to Artificial Intelligence 1st Edition",
		authors: ["Laurence Moroney",]
	},
	{
		id: "10",
		name: "Swift in Depth",
		authors: ["Tjeerd in 't Veen",]
	},
]

const service: any = {

	// get all books
	many: (): IBook[] => data,

	// get book by id
	one: (id: string): IBook | undefined => {

		return data.find((book: IBook): any => book.id === id)
	},

	// create a new book
	create: (book: { name: string, authors: string[],}): any => {

		const newBook: IBook = {
			id: uuidv4.generate(),
			name: book.name,
			authors: book.authors,
		}

		data.push(newBook)

		return newBook
	}
}

export default service
