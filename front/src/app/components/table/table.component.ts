import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/Models/Team';
import {TeamsService} from '../../services/teams.service'


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  data: any = [];
  points: any=[];


  constructor(private teamsService: TeamsService) { 
  }

  ngOnInit(): void {
    this.teamsService.getTeams().subscribe(
      res=> {
        this.data=res;
        this.cal_points();
      }, 
      err=> console.error(err));
  }

  edit(id: string):void{
    console.log(id);
  }

  public cal_points(){

    for(let i=0;i<this.data.length;i++){
      this.data[i].puntos=this.data[i].wins*3+this.data[i].ties*1;
    }
    
    let f=this.data.sort(function (a:any, b:any) {
      if (a.puntos < b.puntos) {
        return 1;
      }
      if (a.puntos > b.puntos) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });



    console.log(f);

  }

}
