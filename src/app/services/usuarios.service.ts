import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  constructor(private http: HttpClient) {}

  obtenerUsuarios() {
    let params = new HttpParams().append('page', '2');
    params = params.append('nombre', 'juan');

    return this.http
      .get(`https://reqres.inX/api/user`, {
        params,
        // headers
      })
      .pipe(
        map((resp: any) => resp.data),
      );
  }


}
