import { Application } from "https://deno.land/x/oak/mod.ts"
import router from "./src/routes.ts"

const PORT = 4000
const service = new Application()

service.use(router.routes())
service.use(router.allowedMethods())

console.log(`Server running at port: ${PORT}`)

await service.listen({
	port: PORT,
})
