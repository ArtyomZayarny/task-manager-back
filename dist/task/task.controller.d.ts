import { TaskDto } from './dto/task.dto';
import { TaskService } from './task.service';
export declare class TaskController {
    private readonly taskService;
    constructor(taskService: TaskService);
    createTasktask(task: TaskDto): Promise<any>;
    fetchTaskListByUserId(id: string): Promise<any>;
    deleteTask(id: string): Promise<void>;
    updateTask(id: string, task: TaskDto): Promise<any>;
}
