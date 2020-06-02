import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable,} from 'rxjs'
import {map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class OmdbService {
  apiKey='9e362d98'

  constructor(private http: HttpClient) { 
  }

  getOmdbTitle(titulo): Observable<any>{
    return  this.http.get(`http://www.omdbapi.com/?s=${titulo}&apikey=9e362d98`)
  }
  


  getOmdbDetail(id): Observable<any>{
      return this.http.get(`http://www.omdbapi.com/?i=${id}&plot=full&apikey=9e362d98`)
  }

    

}
