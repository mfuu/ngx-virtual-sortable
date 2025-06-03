import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'guide',
  template: ` <div [innerHTML]="filePath | marked | async" class="p-4"></div> `,
})
export class GuideComponent {
  public filePath = '';

  constructor(private activeRoute: ActivatedRoute) {
    this.filePath = this.activeRoute.snapshot.data['file'];
  }

  ngOnInit() {}
}
