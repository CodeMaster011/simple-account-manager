import { LocalFileManagementService } from './../../services/local-file-management.service';
import { Company } from './../../types';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.scss']
})
export class CreateCompanyComponent implements OnInit {
  company: Company;
  companyCreationForm = new FormGroup({
    name: new FormControl('',[ Validators.required, Validators.minLength(5) ]),
    gstin: new FormControl('',[ Validators.minLength(15), Validators.maxLength(15) ]),
    addressLine1: new FormControl('',[ Validators.minLength(5) ]),
    addressLine2: new FormControl('',[ Validators.minLength(5) ]),
    stateCode: new FormControl('',[  Validators.required, Validators.minLength(5) ]),
    stateName: new FormControl('',[  Validators.minLength(2) ]),
    phone: new FormControl('',[  Validators.minLength(10) ]),
    email: new FormControl('',[  Validators.email ]),
  })

  constructor(private localFileManagementService: LocalFileManagementService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.company = {
      name: this.companyCreationForm.controls['name'].value,
      gstin: this.companyCreationForm.controls['gstin'].value,
      phone: this.companyCreationForm.controls['phone'].value,
      email: this.companyCreationForm.controls['email'].value,
      address: {
        line1: this.companyCreationForm.controls['addressLine1'].value,
        line2: this.companyCreationForm.controls['addressLine2'].value,
        stateCode: this.companyCreationForm.controls['stateCode'].value,
        stateName: this.companyCreationForm.controls['stateName'].value,
      }
    }

    console.log(this.company);
    console.log(this.localFileManagementService.createCompany(this.company));
  }
}
