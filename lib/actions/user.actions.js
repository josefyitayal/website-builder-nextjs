"use server"

import { connectToDatabase } from '../database/mongodb'
import User from "../database/models/user.model";
import { revalidatePath } from "next/cache";

export async function createUser(user) {
    try {
        await connectToDatabase()

        const newUser = await User.create(user)

        return JSON.parse(JSON.stringify(newUser));
    } catch (error) {
        console.log(error)
    }
}

export async function getUserById(userId) {
    try {
        await connectToDatabase();

        const user = await User.findOne({ id: userId });

        if (!user) throw new Error("User not found");

        return JSON.parse(JSON.stringify(user));
    } catch (error) {
        console.log(error);
    }
}


export async function deleteUser(userId) {
    try {
        await connectToDatabase();

        // Find user to delete
        const userToDelete = await User.findOne({ id });

        if (!userToDelete) {
            throw new Error("User not found");
        }

        // Delete user
        const deletedUser = await User.findByIdAndDelete(userToDelete._id);
        revalidatePath("/");

        return deletedUser ? JSON.parse(JSON.stringify(deletedUser)) : null;
    } catch (error) {
        handleError(error);
    }
}

// updating user
export async function updateUser(id, user) {
    try {
        await connectToDatabase()

        const updatedUser = User.findOneAndUpdate({id}, user, {new: true})

        if (!updatedUser) throw new Error("there is no user")

        return JSON.parse(JSON.stringify(updatedUser));
    } catch (error) {
        console.log(error)
    }
}