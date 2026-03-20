/**
 * landingStore.js
 * ---------------
 * Almacenamiento centralizado del estado del módulo landing.
 * Se exporta como un singleton.
 */

import { eventBus } from '../../../shared/utils/eventBus.js';

class LandingStore {
    constructor() {
        this._state = {
            isLoaded: false,
            lastInteraction: null
        };
    }

    // Getters
    get state() {
        return Object.freeze({ ...this._state });
    }

    // Acciones (modificadores del estado)
    setLoaded(value) {
        this._state.isLoaded = value;
        eventBus.emit('landing:loaded', value);
    }

    setInteraction(type) {
        this._state.lastInteraction = type;
        eventBus.emit('landing:interaction', type);
    }
}

export const landingStore = new LandingStore();
