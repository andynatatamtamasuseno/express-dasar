import { exportAllDeclaration, tsExternalModuleReference } from "@babel/types";
import express from "express";
import request from "supertest";

const app  = express();

app.get('/', (req,res)=> {
    res.send("My web")
})

test("Test ExpressJS", async()=>{
    const response = await request(app).get("/");
    expect(response.text).toBe("My web");
})

