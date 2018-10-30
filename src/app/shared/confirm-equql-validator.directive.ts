import { Validator, NG_VALIDATORS, AbstractControl } from "@angular/forms";
import { Directive, Input } from "@angular/core";

@Directive({
    selector: "[comparePassword]",
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: ConfirmPasswordValidator,
        multi: true
    }]
})

export class ConfirmPasswordValidator implements Validator {

    @Input() comparePassword: string;

    validate(control: AbstractControl): { [key: string]: any } | null {
        const password = control.parent.get(this.comparePassword);
        console.log(password);
        if (password && password.value !== control.value) {
            return { 'notEqual': true }
        }
        return null;
    }

}