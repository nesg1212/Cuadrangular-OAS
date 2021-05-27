import { Component, OnInit } from '@angular/core';
import {Team} from '../../Models/Team'
import {TeamsService} from '../../services/teams.service'

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {

  team: Team={
    name:"",
    wins:0,
    ties:0,
    loses:0
  };

  constructor(private teamservices:TeamsService) {
   }

  ngOnInit(): void {
  }

  add():void{

    this.teamservices.saveTeam(this.team).subscribe(
      res=> {
        console.log(this.team);
      }, 
      err=> console.error(err));


    
  }

}
