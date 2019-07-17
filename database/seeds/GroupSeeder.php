<?php

use Illuminate\Database\Seeder;
use \App\Subject;
use \App\Group;

class GroupSeeder extends Seeder
{

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->seed434();
        $this->seed406();
        $this->seed1644();
    }
    
    function seed434()
    {
        $subject1 = Subject::where('id',434)->value('id');
        Group::create([
            'gpo' => 1,
            'profesor' => 'ING.ADRIAN ULISES MERCADO MARTINEZ',
            'horario' => '13:00-15:00',
            'dias' => 'Lun, Mie',
            'cupo' => 40,
            'subject_id' => $subject1
        ]);

        Group::create([
            'gpo' => 2,
            'profesor' => 'ING. SERGIO VALDEZ SANCHEZ',
            'horario' => '16:00-18:00',
            'dias' => 'Mar, Jue',
            'cupo' => 40,
            'subject_id' => $subject1
        ]);

        Group::create([
            'gpo' => 3,
            'profesor' => 'ING. NORBERTO JESUS ORTIGOZA MARQUEZ',
            'horario' => '15:00-17:00',
            'dias' => 'Mar, Jue',
            'cupo' => 40,
            'subject_id' => $subject1
        ]);
    }

    function seed406()
    {
        $subject1 = Subject::where('id',406)->value('id');
        Group::create([
            'gpo' => 1,
            'profesor' => 'DR. GUILLERMO GILBERTO MOLERO CASTILLO',
            'horario' => '11:00-13:00',
            'dias' => 'Lun, Mar',
            'cupo' => 40,
            'subject_id' => $subject1
        ]);

        Group::create([
            'gpo' => 2,
            'profesor' => 'ING. JORGE ALBERTO HERNANDEZ NIETO',
            'horario' => '15:00-17:00',
            'dias' => 'Lun, Mie',
            'cupo' => 40,
            'subject_id' => $subject1
        ]);

        Group::create([
            'gpo' => 3,
            'profesor' => 'DR. ISMAEL EVERARDO BARCENAS PATIÑO',
            'horario' => '14:00-16:00',
            'dias' => 'Mar, Jue',
            'cupo' => 40,
            'subject_id' => $subject1
        ]);

        Group::create([
            'gpo' => 4,
            'profesor' => 'DRA. MARIA DEL CARMEN EDNA MARQUEZ MARQUEZ',
            'horario' => '16:00-18:00',
            'dias' => 'Mar, Jue',
            'cupo' => 40,
            'subject_id' => $subject1
        ]);
    }    

    function seed1644()
    {
        $subject1 = Subject::where('id',1644)->value('id');
        Group::create([
            'gpo' => 1,
            'profesor' => 'ING. LUCILA PATRICIA ARELLANO MENDOZA',
            'horario' => '11:00-13:00',
            'dias' => 'Lun, Mie, Vie',
            'cupo' => 40,
            'subject_id' => $subject1
        ]);

        Group::create([
            'gpo' => 2,
            'profesor' => 'ING. MARTHA LOPEZ PELCASTRE',
            'horario' => '13:00-15:00',
            'dias' => 'Lun, Mie, Vie',
            'cupo' => 40,
            'subject_id' => $subject1
        ]);

        Group::create([
            'gpo' => 3,
            'profesor' => 'ING. JORGE ALBERTO RODRIGUEZ CAMPOS',
            'horario' => '7:00-9:00',
            'dias' => 'Mar, Jue, Vie',
            'cupo' => 40,
            'subject_id' => $subject1
        ]);

        Group::create([
            'gpo' => 4,
            'profesor' => 'M.C. DAVID RICARDO RUIZ REYES',
            'horario' => '17:00-19:00',
            'dias' => 'Mar, Mie, Jue',
            'cupo' => 40,
            'subject_id' => $subject1
        ]);
    }  

}
