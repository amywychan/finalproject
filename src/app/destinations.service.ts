import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DestinationsService {

  uri='https://morning-temple-35412.herokuapp.com';

  constructor(private http: HttpClient) { }

  getDestinations() {
    return this
          .http
          .get(`${this.uri}/destinations`);
  }

  getDestinationsById(id){
    return this
          .http
          .get(`${this.uri}/destinations/${id}`);
  } 

  likeDestinations(id){
    return this
          .http
          .get(`${this.uri}/destinations/like/${id}`);
  } 

  getDestinationsByPref(pref){
    return this
          .http
          .get(`${this.uri}/destinations/${pref}`);
  } 
}
