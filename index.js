const jsonSrver = require('json-server')
const empServer = jsonSrver.create()
const middleware = jsonSrver.defaults()
const router = jsonSrver.router("db.json")
const PORT = 3000 || process.env.PORT


empServer.use(middleware)
empServer.use(router)

empServer.listen(PORT,()=>{
    console.log(`Employee Portal server started at port : ${PORT}`);
})