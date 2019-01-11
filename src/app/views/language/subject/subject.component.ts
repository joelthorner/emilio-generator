import { Component, OnInit, Input } from '@angular/core';
import { AppData } from 'src/app/data/app-data';

@Component({
  selector: 'eg-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {

  @Input() contentKey: any;
  @Input() value: any;
  @Input() langKey: any;

  constructor(private appData: AppData) { }

  ngOnInit() {
  }

  changeSubject(langKey: any, contentKey: any, value: any) {
    this.appData.setStringVal(langKey, contentKey, value);
  }

}
