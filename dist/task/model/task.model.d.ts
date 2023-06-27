import { Base, TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";
import { Types } from "mongoose";
export interface TaskModel extends Base {
}
export declare class TaskModel extends TimeStamps {
    title: string;
    status: string;
    image?: {
        bucketId: string;
        fileId: string;
    };
    userId: Types.ObjectId;
}
