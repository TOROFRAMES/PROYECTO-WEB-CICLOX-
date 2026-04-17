/**
 * SolicitudesViewModel
 * --------------------
 * Lógica de negocio para la vista de solicitudes.
 */

import { BaseViewModel } from '../../../core/BaseViewModel.js'

export class SolicitudesViewModel extends BaseViewModel {
    constructor() {
        super()
        this.state = {
            recoleccionesEnCurso: 6,
            solicitudesPendientes: 15,
            solicitudes: [
                { id: 1, tipo: 'Celular', modelo: 'Redmi Note 10', ubicacion: 'Laureles, Medellín', estado: 'Pendiente', icon: 'phone' },
                { id: 2, tipo: 'Celular', modelo: 'Samsung A21S', ubicacion: 'Belén, Medellín', estado: 'Rechazada', icon: 'phone' },
                { id: 3, tipo: 'Otros', modelo: 'Impresora HP', ubicacion: 'Esmeraldal, Envigado', estado: 'En curso', icon: 'package' },
                { id: 4, tipo: 'Portátil', modelo: 'Thinkpad 420', ubicacion: 'Esmeraldal, Envigado', estado: 'Completada', icon: 'laptop' },
                { id: 5, tipo: 'Otros', modelo: 'Teclado Logitech G413', ubicacion: 'Aliadas del Sur, Sabaneta', estado: 'En curso', icon: 'package' },
                { id: 6, tipo: 'Portátil', modelo: 'Asus U36', ubicacion: 'Salado, Envigado', estado: 'Completada', icon: 'laptop' },
                { id: 7, tipo: 'Celular', modelo: 'Motorola G7 Power', ubicacion: 'San Javier, Medellín', estado: 'Completada', icon: 'phone' }
            ]
        }
    }

    async onMount() {
        // Aquí se cargarían los datos reales de un servicio
        console.log('[SolicitudesViewModel] Montado')
    }
}
