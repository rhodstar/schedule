<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;

use \App\Subject;
use \App\Group;
class ScheduleController extends Controller{
    public function update(){
        $k = Input::get ( 'key' );
        $g = Input::get ( 'group' );

        if($k != "" && $g!="" ){

            $s = \App\Subject::find($k);

            if( $s ){
                $groups = $s->groups()->get()->where('gpo',$g);
                if (count ( $groups ) > 0){

                    $flag = false;
                    
                    if(\Session::get('subjects')!= null){
                        foreach (\Session::get('subjects') as $subj ) {
                            if ($s->id == $subj['key']){
                                $flag = true;
                                break;
                            }
                        }
                    }

                    if (!$flag){
                        $new_sub = [];
                        $new_sub['key'] = $s->id;
                        $new_sub['name'] = $s->name;
    
                        foreach ($groups as $gpo) {   
                            $new_sub['gpo'] = $gpo->gpo;
                            $new_sub['profesor'] = $gpo->profesor;
                            $new_sub['horario'] = $gpo->horario;
                            $new_sub['dias'] = $gpo->dias;
                        }
                        \Session::push('subjects', $new_sub);  
    
                        return view ( 'welcome' )
                        ->with('subjects',\Session::get('subjects'));
                    }else{
                        return view ( 'welcome' )
                        ->with('subjects',\Session::get('subjects'))
                        ->withMessage ( 'La materia solicitad ya esta en la lista.' );
                    }

                }else{
                    return view ( 'welcome' )
                        ->with('subjects',\Session::get('subjects'))
                        ->withMessage ( 'No dicho grupo para la materia solicitada' );
                }    
            }else{
                return view('welcome')
                ->with('subjects',\Session::get('subjects'))
                ->withMessage ( 'Materia no encontrada.' );
            }
            
        }else{
            return view('welcome')
                ->with('subjects',\Session::get('subjects'))
                ->withMessage ( 'Uno de los campos se encuentra vacío.' );
        }


        return view('welcome')
            ->with('subjects',\Session::get('subjects'));
    }

}
