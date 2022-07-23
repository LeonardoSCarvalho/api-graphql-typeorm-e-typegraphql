import { Query, Resolver  } from "type-graphql";
import { User  } '../../database/entities/User'
@Resolver
export class UserResolver {

   @Query(()=>[User])
   async getUser(): Promise<User[]> {
      return User.find()
   }
}
