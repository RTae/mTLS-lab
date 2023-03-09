import { ExecutionContext } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'

export class AuthAccessGuardMTLS extends AuthGuard('mtls') {
  getRequest(context: ExecutionContext): any {
    return context.switchToHttp().getRequest()
  }
}
