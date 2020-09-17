import { Company } from './../types';
import { Injectable } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import { environment } from '../../environments/environment';
import * as fs from 'fs';
import * as path from 'path';

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

  createCompany(company: Company) {
    if(!company.id) {
      company.id = `${company.gstin}`;
    }
    const compLocation = path.join(this.defaultFolderLocation, `${company.id}`);
    if (fs.existsSync(compLocation)) {
      return "Error: Company already exists with that Id";
    }
    try {
      fs.mkdirSync(compLocation);
      fs.writeFileSync(path.join(compLocation, 'company.json'), JSON.stringify(company));
      return `Company successfully created with id ${company.id}`;
    } catch (error) {
      console.log("Error: Failed to create company...");
      console.log(error);
      return "Error: Failed to create company.";
    }
  }
}
