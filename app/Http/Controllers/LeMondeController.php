<?php

namespace App\Http\Controllers;



class LeMondeController extends Controller
{

    public function getUne()
    {
        
        return response()->json('Hello');
    }
}
