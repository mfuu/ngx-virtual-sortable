import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: '[app-root]',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  public title = 'ngx-virtual-sortable';
  public activeTab = '';
  public activeMenu = '';
  public asideVisible = false;
  public githubLink = 'https://mfuu.github.io/ngx-virtual-sortable/';
  public menuItems = {
    guide: [
      {
        label: 'Start',
        value: 'start',
        router: ['guide/start'],
      },
      {
        label: 'Props',
        value: 'prop',
        router: ['guide/prop'],
      },
      {
        label: 'Emits',
        value: 'emit',
        router: ['guide/emit'],
      },
      {
        label: 'Methods',
        value: 'method',
        router: ['guide/method'],
      },
    ],
    demo: [
      {
        label: 'Basic',
        value: 'basic',
        router: ['demo/basic'],
      },
      {
        label: 'Group',
        value: 'group',
        router: ['demo/group'],
      },
      {
        label: 'Horizontal',
        value: 'horizontal',
        router: ['demo/horizontal'],
      },
      {
        label: 'ScrollTo',
        value: 'scrollto',
        router: ['demo/scrollto'],
      },
      {
        label: 'Infinity',
        value: 'infinity',
        router: ['demo/infinity'],
      },
      {
        label: 'TableMode',
        value: 'table',
        router: ['demo/table'],
      },
    ],
  };

  constructor(private router: Router) {}

  ngOnInit() {
    this.addClickEventListener();
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const url = this.router.url;
        const root = url.split('/').filter((s) => s)[0];
        const path = url.split('/').pop();

        this.activeTab = root;
        this.activeMenu = path;
      }
    });
  }

  ngOnDestroy(): void {
    this.removeClickEventListener();
  }

  public returnToTop() {
    document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
  }

  public changeAsideVisible(event: MouseEvent) {
    event.stopPropagation();
    this.asideVisible = true;
  }

  public changeAsideVisibleHidden(event: MouseEvent) {
    event.stopPropagation();
    this.asideVisible = false;
  }

  private addClickEventListener() {
    document.addEventListener('click', (e) => this.changeAsideVisibleHidden(e));
  }

  private removeClickEventListener() {
    document.removeEventListener('click', (e) => this.changeAsideVisibleHidden(e));
  }
}
