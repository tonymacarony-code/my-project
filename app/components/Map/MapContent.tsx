'use client'

import React from 'react'
import { MapContainer, TileLayer, Circle, ZoomControl } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

// Центр Los Angeles
const LA_CENTER: [number, number] = [34.10, -118.35]

// Радиусы в метрах
const PRIMARY_RADIUS = 25000 // 15 км - основная зона
const EXTENDED_RADIUS = 50000 // 25 км - расширенная зона с fee

const MapContent = () => {
    // Стиль для расширенной зоны (оранжевый)
    const extendedAreaStyle = {
        fillColor: '#ff9800',
        fillOpacity: 0.15,
        color: '#ff9800',
        weight: 2,
    }

    // Стиль для основной зоны обслуживания (зеленый)
    const primaryAreaStyle = {
        fillColor: '#10b981',
        fillOpacity: 0.25,
        color: '#10b981',
        weight: 2,
    }

    return (
        <div className="relative w-full h-[800px] rounded-lg overflow-hidden shadow-lg">
            <MapContainer
                center={LA_CENTER}
                zoom={9.5}
                scrollWheelZoom={false}
                zoomControl={false}
                className="w-full h-full"
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
                    url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                />


                <ZoomControl position="bottomright" />


                <Circle
                    center={LA_CENTER}
                    radius={EXTENDED_RADIUS}
                    pathOptions={extendedAreaStyle}
                />


                <Circle
                    center={LA_CENTER}
                    radius={PRIMARY_RADIUS}
                    pathOptions={primaryAreaStyle}
                />
            </MapContainer>

            <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-lg p-4 z-1000">
                <div className="space-y-3">
                    <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded border-2 border-[#10b981] bg-[#10b981] opacity-40"></div>
                        <span className="text-sm font-medium text-gray-900">No Fee Zone</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded border-2 border-[#ff9800] bg-[#ff9800] opacity-30"></div>
                        <span className="text-sm font-medium text-gray-900">Distance Fee: $50</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MapContent

