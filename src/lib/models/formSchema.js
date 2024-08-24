import { z } from "zod";

export const messageFormSchema = z.object({
  firstName: z.string().min(1, "First name must be min 1 character."),
  lastName: z.string(),
  email: z.string().email({ message: "Invalid Email" }),
  phone: z.string().length(10, "Must be 10 number").or(z.string().max(0)),
  message: z.string().min(10, "message is too short or empty"),
  service: z.enum(["frontend", "backend", "fullstack"]).or(z.string().max(0)),
});
