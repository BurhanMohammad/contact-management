import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { contact, contactus } from './component/contactmodel'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  // post method
  addcontact(data: contact) {
    return this.http.post<contact>("http://localhost:3000/posts", data)
  }
  // get method
  getcontact(){
    return this.http.get<contact[]>("http://localhost:3000/posts")
  }
  //delete
  deletecontact(id:number){
    return this.http.delete<contact>("http://localhost:3000/posts/"+id)
  }
  // fetching data on edit
  fetchdata(id:number){
   return this.http.get<contact>("http://localhost:3000/posts/"+id)
  }
  //update data
  updatecontact(data:contact,id:number){
   return this.http.put<contact>("http://localhost:3000/posts/"+id,data)
  }

  // contact us 
  contactus(data:contactus){
    return this.http.post<contactus>("http://localhost:3000/contactus", data)
  }

  // get contact us
  displaycontactus(){
    return this.http.get<contactus[]>("http://localhost:3000/contactus")
  }

  deletequery(id:number){
    return this.http.delete<contact>("http://localhost:3000/contactus/"+id)
  }
}
