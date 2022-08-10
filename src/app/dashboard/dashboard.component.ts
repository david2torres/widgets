import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { TranslateService } from '@ngx-translate/core';

interface email {
  name: string
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})


export class DashboardComponent {

  email: email[];
  selectedEmail: email[] = [];

  constructor(private breakpointObserver: BreakpointObserver, public translate: TranslateService) {
    this.translate.addLangs(['es', 'en']);

    this.email = [
      { name: "andrea@hotmail.es" },
      { name: "carolina@telecom.com" },
    ];
  }

  translateLenguage(id: any) {
    debugger
    id == 1 ? this.translate.setDefaultLang('es') : this.translate.setDefaultLang('en');
  }
}
