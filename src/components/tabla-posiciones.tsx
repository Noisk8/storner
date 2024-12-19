'use client'
import React, { useEffect, useState } from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

interface PosicionEquipo {
  equipo: string;
  puntos: number;
  golesFavor: number;
  golesContra: number;
  diferenciaGoles: number;
}

export default function TablaPosiciones() {
  const [posiciones, setPosiciones] = useState<PosicionEquipo[]>([]);

  // Aquí agregarías la lógica para obtener los datos de tu API
  useEffect(() => {
    // Fetch datos de posiciones
  }, []);

  return (
    <div>
      <Table>
        <TableCaption>Tabla de Posiciones</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">Equipo</TableHead>
            <TableHead>PJ</TableHead>
            <TableHead>PTS</TableHead>
            <TableHead>GF</TableHead>
            <TableHead>GC</TableHead>
            <TableHead className="text-right">DIF</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {posiciones.map((posicion) => (
            <TableRow key={posicion.equipo}>
              <TableCell className="font-medium">{posicion.equipo}</TableCell>
              <TableCell>{posicion.puntos}</TableCell>
              <TableCell>{posicion.golesFavor}</TableCell>
              <TableCell>{posicion.golesContra}</TableCell>
              <TableCell className="text-right">{posicion.diferenciaGoles}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

