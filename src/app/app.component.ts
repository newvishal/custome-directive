import { Component, OnInit } from '@angular/core';
import { User } from './user.interface';

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
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'advance-angular';
  passwordComplexitySetting: IPasswordComplexitySetting = new PasswordComplexitySetting();
  public user!: User;

  ngOnInit(): void {
    this.user = {
      username: '',
      password: '',
      confirmPassword: ''
    };
  }

  save(model: User, isValid: boolean) {
    console.log(model, isValid);
  }
}
