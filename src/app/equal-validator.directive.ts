import { Attribute, Directive } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, Validators } from "@angular/forms";


@Directive({
    selector: '[validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: EqualValidator, multi: true
    }]
})

export class EqualValidator implements Validators {
    constructor(@Attribute('validateEqual') public validateEqual: string,
                @Attribute('reverse') public reverse: string) {}

    private get isReverse() {
        if (!this.reverse) return false;
        return this.reverse === 'true' ? true: false;
    }


    validate(control :AbstractControl): {[key: string]: any} {
        const pairControl = control.root.get(this.validateEqual);
        if (!pairControl) {
            return null;
        }

        const value = control.value;
        const pairValue = pairControl.value;

        if (!value && !pairValue) {
            this.deleteErrors(pairControl);
            return null;
        }
        
        if (this.isReverse) {
            if (value === pairValue) {
                 this.deleteErrors(pairControl);
            } else {
                pairControl.setErrors({
                    validateEqual: true
                });
            }

            return null;
        } else {
            if (value !== pairValue) {
                return {
                    validateEqual: true
                };
            }
        }
    }

    deleteErrors(control: AbstractControl) {
        if (control.errors) {
            delete control.errors['validateEqual'];
        }

        if (control.errors && !Object.keys(control.errors).length) {
            control.setErrors(null);
        }
    }

}