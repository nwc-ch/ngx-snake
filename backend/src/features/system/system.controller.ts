import { Controller, Get, Logger } from '@nestjs/common';
import { PingResponse } from './model/ping.response';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import {RealIp} from "nestjs-real-ip";

@Controller('/api/v1/system')
@ApiTags('system')
export class SystemController {
  logger = new Logger(SystemController.name);

  @Get('/ping')
  @ApiOkResponse({
    type: PingResponse,
    description: 'check endpoint for be if running',
  })
  async ping(@RealIp() ip: string): Promise<PingResponse> {
    this.logger.log('/api/v1/system/ping from ' + ip);
    return Promise.resolve({ pong: Date.now() });
  }
}
