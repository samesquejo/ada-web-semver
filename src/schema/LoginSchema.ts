// SCHEMA
import { UserSchema } from "./GetUserSchema";

// LIBRARIES
import { z } from "zod";

export const Z_PAYLOAD_SCHEMA = z.object({
  email: z.string().min(1, { message: "Email is required" }),
  password: z.string().min(1, { message: "Password is required" }),
});

export interface schema extends UserSchema {
  accessToken: string;
}

export interface response {
  result: string;
  data: schema[];
  count: number;
}

export type PayloadType = z.infer<typeof Z_PAYLOAD_SCHEMA>;
