import { TaskDto } from './dto/task.dto';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { TaskModel } from './model/task.model';
export declare class TaskService {
    private readonly taskModel;
    constructor(taskModel: ModelType<TaskModel>);
    create(task: TaskDto): Promise<any>;
    getTasksByUserId(id: string): Promise<any>;
    deleteTask(id: any): Promise<any>;
    updateById(id: string, task: TaskDto): Promise<any>;
}
