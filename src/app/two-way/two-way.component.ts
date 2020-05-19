import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way',
  templateUrl: './two-way.component.html',
  styleUrls: ['./two-way.component.css']
})
export class TwoWayComponent implements OnInit {

  superheroes = [
    {
      name: "batman",
      imageUrl: "https://sm.ign.com/ign_es/screenshot/default/thebatman1_ggb7.jpg"
    },
    {
      name: "sprocketman",
      imageUrl: "https://www.ciclosfera.com/wp-content/uploads/2019/07/sprocket-man-ciclosfera.jpg"
    },
    {
      name: "wonder woman",
      imageUrl: "https://i.blogs.es/fc7807/wonder-woman0/2560_3000.jpg"
    },
    {
      name: "northstar",
      imageUrl: "https://static0.cbrimages.com/wordpress/wp-content/uploads/2017/03/X-Men-Northstar.jpg?q=50&fit=crop&w=960&h=500&dpr=1.5"
    },
    {
      name: "superlopez",
      imageUrl: "https://www.race.es/revista-autoclub/wp-content/uploads/sites/4/2018/09/superlopez-45-anos-entre-el-humor-y-la-reivindicacion-759x500.png"
    }
  ];
  
  name: string;

  ngOnInit(): void {
  }

}
