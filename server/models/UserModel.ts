import { User, UserUpdate } from "../types/User";

export class UserRepo{
    users = [
        {
            id: 1,
            name: "Admin",
            email: "admin@mail.com",
            password: "admin",
            role: "admin"
        },
        {
            id: 2,
            name: "John Doe",
            email: "john@mail.com",
            password: "john",
            role: "user"
        },
        {
            id: 3,
            name: "Jane Doe",
            email: "free@maill.com",
            password: "jane",
            role: "user"
        }
    ];

    getAll(){
        return this.users;
    }

    getSingle(userId: number){
        const user = this.users.find(user => user.id === userId)
        return user;
    }

    createUser(newUser: User){
        this.users.push(newUser)
        return newUser
    }

    updateUser(index: number, updatedUser:  User){
        this.users[index] = updatedUser
        return updatedUser
    }

    deleteUser(index: number){
        this.users.splice(index, 1)
        return this.users
    }
};

