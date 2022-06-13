<?php

namespace App\Http\Controllers;

use App\Services\LeMondeFeedService;

class LeMondeController extends Controller
{

    public function getUne()
    {
        $posts = (new LeMondeFeedService())->getLeMondeFeedUne();

        return response()->json($posts);
    }
}
