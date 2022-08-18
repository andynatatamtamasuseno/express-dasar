import { exportAllDeclaration, tsExternalModuleReference } from "@babel/types";
import express from "express";
import request from "supertest";

const app  = express();

app.get('/params', (req,res)=> {
    res.send(`Hello ${req.query.name}`)
})

test("Test Params", async()=>{
    const response = await request(app).get("/params").query({ name:"Tama"});
    expect(response.text).toBe("Hello Tama");
})

