import { Controller, Get } from "@nestjs/common";
import { TodosService } from "./todos.service";

@Controller("todos")
export class TodosController {
  constructor(private readonly TodosService: TodosService) {
  }

  @Get()
  findAll(): Promise<any[]> {
    // @ts-ignore
    return this.TodosService.findAll();
  }
}
