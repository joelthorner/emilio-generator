import { Component, OnInit } from "@angular/core";
import { AppData } from "src/app/data/app-data";
import { Router } from "@angular/router";

@Component({
  selector: "eg-languages-list",
  templateUrl: "./languages-list.component.html",
  styleUrls: ["./languages-list.component.scss"],
})
export class LanguagesListComponent implements OnInit {
  public objectKeys = Object.keys;

  constructor(public appData: AppData, public router: Router) {}

  ngOnInit() {}
}
