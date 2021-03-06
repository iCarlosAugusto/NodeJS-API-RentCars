import { getRepository, Repository } from "typeorm";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../../entities/User";
import { IUserRepository } from "../IUserRepository";

class UserRepository implements IUserRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  };
  
  async create({name, username, password, email, driver_license }: ICreateUserDTO): Promise<void> {
    
    const user = this.repository.create({
      name,
      username,
      email, 
      driver_license,
      password
    });

    await this.repository.save(user);
    throw new Error ("Method not implemented");
  }
};

export { UserRepository };