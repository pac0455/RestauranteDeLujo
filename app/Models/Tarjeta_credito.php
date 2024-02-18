<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tarjeta_credito extends Model
{
    use HasFactory;
    protected $table = 'tarjeta_credito'; 
    protected $fillable = [
        'n_tarjeta',
        'nombre_tarjeta',
        'CVV'
    ];
}
