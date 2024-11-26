import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'

export const app = express()

//cors configuration
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true
}))

//allows to recieve json data
app.use( express.json({limit:'50kb'}) );

//allows to share data encoded in url
app.use(express.urlencoded({extended:true}));

//to serve static file
app.use( express.static("public") );

//cookies configure
app.use(cookieParser())