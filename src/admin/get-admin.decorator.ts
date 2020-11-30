import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { AdminEntity } from './admin.entity';


export const GetAdmin = createParamDecorator(
    (data: unknown, ctx: ExecutionContext): AdminEntity => {
        const request = ctx.switchToHttp().getRequest();
        return request.admin;
    },
);
