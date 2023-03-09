import { Injectable } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { AuthService } from 'src/authentication/auth.service'
import { PeerCertificate, Strategy } from 'passport-client-cert'

@Injectable()
export class MTLSStrategy extends PassportStrategy(Strategy, 'mtls') {
  constructor(private readonly authService: AuthService) {
    super()
  }

  async validate(clientCert: PeerCertificate): Promise<string> {
    const result = await this.authService.verify(clientCert)
    if (result instanceof Error) throw result

    return result
  }
}
