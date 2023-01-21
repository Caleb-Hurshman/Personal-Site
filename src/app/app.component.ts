import { Component, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'personal-site';

  constructor(
    private readonly offcanvasService: NgbOffcanvas,
    private readonly route: ActivatedRoute
  ) {}

  onMenuButtonClick(offcanvasTemplate: TemplateRef<string>) {
    this.offcanvasService.open(offcanvasTemplate, { position: 'end' });
  }
}
