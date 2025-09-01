import { UserRepository } from './user.repository';
import { User } from './user.entity';
import { LoginDTO } from '../auth/types/auth.dto';

 class UserService {
  private repository = new UserRepository();

  getUsers(page: number, limit: number): User[] {
    return this.repository.findAll();
  }

  getUser(id: string): User | undefined {
    return this.repository.findById(id);
  }
  public findByEmail(email:string){
    return  this.repository.findByEmail(email);

  }

  public createUser(
    name: string,
    email: string,
    password: string,
    avatar?: string
  ): User {
    return this.repository.create(name, email, password, avatar);
  }

  updateUser(
    id: string,
    name?: string,
    email?: string,
    avatar?: string
  ): User | null {
    return this.repository.update(id, name, email, avatar);
  }

  deleteUser(id: string): boolean {
    return this.repository.delete(id);
  }
  isUserIdExist(id:string):boolean{
   // return this.repository.findById(id)? true:false;
   return !! this.repository.findById(id);
   // !! => convert any value to boolean if there is user true else false
  }

}
export const userService=new UserService();

