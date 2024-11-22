import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule, NavController } from '@ionic/angular';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { RestablecerContraPage } from './restablecer-contra.page';

describe('RestablecerContraPage', () => {
  let component: RestablecerContraPage;
  let fixture: ComponentFixture<RestablecerContraPage>;
  let navCtrl: NavController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RestablecerContraPage],
      imports: [
        IonicModule.forRoot(),
        HttpClientTestingModule,
        FormsModule
      ],
      providers: [NavController]
    }).compileComponents();

    fixture = TestBed.createComponent(RestablecerContraPage);
    component = fixture.componentInstance;
    navCtrl = TestBed.inject(NavController);
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería validar campos vacíos', () => {
    component.contra = '';
    component.contra2 = '';
    expect(component.validarCampos()).toBeFalse();
    expect(component.errorGeneral).toBe('Debe completar ambos campos de contraseña');
  });

  it('debería validar longitud mínima de contraseña', () => {
    component.contra = 'Abc123';  // 6 caracteres, con mayúscula y número
    component.contra2 = 'Abc123';
    expect(component.validarCampos()).toBeFalse();
    expect(component.errorContra).toBe('La contraseña debe tener al menos 8 caracteres');
  });

  it('debería validar requisito de mayúscula', () => {
    component.contra = 'abcd12345'; // Sin mayúscula
    component.contra2 = 'abcd12345';
    expect(component.validarCampos()).toBeFalse();
    expect(component.errorContra).toBe('La contraseña debe contener al menos una letra mayúscula');
  });

  it('debería validar requisito de número', () => {
    component.contra = 'Abcdefghi'; // Sin número
    component.contra2 = 'Abcdefghi';
    expect(component.validarCampos()).toBeFalse();
    expect(component.errorContra).toBe('La contraseña debe contener al menos un número');
  });

  it('debería validar que las contraseñas coincidan', () => {
    component.contra = 'Contraseña123';
    component.contra2 = 'Contraseña456';
    expect(component.validarCampos()).toBeFalse();
    expect(component.errorContra2).toBe('Las contraseñas no coinciden');
  });

  it('debería validar una contraseña correcta', () => {
    component.contra = 'Contraseña123';
    component.contra2 = 'Contraseña123';
    expect(component.validarCampos()).toBeTrue();
    expect(component.errorContra).toBe('');
    expect(component.errorContra2).toBe('');
    expect(component.errorGeneral).toBe('');
  });

  it('debería censurar la contraseña correctamente', () => {
    expect(component.censurarContrasena('12')).toBe('**');
    expect(component.censurarContrasena('123456')).toBe('1****6');
  });
});

// Para ejecutar el test:
// ng test --include=**/restablecer-contra.page.spec.ts
