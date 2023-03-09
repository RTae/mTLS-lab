import { Module, Logger } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AuthService } from 'src/authentication/auth.service'
import { configModuleConfig } from 'src/configs/config.module'
import { MTLSStrategy } from 'src/authentication/strategies/mtls.strategy'

@Module({
  imports: [ConfigModule.forRoot(configModuleConfig)],
  providers: [Logger, AuthService, MTLSStrategy],
  exports: [AuthService],
})
export class AuthModule {}
