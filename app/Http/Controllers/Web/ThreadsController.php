<?php

namespace App\Http\Controllers\Web;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class ThreadsController extends Controller
{
    public function index()
    {
        return view('web.threads.index');
    }
}
