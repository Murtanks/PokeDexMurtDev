import { HttpClient } from '@angular/common/http';
import {Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PokeDataService {

    baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getPokemons(index: number){
    return this.http.get<any>(`${this.baseUrl}/pokemon/${index}`)
  }
}
