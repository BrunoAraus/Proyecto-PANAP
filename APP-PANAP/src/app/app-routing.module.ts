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
    path: 'confirmacion-negocio',
    loadChildren: () => import('./0-general/confirmacion-negocio/confirmacion-negocio.module').then( m => m.ConfirmacionNegocioPageModule)
  },
  {
    path: 'menu-cliente',
    loadChildren: () => import('./1-cliente/menu-cliente/menu-cliente.module').then( m => m.MenuClientePageModule)
  },
  {
    path: 'menu-negocio',
    loadChildren: () => import('./2-negocio/menu-negocio/menu-negocio.module').then( m => m.MenuNegocioPageModule)
  },
  {
    path: 'cerrar-sesion-adm',
    loadChildren: () => import('./4-admin/cerrar-sesion-adm/cerrar-sesion-adm.module').then( m => m.CerrarSesionAdmPageModule)
  },
  {
    path: 'cambiar-informacion-cli',
    loadChildren: () => import('./1-cliente/cambiar-informacion-cli/cambiar-informacion-cli.module').then( m => m.CambiarInformacionCliPageModule)
  },
  {
    path: 'cambiar-informacion-neg',
    loadChildren: () => import('./2-negocio/cambiar-informacion-neg/cambiar-informacion-neg.module').then( m => m.CambiarInformacionNegPageModule)
  },
  {
    path: 'contacto',
    loadChildren: () => import('./1-cliente/contacto/contacto.module').then( m => m.ContactoPageModule)
  },
  {
    path: 'preguntas-frecuentes',
    loadChildren: () => import('./1-cliente/preguntas-frecuentes/preguntas-frecuentes.module').then( m => m.PreguntasFrecuentesPageModule)
  },
  {
    path: 'preguntas-frecuentes',
    loadChildren: () => import('./2-negocio/preguntas-frecuentes/preguntas-frecuentes.module').then( m => m.PreguntasFrecuentesPageModule)
  },
  {
    path: 'contacto',
    loadChildren: () => import('./2-negocio/contacto/contacto.module').then( m => m.ContactoPageModule)
  },
  {
    path: 'pedido',
    loadChildren: () => import('./1-cliente/pedido/pedido.module').then( m => m.PedidoPageModule)
  },
  {
    path: 'detalle-negocio',
    loadChildren: () => import('./1-cliente/detalle-negocio/detalle-negocio.module').then( m => m.DetalleNegocioPageModule)
  },
  {
    path: 'validar-correo',
    loadChildren: () => import('./0-general/validar-correo/validar-correo.module').then( m => m.ValidarCorreoPageModule)
  },
  {
    path: 'validar-codigo-contra',
    loadChildren: () => import('./0-general/validar-codigo-contra/validar-codigo-contra.module').then( m => m.ValidarCodigoContraPageModule)
  },
  {
    path: 'informacion-negocio-foto',
    loadChildren: () => import('./2-negocio/informacion-negocio-foto/informacion-negocio-foto.module').then( m => m.InformacionNegocioFotoPageModule)
  },
  {
    path: 'detalles',
    loadChildren: () => import('./2-negocio/detalles/detalles.module').then( m => m.DetallesPageModule)
  },
  {
    path: 'listado-negocios',
    loadChildren: () => import('./4-admin/listado-negocios/listado-negocios.module').then( m => m.ListadoNegociosPageModule)
  },
  {
    path: 'detalles',
    loadChildren: () => import('./4-admin/detalles/detalles.module').then( m => m.DetallesPageModule)
  },
  {
    path: 'resumen-cliente',
    loadChildren: () => import('./1-cliente/resumen-cliente/resumen-cliente.module').then( m => m.ResumenClientePageModule)
  },
  {
    path: 'resumen-negocio',
    loadChildren: () => import('./2-negocio/resumen-negocio/resumen-negocio.module').then( m => m.ResumenNegocioPageModule)
  },
  {
    path: 'home-admin',
    loadChildren: () => import('./4-admin/home-admin/home-admin.module').then( m => m.HomeAdminPageModule)
  },
  {
    path: 'solicitudes-negocio',
    loadChildren: () => import('./4-admin/solicitudes-negocio/solicitudes-negocio.module').then( m => m.SolicitudesNegocioPageModule)
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
      {
        path: 'menu-cliente',
        loadChildren: () => import('./1-cliente/menu-cliente/menu-cliente.module').then( m => m.MenuClientePageModule)
      },
      {
        path: 'cambiar-informacion-cli',
        loadChildren: () => import('./1-cliente/cambiar-informacion-cli/cambiar-informacion-cli.module').then( m => m.CambiarInformacionCliPageModule)
      },
      {
        path: 'contacto',
        loadChildren: () => import('./1-cliente/contacto/contacto.module').then( m => m.ContactoPageModule)
      },
      {
        path: 'preguntas-frecuentes',
        loadChildren: () => import('./1-cliente/preguntas-frecuentes/preguntas-frecuentes.module').then( m => m.PreguntasFrecuentesPageModule)
      },
      {
        path: 'pedido',
        loadChildren: () => import('./1-cliente/pedido/pedido.module').then( m => m.PedidoPageModule)
      },
      {
        path: 'detalle-negocio',
        loadChildren: () => import('./1-cliente/detalle-negocio/detalle-negocio.module').then( m => m.DetalleNegocioPageModule)
      },
      {
        path: 'pruebas-api',
        loadChildren: () => import('./3-pruebas/pruebas-api/pruebas-api.module').then( m => m.PruebasApiPageModule)
      },
      {
        path: 'resumen-cliente',
        loadChildren: () => import('./1-cliente/resumen-cliente/resumen-cliente.module').then( m => m.ResumenClientePageModule)
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
      {
        path: 'reservas-dia',
        loadChildren: () => import('./2-negocio/reservas-dia/reservas-dia.module').then( m => m.ReservasDiaPageModule)
      },
      {
        path: 'historial-reservas',
        loadChildren: () => import('./2-negocio/historial-reservas/historial-reservas.module').then( m => m.HistorialReservasPageModule)
      },
      {
        path: 'menu-negocio',
        loadChildren: () => import('./2-negocio/menu-negocio/menu-negocio.module').then( m => m.MenuNegocioPageModule)
      },
      {
        path: 'cambiar-informacion-neg',
        loadChildren: () => import('./2-negocio/cambiar-informacion-neg/cambiar-informacion-neg.module').then( m => m.CambiarInformacionNegPageModule)
      },
      {
        path: 'preguntas-frecuentes',
        loadChildren: () => import('./2-negocio/preguntas-frecuentes/preguntas-frecuentes.module').then( m => m.PreguntasFrecuentesPageModule)
      },
      {
        path: 'contacto',
        loadChildren: () => import('./2-negocio/contacto/contacto.module').then( m => m.ContactoPageModule)
      },
      {
        path: 'detalles',
        loadChildren: () => import('./2-negocio/detalles/detalles.module').then( m => m.DetallesPageModule)
      },
      {
        path: 'resumen-negocio',
        loadChildren: () => import('./2-negocio/resumen-negocio/resumen-negocio.module').then( m => m.ResumenNegocioPageModule)
      },
    ]
  },

  {
    path: 'tabs-admin',
    loadComponent: () => import('./4-admin/tabs-admin/tabs-admin.component').then( c => c.TabsAdminComponent),
    children: [
      {
        path: 'cerrar-sesion-adm',
        loadChildren: () => import('./4-admin/cerrar-sesion-adm/cerrar-sesion-adm.module').then( m => m.CerrarSesionAdmPageModule)
      },
      {
        path: 'listado-negocios',
        loadChildren: () => import('./4-admin/listado-negocios/listado-negocios.module').then( m => m.ListadoNegociosPageModule)
      },
      {
        path: 'detalles',
        loadChildren: () => import('./4-admin/detalles/detalles.module').then( m => m.DetallesPageModule)
      },
      {
        path: 'home-admin',
        loadChildren: () => import('./4-admin/home-admin/home-admin.module').then( m => m.HomeAdminPageModule)
      },
      {
        path: 'solicitudes-negocio',
        loadChildren: () => import('./4-admin/solicitudes-negocio/solicitudes-negocio.module').then( m => m.SolicitudesNegocioPageModule)
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
