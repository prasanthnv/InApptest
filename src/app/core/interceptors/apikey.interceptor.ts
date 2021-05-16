import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
@Injectable()
export class ApiKeyInterceptor implements HttpInterceptor {
  constructor() {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (request.url.indexOf(environment.apiBaseUrl) != -1) {
      // if request has baseURl appending the api key with it
      let params = request.params;
      params = params.append('api-key',environment.apiKey)
      request = request.clone({
        params: params
      });
    }
    return next.handle(request);
  }
}
