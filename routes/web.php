<?php
use Illuminate\Support\Facades\Input;
use App\Subject;
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

Route::get('/home', 'HomeController@index')->name('home');

Route::post ( '/search', function () {
	$q = Input::get ( 'subjectkey' );
	if($q != ""){
		$groups = App\Subject::find(2)->groups()->get();
		if (count ( $groups ) > 0)
			return view ( 'welcome' )->withDetails ( $groups )->withQuery ( $q );
		else
			return view ( 'welcome' )->withMessage ( 'No Details found. Try to search again !' );
	}
	return view ( 'welcome' )->withMessage ( 'No Details found. Try to search again !' );
} );
