import { Component } from '@angular/core';
import { LocalFileManagementService } from './services/local-file-management.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'simple-account-manager';
  constructor(private s: LocalFileManagementService) {
    s.getAllFiles();
  }
}
