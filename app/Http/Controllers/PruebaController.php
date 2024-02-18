<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PruebaController extends Controller
{
    function Obtener(){
        $resp=[
            '1'=>'mesa1',
        ];
        return response()->json($resp);
    }
}
