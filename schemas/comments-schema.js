export const schemaGet = {
    type: 'object',
    properties: {
        id: {type: 'number'},
        todo: {type: 'string'},
        completed: {type: 'boolean'},
        userId: {type: 'number'}
    }
}

export const schemaPost = {
    type: 'object',
    properties:{
        id: {type: 'number'},
        todo: {type: 'string'},
        userId: {type: 'number'}
    }
}

export const schemaPut = {
    type: 'object',
    properties:{
        id: {type: 'number'},
        todo: {type: 'string'},
        userId: {type: 'number'},
        completed: {type: 'boolean'}
    }
}

export const schemaDelete = {
    type: 'object',
    properties:{
        id: {type: 'number'},
        todo: {type: 'string'},
        userId: {type: 'number'},
        completed: {type: 'boolean'},
        isDeleted: {type: 'boolean'}
    }
}

export const schemaLogin = {
    type: 'object',
    properties: {
        id: {type: 'number'},
        username: {type: 'string'},
        email: {type: 'string'}
    }
}