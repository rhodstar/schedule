<?php

use Illuminate\Database\Seeder;

use \App\Subject;

class SubjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Subject::create([
            'id' => 434,
            'name' => 'COMPILADORES'
        ]);
        Subject::create([
            'id' => 406,
            'name' => 'INTELIGENCIA ARTIFICIAL'
        ]);

        Subject::create([
            'id' => 1644,
            'name' => 'BASE DE DATOS'
        ]);
    }
}
