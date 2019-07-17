<?php
use Illuminate\Support\Facades\Input;
use App\Subject;
use App\Group;
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

Route::post ( '/key', function () {
	$q = Input::get ( 'subjectkey' );
	if($q != ""){
		$s = App\Subject::find($q);
		if ( $s ){ 
			$groups = $s->groups()->get();
			/*
				With more practise this should work
				$groups = App\Subject::where('key',1644)->with('groups')->get()->all();
			*/
			if (count ( $groups ) > 0)
				return view ( 'welcome' )->with('subject',$s->name)->withDetails ( $groups )->withQuery ( $q);
			else
				return view ( 'welcome' )->withMessage ( 'No hay grupos para esta clave' );
		}else				
			return view ( 'welcome' )->withMessage ( 'La clave es incorrecta o no esta en nuestra base de datos, aún.' );		
	}
	return view ( 'welcome' )->withMessage ( 'No Details found. Try to search again !' );
} );


Route::post ( '/key_sub', function () {
	$q = Input::get ( 'key' );
	$g = Input::get ( 'group' );

	if($q != ""){
		$s = App\Subject::find($q);
		if ( $s ){ 
			$group = $s->groups()->get()->where('gpo',$g);
			if (count ( $group ) > 0)
				return view ( 'welcome' )->with('gpo',$group)->withQuery ( $q);
		}
		return view ( 'welcome' )->withMessage ( 'Clave o grupo no encontrado.' );

	}
	return view ( 'welcome' )->withMessage ( 'No Details found. Try to search again !' );
} );
