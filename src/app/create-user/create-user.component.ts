import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  fb: FormBuilder;
  userForm: any;
  constructor(private userService:UserService,private route:Router) {
    this.fb = new FormBuilder()
  }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      'username': this.fb.control("",[Validators.required]),
      'email': this.fb.control("",[Validators.required,Validators.email]),
      'phone': this.fb.control(""),
      'country': this.fb.control("")
    })
  }

  submit(){
    if(this.userForm.valid){
      console.log(this.userForm.value)
      this.userService.createUser(this.userForm.value).subscribe((data) => {
        this.route.navigate(["/user"])
      })
    }else{
      alert("Form is not valid")
    }
  }


  // Componet Directives
  // Structural Directives
  // Attribute Directives

}
