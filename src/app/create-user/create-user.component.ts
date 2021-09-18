import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  fb: FormBuilder;
  userForm: any;
  constructor() {
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
    }else{
      alert("Form is not valid")
    }
  }


  // Componet Directives
  // Structural Directives
  // Attribute Directives

}
