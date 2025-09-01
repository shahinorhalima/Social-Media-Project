import asyncHandler from "express-async-handler";
import prisma from "../prisma/client.js";

// // @desc    Get all routes
// // @route   GET /api/routes
// // @access  Public

export const createUser = asyncHandler(async (req, res) => {
  const data = await prisma.user.create({
    data: req.body,
  });
  res.status(201).json(data);
});

/**get all user
 * @method GET /api/users
 */
export const getAllUser = asyncHandler(async (req, res) => {
  const user = await prisma.user.findMany();
  res.status(200).json(user);
});

export const getSingleUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const data = await prisma.user.findUnique({
    where: { id },
    include: {
        follower:{ include: { follower: true } },
        following:{ include: { following: true } }
    }
  });
    res.status(200).json(data);
});
