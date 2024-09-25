import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isShrunk: boolean = false;
  menuOpen: boolean = false;
  isMobileView: boolean = false;
  @Input() headerType: string = 'default';

  ngOnInit() {
    this.checkMobileView();
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    this.isShrunk = window.pageYOffset > 100;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkMobileView();
  }

  checkMobileView() {
    this.isMobileView = window.innerWidth <= 768;
  }
}
