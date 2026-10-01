import { prisma } from "../database/client";

import type { CreateCarDto } from "../../dto/createCarDto";

import type { UpdateCarDto } from "../../dto/updateCarDto";

export function findAll() {
  return prisma.car.findMany({
    orderBy: {
      brand: "asc",
    },
  });
}

export function findById(id: number) {
  return prisma.car.findUnique({
    where: { id },
  });
}

export function create(data: CreateCarDto) {
  return prisma.car.create({
    data: {
      ...data,
      selling_date: data.selling_date ? new Date(data.selling_date) : null,
    },
  });
}

export function update(id: number, data: UpdateCarDto) {
  return prisma.car.update({
    where: { id },
    data: {
      ...data,
      selling_date: data.selling_date
        ? new Date(data.selling_date)
        : data.selling_date,
    },
  });
}

export function remove(id: number) {
  return prisma.car.delete({
    where: { id },
  });
}
