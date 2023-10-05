import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  intercept(req: HttpRequest<HttpHeaders>, next: HttpHandler): Observable<HttpEvent<HttpHeaders>> {
    const headers : HttpHeaders = new HttpHeaders().set('x-api-key', 'asd$lkfd%jecL90ko');
    req = req.clone({ headers });
    return next.handle(req);
  }
}
