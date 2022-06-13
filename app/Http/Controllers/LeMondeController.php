<?php

namespace App\Http\Controllers;

use App\Service\LeMondeFeedService;

class LeMondeController extends Controller
{

    public function getUne()
    {
        $posts = (new LeMondeFeedService())->getLeMondeFeedUne();
        dd($posts);

        return response()->json($posts);
    }
}
