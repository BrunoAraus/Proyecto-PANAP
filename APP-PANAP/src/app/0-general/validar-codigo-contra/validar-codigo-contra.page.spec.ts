import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule, NavController } from '@ionic/angular';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { ValidarCodigoContraPage } from './validar-codigo-contra.page';

describe('ValidarCodigoContraPage', () => {
  let component: ValidarCodigoContraPage;
  let fixture: ComponentFixture<ValidarCodigoContraPage>;
  let navCtrl: NavController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ValidarCodigoContraPage],
      imports: [
        IonicModule.forRoot(),
        HttpClientTestingModule,
        FormsModule
      ],
      providers: [NavController]
    }).compileComponents();

    spyOn(localStorage, 'getItem').and.returnValue('test@example.com');

    fixture = TestBed.createComponent(ValidarCodigoContraPage);
    component = fixture.componentInstance;
    navCtrl = TestBed.inject(NavController);
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería generar un código aleatorio de 5 caracteres', () => {
    component.generarCodigoAleatorio();
    expect(component.codigoEsperado.length).toBe(5);
    expect(component.codigoEsperado).toMatch(/^[A-Za-z0-9]{5}$/);
  });

  it('debería validar el código correctamente', () => {
    const codigoPrueba = 'ABC12';
    component.codigoEsperado = codigoPrueba;
    
    // Caso inválido
    component.codigoIngresado = 'XYZ89';
    component.validarCodigo();
    expect(component.mensajeError).toBe('Código inválido. Por favor, intente nuevamente.');

    // Caso válido
    component.codigoIngresado = codigoPrueba;
    spyOn(navCtrl, 'navigateRoot');
    component.validarCodigo();
    expect(navCtrl.navigateRoot).toHaveBeenCalledWith('/restablecer-contra');
  });

  it('debería censurar el correo correctamente', () => {
    // Correo corto (menos de 3 caracteres en la parte local)
    expect(component.censurarEmail('ab@dominio.com')).toBe('ab@dominio.com');

    // Correo normal
    expect(component.censurarEmail('usuario@dominio.com')).toBe('usu****@dominio.com');

    // Correo largo
    const correoLargo = 'usuario.largo@dominio.com';
    const parteLocal = correoLargo.split('@')[0];
    const asteriscos = '*'.repeat(parteLocal.length - 3);
    expect(component.censurarEmail(correoLargo)).toBe(`usu${asteriscos}@dominio.com`);
  });

  it('debería inicializar correctamente', () => {
    spyOn(component, 'generarCodigoAleatorio');
    component.ngOnInit();
    expect(component.generarCodigoAleatorio).toHaveBeenCalled();
  });
});

// Para ejecutar el test:
// ng test --include=**/validar-codigo-contra.page.spec.ts

