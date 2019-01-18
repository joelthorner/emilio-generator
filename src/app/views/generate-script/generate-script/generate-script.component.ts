import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppData } from 'src/app/data/app-data';

@Component({
  selector: 'eg-generate-script',
  templateUrl: './generate-script.component.html',
  styleUrls: ['./generate-script.component.scss']
})
export class GenerateScriptComponent implements OnInit {

  public langKey: string;
  public langData: any;

  constructor(private route: ActivatedRoute, public appData: AppData) { }

  ngOnInit() {
    this.langKey = this.route.snapshot.params['langKey'];
    this.langData = this.appData.getLanguage(this.langKey);
  }

}
