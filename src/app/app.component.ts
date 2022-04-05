import { Component } from '@angular/core';
import { MissionlistService } from './missionlist.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'id101277205-labtest2-comp3133';

  data:any;

  constructor(private postData: MissionlistService){}

  ngOnInit()
  {
    this.postData.getPosts().subscribe((result)=> {
      this.data=result
    })

  }
}
