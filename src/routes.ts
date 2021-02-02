import { Router } from "https://deno.land/x/oak/mod.ts"

import BookService from "./services/book/controllers.ts"

const router = new Router()

router
.get("/api/v1/books", BookService.many)
.get("/api/v1/books/:id", BookService.one)
.post("/api/v1/books", BookService.create)

export default router
