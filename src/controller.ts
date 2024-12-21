
interface Users {
  id?: string;
  name: string;
  age: number;
  country: string;
}

export class Controller {
  private users: Users[] = [];

  index(){
    return this.users;
  }

  create(user: Omit<Users, "id">){
    const createUser = {
      id: String(this.users.length + 1),
      ...user
    }
    this.users.push(createUser);
    return createUser;
  }
}