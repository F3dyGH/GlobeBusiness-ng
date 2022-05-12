import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Complaint} from "../../models/Complaint";

@Injectable({
  providedIn: 'root'
})
export class ComplaintService {

  constructor(private http:HttpClient) { }
  private baseURL = "http://localhost:8082/GlobeBusiness/"

  getComplaint(id:number): Observable<Complaint>{
    return this.http.get<Complaint>(this.baseURL + '/my-complaints/' + id).pipe(
     map((complaint:Complaint)=>complaint)
    );
  }
  addComplaint(comp:Complaint): Observable<Complaint>{
    return this.http.post<Complaint>(this.baseURL + '/complaint', comp).pipe(
      map((complaint:Complaint)=>complaint)
    );
  }

  deleteComplaint(compId: Observable<number>): Observable<Complaint>{
    return this.http.delete<Complaint>(this.baseURL + '/delete-complaint/' + compId)
  }
}
