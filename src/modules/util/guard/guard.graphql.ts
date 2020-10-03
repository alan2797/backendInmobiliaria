import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
// import { GqlExecutionContext } from '@nestjs/graphql';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    //const ctx = GqlExecutionContext.create(context);
    const args = context.getArgs();
    let sw = false;
    args.forEach(e => {
      if (e && !sw) {
        const keys = Object.keys(e);
        if (keys.length > 0 && e['req']) {
          if (e['req'].headers.user) {
            sw = true;
          }
        }
      }
    });
    return sw;
  }
}
