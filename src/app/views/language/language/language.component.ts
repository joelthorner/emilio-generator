import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppData } from 'src/app/data/app-data';
// import { EditorComponent } from '../editor/editor.component';

@Component({
  selector: 'eg-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent implements OnInit {

  // @ViewChildren(EditorComponent) private editors: QueryList<EditorComponent>;
  // this.editors.toArray()[0].callFromParent();

  public langKey: string;
  public langData: object;
  public objectKeys = Object.keys;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private appData: AppData
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit() {
    this.langKey = this.route.snapshot.params['langKey'];
    this.langData = this.appData.getLanguage(this.langKey);
  }

}
