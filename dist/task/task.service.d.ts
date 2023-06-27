/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { TaskDto } from './dto/task.dto';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { TaskModel } from './model/task.model';
import { Types } from 'mongoose';
export declare class TaskService {
    private readonly taskModel;
    constructor(taskModel: ModelType<TaskModel>);
    create(task: TaskDto): Promise<import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, TaskModel> & Omit<TaskModel & Required<{
        _id: Types.ObjectId;
    }>, "typegooseName"> & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction>;
    getTasksByUserId(id: string): Promise<(import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, TaskModel> & Omit<TaskModel & Required<{
        _id: Types.ObjectId;
    }>, "typegooseName"> & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction)[]>;
    deleteTask(id: any): Promise<import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, TaskModel> & Omit<TaskModel & Required<{
        _id: Types.ObjectId;
    }>, "typegooseName"> & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction>;
    updateById(id: string, task: TaskDto): Promise<import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, TaskModel> & Omit<TaskModel & Required<{
        _id: Types.ObjectId;
    }>, "typegooseName"> & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction>;
}
