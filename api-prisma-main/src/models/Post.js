import { prisma } from "../../config/prisma.js";

export const createPost = async (title, serId, subtitle, body) => {
  try {
    return await prisma.Post.create({
      data: {
        title,
        serId,
        subtitle,
        body
      },
    });
  } catch (error) {
    if (error.code == "P2002") {
      throw new Error("Address already exists.");
    }
    throw new Error(`Failed to create user: ${error.message}`);
  }
};

export const findPosts = async () => {
  try {
    return await prisma.Post.findMany();
  }
  catch (error) {
    throw new Error(`Failed to get all users: ${error.message}`);
  }
}

export const findPostById = async (id) => {
  return await prisma.Post.findFirst({
    where: {
      id,
    },
  });
};

export const updatePost = async (id) => {
  return await prisma.Post.upDate({
    where: {
      id,
    },
    data: {
      subtitle: userData.subtitle,
      body: userData.body,
    },
  });
};


export const deletePost = async (id) => {
  return await prisma.Post.delete({
    where: {
      id,
    },
  });
};

