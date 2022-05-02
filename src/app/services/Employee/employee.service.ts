import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Employee} from "../../models/Employee";
import {map, Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }
  private baseURL = "http://localhost:8082/GlobeBusiness";

  getEmpByName(name: string): Observable<Employee> {
    return this.http.get<Employee>(this.baseURL + '/employee/'+ name).pipe(
      map((emp:Employee)=>emp)
    );
    // getCompanyByEmp(name: string): Observable<Company>{
    //   return
    // }
  }
  updateOne(emp:Employee) : Observable<Employee>{
    return this.http.put<Employee>(this.baseURL + '/employee/' + emp.name + '/edit', emp)
  }
}
