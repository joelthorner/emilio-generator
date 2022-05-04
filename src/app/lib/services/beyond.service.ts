import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { AppData } from 'src/app/data/app-data';

@Injectable({
  providedIn: "root",
})
export class BeyondService {
  private beyondSource = new BehaviorSubject(false);
  currentBeyond = this.beyondSource.asObservable();

  constructor(public appData: AppData) {}

  changeBeyond(beyond: boolean) {
    this.beyondSource.next(beyond);
    localStorage.setItem("beyondActive", beyond === true ? "1" : "0");
  }
}
