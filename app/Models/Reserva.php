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
    // Relación con el modelo User
    public function user()
    {
        return $this->belongsTo(User::class, 'id_user'); 
    }

    // Relación con el modelo Menu
    public function menu()
    {
        return $this->belongsTo(Menu::class, 'id_menu'); 
    }

    // Relación con el modelo Fecha
    public function fecha()
    {
        return $this->belongsTo(Fecha::class, 'id_fecha');
    }
}
