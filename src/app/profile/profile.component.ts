import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {EmployeeService} from "../services/Employee/employee.service";
import {map, Observable, switchMap} from "rxjs";
import {Employee} from "../models/Employee";


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  searchText = '';
  term = '';
   empName$: Observable<string> = this.activatedRoute.params.pipe(
    map((params: Params)=> params['name'])
  )

  emp$ : Observable<Employee> = this.empName$.pipe(
    switchMap((empName:string)=>
      this.es.getEmpByName(empName)
    )
  )
  constructor(private activatedRoute: ActivatedRoute, private es: EmployeeService) {}
  emp:any;

   ngOnInit(): void {
   /* this.activatedRoute.queryParams.subscribe(params =>{
      console.log(params)
      console.log(params['id'])
    });*/

  }

}
