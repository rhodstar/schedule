<?php

use Illuminate\Database\Seeder;

use \HorarioFI\Subject;

class SubjectSeeder extends Seeder{
    /** Run the database seeds.
     * @return void
     */
    public function run(){

        Subject::create([
            'id' => 1644,
            'name' => 'BASE DE DATOS'
        ]);

        Subject::create([
            'id' => 1645,
            'name' => 'DISEÑO DIGITAL MODERNO'
        ]);

        Subject::create([
            'id' => 1686,
            'name' => 'SISTEMAS DE COMUNICACIONES'
        ]);
        
        Subject::create([
            'id' => 406,
            'name' => 'INTELIGENCIA ARTIFICIAL'
        ]);

        Subject::create([
            'id' => 434,
            'name' => 'COMPILADORES'
        ]);

        Subject::create([
            'id' => 1537,
            'name' => 'FINANZAS EN LA INGENIERIA EN COMPUTACION'
        ]);        

        Subject::create([
            'id' => 1413,
            'name' => 'INTRODUCCION A LA ECONOMIA'
        ]);        
        
        Subject::create([
            'id' => 1590,
            'name' => 'COMPUTACION GRAFICA E INTERACCION HUMANO-COMPUTADORA'
        ]);        

        Subject::create([
            'id' => 1052,
            'name' => 'ETICA PROFESIONAL'
        ]);  

        Subject::create([
            'id' => 1055,
            'name' => 'LITERATURA HISPANOAMERICANA CONTEMPORANEA'
        ]);  

        /* Labs */

        Subject::create([
            'id' => 6644,
            'name' => 'LAB. BASES DE DATOS'
        ]);         

        Subject::create([
            'id' => 6686,
            'name' => 'LAB. SISTEMAS DE COMUNICACIONES'
        ]);     
      
        Subject::create([
            'id' => 6590,
            'name' => 'LAB. COMPUTACION GRAFICA E INTERACCION HUMANO-COMPUTADORA'
        ]); 
    }
}
