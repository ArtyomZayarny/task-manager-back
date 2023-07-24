import { ConfigService } from '@nestjs/config';
import { UserModel } from '../user.model';
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly configService;
    constructor(configService: ConfigService);
    validate({ email }: Pick<UserModel, 'email'>): Promise<string>;
}
export {};
