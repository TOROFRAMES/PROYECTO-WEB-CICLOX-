/**
 * SolicitudDetalleView
 * --------------------
 * Renderiza los detalles de una solicitud específica.
 */

import { BaseView } from '../../../core/BaseView.js'

export class SolicitudDetalleView extends BaseView {
  constructor(options = {}) {
    super(options)
    // Datos de ejemplo que coinciden con la imagen
    this._data = options.data || {
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
    }
  }

  render() {
    const d = this._data
    return `
      <div class="detalle-solicitud">
        <header class="detalle-header">
          <div class="detalle-header__info">
            <h2 class="detalle-header__title">Detalles de solicitud</h2>
            <span class="detalle-header__id">ID ${d.id}</span>
          </div>
          <div class="status-tag status-tag--completada">
            ${d.estado}
          </div>
        </header>

        <div class="detalle-grid">
          <!-- Información del dispositivo -->
          <div class="detalle-card">
            <div class="detalle-card__icon-box">
              <svg viewBox="0 0 24 24"><path d="M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zM7 4h10v14H7V4z"/></svg>
            </div>
            <div class="detalle-card__content">
              <h3 class="detalle-card__title">Información del dispositivo</h3>
              <div class="detalle-card__info-list">
                <div class="info-item"><strong>Tipo de dispositivo:</strong> ${d.dispositivo.tipo}</div>
                <div class="info-item"><strong>Marca:</strong> ${d.dispositivo.marca}</div>
                <div class="info-item"><strong>Modelo:</strong> ${d.dispositivo.modelo}</div>
                <div class="info-item"><strong>Condición:</strong> ${d.dispositivo.condicion}</div>
              </div>
            </div>
          </div>

          <!-- Contacto del usuario -->
          <div class="detalle-card">
            <div class="detalle-card__icon-box">
              <svg viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
            </div>
            <div class="detalle-card__content">
              <h3 class="detalle-card__title">Contacto del usuario</h3>
              <div class="detalle-card__info-list">
                <div class="info-item"><strong>Nombre:</strong> ${d.contacto.nombre}</div>
                <div class="info-item"><strong>Email:</strong> ${d.contacto.email}</div>
                <div class="info-item"><strong>Teléfono:</strong> ${d.contacto.telefono}</div>
              </div>
            </div>
          </div>

          <!-- Detalles de recolección -->
          <div class="detalle-card">
            <div class="detalle-card__icon-box">
              <svg viewBox="0 0 24 24"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/></svg>
            </div>
            <div class="detalle-card__content">
              <h3 class="detalle-card__title">Detalles de recolección</h3>
              <div class="detalle-card__info-list">
                <div class="info-item"><strong>Fecha y hora:</strong> ${d.recoleccion.fecha}</div>
                <div class="info-item"><strong>Dirección:</strong> ${d.recoleccion.direccion}</div>
              </div>
            </div>
          </div>

          <!-- Galería de Fotografías -->
          <div class="detalle-card">
            <div class="detalle-card__icon-box">
              <svg viewBox="0 0 24 24"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>
            </div>
            <div class="detalle-card__content">
              <h3 class="detalle-card__title">Galería de Fotografías</h3>
              <div class="gallery-grid">
                <div class="gallery-item"><img src="https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=200&h=200&fit=crop" alt="Foto 1"></div>
                <div class="gallery-item"><img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=200&h=200&fit=crop" alt="Foto 2"></div>
                <div class="gallery-item gallery-item--more"><img src="https://images.unsplash.com/photo-1556656793-062ff9878258?w=200&h=200&fit=crop" alt="Foto 3"></div>
              </div>
            </div>
          </div>

          <!-- Estado de la solicitud -->
          <div class="detalle-card detalle-card--status">
            <div class="detalle-card__icon-box">
              <svg viewBox="0 0 24 24"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>
            </div>
            <div class="detalle-card__content">
              <h3 class="detalle-card__title">Estado de la solicitud.</h3>
              <div class="status-tag status-tag--completada">
                ${d.estado}
              </div>
              <button class="btn-update-status" id="trace-btn">Ver detalles</button>
            </div>
          </div>
        </div>

        <!-- Modal Trazabilidad -->
        <div class="modal-overlay" id="modal-trazabilidad">
          <div class="modal-content modal-content--trazabilidad">
            <button class="modal-close" id="close-trazabilidad-btn">
              <svg viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg>
            </button>
            <header class="modal-header modal-header--trazabilidad">
              <h2 class="modal-header__title">Trazabilidad</h2>
            </header>
            <div class="modal-body">
              <div class="timeline">
                <div class="timeline-item">
                  <div class="timeline-item__dot timeline-item__dot--completada"></div>
                  <div class="timeline-item__content">
                    <div class="timeline-item__status timeline-item__status--completada">Solicitud Completada</div>
                    <div class="timeline-item__desc">Dispositivo entregado en punto de reciclaje</div>
                  </div>
                </div>
                <div class="timeline-item">
                  <div class="timeline-item__dot timeline-item__dot--en-curso"></div>
                  <div class="timeline-item__content">
                    <div class="timeline-item__status timeline-item__status--en-curso">En curso</div>
                    <div class="timeline-item__desc">De camino al punto de reciclaje</div>
                  </div>
                </div>
                <div class="timeline-item">
                  <div class="timeline-item__dot timeline-item__dot--en-curso"></div>
                  <div class="timeline-item__content">
                    <div class="timeline-item__status timeline-item__status--en-curso">En curso</div>
                    <div class="timeline-item__desc">Equipo recogido en el domicilio del usuario.</div>
                  </div>
                </div>
                <div class="timeline-item">
                  <div class="timeline-item__dot timeline-item__dot--en-curso"></div>
                  <div class="timeline-item__content">
                    <div class="timeline-item__status timeline-item__status--en-curso">En curso</div>
                    <div class="timeline-item__desc">En el domicilio del usuario.</div>
                  </div>
                </div>
                <div class="timeline-item">
                  <div class="timeline-item__dot timeline-item__dot--en-curso"></div>
                  <div class="timeline-item__content">
                    <div class="timeline-item__status timeline-item__status--en-curso">En curso</div>
                    <div class="timeline-item__desc">Llendo al domicilio del usuario.</div>
                  </div>
                </div>
                <div class="timeline-item">
                  <div class="timeline-item__dot timeline-item__dot--en-curso"></div>
                  <div class="timeline-item__content">
                    <div class="timeline-item__status timeline-item__status--en-curso">En curso</div>
                    <div class="timeline-item__desc">Aceptando la solicitud.</div>
                  </div>
                </div>
                <div class="timeline-item">
                  <div class="timeline-item__dot timeline-item__dot--pendiente"></div>
                  <div class="timeline-item__content">
                    <div class="timeline-item__status timeline-item__status--pendiente">Pendiente</div>
                    <div class="timeline-item__desc">Un colaborador esta revisando la solicitud.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  }

  _bindEvents() {
    const traceBtn = this.$('#trace-btn')
    const modal = this.$('#modal-trazabilidad')
    const closeBtn = this.$('#close-trazabilidad-btn')

    if (traceBtn && modal) {
      this._addEvent(traceBtn, 'click', () => {
        modal.classList.add('is-active')
      })
    }

    if (closeBtn && modal) {
      this._addEvent(closeBtn, 'click', () => {
        modal.classList.remove('is-active')
      })
    }

    // Cerrar al hacer clic fuera del modal (en el overlay)
    this._addEvent(document, 'click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('is-active')
      }
    })
  }
}
