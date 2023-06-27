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
import { UserModel } from "./user.model";
import { ModelType } from "@typegoose/typegoose/lib/types";
import { AuthDto } from "./dto/auth.dto";
import { JwtService } from "@nestjs/jwt";
import { Types } from "mongoose";
export declare class AuthService {
    private readonly userModel;
    private jwtService;
    constructor(userModel: ModelType<UserModel>, jwtService: JwtService);
    findUser(email: string): Promise<import("mongoose").Document<unknown, import("@typegoose/typegoose/lib/types").BeAnObject, UserModel> & Omit<UserModel & Required<{
        _id: Types.ObjectId;
    }>, "typegooseName"> & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction>;
    validateUser(email: string, password: string): Promise<Pick<UserModel, "email" | "_id">>;
    login(email: string, userId: Types.ObjectId): Promise<{
        access_token: string;
        userId: Types.ObjectId;
    }>;
    createUser(dto: AuthDto): Promise<{
        access_token: string;
        userId: Types.ObjectId;
    }>;
}
