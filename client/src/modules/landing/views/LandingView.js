/**
 * LandingView.js
 * --------------
 * Capa de PRESENTACIÓN para el módulo Landing.
 * Renderiza el HTML de la landing y gestiona los eventos del DOM.
 */

import { BaseView } from '../../../core/BaseView.js';
import { LandingViewModel } from '../viewmodels/LandingViewModel.js';

export class LandingView extends BaseView {
    /**
     * Crea la vista de la landing con su ViewModel propio.
     * @param {object} options
     */
    constructor(options = {}) {
        super({
            ...options,
            viewModel: new LandingViewModel()
        });
    }

    /**
     * Retorna el HTML de la landing como string.
     * @returns {string}
     */
    render() {
        const { title, subtitle, ctaText, features, isLoading } = this._viewModel._state;

        if (isLoading) {
            return `
        <div class="landing-loader">
          <div class="spinner"></div>
          <p>Cargando experiencia...</p>
        </div>
      `;
        }

        const featureHTML = features.map(feat => `
      <div class="feature-card">
        <div class="feature-card__icon">${feat.icon}</div>
        <h3 class="feature-card__title">${feat.title}</h3>
        <p class="feature-card__description">${feat.description}</p>
      </div>
    `).join('');

        return `
      <div class="landing-page">
        <header class="landing-header">
          <nav class="landing-nav">
            <div class="landing-logo">PremiumApp</div>
          </nav>
        </header>

        <main class="landing-main">
          <section class="hero-section">
            <div class="hero-content">
              <h1 class="hero-title animate-fade-in">${title}</h1>
              <p class="hero-subtitle animate-fade-in--delayed">${subtitle}</p>
              <div class="hero-actions">
                <button id="get-started-btn" class="btn btn--primary btn--large">${ctaText}</button>
              </div>
            </div>
          </section>

          <section class="features-section">
            <h2 class="section-title">¿Por qué elegirnos?</h2>
            <div class="features-grid">
              ${featureHTML}
            </div>
          </section>
        </main>

        <footer class="landing-footer">
          <p>&copy; 2026 PremiumApp. Todos los derechos reservados.</p>
        </footer>
      </div>
    `;
    }

    /**
     * Enlaza el ViewModel a la View.
     */
    _bindViewModel() {
        this._subscribe('isLoading', () => this.mount());
    }

    /**
     * Adjunta eventos del DOM.
     */
    _bindEvents() {
        this._addEvent('#get-started-btn', 'click', () => {
            this._viewModel.handleGetStarted();
        });
    }
}
