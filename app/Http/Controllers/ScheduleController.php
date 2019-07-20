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

        $error = false;
        do {
            if ($k == "" and $g == "") {
                $error = 'Uno de los campos se encuentra vacío.';
                break;
            }
            $s = \App\Subject::find($k);
            if (!$s) {
                $error = 'Materia no encontrada.';
                break;
            }

            $groups = $s->groups()->get()->where('gpo',$g);

            if (count ( $groups ) <= 0){
                $error ='No dicho grupo para la materia solicitada';
                break;
            }

            if ($this->isSubjectOnSession($s->id)){
                $error = 'La materia solicitad ya esta en la lista.';
                break;
            }

            \Session::push('subjects',$this->createNewSub($s,$groups));  
    
            return view ( 'welcome' )
            ->with('subjects',\Session::get('subjects'));


        } while (false);

        if ($error)
            return view('welcome')
            ->with('subjects',\Session::get('subjects'))
            ->withMessage ( $error );

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
