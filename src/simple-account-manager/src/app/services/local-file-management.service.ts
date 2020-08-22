import { Injectable } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import { environment } from '../../environments/environment';
import * as fs from 'fs';

@Injectable({
  providedIn: 'root'
})
export class LocalFileManagementService {
  public defaultFolderLocation = environment.localDataFolder;

  constructor(private electronService: ElectronService) { }

  getAllFiles() {
    fs.readdirSync(this.defaultFolderLocation).forEach(f => {
      console.log(f);
    });
  }

}
