import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {
  showHeader = true;
  showFooter = true;
  headerType = 'default';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.activatedRoute.root),
      map((route:any) => {
        while (route.firstChild) route = route.firstChild;
        return route;
      }),
      mergeMap((route:any) => route.data)
    ).subscribe((data:any) => {
      this.showHeader = data['showHeader'] !== undefined ? data['showHeader'] : true;
      this.showFooter = data['showFooter'] !== undefined ? data['showFooter'] : true;
      this.headerType = data['headerType'] || 'default';
    });
  }
}
