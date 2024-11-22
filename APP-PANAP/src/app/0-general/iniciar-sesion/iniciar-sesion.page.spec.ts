import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule, NavController } from '@ionic/angular';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { IniciarSesionPage } from './iniciar-sesion.page';

describe('IniciarSesionPage', () => {
  let component: IniciarSesionPage;
  let fixture: ComponentFixture<IniciarSesionPage>;
  let navCtrl: NavController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IniciarSesionPage],
      imports: [
        IonicModule.forRoot(),
        HttpClientTestingModule,
        FormsModule
      ],
      providers: [NavController]
    }).compileComponents();

    fixture = TestBed.createComponent(IniciarSesionPage);
    component = fixture.componentInstance;
    navCtrl = TestBed.inject(NavController);
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería mostrar error cuando el correo está vacío', () => {
    component.correo = '';
    component.clave = '123456';
    component.iniciarSesion();
    expect(component.errorCorreo).toBe('Debes colocar el correo.');
  });

  it('debería mostrar error cuando la contraseña está vacía', () => {
    component.correo = 'test@test.com';
    component.clave = '';
    component.iniciarSesion();
    expect(component.errorClave).toBe('Debes colocar la contraseña.');
  });

  it('debería validar formato de correo correctamente', () => {
    component.correo = 'correo_invalido';
    expect(component.validarCorreo()).toBeFalse();
    
    component.correo = 'correo@valido.com';
    expect(component.validarCorreo()).toBeTrue();
  });

  it('debería alternar la visibilidad de la contraseña', () => {
    expect(component.mostrarContrasena).toBeFalse();
    component.alternarMostrarContrasena();
    expect(component.mostrarContrasena).toBeTrue();
  });

  it('debería censurar la contraseña correctamente', () => {
    // Para contraseñas de 2 caracteres o menos
    expect(component.censurarContrasena('12')).toBe('**');
    
    // Para contraseñas de 3 o más caracteres
    expect(component.censurarContrasena('123456')).toBe('1****6');
  });
});

// Para ejecutar el test:
// ng test --include=**/iniciar-sesion.page.spec.ts
