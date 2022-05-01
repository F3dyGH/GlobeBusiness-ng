import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Employee} from "../../models/Employee";
import {map, Observable} from "rxjs";
import {Company} from "../../models/Company";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }
  private baseURL = "http://localhost:8082/GlobeBusiness";

  getEmpById(id: number): Observable<Employee> {
    return this.http.get<Employee>(this.baseURL + '/employee/'+ id).pipe(
      map((emp:Employee)=>emp)
    );
    // getCompanyByEmp(name: string): Observable<Company>{
    //   return
    // }
  }
}
