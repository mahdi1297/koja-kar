import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Job } from '@dev/domain';
import { Observable } from 'rxjs';
import { Response } from '../types/response';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  constructor(private _http: HttpClient, private _apiService: ApiService) {}

  getJobList() {
    return this._apiService.get<Job[]>('v1/job');
  }

  getJobDetail(id: string): Observable<Response<Job>> {
    return this._apiService.get<Response<Job>>(`v1/job/${id}`);
  }
}
