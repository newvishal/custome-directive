import { Component, OnInit } from '@angular/core';
import { HttpLoader } from './http-loader';
import { User } from './user.interface';
import { TranslocoService } from "@ngneat/transloco";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface IPasswordComplexitySetting {
  requireDigit: boolean;
  requireLowercase: boolean;
  requireNonAlphanumeric: boolean;
  requireUppercase: boolean;
  requiredLength: number;
}

class PasswordComplexitySetting implements IPasswordComplexitySetting {
  requireDigit!: boolean;
  requireLowercase!: boolean;
  requireNonAlphanumeric!: boolean;
  requireUppercase!: boolean;
  requiredLength!: number;

  constructor(data?: IPasswordComplexitySetting) {
      if (data) {
          for (var property in data) {
              if (data.hasOwnProperty(property))
                  (<any>this)[property] = (<any>data)[property];
          }
      }
  }

  // init(data?: any) {
  //     if (data) {
  //         this.requireDigit = data["requireDigit"];
  //         this.requireLowercase = data["requireLowercase"];
  //         this.requireNonAlphanumeric = data["requireNonAlphanumeric"];
  //         this.requireUppercase = data["requireUppercase"];
  //         this.requiredLength = data["requiredLength"];
  //     }
  // }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  title = 'advance-angular';
  buttonBusy: boolean = false
  busyText: string = 'loading...'
  passwordComplexitySetting: IPasswordComplexitySetting = new PasswordComplexitySetting();
  public user!: User;
  testFormGroup: FormGroup

  constructor(public fb: FormBuilder ,private service: HttpLoader, private translocoService: TranslocoService) {
    // translocoService.translate('hello')
  }

  ngOnInit(): void {
   this.testFormGroup = this.fb.group({
      a: ['', Validators.required],
      b: ['', Validators.required],
      c: '',
      d: '',
      e: '',
      f: ''
    })
    // console.log(this.translocoService.translate('hello', { value: 'world' }));
    this.user = {
      username: '',
      password: '',
      confirmPassword: ''
    };
  }

  handleSubmit() {
    
  }

  save(model: User, isValid: boolean) {
    console.log(model, isValid);
  }

  toggle() {
    this.buttonBusy = !this.buttonBusy;
    setTimeout(() => {
      this.buttonBusy = !this.buttonBusy;
    }, 3000);
  }
}
