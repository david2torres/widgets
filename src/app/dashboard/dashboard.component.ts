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
  data: any;
  chartOptions: any;
  // subscription: Subscription;
  // config: AppConfig;

  constructor(private breakpointObserver: BreakpointObserver, public translate: TranslateService) {
    this.translate.addLangs(['es', 'en']);

    this.email = [
      { name: "ade@hotmail.es" },
      { name: "ca@telecom.com" },
    ];
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.data = {
      labels: ['A', 'B', 'C'],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ]
        }
      ]
    };

  }
  translateLenguage(id: any) {
    debugger
    id == 1 ? this.translate.setDefaultLang('es') : this.translate.setDefaultLang('en');
  }
}
