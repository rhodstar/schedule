<?php
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome')->with('subjects',Session::get('subjects'));
});

Route::get('/update', 'ScheduleController@update')->name('update');

Route::get('/flush', function () {
    //reemplazar esto por la instruccion que solo elimna la v. de s. llamada subjects
    Session::flush(); 
    return view('welcome');
});

Route::get('/flush/{key}', 'ScheduleController@flushbykey')->where('key', '[0-9]+');;

Auth::routes();
Route::get('/home', 'HomeController@index')->name('home');