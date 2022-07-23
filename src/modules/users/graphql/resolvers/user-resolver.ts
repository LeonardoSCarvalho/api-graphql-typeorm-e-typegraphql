import { Query, FielResolver,Resolver, Mutation, Arg } from "type-graphql";
import { User  } from '../../database/entities/User'
import { Pet } from '../../database/entities/Pet'
@Resolver()
export class UserResolver {

   @Query(()=>[User])
   async getUser(): Promise<User[]> {
      return User.find()
   }

   @Mutation(() => User)
   async createUser(
      @Arg('firstname') firstname: string,
      @Arg('lastname') lastname: string,
      @Arg('emai') emai: string,
      @Arg('password') password: string,
   ):Promise<User>{
      const user = Object.assign(new User(), {
         firstname,
         lastname,
         emai,
         password
      })
      await User.save(user)
      return user
   }
   
   @FielResolver(() => [Pet])
   async pets(@Root() root:user):Promise<Pet[]> {
      return Pet.find({
         {where: {userId: root.id}}
      })

   }
}
