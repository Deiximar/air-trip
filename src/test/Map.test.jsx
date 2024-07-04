import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Map from '../components/map/Map'
import { describe, it, expect, vi } from 'vitest'

vi.mock('react-leaflet', () => ({
    MapContainer: ({ children }) => <div data-testid="map-container">{children}</div>,
    TileLayer: () => <div data-testid="tile-layer" />,
    Marker: ({ children }) => <div data-testid="marker">{children}</div>,
    Popup: ({ children }) => <div data-testid="popup">{children}</div>,
}))

vi.mock('leaflet', () => {
    const L = {
        Icon: {
            Default: {
                prototype: {
                    _getIconUrl: vi.fn()
                },
                mergeOptions: vi.fn()
            }
        }
    }
    return { default: L }
})

describe('Map Component', () => {
    const mockData = {
        city: {
            name: 'Test City',
            geo: [0, 0],
        },
        aqi: 50,
    }

    it('renders map when data is provided', () => {
        render(<Map data={mockData} />)

        expect(screen.getByTestId('map-container')).toBeInTheDocument()
        expect(screen.getByTestId('tile-layer')).toBeInTheDocument()
        expect(screen.getByTestId('marker')).toBeInTheDocument()
        expect(screen.getByTestId('popup')).toBeInTheDocument()
        expect(screen.getByText('Test City')).toBeInTheDocument()
        expect(screen.getByText('Índice de Calidad del Aire (AQI): 50')).toBeInTheDocument()
    })

    it('renders error message when data is not provided', () => {
        render(<Map data={null} />)

        expect(screen.getByText('Datos del mapa no disponibles...')).toBeInTheDocument()
    })

    it('renders error message when city or geo data is missing', () => {
        const incompleteData = { city: {} }
        render(<Map data={incompleteData} />)

        expect(screen.getByText('Datos del mapa no disponibles...')).toBeInTheDocument()
    })
})