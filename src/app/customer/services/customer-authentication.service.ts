import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import{UserDetails} from '../configs/user-details.config';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};
@Injectable()
export class CustomerAuthenticationService {

  constructor(private http : Http) { }
  private headers = new Headers({ 'Content-Type': 'application/json'});

getUserDetails(mobileNumber : String){
  return this.http.get(UserDetails.url + mobileNumber)
     .map(data => data.json(),
   (error: any)=>this.handleError(error));
   }
   private handleError(error: Response){
    alert("mobile number not registered");
     return Observable.throw(error.statusText);
     
   }

  updatePassword(customerId : String,updatedInfo){
    return this.http.put(UserDetails.updatePasswordUrl+customerId,updatedInfo, {headers: this.headers})
    .map(data => data.json(),
    (error: any)=>this.handleError(error));
    }

    deleteProfile(customerId : String){
      return this.http.delete(UserDetails.deleteProfileUrl+customerId, {headers: this.headers});
     
  }


}