import asyncHandler from "express-async-handler";
import prisma from "../prisma/client.js";

// create follow
/**
 * @method POST /api/follow
 * @description create follow
 * @body {followerId, followingId}
 */
export const createFollow = asyncHandler(async (req, res) => {
  const { followerId, followingId } = req.body;

  // check user to user 
  if(followerId === followingId){
    return res.status(400).json({message: "You cannot follow yourself"});
    
  }
 
  const follow = await prisma.follow.create({
    data: {
        followerId: followerId,
        followingId: followingId
    }
  })
 
  res.status(201).json(follow);
});


export const getAllFollow = asyncHandler(async(req, res) =>{
    const data = await prisma.follow.findMany();
    res.status(200).json(data);
})