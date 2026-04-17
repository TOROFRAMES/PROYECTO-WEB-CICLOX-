/**
 * DashboardView
 * --------------
 * Renderiza el panel principal de la aplicación.
 */

import { BaseView } from '../../../core/BaseView.js'
import { DashboardViewModel } from '../viewmodels/DashboardViewModel.js'
import { SolicitudesView } from '../../solicitudes/views/SolicitudesView.js'
import { SolicitudDetalleView } from '../../solicitudes/views/SolicitudDetalleView.js'

export class DashboardView extends BaseView {
  constructor(options = {}) {
    const viewModel = options.viewModel || new DashboardViewModel()
    super({ ...options, viewModel })
    this._subView = null
  }

  render() {
    return `
      <div class="admin-panel">
        <header class="admin-header">
          <div class="admin-header__logo">
            <svg viewBox="0 0 200 60" width="150" height="40">
              <text x="0" y="45" font-family="Arial, sans-serif" font-weight="900" font-size="40" fill="white">ciclox</text>
              <path d="M125 15 L115 35 L135 35 L125 55" fill="white" />
            </svg>
          </div>
          <h1 class="admin-header__title">Panel Administrativo</h1>
          <div class="admin-header__actions">
            <button class="admin-header__btn" id="notifications-btn">
              <svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor">
                <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
              </svg>
            </button>
            <div class="admin-header__profile"></div>
          </div>
        </header>

        <main class="admin-main">
          <aside class="admin-sidebar">
            <a href="#" class="admin-sidebar__item" data-view="solicitudes">
              <svg class="admin-sidebar__icon" viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-5 14H7v-2h7v2m3-4H7v-2h10v2m0-4H7V7h10v2Z"/>
              </svg>
              Solicitudes
            </a>
            <a href="#" class="admin-sidebar__item" data-view="colaboradores">
              <svg class="admin-sidebar__icon" viewBox="0 0 24 24">
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
              </svg>
              Colaboradores
            </a>
            <a href="#" class="admin-sidebar__item" data-view="puntos">
              <svg class="admin-sidebar__icon" viewBox="0 0 24 24">
                <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"/>
              </svg>
              Puntos
            </a>
            <a href="#" class="admin-sidebar__item" data-view="control">
              <svg class="admin-sidebar__icon" viewBox="0 0 24 24">
                <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
              </svg>
              Control
            </a>
          </aside>

          <section class="admin-content" id="dashboard-content">
            <div class="admin-content__welcome">
              <h2 class="admin-content__title">Panel Administrativo</h2>
              <p class="admin-content__subtitle">Resumen de actividades y control operativo</p>
              
              <div class="admin-content__icons-row">
                <div class="admin-content__icon-circle"><svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-5 14H7v-2h7v2m3-4H7v-2h10v2m0-4H7V7h10v2Z"/></svg></div>
                <div class="admin-content__icon-circle"><svg viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3z"/></svg></div>
                <div class="admin-content__icon-circle"><svg viewBox="0 0 24 24"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"/></svg></div>
              </div>

              <p class="admin-content__footer-text">Utiliza las herramientas del menu y toma el rumbo de Ciclox</p>
            </div>
          </section>
        </main>
      </div>
    `
  }

  _bindEvents() {
    const sidebarItems = this.$$('.admin-sidebar__item')
    sidebarItems.forEach(item => {
      this._addEvent(item, 'click', (e) => {
        e.preventDefault()
        const viewName = item.dataset.view
        this._navigateToSubView(viewName)

        // Mark active
        sidebarItems.forEach(i => i.classList.remove('admin-sidebar__item--active'))
        item.classList.add('admin-sidebar__item--active')
      })
    })
  }

  async _navigateToSubView(viewName, data = null) {
    if (this._subView) {
      this._subView.destroy()
    }

    const contentContainer = this.$('#dashboard-content')

    if (viewName === 'solicitudes') {
      this._subView = new SolicitudesView({
        container: contentContainer,
        onViewDetails: (solicitudData) => this._navigateToSubView('solicitud-detalle', solicitudData)
      })
      await this._subView.mount()
    } else if (viewName === 'solicitud-detalle') {
      this._subView = new SolicitudDetalleView({
        container: contentContainer,
        data: data
      })
      await this._subView.mount()
    } else {
      contentContainer.innerHTML = `<div class="admin-content__placeholder">Próximamente: ${viewName}</div>`
    }
  }
}
