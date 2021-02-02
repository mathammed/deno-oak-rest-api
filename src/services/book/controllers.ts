import BookService, { IBook } from "./service.ts"

const controllers = {

	// get all books
	many: ({ response, }: { response: any, }) => {
		response.body = { success: true, data: BookService.many(), }
	},

	// get book by id
	one: ({ response, params, }: { response: any, params: { id: string, }, }) => {

		const book: IBook | undefined = BookService.one(params.id)

		response.body = {
			success: book !== undefined,
			data: book|| null,
		}
	},

	create: async ({ request, response, }: { request: any, response: any, }) => {

		const { type, value: book } = await request.body()

		if (type === "json") {

			const newBook = BookService.create(await book)

			response.body = {
				success: true,
				data: newBook,
			}
		}
		else {
			response.body = {
				success: false,
				data: null,
			}
		}
	}
}

export default controllers
