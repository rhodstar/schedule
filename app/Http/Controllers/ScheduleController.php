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

                    if (!$this->isSubjectOnSession($s->id)){
                            
                        \Session::push('subjects',$this->createNewSub($s,$groups));  
    
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

    function isSubjectOnSession($s_id){
                    
        if(\Session::get('subjects')!= null)
            foreach (\Session::get('subjects') as $subj ) 
                if ($s_id == $subj['key'])
                    return true;
        return false;       
    }

    function createNewSub($s,$groups){
        $new_sub = [];
        $new_sub['key'] = $s->id;
        $new_sub['name'] = $s->name;

        foreach ($groups as $gpo) {   
            $new_sub['gpo'] = $gpo->gpo;
            $new_sub['profesor'] = $gpo->profesor;
            $new_sub['horario'] = $gpo->horario;
            $new_sub['dias'] = $gpo->dias;
        }
        return $new_sub;
    }

    public function flushbykey($key){
        $subj_session = \Session::get('subjects');

        if($subj_session != null){
            $i = 0;
            foreach ($subj_session as $subj ) {
                if ($key == $subj['key']){
                    unset($subj_session[$i]);  
                    // Re-index the array elements 
                    $subj_session = array_values($subj_session);
                    break;
                }
                $i++;
            }
        }

        \Session::flush();
        foreach ($subj_session as $subj ) {
            \Session::push('subjects', $subj);  
        }

        return view('welcome')
        ->with('subjects',\Session::get('subjects'));
        
    }

}
