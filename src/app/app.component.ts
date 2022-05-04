import { Component, OnInit } from "@angular/core";
import { AuthService } from "./lib/services/auth.service";
import { environment } from "src/environments/environment";
import { BeyondService } from "./lib/services/beyond.service";

@Component({
  selector: "eg-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  public beyondValue: boolean;

  constructor(public auth: AuthService, private beyond: BeyondService) {}

  ngOnInit() {
    if (
      localStorage.getItem("beyondActive") &&
      localStorage.getItem("beyondActive") == "1"
    ) {
      this.beyond.changeBeyond(true);
    } else {
      this.beyond.changeBeyond(false);
    }
  }

  doBeforeUnload() {
    if (environment.production) {
      return false;
    }
  }
}
