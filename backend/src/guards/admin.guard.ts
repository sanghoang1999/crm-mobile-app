import { Injectable, CanActivate, ExecutionContext, HttpException, HttpStatus, Inject } from "@nestjs/common";
import * as jwt from 'jsonwebtoken';
import { AdminService } from "src/admin/admin.service";
import { getRepository } from "typeorm";
import { AdminEntity } from '../admin/admin.entity';

@Injectable()
export class AdminGuard implements CanActivate {
    constructor() { }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        if (!request.headers.authorization) {
            return false
        }
        request.token = await this.validateToken(request.headers.authorization)


        request.admin = getRepository(AdminEntity).findOne({userName:request.token.userName})
        return true
    }

    async validateToken(auth: string) {
        if (auth.split(' ')[0] !== 'Bearer') {
            throw new HttpException('Invalid token', HttpStatus.FORBIDDEN)
        }
        const token = auth.split(' ')[1]
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            return decoded
        } catch (error) {
            if (error.name == "TokenExpiredError") {
                throw new HttpException(error.name, HttpStatus.NOT_ACCEPTABLE)
            }
            const message = 'Token error: ' + (error.message || error.name)
            throw new HttpException(message, HttpStatus.FORBIDDEN)
        }
    }
}