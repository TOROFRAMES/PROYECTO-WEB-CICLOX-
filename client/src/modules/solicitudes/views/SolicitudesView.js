/**
 * SolicitudesView
 * ---------------
 * Renderiza la pantalla de solicitudes con el resumen y el listado.
 */

import { BaseView } from '../../../core/BaseView.js'
import { SolicitudesViewModel } from '../viewmodels/SolicitudesViewModel.js'

export class SolicitudesView extends BaseView {
  constructor(options = {}) {
    const viewModel = options.viewModel || new SolicitudesViewModel()
    super({ ...options, viewModel })
    this._onViewDetails = options.onViewDetails || (() => { })
  }

  render() {
    const { recoleccionesEnCurso, solicitudesPendientes, solicitudes } = this._viewModel.state

    return `
      <div class="solicitudes-view">
        <div class="solicitudes-summary">
          <div class="summary-card">
            <div class="summary-card__icon-box">
              <svg viewBox="0 0 24 24"><path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM17 12V9.5h2.5l1.97 2.5H17z"/></svg>
            </div>
            <div class="summary-card__details">
              <span class="summary-card__number">${recoleccionesEnCurso}</span>
              <span class="summary-card__label">Recolecciones en curso</span>
            </div>
          </div>

          <div class="summary-card">
            <div class="summary-card__icon-box">
              <svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 11c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/></svg>
            </div>
            <div class="summary-card__details">
              <span class="summary-card__number">${solicitudesPendientes}</span>
              <span class="summary-card__label">Solicitudes pendientes</span>
            </div>
          </div>
        </div>

        <div class="solicitudes-table-container">
          <header class="table-header">
            <h3 class="table-header__title">Solicitudes recientes</h3>
            <div class="table-header__filter">
              Filtrar por:
              <div class="filter-container" id="filter-dropdown">
                <div class="filter-select">
                  <span>Todas</span>
                  <svg width="12" height="12" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z"/></svg>
                </div>
                <div class="filter-dropdown-menu">
                  <div class="dropdown-option">Todas</div>
                  <div class="dropdown-option">Pendiente</div>
                  <div class="dropdown-option">En curso</div>
                  <div class="dropdown-option">Completadas</div>
                  <div class="dropdown-option">Rechazadas</div>
                </div>
              </div>
            </div>
          </header>

          <div class="solicitudes-list">
            ${solicitudes.map(s => this._renderSolicitudItem(s)).join('')}
          </div>

          <footer class="table-footer">
            <button class="btn-view-all" id="view-all-btn">Ver todas</button>
          </footer>
        </div>

        <!-- Modal Ver Todas -->
        <div class="modal-overlay" id="modal-all-requests">
          <div class="modal-content">
            <button class="modal-close" id="close-modal-btn">
              <svg viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg>
            </button>
            <header class="modal-header">
              <h2 class="modal-header__title">Solicitudes</h2>
              <div class="table-header__filter">
                Filtrar por:
                <div class="filter-select">
                  <span>Todas</span>
                  <svg width="12" height="12" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z"/></svg>
                </div>
              </div>
            </header>
            <div class="modal-body">
              <div class="solicitudes-list">
                ${solicitudes.map(s => this._renderSolicitudItem(s)).join('')}
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  }

  _bindEvents() {
    const filterDropdown = this.$('#filter-dropdown')
    const filterSelect = this.$('.filter-select')
    const filterLabel = this.$('.filter-select span')
    const options = this.$$('.dropdown-option')

    const viewAllBtn = this.$('#view-all-btn')
    const modalOverlay = this.$('#modal-all-requests')
    const closeModalBtn = this.$('#close-modal-btn')
    const detailButtons = this.$$('.btn-details')

    if (filterSelect) {
      this._addEvent(filterSelect, 'click', (e) => {
        e.stopPropagation()
        filterDropdown.classList.toggle('is-open')
      })
    }

    options.forEach(option => {
      this._addEvent(option, 'click', () => {
        const value = option.textContent
        if (filterLabel) filterLabel.textContent = value
        filterDropdown.classList.remove('is-open')
        console.log(`[SolicitudesView] Filtrando por: ${value}`)
      })
    })

    // Detail Buttons Events
    detailButtons.forEach(btn => {
      this._addEvent(btn, 'click', () => {
        this._onViewDetails({
          id: '#MV678986',
          estado: 'Completada',
          dispositivo: {
            tipo: 'Smartphone',
            marca: 'Xiaomi Redmi',
            modelo: 'Redmi Note 10',
            condicion: 'Usado, fallas en la batería.'
          },
          contacto: {
            nombre: 'Juan José Gómez Toro',
            email: 'Jjgt@outlook.com',
            telefono: '3188818463'
          },
          recoleccion: {
            fecha: '30/03/2026',
            direccion: 'Carrear 32B #56-45, Canarias de la castellana, Casa #147'
          }
        })
      })
    })

    // Modal Events
    if (viewAllBtn && modalOverlay) {
      this._addEvent(viewAllBtn, 'click', () => {
        modalOverlay.classList.add('is-active')
      })
    }

    if (closeModalBtn && modalOverlay) {
      this._addEvent(closeModalBtn, 'click', () => {
        modalOverlay.classList.remove('is-active')
      })
    }

    // Cerrar al hacer clic fuera o en overlay
    this._addEvent(document, 'click', (e) => {
      if (filterDropdown) filterDropdown.classList.remove('is-open')
      if (e.target === modalOverlay) {
        modalOverlay.classList.remove('is-active')
      }
    })
  }

  _renderSolicitudItem(s) {
    const statusClass = s.estado.toLowerCase().replace(' ', '-')
    let iconPath = ''

    if (s.icon === 'phone') {
      iconPath = '<path d="M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zM7 4h10v14H7V4z"/>'
    } else if (s.icon === 'package') {
      iconPath = '<path d="M20 8l-8 5-8-5V6l8 5 8-5v2zm0-2.1L12 11 4 5.9V4l8 5.1L20 4v1.9zM4 10l8 5 8-5v8l-8 5-8-5v-8z"/>'
    } else if (s.icon === 'laptop') {
      iconPath = '<path d="M20 18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"/>'
    }

    return `
      <div class="solicitud-item">
        <div class="solicitud-item__icon-box">
          <svg class="solicitud-item__icon" viewBox="0 0 24 24">${iconPath}</svg>
        </div>
        <div class="solicitud-item__info">
          <span class="solicitud-item__main">${s.tipo}, ${s.modelo}</span>
          <span class="solicitud-item__sub">${s.ubicacion}</span>
        </div>
        <div class="solicitud-item__status">
          <span class="status-dot status-dot--${statusClass}"></span>
          <span class="status-text status-text--${statusClass}">${s.estado}</span>
        </div>
        <div class="solicitud-item__actions">
          <button class="btn-details">Ver detalles</button>
        </div>
      </div>
    `
  }
}
