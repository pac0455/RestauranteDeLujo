<?php

namespace App\Http\Controllers;

use App\Mail\ReservaMail;
use App\Models\Menu;
use App\Models\Fecha;
use App\Models\Reserva;
use Illuminate\Http\Request;
use App\Models\Tarjeta_credito;
use Exception;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;

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
        $tarjeta_credito=Tarjeta_credito::where('id_user',$user->id)->get();
        return response()->json([
            'user'=>$user,
            'tarjeta_credito'=>$tarjeta_credito
        ]);
    }
    public function deleteReserva(Request $request){
        $id = $request->id;
        try {
            Reserva::destroy($id);
            return response()->json([
                'status' => true,
                'message' =>'Reserva borrada apropiadamente',
            ]);
        } catch (\Throwable $th) {
            return response()->json([
                'status' => true,
                'message' =>$th->getMessage(),
            ]);
        }
        return response()->json($request->all());
    }
    public function deleteTarjeta(Request $request){
        try {
            $user = Auth::user();
            $n_filas=Tarjeta_credito::where('id_user',$user->id)->count();
            if($n_filas==1){
                throw New Exception('No puedes quedarte sin tarjetas de credito');
            }else{
                Tarjeta_credito::destroy($request->id);
            }
            return response()->json([
                'status' => true,
                'message' =>'Tarjeta borrada apropiadamente',
                'n-filas'=>$n_filas,
            ]);
        } catch (\Throwable $th) {
            return response()->json([
                'status' => true,
                'message' =>$th->getMessage(),
            ]);
        }
        return response()->json($request->all());
    }
    public function getReservasUser(){
        $user = Auth::user();
        $reservas = Reserva::where('id_user', $user->id)->get();
        foreach ($reservas as $reserva) {
            $reserva->user;
            $reserva->menu;
            $reserva->fecha;
        }
        return response()->json($reservas);
    }
    public function AddTarjeta(Request $request){
        try {
            $user=Auth::user();
            Tarjeta_credito::create([
                'n_tarjeta'=>$request->n_tarjeta,
                'nombre_tarjeta'=>$request->nombre_tarjeta,
                'CVV'=>$request->CVV,
                'id_user'=>$user->id
            ]);
            return response()->json([
                'status' => true,
                'message' =>'Tarjeta añadida',
            ]);
        } catch (\Throwable $th) {
            return response()->json([
                'status' => true,
                'message' =>$th->getMessage(),
            ]);
        }
        return response()->json($request->all());
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
            $dia=$request->dia;
            $hora=$request->hora;
            $nombre=$request->nombre;
            /* Mail::to($request->email)->send(new ReservaMail($dia,$hora,$nombre)); */
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
}
