const fastify = require('fastify')()

const users = []

fastify.get('/', async (request, reply) => {
    return {message: 'API funcionando'}
})

fastify.post('/users', async (request, reply) => {
    const data = request.body

    if (!data || !data.name) {
        return {
            error: 'Dados invalidos'
        }
    }

    users.push(data)
    
    return {
        message: 'Usuario criado',
        data: data
    }
})

fastify.get('/users', async () => {
    return users
})

fastify.listen({ port: 3000 }, (err, address) => {
    if (err) {
        console.error(err)
        process.exit(1)
    }
    console.log(`Servidor rodando em ${address}`)
})