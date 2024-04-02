import { z } from "zod";
// SCHEMA
import { RoleSchema } from "./RoleSchema";
export interface UsersResponse {
  result: string;
  data: UserSchema[];
  count: number;
}

export interface UserResponse {
  result: string;
  data: UserSchema;
  count: number;
}

export interface UserSchema {
  createdAt: string;
  deletedAt: string;
  email: string;
  id: string;
  lastLogin: string;
  name: string;
  password: string;
  status: string;
  updatedAt: string;
  username: string;
  role: RoleSchema;
}

export const Z_USER_PAYLOAD_SCHEMA = z.object({
  name: z.string(),
  email: z.string(),
  username: z.string(),
  password: z.string().optional(),
  confirmPassword: z.string().optional(),
});

export type UserPayloadType = z.infer<typeof Z_USER_PAYLOAD_SCHEMA>;
