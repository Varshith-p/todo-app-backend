import { PrismaClient } from "../generated/prisma";

const prismaClient = new PrismaClient({
  log: ["query", "info", "warn", "error"],
});

export const getTasks = () => {
  return prismaClient.task.findMany({
    orderBy: { createdAt: "desc" },
  });
};

export const getTaskById = (id: number) => {
  return prismaClient.task.findUnique({
    where: { id },
  });
};

export const createTask = (data: { title: string; color: string }) => {
  return prismaClient.task.create({
    data: {
      title: data.title,
      color: data.color,
      completed: false,
    },
  });
};

export const updateTask = (
  id: number,
  data: Partial<{ title: string; color: string; completed: boolean }>
) => {
  return prismaClient.task.update({
    where: { id },
    data,
  });
};

export const deleteTask = (id: number) => {
  return prismaClient.task.delete({
    where: { id },
  });
};
