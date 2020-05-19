import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  superheroes = [
    {
      name: "batman",
      alterEgo: "bruce wayne",
      superpowers: ["genius intellect", "vast wealth", "indomitable will"]
    },
    {
      name: "sprocketman",
      alterEgo: "",
      superpowers: ["throws sprockets"]
    },
    {
      name: "wonder woman",
      alterEgo: "Princess Diana of Themyscira",
      superpowers: ["superhuman strength", "fly", "uses boomerang tiara"]
    },
    {
      name: "northstar",
      alterEgo: "Jean-Paul Beaubier",
      superpowers: ["superhuman speed", "fly", "project photonic blasts"]
    },
    {
      name: "superlopez",
      alterEgo: "Juan López Fernández",
      superpowers: ["superhuman strength", "flight", "X-ray vision"]
    }
  ];
  
  ngOnInit(): void {
  }

}
