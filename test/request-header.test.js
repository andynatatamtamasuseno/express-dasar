import { exportAllDeclaration, tsExternalModuleReference } from "@babel/types";
import express from "express";
import request from "supertest";

const app  = express();

app.get('/header', (req,res)=> {
    const type = req.get("accept")
    res.send(`Hello ${type}`)
})

test("Test Params", async()=>{
    const response = await request(app).get('/header')
    .set("Accept", "text/plain");
    expect(response.text).toBe("Hello text/plain");
})

