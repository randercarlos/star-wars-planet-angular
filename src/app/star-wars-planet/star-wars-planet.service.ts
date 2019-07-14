import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class StarWarsPlanetService {

  private partialPath = 'planets';
  private path = environment.apiUrl + this.partialPath;

  constructor(private http: HttpClient) { }

  public getPlanetById(idPlanet: number): Observable<Object> {
    return this.http.get(`${this.path}/${idPlanet}`);
  }

  public getAllPlanets(): Observable<Object> {
    return this.http.get(`${this.path}`);
  }
}
