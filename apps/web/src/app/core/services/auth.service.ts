import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '@dev/domain';
import { HttpResponse } from '@dev/types';
import { catchError, map, Observable, ReplaySubject } from 'rxjs';
import { Response } from '../types/response';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _userData: ReplaySubject<User> = new ReplaySubject(null);

  constructor(private _http: HttpClient) {}

  register(phone: string | number) {
    return this._http.post<HttpResponse>('v1/auth/register', { phone }).pipe(
      map((data) => {
        return data.data;
      }),
      catchError((err) => {
        throw `error via catching user code; ${err}`;
      })
    );
  }

  getUser(token: string) {
    this._http
      .post<Response<User>>('v1/auth/', {
        token,
      })
      .pipe(
        map((data) => {
          return data.data;
        })
      )
      .subscribe((data) => {
        this._userData.next(data);
      });
  }

  sendConfirmCode(userId: string, code: string) {
    return this._http
      .post<Response<User>>('v1/code/send', {
        userId,
        code,
      })
      .pipe(
        map((data) => {
          if (data.data.token) {
            localStorage.setItem('appLoginToken', data.data.token);
            sessionStorage.setItem('appLoginToken', data.data.token);
          }
          return data.data.token;
        }),
        catchError((err) => {
          throw 'error in source. Details: ' + err;
        })
      );
  }

  get $getUser(): Observable<User> {
    return new Observable((fn) => this._userData.subscribe(fn));
  }

  // get instantUser() {
  //   return this._userData.value;
  // }
}
