import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TeamsService} from '../../services/teams.service';

@Component({
  selector: 'app-team-form',
  templateUrl: './team-form.component.html',
  styleUrls: ['./team-form.component.css']
})
export class TeamFormComponent implements OnInit {

  data:any[0]=[{
    name:"",
    wins:0,
    ties:0,
    loses:0
  }];

  ids: any;
  constructor(private teamsService: TeamsService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    
   const parametros = this.route.snapshot.params;
    this.ids=parametros.id;

    this.teamsService.getTeam(parametros.id).subscribe(
      res=> {
        this.data=res;
        console.log(this.data[0].name);
      }, 
      err=> console.error(err));
  }

  update():void{
    this.teamsService.updateTeam(this.ids,this.data[0]).subscribe(
      res=> {
        console.log(this.data[0]);
      }, 
      err=> console.error(err));


  }

  delete():void{
    this.teamsService.deleteTeam(this.ids).subscribe(
      res=> {
        console.log(this.data[0]);
      }, 
      err=> console.error(err));


  }

}
