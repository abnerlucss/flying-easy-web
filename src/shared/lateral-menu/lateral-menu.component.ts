import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


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
      isEnable: true,
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
      route: "#"
    },
    {
      id: 4,
      src: "../../assets/icons/people.svg",
      label: "Passageiros",
      isEnable: false,
      route: "#"
    }
  ]

  constructor(private router:Router) { }

  ngOnInit() {
  }

  enableOption(option) {
    this.listOptions.map(element => {
      element.isEnable = (element.id == option.id)
    })
    this.router.navigate([option.route])
  }

  toggleLeftNav(){
    this.isLeftNavExpanded = !this.isLeftNavExpanded;
    this.srcToggleArrow = this.isLeftNavExpanded ? "../../assets/icons/arrow_left.svg" : "../../assets/icons/arrow_right.svg";
  }
}
