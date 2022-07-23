import { Query, Resolver, Mutation, Arg } from "type-graphql";
import { Pet  } from '../../database/entities/Pet'
@Resolver()
export class PetResolver {

   @Query(()=>[Pet])
   async getPet(): Promise<Pet[]> {
      return Pet.find()
   }

   @Mutation(() => Pet)
   async createPet(
      @Arg('name') name: string,
      @Arg('userId') userId: string,
   ):Promise<Pet>{
      const pet = Object.assign(new Pet(), {
         name,
         userId,
      })
      await Pet.save(pet)
      return pet
   }
   
}
