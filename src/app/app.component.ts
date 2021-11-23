import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService } from './shared/services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public loaderService: LoaderService) {}

  title = 'pcg-school';
}
