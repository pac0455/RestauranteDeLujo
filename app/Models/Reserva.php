<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reserva extends Model
{
    use HasFactory;
    protected $table = 'reserva'; 
    protected $fillable = [
        'id_user',
        'id_menu',
        'id_fecha',
        'nombre',
        'email',
        'CVV',
        'nombre_tarjeta',
        'n_tarjeta'
    ];
}
