import { Logger, Injectable, UnauthorizedException } from '@nestjs/common'
import { PeerCertificate } from 'passport-client-cert'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class AuthService {
  private readonly whitelistedCns: string[] = []
  constructor(private logger: Logger, private config: ConfigService) {
    this.logger = new Logger('Auth Service')
    this.whitelistedCns.push(
      ...this.config.get<string>('MTLS.WHITELISTED_CN').split(','),
    )
  }

  /**
   * If the client certificate's common name is not in the whitelist, throw an error
   * @param {PeerCertificate} clientCert - PeerCertificate - The client certificate that was sent to the
   * server.
   * @returns A promise that resolves to void or an error.
   */
  async verify(clientCert: PeerCertificate): Promise<string | Error> {
    const cn = clientCert && clientCert.subject && clientCert.subject.CN
    if (!this.whitelistedCns.includes(cn)) {
      this.logger.error(
        'Unauthorized: Client cert cn : %s is not whitelisted',
        cn,
      )
      return new UnauthorizedException()
    }

    return cn
  }
}
