<?php

namespace App\Http\Controllers;

use App\Models\Menu;
use App\Models\Fecha;
use App\Models\Reserva;
use Illuminate\Http\Request;
use App\Models\Tarjeta_credito;
use Illuminate\Support\Facades\Auth;

class ReservasController extends Controller
{
    public function getAll_Horarios()
    {
        $query = Fecha::select('id','dia','hora')
            ->whereNotIn('id', function ($query) {
                $query->select('id_fecha')->from('reserva');
            })
            ->get();
        return response()->json($query);
    }
    public function getAllDataUsers(){
        $user = Auth::user();
        $tarjeta_credito=Tarjeta_credito::where('id',$user->id)->get();
        return response()->json([
            'user'=>$user,
            'tarjeta_credito'=>$tarjeta_credito
        ]);
    }
    public function getReservasUser(){
        $user = Auth::user();
        $reservas=Reserva::where('id_user',$user->id)->get();
        return response()->json($reservas);
    }
    public function ReservarLogueado(Request $request){
        try {
            $user=Auth::user();
            $menu=Menu::where('id',$request->menu)->first();
            $fecha=Fecha::where('dia', $request->dia)
            ->where('hora', $request->hora)
            ->first();
            Reserva::create([
                'id_user'=>$user->id,
                'id_menu'=>$menu->id,
                'id_fecha'=>$fecha->id
            ]); 
            return response()->json([
                'status' => true,
                'message' =>'Reserva creada apropiadamente',
            ]);
        } catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => $th->getMessage()
            ], 500);
        }
    }
    public function ReservarNoLogueado(Request $request){
        try {
            $fecha=Fecha::where('dia', $request->dia)
            ->where('hora', $request->hora)
            ->first();
            Reserva::create([
                'id_fecha'=>$fecha->id,
                'nombre'=>$request->nombre,
                'email'=>$request->email,
                'CVV'=>$request->CVV,
                'nombre_tarjeta'=>$request->nombre_tarjeta,
                'n_tarjeta'=>$request->n_tarjeta,
                'id_menu'=>$request->menu
            ]);   
            return response()->json([
                'status' => true,
                'message' =>'Reserva creada apropiadamente',
                'data'=>$request->all(),
            ]);
        } catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => $th->getMessage()
            ], 500);
        }
    }
}
