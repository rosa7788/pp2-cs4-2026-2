import * as carRepository from "../repositories/carRepository";

import type { CreateCarDto } from "../../dto/createCarDto";
import type { UpdateCarDto } from "../../dto/updateCarDto";

export function findAll() {
  return carRepository.findAll();
}

export function findById(id: number) {
  return carRepository.findById(id);
}

export function create(data: CreateCarDto) {
  return carRepository.create(data);
}

export function update(id: number, data: UpdateCarDto) {
  return carRepository.update(id, data);
}

export function remove(id: number) {
  return carRepository.remove(id);
}
