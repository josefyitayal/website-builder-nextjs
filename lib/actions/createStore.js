"use server"

import { createUser } from "./user.actions"

async function createUserForm(formData) {
    const storeCreate = createUser({
        id: "id",
        email: "text@gmail.com",
        firstName: "first_name",
        lastName: "last_name",
        photo: "image_url",
    })
    console.log("========== user created ===========")
}

export default createUserForm
