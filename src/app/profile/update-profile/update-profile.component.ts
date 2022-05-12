import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {EmployeeService} from "../../services/Employee/employee.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Employee} from "../../models/Employee";
import {ReactiveFormsModule} from "@angular/forms";

export interface File {
  data: any;
  progress: number;
  inProgress: boolean;
}

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {
  empName! : string;
  emp : Employee = new Employee();
  parameters:any;
  loadingButtons = [
    {
      name: 'primary',
      loading: false,
    }
  ];
  constructor( private es : EmployeeService, private activatedRoute: ActivatedRoute, private router:Router){}
  @ViewChild("fileUpload", {static: false}) fileUpload!: ElementRef;

  file: File =  {
    data: null,
    inProgress: false,
    progress: 0
  };

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
        this.parameters=params['name']
      }

    )
    this.getEmployee(this.parameters);

  }

  onSubmit() {
    this.es.updateOne(this.emp).subscribe();
    this.router.navigate(["/employee/" + this.emp.name]);

     }
  getEmployee(name :string){
    this.es.getEmpByName(name).subscribe(
      res=>{this.emp=res}
    )
  }

  showLoading(btn: { loading: boolean; }) {
    btn.loading = true;

    setTimeout(() => {
      btn.loading = false;
      this.es.updateOne(this.emp).subscribe();
      this.router.navigate(["/success/"])
    }, 3000);

  }

}
