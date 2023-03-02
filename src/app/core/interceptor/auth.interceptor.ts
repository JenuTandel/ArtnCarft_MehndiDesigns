import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    let currentUserToken = localStorage.getItem('user')!;

    if (!request.url.endsWith('login')) {
      request = request.clone({
        setHeaders: {
          Authorization: `Basic ${currentUserToken}`,
        },
      });
    }
    return next.handle(request);
  }
}
