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
            'key' => 434,
            'name' => 'COMPILADORES'
        ]);
        Subject::create([
            'key' => 406,
            'name' => 'INTELIGENCIA ARTIFICIAL'
        ]);

        Subject::create([
            'key' => 1644,
            'name' => 'BASE DE DATOS'
        ]);
    }
}
