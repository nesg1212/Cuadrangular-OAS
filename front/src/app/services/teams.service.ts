import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Team} from '../Models/Team'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  API_URI= 'http://localhost:3000/api'

  constructor(private http:HttpClient) { 
   }

   getTeams(){
     return this.http.get(this.API_URI+'/teams');
   }

   getTeam(id: string){
    return this.http.get(this.API_URI+'/teams/'+id);
  }

  deleteTeam(id: string){
    return this.http.delete(this.API_URI+'/teams/'+id);
  }

  saveTeam(team: Team){
    return this.http.post(this.API_URI+'/teams', team);
  }

  updateTeam(id: string, updatedTeam: Team): Observable<Team> {
    return this.http.put(this.API_URI+'/teams/'+id,updatedTeam);
  }


}
