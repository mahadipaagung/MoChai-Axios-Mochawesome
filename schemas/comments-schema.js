export const schemaGet = {
    type: 'object',
    properties: {
        todos: {
            type: 'array',
            items: {
                id: {type: 'number'},
                todo: {type: 'string'},
                completed: {type: 'boolean'},
                userId: {type: 'number'},
            }
        },
        total: {type: 'number'},
        skip: {type: 'number'},
        limit: {type: 'number'},
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