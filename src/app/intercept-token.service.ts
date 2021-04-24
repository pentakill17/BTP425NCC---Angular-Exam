import { Injectable } from '@angular/core';

import {
  HttpEvent,
  HttpInterceptor,
  HttpRequest,
  HttpHandler,

} from '@angular/common/http';
import { AuthService } from './auth-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InterceptTokenService {
  constructor(private ser: AuthService) {}

  intercept(
    req: HttpRequest<any>,
    handler: HttpHandler
  ): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        Authorization: `JWT ${this.ser.getToken()}`,
      },
    });
    return handler.handle(req);
  }
}
