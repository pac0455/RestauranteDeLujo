<?php

namespace Database\Seeders;

use App\Models\Fecha;
use Illuminate\Support\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class fechaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        // Obtener la fecha actual
        $fechaActual = Carbon::now();

        // Iterar sobre los próximos 60 días (2 meses)
        for ($i = 0; $i < 60; $i++) {
            // Obtener la fecha actual más el número de días iterados
            $fecha = $fechaActual->copy()->addDays($i);

            // Insertar las horas específicas para la fecha actual
            $this->insertHorasParaFecha($fecha);
        }
    }

    private function insertHorasParaFecha($fecha)
    {
        // Horas específicas que deseas insertar
        $horas = ['13:00', '15:00', '17:00', '20:00', '21:00'];

        // Iterar sobre las horas y insertarlas en la tabla
        foreach ($horas as $hora) {
            
            Fecha::create([
                'dia' => $fecha->toDateString(), 
                'hora' => $hora
            ]);
        }
    }
}
