import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { AuthInterceptor } from './auth.interceptor';

@Injectable()
export class FakebackendInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    let testUser = { id: 3, contactNumber: '9898787898', password: '12345678' };

    let currentUserToken = localStorage.getItem('userToken')!;

    if (!request.url.endsWith('login')) {
      request = request.clone({
        setHeaders: {
          Authorization: `Basic ${currentUserToken}`,
        },
      });
    }

    if (request.url.endsWith('login') && request.method == 'POST') {
      if (
        request.body.contactNumber == testUser.contactNumber &&
        request.body.password == testUser.password
      ) {
        let body = {
          id: testUser.id,
          contactNumber: testUser.contactNumber,
        };
        return of(new HttpResponse({ status: 200, body }));
      } else {
        // else return 400 bad request
        return throwError({
          error: { message: 'contactNumber or password is incorrect' },
        });
      }
    }
    return next.handle(request);
  }
}
export let fakeBackendProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: FakebackendInterceptor,
  multi: true,
};
