import { api } from "./config/config.js";
import swaggerDocs from "./config/swagger.config.js";
import middleware from "./middlewares/token.middleware.js";
import data from "./routes/data.routes.js";
import express from "express";



const app = express();

app.use(express.json());
// ROUTERS
app.use("/api/data", data);

// app.use('/api/profile', middleware, profile);

// SERVIDOR ACTIVO
app.listen(api.port, () => {
  console.log(`Servidor corriento en el puerto => ${api.port}`);
  swaggerDocs(app, api.port);
});
