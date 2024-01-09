require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

const connectDB = require('./db/connect');
const reportRouter = require("./routes/routes.js")

const PORT = process.env.PORT || 5000;

//middleware

//we'll be sending data in json format, that's why it is required to use this middleware
app.use(express.json());

//we'll be using dynamic routes, in order to read the data from url we have to use this
app.use(express.urlencoded({ extended: true }));

//set 'credentials: true' to pass --> headers, cookies, etc to browser/frontend
app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}))

// route splitting
app.use("/api/data", reportRouter)



// routes

app.get('/', (req,res)=>{
    res.send("Hello From Backed!");
});

//it is a test route just to see our server is working
// app.get("/", (req, res) => {
//     return res.send(`<div style = "background:magenta;padding:100px;"><h2>Welcome to Data Virtualization Server</h2>
//     <p>Below are the some examples of supported routes...</p>
//         <div><ul>
//             <li>GET all data from the database - /api/data</li>
//             <li>GET data filtered by year - /api/data/year/:year</li>
//             <li>GET data filtered by region - /api/data/region/:region</li>
//             <li>Much more...</li>
//         </ul></div>
//     </div>`)
// })


const start = async()=>{
    try {
        await connectDB(process.env.MONGOBD_URL);
        app.listen(PORT, ()=>{
            console.log(`express listening at port ${PORT}`);
        })
    } catch (error) {
        console.log(err)
    }
}


start();