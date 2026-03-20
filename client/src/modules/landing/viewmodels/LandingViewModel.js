/**
 * LandingViewModel.js
 * -------------------
 * Capa de LÓGICA DE PRESENTACIÓN para el módulo Landing.
 * Maneja el estado de la landing y sus comandos.
 */

import { BaseViewModel } from '../../../core/BaseViewModel.js';
import { LandingModel } from '../models/LandingModel.js';
import { landingStore } from '../store/landingStore.js';
import { eventBus } from '../../../shared/utils/eventBus.js';

export class LandingViewModel extends BaseViewModel {
    /**
     * Inicializa el ViewModel con una instancia del LandingModel.
     */
    constructor() {
        super({ model: new LandingModel() });
    }

    /**
     * Inicializa el estado reactivo del componente.
     */
    _initState() {
        this.setState({
            title: this._model.get('title'),
            subtitle: this._model.get('subtitle'),
            ctaText: this._model.get('ctaText'),
            features: this._model.get('features'),
            isLoading: false
        });
    }

    /**
     * Comando invocado al pulsar el botón principal (CTA).
     */
    handleGetStarted() {
        landingStore.setInteraction('getStarted');
        // En una aplicación real, dispararíamos un evento de navegación
        eventBus.emit('auth:showLogin');
    }

    /**
     * Se ejecuta al montar la vista.
     */
    async onMount() {
        this.startLoading();
        // Simulamos carga de contenido si fuera necesario
        setTimeout(() => {
            landingStore.setLoaded(true);
            this.stopLoading();
        }, 500);
    }
}
