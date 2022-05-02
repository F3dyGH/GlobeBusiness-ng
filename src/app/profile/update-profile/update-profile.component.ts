import { Component, OnInit } from '@angular/core';
import {EmployeeService} from "../../services/Employee/employee.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {map, Observable, switchMap} from "rxjs";
import {Employee} from "../../models/Employee";
import {FormBuilder, FormGroup, Validator, Validators} from "@angular/forms";
import {stringify} from "@angular/compiler/src/util";

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {
  empName! : string;
  emp : Employee = new Employee();
  parameters:any;

  constructor( private es : EmployeeService, private activatedRoute: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
        this.parameters=params['name']
      }

    )
    this.getEmployee(this.parameters);

  }

  onSubmit() {
    this.es.updateOne(this.emp).subscribe();
    alert("Infos Updated Successfully");
    this.router.navigate(["/employee/" + this.emp.name]);

  }
  getEmployee(name :string){
    this.es.getEmpByName(name).subscribe(
      res=>{this.emp=res}
    )
  }
}
