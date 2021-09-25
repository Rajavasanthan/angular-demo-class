import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getUsers(){
    return this.http.get("https://5cdd0a92b22718001417c19d.mockapi.io/api/users")
  }

  createUser(userData:any){
    return this.http.post("https://5cdd0a92b22718001417c19d.mockapi.io/api/users",userData)
  }

  getUserById(id:number){
    return this.http.get(`https://5cdd0a92b22718001417c19d.mockapi.io/api/users/${id}`)
  }

  updateUser(id:number,data:any){
    return this.http.put(`https://5cdd0a92b22718001417c19d.mockapi.io/api/users/${id}`,data)
  }

  deleteUserById(id:number){
    return this.http.delete(`https://5cdd0a92b22718001417c19d.mockapi.io/api/users/${id}`)
  }
}
