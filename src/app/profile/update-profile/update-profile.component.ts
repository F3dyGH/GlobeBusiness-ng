import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {EmployeeService} from "../../services/Employee/employee.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Employee} from "../../models/Employee";

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

  onSubmit(/*{content}: { content: any }*/) {
    //const formData = new FormData();
    //formData.append('file', this.file.data);
    //this.file.inProgress = true;

    //this.es.uploadProfileImage(formData).pipe(
     /* map((event) => {
        switch (event.type) {
          case HttpEventType.UploadProgress:
            this.file.progress = Math.round(event.loaded * 100 / event.total);
            break;
          case HttpEventType.Response:
            return event;
        }
      }),*/
     /* catchError((error: HttpErrorResponse) => {
        this.file.inProgress = false;
        return of('Upload failed');
      })).subscribe((event: any) => {
      if(typeof (event) === 'object') {
        this.form.patchValue({profileImage: event.body.profileImage});
      }
    })*/

    this.es.updateOne(this.emp/*, formData*/).subscribe( /*map((event) => {
      switch (event.type) {
        case HttpEventType.UploadProgress:
          this.file.progress = Math.round(event.loaded * 100 / event.total);
          break;
        case HttpEventType.Response:
          return event;
      }
    }),*/);

    alert("Infos Updated Successfully");
    this.router.navigate(["/employee/" + this.emp.name]);

     }
  getEmployee(name :string){
    this.es.getEmpByName(name).subscribe(
      res=>{this.emp=res}
    )
  }
  /*OnSelect(event){
    if (event.target.files.length>8){
      const file = event.target.files(0);
      this.image = file;
      // this.f['profile']. setvalue(file);
      var mimeType=event.target.files[0].type;
      if (mimeType.match(/image\/!*!/) == null){
        this.toastr.success('Only inages are supported. ');
        return;}

      var reader = new FileReader();
      this.imagePath = file;
      reader.readAsDataURL (file);
      reader.onload = (event) ->{
      }
*/

}
