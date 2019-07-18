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
    return view('welcome');
});

Auth::routes();

Route::get('/addByKey', function () {
    return view('bykey');
});

Route::get('/addByKeyAndSub', function () {
    return view('bykey_sub');
});

Route::get('/home', 'HomeController@index')->name('home');

Route::get ( '/addByKey/s', 'ScheduleController@addByKey_s')->name('addByKey_s');

Route::get ( '/addByKeyAndSub/s', 'ScheduleController@addByKeyAndSub_s')->name('addByKeyAndSub_s');
