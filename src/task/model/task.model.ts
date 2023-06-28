import { Severity, modelOptions, prop } from "@typegoose/typegoose";
import { Base, TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";
import { Types } from "mongoose";


export interface TaskModel extends Base {}
@modelOptions({
    options:{
        allowMixed:Severity.ALLOW
    }
})
export class TaskModel extends TimeStamps {

    @prop()
    title:string;

    @prop()
    status:string;

    @prop()
    image?: { bucketId:string,fileId:string}
    


    @prop()
    userId: Types.ObjectId;

}