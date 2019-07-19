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
    $subjects = Session::get('subjects');
    return view('welcome')->with('subjects',$subjects);
});

Route::get('/pruebas', function () {

    Session::flush();

    $s1 = [ 
        "key"=>434,
        "name" => "COMPILADORES",
        "gpo" => 1,
        "profesor" => "ING.ADRIAN ULISES MERCADO MARTINEZ",
        "horario" => "13:00-15:00",
        "dias" => "Lun, Mie"
    ];

    Session::push('subjects', $s1);

    $s2 =  [
        "key"=>1644,
        "name" => "BASE DE DATOS",
        "gpo" => 3,
        "profesor" => "ING. JORGE ALBERTO RODRIGUEZ CAMPOS",
        "horario" => "7:00-9:00",
        "dias" => "Mar, Jue, Vie"
    ];

    Session::push('subjects', $s2);


    $s3 =  [
        "key"=>406,
        "name" => "INTELIGENCIA ARTIFICIAL",
        "gpo" => 2,
        "profesor" => "ING. JORGE ALBERTO HERNANDEZ NIETO",
        "horario" => "15:00-17:00",
        "dias" => "Lun, Mie"
    ];

    Session::push('subjects', $s3);    
    
    return view('pruebas');

});

Route::get('/pruebas/s', function (){
    $subjects = Session::get('subjects'); 
    
    return view('pruebas')->with('subjects',$subjects);
});

Auth::routes();

Route::get('/addByKey', function () {
    return view('bykey');
})->name('addByKey');

Route::get('/addByKeyAndSub', function () {
    $subjects = Session::get('subjects'); 
    return view ( 'bykey_sub' )->with('subjects',$subjects);
})->name('addByKeyAndSub');

Route::get('/home', 'HomeController@index')->name('home');

Route::get ( '/addByKey/s', 'ScheduleController@addByKey_s')->name('addByKey_s');

Route::get ( '/addByKeyAndSub/s', 'ScheduleController@addByKeyAndSub_s')->name('addByKeyAndSub_s');
