import { z } from "zod";

import { userSchema } from "../schemas/userSchema";

export type UserDTO = z.infer<typeof userSchema>;

export type User = UserDTO & {
    id: number;
};

export type UserUpdate = Omit<Partial<User>, "id">;