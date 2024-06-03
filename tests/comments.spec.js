import axios from "axios";
import * as chai from "chai";
import chaiJsonSchemaAjv from "chai-json-schema-ajv";

import { schemaGet, schemaPut, schemaPost, schemaDelete, schemaLogin } from "../schemas/comments-schema.js";

chai.use(chaiJsonSchemaAjv)

const { expect } = chai

console.log("Connecting to dummyjson API...")

describe('TODOS API TESTING', function() {
    describe('TD001 - Todos API TESTING', function() {
        it('Testing GET Todos API', async function () {
            const res = await axios.get('https://dummyjson.com/todos')
            expect(res.data).to.be.jsonSchema(schemaGet)
            // console.log(res.data)
        })
    })
    
    describe('TD002 - TODOS API TESTING', function() {
        it('Testing POST Todos API', async function () {
            const res = await axios.post('https://dummyjson.com/todos/add', {
                todo: 'idk whattodo',
                userId: 4
            })
            expect(res.data).to.be.jsonSchema(schemaPost)
            // console.log(res.data)
        })
    })
    
    describe('TD003 - TODOS API TESTING', function() {
        it('Testing PUT Todos API', async function () {
            const res = await axios.put('https://dummyjson.com/todos/3', {
                todo: 'hello world',
                userId: 3
            })
            expect(res.data).to.be.jsonSchema(schemaPut)
            // console.log(res.data)
        })
    })
    describe('TD004 - TODOS API TESTING', function() {
        it('Testing DELETE Todos API', async function () {
            const res = await axios.delete('https://dummyjson.com/todos/3')
            expect(res.data.isDeleted).to.equal(true)
            expect(res.data).to.be.jsonSchema(schemaDelete)
        })
    })
})

describe('LOGIN API TESTING', function(){
    describe('LG001 - Testing Login credentials', function(){
        it('Login with registered username and password', async function(){
            const auth = await axios.post('https://dummyjson.com/auth/login', {
                username: 'emilys',
                password: 'emilyspass',
            })
            await axios.create({
                baseURL: 'https://dummyjson.com/auth/me',
                headers: {
                    'Authorization': `Bearer ${auth.data.token}`
                }
            })
            expect(auth.data).to.be.jsonSchema(schemaLogin)
        })
    })
})