const zod = require('zod');

const passwordSchema = zod.string().min(8, "Password must be at least 8 characters").regex(/[A-Z]/, "Password must contain at least one uppercase letter").regex(/[a-z]/, "Password must contain at least one lowercase letter").regex(/[0-9]/, "Password must contain at least one number").regex(/[^A-Za-z0-9]/, "Password must contain at least one special character");

const userValidator = zod.object({
    name: zod.string().min(3, "name should be atleast 3 characters"),
    email: zod.email("Invalid email"),
    password: passwordSchema
})

module.exports=userValidator;