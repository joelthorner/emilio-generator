import { Component, OnInit } from "@angular/core";
import { environment } from "../../../../environments/environment";
import { BeyondService } from "../../services/beyond.service";
declare var require: any;

@Component({
  selector: "eg-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  public title = environment.title;
  public version = require("../../../../../package.json").version;
  public beyondValue: boolean;

  constructor(private beyond: BeyondService) {}

  ngOnInit() {
    this.beyond.currentBeyond.subscribe((beyondValue) => {
      this.beyondValue = beyondValue;
    });
  }
}
