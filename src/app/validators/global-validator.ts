import {AbstractControl, FormGroup} from '@angular/forms';

export function symbolValidator(el: AbstractControl){
    if(el.hasError('required')){
        return null;
    }
    if(el.value.indexOf('@') === -1){
        return {
            symbol :  true
        }
    }
    return null;
}

export function passwordMatch(formReg : FormGroup){
    const password = formReg.get('password');
    const confirmPassword = formReg.get('confPassword');
    if(password.value === confirmPassword.value){
        confirmPassword.setErrors(null);
    }else{
        confirmPassword.setErrors({
            passwordMatch : true
        });
    }
    return null;
}