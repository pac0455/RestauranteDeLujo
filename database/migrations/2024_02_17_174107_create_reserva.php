<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('reserva', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('id_user')->nullable();
            $table->string('nombre')->nullable();
            $table->string('email')->nullable();
            $table->string('CVV')->nullable();
            $table->string('nombre_tarjeta')->nullable();
            $table->string('n_tarjeta')->nullable();
            $table->bigInteger('id_menu');
            $table->bigInteger('id_fecha')->unique();
            $table->foreign('id_user')->references('id')->on('users');
            $table->foreign('id_menu')->references('id')->on('menu');
            $table->foreign('id_fecha')->references('id')->on('fecha');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('reserva');
    }
};
