<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;

use App\Subject;
use App\Group;
class ScheduleController extends Controller{
    public function addByKey(){
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
                    return view ( 'bykey' )->with('subject',$s->name)->withDetails ( $groups )->withQuery ( $q);
                else
                    return view ( 'bykey' )->withMessage ( 'No hay grupos para esta clave' );
            }else				
                return view ( 'bykey' )->withMessage ( 'La clave es incorrecta o no esta en nuestra base de datos, aún.' );		
        }
        return view ( 'bykey ' )->withMessage ( 'No Details found. Try to search again !' );
    }

    public function addByKeyAndSub() {
        $q = Input::get ( 'key' );
        $g = Input::get ( 'group' );
    
        if($q != ""){
            $s = App\Subject::find($q);
            if ( $s ){ 
                $group = $s->groups()->get()->where('gpo',$g);
                if (count ( $group ) > 0)
                    return view ( 'bykey_sub' )->with('gpo',$group)->withQuery ( $q);
            }
            return view ( 'bykey_sub' )->withMessage ( 'Clave o grupo no encontrado.' );
    
        }
        return view ( 'bykey_sub' )->withMessage ( 'No Details found. Try to search again !' );
    }
}
