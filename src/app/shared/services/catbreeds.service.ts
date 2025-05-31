import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Catbreeds } from '../utils/cat.interface';

@Injectable({
  providedIn: 'root'
})
export class CatbreedsService {
  private http = inject(HttpClient);
  private apiUrl = environment.apiUrl;

  getAllCatBreeds(limit:number,page:number): Observable<any> {
    return this.http.get<Catbreeds[]>(this.apiUrl + `/breeds?limit=${limit}&page=${page}`);
  }

  searchByName(name: string): Observable<any> {
    return this.http.get<Catbreeds[]>(this.apiUrl +`/breeds/search?q=${name}&attach_image=1`);
  }
}
