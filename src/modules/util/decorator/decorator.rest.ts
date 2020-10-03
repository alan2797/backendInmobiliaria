import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const UserPayload = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const user = JSON.parse(ctx.switchToHttp().getRequest().headers.user);
    return data ? user[data] : user;
  },
);
