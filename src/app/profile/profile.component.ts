import { Component, OnInit } from '@angular/core';
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
   empId$: Observable<number> = this.activatedRoute.params.pipe(
    map((params: Params)=> parseInt(params['id']))
  )

  emp$ : Observable<Employee> = this.empId$.pipe(
    switchMap((empId:number)=>
      this.es.getEmpById(empId)
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
