import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction } from 'express';

@Injectable()
export class VerifyAuth implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(req);
  }
}
