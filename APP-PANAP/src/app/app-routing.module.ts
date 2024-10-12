import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home-cliente',
    loadChildren: () => import('./1-cliente/home-cliente/home-cliente.module').then( m => m.HomeClientePageModule)
  },
  {
    path: 'home-negocio',
    loadChildren: () => import('./2-negocio/home-negocio/home-negocio.module').then( m => m.HomeNegocioPageModule)
  },
  {
    path: 'mapa-cliente',
    loadChildren: () => import('./1-cliente/mapa-cliente/mapa-cliente.module').then( m => m.MapaClientePageModule)
  },
  {
    path: 'pedido-cliente',
    loadChildren: () => import('./1-cliente/pedido-cliente/pedido-cliente.module').then( m => m.PedidoClientePageModule)
  },
  {
    path: 'iniciar-sesion',
    loadChildren: () => import('./0-general/iniciar-sesion/iniciar-sesion.module').then( m => m.IniciarSesionPageModule)
  },
  {
    path: 'reservas-negocio',
    loadChildren: () => import('./2-negocio/reservas-negocio/reservas-negocio.module').then( m => m.ReservasNegocioPageModule)
  },
  {
    path: 'ingreso-pan-negocio',
    loadChildren: () => import('./2-negocio/ingreso-pan-negocio/ingreso-pan-negocio.module').then( m => m.IngresoPanNegocioPageModule)
  },
  {
    path: 'modificar-pan-negocio',
    loadChildren: () => import('./2-negocio/modificar-pan-negocio/modificar-pan-negocio.module').then( m => m.ModificarPanNegocioPageModule)
  },
  {
    path: 'cerrar-sesion-cli',
    loadChildren: () => import('./1-cliente/cerrar-sesion-cli/cerrar-sesion-cli.module').then( m => m.CerrarSesionCliPageModule)
  },
  {
    path: 'cerrar-sesion-neg',
    loadChildren: () => import('./2-negocio/cerrar-sesion-neg/cerrar-sesion-neg.module').then( m => m.CerrarSesionNegPageModule)
  },
  {
    path: 'restablecer-contra',
    loadChildren: () => import('./0-general/restablecer-contra/restablecer-contra.module').then( m => m.RestablecerContraPageModule)
  },
  {
    path: 'pruebas-api',
    loadChildren: () => import('./3-pruebas/pruebas-api/pruebas-api.module').then( m => m.PruebasApiPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./0-general/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'informacion-negocio',
    loadChildren: () => import('./2-negocio/informacion-negocio/informacion-negocio.module').then( m => m.InformacionNegocioPageModule)
  },
  {
    path: 'validacion-codigo',
    loadChildren: () => import('./0-general/validacion-codigo/validacion-codigo.module').then( m => m.ValidacionCodigoPageModule)
  },
  
  {
    path: 'tabs-cliente',
    loadComponent: () => import('./1-cliente/tabs-cliente/tabs-cliente.component').then( c => c.TabsClienteComponent),
    children: [
      {
        path: 'home-cliente',
        loadChildren: () => import('./1-cliente/home-cliente/home-cliente.module').then( m => m.HomeClientePageModule)
      },
      {
        path: 'mapa-cliente',
        loadChildren: () => import('./1-cliente/mapa-cliente/mapa-cliente.module').then( m => m.MapaClientePageModule)
      },
      {
        path: 'pedido-cliente',
        loadChildren: () => import('./1-cliente/pedido-cliente/pedido-cliente.module').then( m => m.PedidoClientePageModule)
      },
      {
        path: 'cerrar-sesion-cli',
        loadChildren: () => import('./1-cliente/cerrar-sesion-cli/cerrar-sesion-cli.module').then( m => m.CerrarSesionCliPageModule)
      },
      
    ]
  },
  
  {
    path: 'tabs-negocio',
    loadComponent: () => import('./2-negocio/tabs-negocio/tabs-negocio.component').then( c => c.TabsNegocioComponent),
    children: [
      {
        path: 'home-negocio',
        loadChildren: () => import('./2-negocio/home-negocio/home-negocio.module').then( m => m.HomeNegocioPageModule)
      },
      {
        path: 'reservas-negocio',
        loadChildren: () => import('./2-negocio/reservas-negocio/reservas-negocio.module').then( m => m.ReservasNegocioPageModule)
      },
      {
        path: 'ingreso-pan-negocio',
        loadChildren: () => import('./2-negocio/ingreso-pan-negocio/ingreso-pan-negocio.module').then( m => m.IngresoPanNegocioPageModule)
      },
      {
        path: 'modificar-pan-negocio',
        loadChildren: () => import('./2-negocio/modificar-pan-negocio/modificar-pan-negocio.module').then( m => m.ModificarPanNegocioPageModule)
      },
      {
        path: 'cerrar-sesion-neg',
        loadChildren: () => import('./2-negocio/cerrar-sesion-neg/cerrar-sesion-neg.module').then( m => m.CerrarSesionNegPageModule)
      },

    ]
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
