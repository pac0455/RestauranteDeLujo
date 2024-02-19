<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PruebaController;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\ReservasController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('/createUser',[AuthController::class, 'createUser']);
Route::post('/login',[AuthController::class, 'loginUser']);
Route::get('/getHoras',[ReservasController::class, 'getAll_Horarios']);
Route::post('/deleteReserva',[ReservasController::class, 'deleteReserva']);
Route::post('/reservarNoLogueado',[ReservasController::class, 'ReservarNoLogueado']);
Route::middleware('auth:sanctum')->group(function(){
    Route::get('/getReservasUser',[ReservasController::class, 'getReservasUser']);
    Route::post('/reservarLogueado',[ReservasController::class, 'ReservarLogueado']);
    Route::get('/getAllDataUsers',[ReservasController::class, 'getAllDataUsers']);
    Route::get('/logoutUser',[AuthController::class, 'logoutUser']);
});
