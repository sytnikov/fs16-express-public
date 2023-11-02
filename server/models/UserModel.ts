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
        const id = this.users[this.users.length - 1].id + 1;
        const existingUser = this.users.find(user => user.email === newUser.body.email);
        if(!existingUser){
            return null;
        }
        const createUser: User = {
            body: {
                id: id,
                name: newUser.body.name,
                email: newUser.body.email,
                password: newUser.body.password,
                role: newUser.body.role
            }
        }
        this.users.push(createUser.body);
        return createUser;
    }

    updateUser(index: number, updatedUser:  UserUpdate){
        const foundIndex = this.users.findIndex(user => user.id === index);
        console.log(updatedUser.body?.id)
        if(foundIndex !== -1){
            const updateUser = {
                ...this.users[foundIndex],
                ...updatedUser
            }
            this.users.splice(foundIndex, 1, updateUser)
            return updateUser
        }
        return null
    }

    deleteUser(index: number){
        this.users.splice(index, 1)
        return this.users
    }
};

