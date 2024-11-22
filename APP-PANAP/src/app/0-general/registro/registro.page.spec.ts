import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule, NavController } from '@ionic/angular';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { RegistroPage } from './registro.page';

describe('RegistroPage', () => {
  let component: RegistroPage;
  let fixture: ComponentFixture<RegistroPage>;
  let navCtrl: NavController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistroPage],
      imports: [
        IonicModule.forRoot(),
        HttpClientTestingModule,
        FormsModule
      ],
      providers: [NavController]
    }).compileComponents();

    fixture = TestBed.createComponent(RegistroPage);
    component = fixture.componentInstance;
    navCtrl = TestBed.inject(NavController);
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  // Pruebas para validación de nombre
  it('debería validar formato de nombre correctamente', () => {
    // Caso inválido
    component.nombre = 'Juan123';
    expect(component.validarNombreFormato()).toBeFalse();
    component.validarNombre();
    expect(component.errorNombre).toBe('El nombre solo puede contener letras.');

    // Caso válido
    component.nombre = 'Juan';
    expect(component.validarNombreFormato()).toBeTrue();
    component.errorNombre = '';
    component.validarNombre();
    expect(component.errorNombre).toBe('');
  });

  // Pruebas para validación de apellido
  it('debería validar formato de apellido correctamente', () => {
    // Caso inválido
    component.apellido = 'Pérez123';
    expect(component.validarApellidoFormato()).toBeFalse();
    component.validarApellido();
    expect(component.errorApellido).toBe('El apellido solo puede contener letras.');

    // Caso válido
    component.apellido = 'Pérez';
    expect(component.validarApellidoFormato()).toBeTrue();
    component.errorApellido = '';
    component.validarApellido();
    expect(component.errorApellido).toBe('');
  });

  // Pruebas para validación de correo
  it('debería validar formato de correo correctamente', () => {
    // Caso inválido
    component.correo = 'correo_invalido';
    expect(component.validarCorreoFormato()).toBeFalse();
    component.validarCorreo();
    expect(component.errorCorreo).toBe('Correo no válido.');

    // Caso válido
    component.correo = 'correo@valido.com';
    expect(component.validarCorreoFormato()).toBeTrue();
    component.errorCorreo = '';
    component.validarCorreo();
    expect(component.errorCorreo).toBe('');
  });

  // Pruebas para validación de contraseña
  it('debería validar formato de contraseña correctamente', () => {
    // Caso inválido - solo letras
    component.clave = 'soloLetras';
    expect(component.validarClaveFormato()).toBeFalse();
    component.validarClave();
    expect(component.errorClave).toBe('La contraseña debe incluir letras y números.');

    // Caso válido
    component.clave = 'Contraseña123';
    expect(component.validarClaveFormato()).toBeTrue();
    component.errorClave = '';
    component.validarClave();
    expect(component.errorClave).toBe('');
  });

  // Resto de las pruebas que ya funcionaban correctamente
  it('debería censurar la contraseña correctamente', () => {
    expect(component.censurarContrasena('12')).toBe('**');
    expect(component.censurarContrasena('123456')).toBe('1****6');
  });

  it('debería alternar la visibilidad de la contraseña', () => {
    expect(component.mostrarContrasena).toBeFalse();
    component.alternarMostrarContrasena();
    expect(component.mostrarContrasena).toBeTrue();
  });
});

// Para ejecutar el test:
// ng test --include=**/registro.page.spec.ts
