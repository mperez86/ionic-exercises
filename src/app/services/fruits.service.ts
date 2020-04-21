import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fruit } from '../models/fruit.model';
import { environment } from '../../environments/environment';

@Injectable()
export class FruitsService {

  private fruitsPath = 'fruits';

  constructor(private httpClient: HttpClient) { }

  public getFruits(): Observable<Fruit[]> {
    return this.httpClient.get<Fruit[]>(
      `${environment.urlRoot}/${this.fruitsPath}`
    );
  }
    
  public getFruit(id: number): Observable<Fruit> {
    return this.httpClient.get<Fruit>(
      `${environment.urlRoot}/${this.fruitsPath}/${id}`
    );
  }
}
