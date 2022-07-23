import 'reflect-metadata'
import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { buildSchema } from 'type-graphql'
import { UserResolver } from './modules/users/graphql/resolvers/user-resolver'
import { PetResolver } from './modules/pets/graphql/resolvers/pet-resolver'
import { connect }  from './config/database'

async function init(){
   await connect()
   const app = express()
   const port = 4010
   
   const schema = await buildSchema({
      resolvers: [UserResolver, PetResolver],
   })

   const apolloServer = new ApolloServer({
      schema,
   })
   await apolloServer.start()
   apolloServer.applyMiddleware({ app })
   app.listen(port, () => console.log('Server start on port 4010'))
}

init() 
