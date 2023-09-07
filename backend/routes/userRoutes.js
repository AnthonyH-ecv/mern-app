import express from 'express'
import {
  authUser,
  getUserProfile,
  logoutUser,
  registerUser,
  updateUserProfile,
} from '../controllers/userController.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router()

router.post('api/users/', registerUser)
router.post('api/users/auth', authUser)
router.post('api/users/logout', logoutUser)
router
  .route('api/users/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile)

export default router
