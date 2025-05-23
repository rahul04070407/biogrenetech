import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [],
     standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit , OnDestroy{
 @ViewChild('aboutSection') aboutSection!: ElementRef;
  private routerSub!: Subscription;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngAfterViewInit() {
    this.routerSub = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        // Wait a tick so view initializes
        setTimeout(() => {
          const fragment = this.route.snapshot.fragment;
          if (fragment === 'about' && this.aboutSection) {
            this.aboutSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
          }
        });
      });
  }

  ngOnDestroy() {
    this.routerSub?.unsubscribe();
  }
}
