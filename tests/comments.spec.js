import axios from "axios";
import * as chai from "chai";
import chaiJsonSchemaAjv from "chai-json-schema-ajv";

import { schemaGet, schemaPut, schemaPost } from "../schemas/comments-schema.js";

chai.use(chaiJsonSchemaAjv)

const { expect } = chai

console.log("Connecting to dummyjson API...")

describe('TODOS API TESTING', function() {
    describe('TD001 - Todos API TESTING', function() {
        it('Testing GET Todos API', async function () {
            const res = await axios.get('https://dummyjson.com/todos')
            expect(res.data).to.be.jsonSchema(schemaGet)
            console.log(res.data)
        })
    })
    
    describe('TD002 - TODOS API TESTING', function() {
        it('Testing POST Todos API', async function () {
            const res = await axios.post('https://dummyjson.com/todos/add', {
                todo: 'idk whattodo',
                userId: 4
            })
            expect(res.data).to.be.jsonSchema(schemaPost)
            console.log(res.data)
        })
    })
    
    describe('TD003 - TODOS API TESTING', function() {
        it('Testing PUT Todos API', function () {
            const res = axios.put('https://dummyjson.com/todos/1', {
                todo: 'hello world',
                userId: 3
            })
            expect(res.data).to.be.jsonSchema(schemaPut)
            console.log(res.data)
        })
    })
})