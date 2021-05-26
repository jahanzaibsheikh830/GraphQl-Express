const resolvers = require( './resolvers')
const typeDefs = require('./typeDefs')
const express = require('express')
const path = require('path')
const cors = require('cors')
const { createServer } = require('http')

const {gql, ApolloServer} = require('apollo-server-express')
const mongoose = require('mongoose')
const app = express()
const PORT = process.env.PORT || 5000

app.use("/", express.static(path.resolve(path.join(__dirname, "./graphql-client/build"))))

app.use(cors({
    origin: "https://graphql-express-server.herokuapp.com"
}))
const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    playground: {
        endpoint: 'https://graphql-express-server.herokuapp.com/graphql',
    },
    introspection: true,
})
apolloServer.applyMiddleware({
    app
})
const httpServer = createServer(app)
apolloServer.installSubscriptionHandlers(httpServer)
mongoose.connect('mongodb+srv://dbjahan:dbjahan@cluster0.8ric4.mongodb.net/test?retryWrites=true&w=majority',
{ useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection.on('connected', function() {
    console.log("Mongoose is connected");
});
httpServer.listen(PORT,()=>{
    console.log('Server is running on: ' , PORT)
})
