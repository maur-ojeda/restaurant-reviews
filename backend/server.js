import express from "express"
import cors from "cors"

import restaurants from "./api/restaurants.route.js"

const  app = express()
app.use(cors())
// el servidor puede aceptar json
app.use(express.json())

// configuracion a que ruta se puede tener acceso 
app.use("/api/v1/restaurants", restaurants)
// si se mete en cualquier otra ruta tendra estatus 404
app.use("*", (req,res) => res.status(404).json({error: "not found"}))

export default app