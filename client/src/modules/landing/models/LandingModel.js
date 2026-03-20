/**
 * LandingModel.js
 * ---------------
 * Capa de MODELO para el módulo Landing.
 * Almacena información estática o dinámica sobre la página principal.
 */

import { BaseModel } from '../../../core/BaseModel.js';

export class LandingModel extends BaseModel {
    /**
     * Define los valores por defecto del modelo.
     * @returns {object}
     */
    defaults() {
        return {
            title: 'Bienvenido a Nuestra Plataforma',
            subtitle: 'La solución definitiva para gestionar tus proyectos con eficiencia y estilo.',
            ctaText: 'Comenzar Ahora',
            features: [
                { icon: '🚀', title: 'Rápido', description: 'Rendimiento optimizado para una carga instantánea.' },
                { icon: '🛡️', title: 'Seguro', description: 'Tus datos están protegidos con los más altos estándares.' },
                { icon: '🎨', title: 'Premium', description: 'Diseño moderno y elegante que enamora a primera vista.' }
            ]
        };
    }

    /**
     * Valida los datos del modelo.
     * @returns {object|null}
     */
    validate() {
        if (!this.get('title')) return { title: 'El título es obligatorio' };
        return null;
    }
}
