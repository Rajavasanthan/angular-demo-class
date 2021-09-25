import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userData: any;
  constructor(private userSerive: UserService) { }

  ngOnInit(): void {
    this.loadData()
  }

  loadData() {
    this.userSerive.getUsers().subscribe((data) => {
      this.userData = data;
    })
  }

  deleteData(id: number) {
    let res = confirm("Are you sure do you want to delete?")
    if(res){
      this.userSerive.deleteUserById(id).subscribe(() => {
        this.loadData()
      })
    }
  }

}
