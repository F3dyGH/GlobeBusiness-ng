import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Feedback} from "../../models/Feedback";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RatingsService {

  constructor(private http:HttpClient) { }
  private baseURL = "http://localhost:8082/GlobeBusiness";
  addFeedback(feedback:Feedback): Observable<Feedback> {
    return this.http.post<Feedback>(this.baseURL + '/feedback', feedback);
  }
}
