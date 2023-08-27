import asyncHandler from 'express-async-handler'
import { User } from '../models/userModel.js'

/**
 * description: Auth user / set token
 * Route: POST /api/users/auth
 */
export const authUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Auth User' })
})

/**
 * description: Register a new user
 * Route: POST /api/users
 */
export const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body

    const userExists = await User.findOne({ email })

    if (userExists) {
        res.status(400)
        throw new Error('User already exists')
    }

    const user = await User.create({
        name,
        email,
        password,
    })

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }
})

/**
 * description: Logout user
 * Route: POST /api/users/logout
 */
export const logoutUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Logout User' })
})

/**
 * description: Get user profile
 * Route: GET /api/users/profile
 */
export const getUserProfile = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'User Profile' })
})

/**
 * description: Update user profile
 * Route: PUT /api/users/profile
 */
export const updateUserProfile = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Update User Profile' })
})
