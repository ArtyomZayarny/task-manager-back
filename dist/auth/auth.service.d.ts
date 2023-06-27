import { UserModel } from "./user.model";
import { ModelType } from "@typegoose/typegoose/lib/types";
import { AuthDto } from "./dto/auth.dto";
import { JwtService } from "@nestjs/jwt";
import { Types } from "mongoose";
export declare class AuthService {
    private readonly userModel;
    private jwtService;
    constructor(userModel: ModelType<UserModel>, jwtService: JwtService);
    findUser(email: string): Promise<any>;
    validateUser(email: string, password: string): Promise<Pick<UserModel, "email" | "_id">>;
    login(email: string, userId: Types.ObjectId): Promise<{
        access_token: any;
        userId: Types.ObjectId;
    }>;
    createUser(dto: AuthDto): Promise<{
        access_token: any;
        userId: Types.ObjectId;
    }>;
}
