import * as carService from "../services/carService";

export async function findAll(req: any, res: any) {
  const cars = await carService.findAll();

  return res.status(200).json(cars);
}

export async function findById(req: any, res: any) {
  const id = Number(req.params.id);

  const car = await carService.findById(id);

  if (!car) {
    return res.status(404).json({
      message: "Carro não encontrado.",
    });
  }

  return res.status(200).json(car);
}

export async function create(req: any, res: any) {
  const car = await carService.create(req.body);

  return res.status(201).json(car);
}

export async function update(req: any, res: any) {
  const id = Number(req.params.id);

  const car = await carService.update(id, req.body);

  return res.status(200).json(car);
}

export async function remove(req: any, res: any) {
  const id = Number(req.params.id);

  await carService.remove(id);

  return res.status(204).send();
}