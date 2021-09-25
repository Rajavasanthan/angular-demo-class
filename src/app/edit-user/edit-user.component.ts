import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  fb: FormBuilder;
  userForm: any;
  userData:any;
  constructor(private userService:UserService,private activeRoute:ActivatedRoute,
    private router:Router) {
    this.fb = new FormBuilder()
  }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      'username': this.fb.control("",[Validators.required]),
      'email': this.fb.control("",[Validators.required,Validators.email]),
      'phone': this.fb.control(""),
      'country': this.fb.control("")
    })
    let currentUserId = this.activeRoute.snapshot.params.id;

    this.userService.getUserById(currentUserId).subscribe((data) => {
      this.userData = data;
      this.userForm.patchValue(data)
    })

  }

  submit(){
    if(this.userForm.valid){
      console.log(this.userForm.value)
      this.userService.updateUser(this.activeRoute.snapshot.params.id,this.userForm.value).subscribe((data) => {
        this.router.navigate(["/user"])
      })
    }else{
      alert("Form is not valid")
    }
  }

}
