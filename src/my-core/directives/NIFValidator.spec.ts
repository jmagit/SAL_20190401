import { NIFValidator, NIFValidation, NIFValidatorDirective } from './validaciones.directive';
import { FormControl } from '@angular/forms';

describe('Pruebas del validador del NIF', () => {
  describe('Version funcion', () => {
    it('Con un NIF valido', () => {
      expect(NIFValidation('12345678Z')).toBeTruthy();
    });
    it('Con un NIF invalido', () => {
      expect(NIFValidation('1234Z')).toBeFalsy();
      expect(NIFValidation('Z12345678')).toBeFalsy();
    });
    it('Sin NIF', () => {
      expect(NIFValidation('')).toBeFalsy();
      expect(NIFValidation(null)).toBeFalsy();
      expect(NIFValidation(undefined)).toBeFalsy();
    });

  });
  describe('Version validator', () => {
    it('Con un NIF valido', () => {
      const control = new FormControl('12345678Z');
      expect(NIFValidator()(control)).toBeNull();
    });
    it('Con un NIF invalido', () => {
      const control = new FormControl('1234Z');
      const rslt = NIFValidator()(control);
      expect(rslt).not.toBeNull();
      expect(rslt.valnif).toBeTruthy();

    });
    it('Sin NIF', () => {
      const control = new FormControl('');
      expect(NIFValidator()(control)).toBeNull();
    });
  });

  describe('Version directiva', () => {
    let directiva: NIFValidatorDirective;
    beforeEach(() => {
      directiva = new NIFValidatorDirective();
    });
    it('Con un NIF valido', () => {
      const control = new FormControl('12345678Z');
      expect(directiva.validate(control)).toBeNull();
    });
    it('Con un NIF invalido', () => {
      const control = new FormControl('1234Z');
      expect(directiva.validate(control)).not.toBeNull();
    });
    it('Sin NIF', () => {
      const control = new FormControl('');
      expect(directiva.validate(control)).toBeNull();
    });
  });
});
