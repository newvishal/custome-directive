import { Attribute, Directive, Input } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, Validators } from "@angular/forms";


@Directive({
    selector: '[requireDigit],[requireLowercase],[requireNonAlphanumeric],[requireUppercase],[requiredLength]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: ComplexityValidator, multi: true
    }]
})

export class ComplexityValidator implements Validators {
    @Input('requireDigit') requireDigit: boolean ;
    @Input('requireUppercase') requireUppercase: boolean;
    @Input('requireLowercase') requireLowercase: boolean;
    @Input('requireNonAlphanumeric') requireNonAlphanumeric: boolean;
    @Input('requiredLength') requiredLength: number;

    validate(control: AbstractControl): { [key: string]: any } {
        const givenPassword = control.value;
        let validationResult = null;
    
        const requireDigit = this.requireDigit ?? true;
        if (requireDigit && givenPassword && !/[0-9]/.test(givenPassword)) {
          validationResult = validationResult || {requireDigit: null};
          validationResult.requireDigit = true;
        }
    
        const requireUppercase = this.requireUppercase ?? true;
        if (requireUppercase && givenPassword && !/[A-Z]/.test(givenPassword)) {
          validationResult = validationResult || {requireUppercase: null};
          validationResult.requireUppercase = true;
        }
    
        const requireLowercase = this.requireLowercase ?? true;
        if (requireLowercase && givenPassword && !/[a-z]/.test(givenPassword)) {
          validationResult = validationResult || {requireLowercase: null};
          validationResult.requireLowercase = true;
        }
    
        const requiredLength = this.requiredLength ?? true;
        if (requiredLength && givenPassword && givenPassword.length < requiredLength) {
          validationResult = validationResult || {requiredLength: null};
          validationResult.requiredLength = true;
        }
    
        // use upperCaseLetters
        const requireNonAlphanumeric = this.requireNonAlphanumeric ?? true;
        if (requireNonAlphanumeric && givenPassword && /^[0-9a-zA-Z]+$/.test(givenPassword)) {
          validationResult = validationResult || {requireNonAlphanumeric: null};
          validationResult.requireNonAlphanumeric = true;
        }
    
        return validationResult;
      }
}
