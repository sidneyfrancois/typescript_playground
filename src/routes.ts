import { Request, Response } from "express";
import CreateCourseService from "./CreateCourseService";

export function createCourse(request: Request, response: Response) {
  CreateCourseService.execute({
    name: "NodeJS",
    educator: "Fulano de Tal",
    duration: 10,
  });

  CreateCourseService.execute({
    name: "ReactJS",
    educator: "Beltrano de Outro",
  });

  return response.send();
}
