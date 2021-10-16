import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { element } from 'protractor';


@Component({
  selector: 'app-lateral-menu',
  templateUrl: './lateral-menu.component.html',
  styleUrls: ['./lateral-menu.component.scss']
})
export class LateralMenuComponent implements OnInit {

  public isLeftNavExpanded = true;
  public srcToggleArrow = "../../assets/icons/arrow_left.svg";

  public listOptions: any = [
    {
      id: 1,
      src: "../../assets/icons/home.svg",
      label: "Home",
      isEnable: false,
      route: "/home"
    },
    {
      id: 2,
      src: "../../assets/icons/plane.svg",
      label: "Voos",
      isEnable: false,
      route: "/voos"
    },
    {
      id: 3,
      src: "../../assets/icons/report.svg",
      label: "Embarques",
      isEnable: false,
      route: "/embarques"
    },
    {
      id: 4,
      src: "../../assets/icons/people.svg",
      label: "Passageiros",
      isEnable: false,
      route: "/passageiros"
    }
  ]

  constructor(private router: Router) { 
    this.router.events.subscribe((event) => {
      if(event instanceof NavigationEnd) {
      this.listOptions.map(element => {
        element.isEnable = event.url == element.route
      })
      }
    })
  }

  ngOnInit() {
    
  }

  enableOption(option) {
    this.listOptions.map(element => {
      element.isEnable = (element.id == option.id)
    })
    
    this.router.navigate([option.route])
  }

  toggleLeftNav() {
    this.isLeftNavExpanded = !this.isLeftNavExpanded;
    this.srcToggleArrow = this.isLeftNavExpanded ? "../../assets/icons/arrow_left.svg" : "../../assets/icons/arrow_right.svg";
  }
}
