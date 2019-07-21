<?php

use Illuminate\Database\Seeder;
use \HorarioFI\Subject;
use \HorarioFI\Group;

class GroupSeeder extends Seeder{
    /** Run the database seeds.
     * @return void
     */
    public function run(){

        $this->seed1644();
        $this->seed1645();
        $this->seed1686();
        $this->seed406();
        $this->seed434();
        $this->seed1537();
        $this->seed1413();
        $this->seed1590();
        $this->seed1052();
        $this->seed1055();
    }
    
    function seed1644(){
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
    
    function seed1645(){
        $subject1 = Subject::where('id',1645)->value('id');
        Group::create([
                'gpo' => 1,
                'profesor' => 'M.I. NORMA ELVA CHAVEZ RODRIGUEZ (* Ver "Nota de Inglés")',
                'horario' => '07:00 a 09:00',
                'dias' => 'Lun, Mie',
                'cupo' => 35,
                'subject_id' => $subject1
        ]);
    
        Group::create([
                'gpo' => 2,
                'profesor' => 'M. I. VICENTE FLORES OLVERA',
                'horario' => '13:00 a 15:00',
                'dias' => 'Lun, Mie',
                'cupo' => 35,
                'subject_id' => $subject1
        ]);
    
        Group::create([
                'gpo' => 3,
                'profesor' => 'M.I. ELIZABETH FONSECA CHAVEZ',
                'horario' => '09:00 a 11:00',
                'dias' => 'Mar, Jue',
                'cupo' => 35,
                'subject_id' => $subject1
        ]);
    
        Group::create([
                'gpo' => 4,
                'profesor' => 'M. I. MARIA DEL SOCORRO GUEVARA RODRIGUEZ',
                'horario' => '15:00 a 17:00',
                'dias' => 'Mar, Jue',
                'cupo' => 35,
                'subject_id' => $subject1
        ]);
    
        Group::create([
                'gpo' => 5,
                'profesor' => 'ING. ROBERTO F. MANDUJANO WILD',
                'horario' => '07:00 a 11:00',
                'dias' => 'Vie',
                'cupo' => 35,
                'subject_id' => $subject1
        ]);
    }    
    
    function seed1686(){
        $subject1 = Subject::where('id',1686)->value('id');
        Group::create([
                'gpo' => 1,
                'profesor' => 'M.I. JUAN FERNANDO SOLORZANO PALOMARES',
                'horario' => '07:00 a 08:30',
                'dias' => 'Lun, Mie',
                'cupo' => 25,
                'subject_id' => $subject1
        ]);
    
        Group::create([
                'gpo' => 2,
                'profesor' => 'M.I. MARIO ALBERTO HERNANDEZ FLORES',
                'horario' => '13:00 a 14:30',
                'dias' => 'Lun, Mie',
                'cupo' => 25,
                'subject_id' => $subject1
        ]);
    
        Group::create([
                'gpo' => 3,
                'profesor' => 'ING. FLORICEL RAMOS VARGAS',
                'horario' => '07:00 a 08:30',
                'dias' => 'Mar, Jue',
                'cupo' => 25,
                'subject_id' => $subject1
        ]);
    
        Group::create([
                'gpo' => 4,
                'profesor' => 'ING. RODRIGO ALEJANDRO GUTIERREZ ARENAS',
                'horario' => '08:30 a 10:00',
                'dias' => 'Mar, Jue',
                'cupo' => 25,
                'subject_id' => $subject1
        ]);
    
        Group::create([
                'gpo' => 5,
                'profesor' => 'M. I. JORGE ANTONIO MONROY JUAREZ',
                'horario' => '19:30 a 21:00',
                'dias' => 'Mar, Jue',
                'cupo' => 25,
                'subject_id' => $subject1
        ]);
    
        Group::create([
                'gpo' => 6,
                'profesor' => 'M.I. ADAN BONILLA CHAVEZ',
                'horario' => '08:00 a 11:00',
                'dias' => 'Sab',
                'cupo' => 25,
                'subject_id' => $subject1
        ]);
    
        Group::create([
                'gpo' => 7,
                'profesor' => 'ING. THALIA IVONNE OCAMPO SANCHEZ',
                'horario' => '09:00 a 12:00',
                'dias' => 'Sab',
                'cupo' => 25,
                'subject_id' => $subject1
        ]);
    }    

    function seed406(){
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
    
    function seed434(){
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

    function seed1537(){
        $subject1 = Subject::where('id',1537)->value('id');
        Group::create([
                'gpo' => 1,
                'profesor' => 'ING. PROFESOR POR ASIGNAR',
                'horario' => '13:30 a 15:00',
                'dias' => 'Mar, Jue',
                'cupo' => 40,
                'subject_id' => $subject1
        ]);

        Group::create([
                'gpo' => 2,
                'profesor' => 'M.A. GABRIELA NAYELI GAYTAN GONZÁLEZ',
                'horario' => '07:00 a 10:00',
                'dias' => 'Vie',
                'cupo' => 40,
                'subject_id' => $subject1
        ]);

        Group::create([
                'gpo' => 3,
                'profesor' => 'ING. LUIS RAFAEL JIMENEZ UGALDE',
                'horario' => '07:00 a 08:30',
                'dias' => 'Vie, Sab',
                'cupo' => 40,
                'subject_id' => $subject1
        ]);

        Group::create([
                'gpo' => 4,
                'profesor' => 'ING. HEIDDY ALEJANDRA PASTEN LUGO',
                'horario' => '10:00 a 13:00',
                'dias' => 'Sab',
                'cupo' => 40,
                'subject_id' => $subject1
        ]);
    }

    function seed1413(){
        $subject1 = Subject::where('id',1413)->value('id');
        Group::create([
                'gpo' => 1,
                'profesor' => 'M.I. JORGE FEDERICO PANIAGUA BALLINAS',
                'horario' => '07:00 a 09:00',
                'dias' => 'Lun, Mie',
                'cupo' => 40,
                'subject_id' => $subject1
        ]);

        Group::create([
                'gpo' => 2,
                'profesor' => 'DRA MARIA MAGDALENA MEJIA ESTAÑOL',
                'horario' => '07:00 a 09:00',
                'dias' => 'Lun, Mie',
                'cupo' => 40,
                'subject_id' => $subject1
        ]);

        Group::create([
                'gpo' => 3,
                'profesor' => 'DR. EDGARDO ULISES BENITEZ ESLAVA',
                'horario' => '07:00 a 09:00',
                'dias' => 'Mar, Jue',
                'cupo' => 40,
                'subject_id' => $subject1
        ]);

        Group::create([
                'gpo' => 4,
                'profesor' => 'M.A. JOSE MANUEL BAHAMONDE PELAEZ',
                'horario' => '07:00 a 11:00',
                'dias' => 'Vie',
                'cupo' => 40,
                'subject_id' => $subject1
        ]);

        Group::create([
                'gpo' => 5,
                'profesor' => 'ING IRIS MONSERRAT URBINA CASAS',
                'horario' => '08:00 a 12:00',
                'dias' => 'Sab',
                'cupo' => 40,
                'subject_id' => $subject1
        ]);

        Group::create([
                'gpo' => 6,
                'profesor' => 'MTRA LIZET DIAZ GARCIA',
                'horario' => '08:00 a 12:00',
                'dias' => 'Sab',
                'cupo' => 40,
                'subject_id' => $subject1
        ]);

        Group::create([
                'gpo' => 7,
                'profesor' => 'LIC JUAN CARLOS GUZMAN CORREA',
                'horario' => '09:00 a 11:00',
                'dias' => 'Lun, Mie',
                'cupo' => 40,
                'subject_id' => $subject1
        ]);

        Group::create([
                'gpo' => 8,
                'profesor' => 'LIC ELSA RUTH MONDRAGON SAAVEDRA',
                'horario' => '09:00 a 11:00',
                'dias' => 'Mar, Jue',
                'cupo' => 40,
                'subject_id' => $subject1
        ]);

        Group::create([
                'gpo' => 9,
                'profesor' => 'MTRA ERIKA MARTINEZ LOPEZ',
                'horario' => '09:00 a 11:00',
                'dias' => 'Mar, Jue',
                'cupo' => 40,
                'subject_id' => $subject1
        ]);

        Group::create([
                'gpo' => 10,
                'profesor' => 'ING. MIGUEL ANGEL LOPEZ CARRILLO',
                'horario' => '09:00 a 13:00',
                'dias' => 'Vie',
                'cupo' => 40,
                'subject_id' => $subject1
        ]);

        Group::create([
                'gpo' => 11,
                'profesor' => 'LIC ELSA RUTH MONDRAGON SAAVEDRA',
                'horario' => '11:00 a 13:00',
                'dias' => 'Mar, Jue',
                'cupo' => 40,
                'subject_id' => $subject1
        ]);

        Group::create([
                'gpo' => 12,
                'profesor' => 'MTRA. SONIA ROSA BRICEÑO VILORIA',
                'horario' => '11:00 a 13:00',
                'dias' => 'Mar, Jue',
                'cupo' => 40,
                'subject_id' => $subject1
        ]);

        Group::create([
                'gpo' => 13,
                'profesor' => 'M.I. PEDRO ALCANTARA AGUILAR',
                'horario' => '11:00 a 13:00',
                'dias' => 'Lun, Mie',
                'cupo' => 40,
                'subject_id' => $subject1
        ]);

        Group::create([
                'gpo' => 14,
                'profesor' => 'DRA. IRMA DELGADO MARTINEZ',
                'horario' => '13:00 a 15:00',
                'dias' => 'Lun, Mie',
                'cupo' => 40,
                'subject_id' => $subject1
        ]);

        Group::create([
                'gpo' => 15,
                'profesor' => 'LIC ELSA RUTH MONDRAGON SAAVEDRA',
                'horario' => '13:00 a 15:00',
                'dias' => 'Mar, Jue',
                'cupo' => 40,
                'subject_id' => $subject1
        ]);

        Group::create([
                'gpo' => 16,
                'profesor' => 'LIC. CARLOS VENCES ESPINOSA',
                'horario' => '13:00 a 15:00',
                'dias' => 'Mar, Jue',
                'cupo' => 40,
                'subject_id' => $subject1
        ]);

        Group::create([
                'gpo' => 17,
                'profesor' => 'MTRO JOSE ANTONIO LOPEZ CUESTA',
                'horario' => '15:00 a 17:00',
                'dias' => 'Mar, Jue',
                'cupo' => 40,
                'subject_id' => $subject1
        ]);

        Group::create([
                'gpo' => 18,
                'profesor' => 'DRA MARIA MAGDALENA MEJIA ESTAÑOL',
                'horario' => '17:00 a 19:00',
                'dias' => 'Lun, Mie',
                'cupo' => 40,
                'subject_id' => $subject1
        ]);

        Group::create([
                'gpo' => 19,
                'profesor' => 'DR. ALEJANDRO CESAR LOPEZ BOLAÑOS',
                'horario' => '17:00 a 19:00',
                'dias' => 'Lun, Mie',
                'cupo' => 40,
                'subject_id' => $subject1
        ]);

        Group::create([
                'gpo' => 20,
                'profesor' => 'MTRO JOSE ANTONIO LOPEZ CUESTA',
                'horario' => '17:00 a 19:00',
                'dias' => 'Mar, Jue',
                'cupo' => 40,
                'subject_id' => $subject1
        ]);

        Group::create([
                'gpo' => 21,
                'profesor' => 'ING JOSÉ MARTÍN SERNA DE ANDA',
                'horario' => '19:00 a 21:00',
                'dias' => 'Lun, Mie',
                'cupo' => 40,
                'subject_id' => $subject1
        ]);

        Group::create([
                'gpo' => 22,
                'profesor' => 'LIC. FEDERICO VALLE RODRIGUEZ',
                'horario' => '19:00 a 21:00',
                'dias' => 'Mar, Jue',
                'cupo' => 40,
                'subject_id' => $subject1
        ]);

        Group::create([
                'gpo' => 23,
                'profesor' => 'LIC JUAN CARLOS GUZMAN CORREA',
                'horario' => '13:00 a 15:00',
                'dias' => 'Mie, Vie',
                'cupo' => 40,
                'subject_id' => $subject1
        ]);
    }

    function seed1590(){
        $subject1 = Subject::where('id',1590)->value('id');
        Group::create([
                'gpo' => 1,
                'profesor' => 'ING. ARTURO PEREZ DE LA CRUZ',
                'horario' => '11:00 a 13:00',
                'dias' => 'Lun, Mie',
                'cupo' => 30,
                'subject_id' => $subject1
        ]);
    
        Group::create([
                'gpo' => 2,
                'profesor' => 'ING. REYNALDO MARTELL AVILA',
                'horario' => '13:00 a 15:00',
                'dias' => 'Lun, Mie',
                'cupo' => 30,
                'subject_id' => $subject1
        ]);
    
        Group::create([
                'gpo' => 3,
                'profesor' => 'ING. JOSE ROQUE ROMAN GUADARRAMA',
                'horario' => '09:00 a 11:00',
                'dias' => 'Mar, Jue',
                'cupo' => 30,
                'subject_id' => $subject1
        ]);
    
        Group::create([
                'gpo' => 4,
                'profesor' => 'ING. JOSE ROQUE ROMAN GUADARRAMA',
                'horario' => '11:00 a 15:00',
                'dias' => 'Vie',
                'cupo' => 30,
                'subject_id' => $subject1
        ]);
    }    

    function seed1052(){
        $subject1 = Subject::where('id',1052)->value('id');
        Group::create([
                'gpo' => 1,
                'profesor' => 'ING. JOSE DE JESUS GONZALEZ FRANCO',
                'horario' => '07:00 a 09:00',
                'dias' => 'Mar, Jue',
                'cupo' => 40,
                'subject_id' => $subject1
        ]);

        Group::create([
                'gpo' => 2,
                'profesor' => 'LIC. MARIA DE GUADALUPE FLOR DIAZ DE LEON FERNANDEZ DE CASTRO',
                'horario' => '09:00 a 11:00',
                'dias' => 'Mar, Jue',
                'cupo' => 40,
                'subject_id' => $subject1
        ]);

        Group::create([
                'gpo' => 3,
                'profesor' => 'MES. MARGARITA PUEBLA CADENA',
                'horario' => '11:00 a 13:00',
                'dias' => 'Mar, Jue',
                'cupo' => 40,
                'subject_id' => $subject1
        ]);

        Group::create([
                'gpo' => 4,
                'profesor' => 'LIC. MARTHA MANCILLA URREA',
                'horario' => '11:00 a 13:00',
                'dias' => 'Lun, Mie',
                'cupo' => 40,
                'subject_id' => $subject1
        ]);

        Group::create([
                'gpo' => 5,
                'profesor' => 'LIC ALDO FERNANDO TRUJILLO PRIEGO',
                'horario' => '11:00 a 13:00',
                'dias' => 'Lun, Mie',
                'cupo' => 40,
                'subject_id' => $subject1
        ]);

        Group::create([
                'gpo' => 6,
                'profesor' => 'MTRA ANA LUISA SELENE ALVAREZ CARRILLO',
                'horario' => '13:00 a 15:00',
                'dias' => 'Lun, Mie',
                'cupo' => 40,
                'subject_id' => $subject1
        ]);

        Group::create([
                'gpo' => 7,
                'profesor' => 'LIC. MARTHA MANCILLA URREA',
                'horario' => '13:00 a 15:00',
                'dias' => 'Lun, Mie',
                'cupo' => 40,
                'subject_id' => $subject1
        ]);

        Group::create([
                'gpo' => 8,
                'profesor' => 'LIC. ANGELA RENATA GOMEZ GONZALEZ',
                'horario' => '13:00 a 15:00',
                'dias' => 'Lun, Mie',
                'cupo' => 40,
                'subject_id' => $subject1
        ]);

        Group::create([
                'gpo' => 9,
                'profesor' => 'LIC ALDO FERNANDO TRUJILLO PRIEGO',
                'horario' => '13:00 a 15:00',
                'dias' => 'Mar, Jue',
                'cupo' => 40,
                'subject_id' => $subject1
        ]);

        Group::create([
                'gpo' => 10,
                'profesor' => 'DRA. OLINCA SUAREZ MEJIA',
                'horario' => '13:00 a 17:00',
                'dias' => 'Vie',
                'cupo' => 40,
                'subject_id' => $subject1
        ]);

        Group::create([
                'gpo' => 11,
                'profesor' => 'M.I RENE ALVAREZ GUTIERREZ',
                'horario' => '15:00 a 17:00',
                'dias' => 'Lun, Mie',
                'cupo' => 40,
                'subject_id' => $subject1
        ]);

        Group::create([
                'gpo' => 12,
                'profesor' => 'DRA: LUZ LAZOS RAMIREZ',
                'horario' => '15:00 a 17:00',
                'dias' => 'Mar, Jue',
                'cupo' => 40,
                'subject_id' => $subject1
        ]);

        Group::create([
                'gpo' => 13,
                'profesor' => 'LIC. AMELIA GUADALUPE FIEL RIVERA',
                'horario' => '17:00 a 19:00',
                'dias' => 'Mar, Jue',
                'cupo' => 40,
                'subject_id' => $subject1
        ]);

        Group::create([
                'gpo' => 14,
                'profesor' => 'LIC. MARTHA MANCILLA URREA',
                'horario' => '17:00 a 19:00',
                'dias' => 'Lun, Mie',
                'cupo' => 40,
                'subject_id' => $subject1
        ]);

        Group::create([
                'gpo' => 15,
                'profesor' => 'LIC. ANGELA RENATA GOMEZ GONZALEZ',
                'horario' => '17:00 a 19:00',
                'dias' => 'Lun, Mie',
                'cupo' => 40,
                'subject_id' => $subject1
        ]);

        Group::create([
                'gpo' => 16,
                'profesor' => 'MTRA. BARBARA MARGARITA RESENDIS CARAZA',
                'horario' => '19:00 a 21:00',
                'dias' => 'Lun, Mie',
                'cupo' => 40,
                'subject_id' => $subject1
        ]);

        Group::create([
                'gpo' => 17,
                'profesor' => 'MTRO. ALFONSO GARCIA DE QUEVEDO Y CORTINA',
                'horario' => '19:00 a 21:00',
                'dias' => 'Mar, Jue',
                'cupo' => 40,
                'subject_id' => $subject1
        ]);
    }

    function seed1055(){
        $subject1 = Subject::where('id',1055)->value('id');
        Group::create([
                'gpo' => 1,
                'profesor' => 'ING. JESUS PEREZ ESQUIVEL',
                'horario' => '07:00 a 09:00',
                'dias' => 'Lun, Mie',
                'cupo' => 35,
                'subject_id' => $subject1
        ]);
    
        Group::create([
                'gpo' => 2,
                'profesor' => 'ING. PABLO GARCIA Y COLOME',
                'horario' => '07:00 a 09:00',
                'dias' => 'Mar, Jue',
                'cupo' => 35,
                'subject_id' => $subject1
        ]);
    
        Group::create([
                'gpo' => 3,
                'profesor' => 'LIC. TEHNY CAROLINA RUIZ PRIMO MARTINEZ',
                'horario' => '07:00 a 11:00',
                'dias' => 'Vie',
                'cupo' => 35,
                'subject_id' => $subject1
        ]);
    
        Group::create([
                'gpo' => 4,
                'profesor' => 'ING. JESUS PEREZ ESQUIVEL',
                'horario' => '09:00 a 11:00',
                'dias' => 'Mar, Jue',
                'cupo' => 35,
                'subject_id' => $subject1
        ]);
    
        Group::create([
                'gpo' => 5,
                'profesor' => 'MTRA. VICTORIA RAMIRO ESTEBAN',
                'horario' => '09:00 a 11:00',
                'dias' => 'Lun, Mie',
                'cupo' => 35,
                'subject_id' => $subject1
        ]);
    
        Group::create([
                'gpo' => 6,
                'profesor' => 'LIC. MARIA DE GUADALUPE FLOR DIAZ DE LEON FERNANDEZ DE CASTRO',
                'horario' => '09:00 a 11:00',
                'dias' => 'Lun, Mie',
                'cupo' => 35,
                'subject_id' => $subject1
        ]);
    
        Group::create([
                'gpo' => 7,
                'profesor' => 'DRA. MARIA EUGENIA NEGRIN MUÑOZ',
                'horario' => '11:00 a 13:00',
                'dias' => 'Mie, Vie',
                'cupo' => 35,
                'subject_id' => $subject1
        ]);
    
        Group::create([
                'gpo' => 8,
                'profesor' => 'MTRA MARIA CUAIRAN RUIDIAZ',
                'horario' => '11:00 a 13:00',
                'dias' => 'Lun, Mie',
                'cupo' => 35,
                'subject_id' => $subject1
        ]);
    
        Group::create([
                'gpo' => 9,
                'profesor' => 'MES. MARGARITA PUEBLA CADENA',
                'horario' => '11:00 a 13:00',
                'dias' => 'Lun, Mie',
                'cupo' => 35,
                'subject_id' => $subject1
        ]);
    
        Group::create([
                'gpo' => 10,
                'profesor' => 'LIC. MA ISABEL DE LAS MERCEDES RULL VALDIVIA',
                'horario' => '11:00 a 13:00',
                'dias' => 'Mar, Jue',
                'cupo' => 35,
                'subject_id' => $subject1
        ]);
    
        Group::create([
                'gpo' => 11,
                'profesor' => 'ING. GONZALO LOPEZ DE HARO',
                'horario' => '11:00 a 13:00',
                'dias' => 'Mar, Jue',
                'cupo' => 35,
                'subject_id' => $subject1
        ]);
    
        Group::create([
                'gpo' => 12,
                'profesor' => 'LIC. TEHNY CAROLINA RUIZ PRIMO MARTINEZ',
                'horario' => '11:00 a 15:00',
                'dias' => 'Vie',
                'cupo' => 35,
                'subject_id' => $subject1
        ]);
    
        Group::create([
                'gpo' => 13,
                'profesor' => 'MTRA. ANA LUISA ALBERRO LIZON',
                'horario' => '13:00 a 15:00',
                'dias' => 'Mar, Jue',
                'cupo' => 35,
                'subject_id' => $subject1
        ]);
    
        Group::create([
                'gpo' => 14,
                'profesor' => 'DRA. ROCÍO OLIVARES ZORRILLA',
                'horario' => '13:00 a 15:00',
                'dias' => 'Lun, Mie',
                'cupo' => 35,
                'subject_id' => $subject1
        ]);
    
        Group::create([
                'gpo' => 15,
                'profesor' => 'DRA. MARIA EUGENIA NEGRIN MUÑOZ',
                'horario' => '13:00 a 15:00',
                'dias' => 'Mie, Vie',
                'cupo' => 35,
                'subject_id' => $subject1
        ]);
    
        Group::create([
                'gpo' => 16,
                'profesor' => 'MTRO JULIO ENRIQUE GORDILLO TORRES',
                'horario' => '15:00 a 17:00',
                'dias' => 'Lun, Vie',
                'cupo' => 35,
                'subject_id' => $subject1
        ]);
    
        Group::create([
                'gpo' => 17,
                'profesor' => 'LIC ANA YANTZIN PEREZ CORTES',
                'horario' => '15:00 a 17:00',
                'dias' => 'Mar, Jue',
                'cupo' => 35,
                'subject_id' => $subject1
        ]);
    
        Group::create([
                'gpo' => 18,
                'profesor' => 'LIC ANA YANTZIN PEREZ CORTES',
                'horario' => '17:00 a 19:00',
                'dias' => 'Mar, Jue',
                'cupo' => 35,
                'subject_id' => $subject1
        ]);
    
        Group::create([
                'gpo' => 19,
                'profesor' => 'DR. ANTONIO DE JESUS CASTRO RANGEL',
                'horario' => '19:00 a 21:00',
                'dias' => 'Mar, Jue',
                'cupo' => 35,
                'subject_id' => $subject1
        ]);
    }    

    function seed6644(){
        $subject1 = Subject::where('id',6644)->value('id');
        Group::create([
                'gpo' => 1,
                'profesor' => 'ING. MARTHA LOPEZ PELCASTRE',
                'horario' => '09:00 a 11:00',
                'dias' => 'Mar',
                'cupo' => 30,
                'subject_id' => $subject1
        ]);

        Group::create([
                'gpo' => 2,
                'profesor' => 'ING. IZANAMI MENDOZA GONZALEZ',
                'horario' => '19:00 a 21:00',
                'dias' => 'Mie',
                'cupo' => 30,
                'subject_id' => $subject1
        ]);

        Group::create([
                'gpo' => 3,
                'profesor' => 'ING. CZESLAW KRISTOFER LUGOWSKI RIVERO',
                'horario' => '15:00 a 17:00',
                'dias' => 'Jue',
                'cupo' => 25,
                'subject_id' => $subject1
        ]);

        Group::create([
                'gpo' => 4,
                'profesor' => 'ING. JORGE ALBERTO RODRIGUEZ CAMPOS',
                'horario' => '09:00 a 11:00',
                'dias' => 'Vie',
                'cupo' => 25,
                'subject_id' => $subject1
        ]);

        Group::create([
                'gpo' => 5,
                'profesor' => 'ING. SUSANA NAJERA MONTIEL',
                'horario' => '11:00 a 13:00',
                'dias' => 'Vie',
                'cupo' => 25,
                'subject_id' => $subject1
        ]);
    }

    function seed6686(){
        $subject1 = Subject::where('id',6686)->value('id');
        Group::create([
                'gpo' => 1,
                'profesor' => 'ING. JOSE ALBERTO LOPEZ CERVANTES',
                'horario' => '09:15 a 11:15',
                'dias' => 'Jue',
                'cupo' => 6,
                'subject_id' => $subject1
        ]);
    
        Group::create([
                'gpo' => 2,
                'profesor' => 'ING. NORMA REYES CRUZ',
                'horario' => '11:30 a 13:30',
                'dias' => 'Lun',
                'cupo' => 6,
                'subject_id' => $subject1
        ]);
    
        Group::create([
                'gpo' => 3,
                'profesor' => 'ING. ISMAEL ROMERO OCARANZA',
                'horario' => '14:00 a 16:00',
                'dias' => 'Lun',
                'cupo' => 6,
                'subject_id' => $subject1
        ]);
    
        Group::create([
                'gpo' => 4,
                'profesor' => 'M.I. MARIO ALBERTO HERNANDEZ FLORES',
                'horario' => '16:00 a 18:00',
                'dias' => 'Lun',
                'cupo' => 6,
                'subject_id' => $subject1
        ]);
    
        Group::create([
                'gpo' => 5,
                'profesor' => 'ING. BEATRIZ MELENDEZ VENANCIO',
                'horario' => '18:00 a 20:00',
                'dias' => 'Lun',
                'cupo' => 6,
                'subject_id' => $subject1
        ]);
    
        Group::create([
                'gpo' => 6,
                'profesor' => 'ING. ERIC VILORIA LOPEZ',
                'horario' => '07:00 a 09:00',
                'dias' => 'Mar',
                'cupo' => 6,
                'subject_id' => $subject1
        ]);
    
        Group::create([
                'gpo' => 7,
                'profesor' => 'ING. ADRIANA EUGENIA CHAVIRA DIAZ',
                'horario' => '09:15 a 11:15',
                'dias' => 'Mar',
                'cupo' => 6,
                'subject_id' => $subject1
        ]);
    
        Group::create([
                'gpo' => 8,
                'profesor' => 'ING. NORMA REYES CRUZ',
                'horario' => '11:30 a 13:30',
                'dias' => 'Mar',
                'cupo' => 6,
                'subject_id' => $subject1
        ]);
    
        Group::create([
                'gpo' => 9,
                'profesor' => 'ING. CHRISTIAN HERNANDEZ SANTIAGO',
                'horario' => '14:00 a 16:00',
                'dias' => 'Mar',
                'cupo' => 6,
                'subject_id' => $subject1
        ]);
    
        Group::create([
                'gpo' => 10,
                'profesor' => 'ING. ISMAEL ROMERO OCARANZA',
                'horario' => '16:00 a 18:00',
                'dias' => 'Mar',
                'cupo' => 6,
                'subject_id' => $subject1
        ]);
    
        Group::create([
                'gpo' => 11,
                'profesor' => 'M. I. JORGE ANTONIO MONROY JUAREZ',
                'horario' => '07:00 a 09:00',
                'dias' => 'Mie',
                'cupo' => 6,
                'subject_id' => $subject1
        ]);
    
        Group::create([
                'gpo' => 12,
                'profesor' => 'DRA. MONICA LOZADA MUÑOZ',
                'horario' => '09:15 a 11:15',
                'dias' => 'Mie',
                'cupo' => 6,
                'subject_id' => $subject1
        ]);
    
        Group::create([
                'gpo' => 13,
                'profesor' => 'DRA. MONICA LOZADA MUÑOZ',
                'horario' => '11:30 a 13:30',
                'dias' => 'Mie',
                'cupo' => 6,
                'subject_id' => $subject1
        ]);
    
        Group::create([
                'gpo' => 14,
                'profesor' => 'ING. CHRISTIAN HERNANDEZ SANTIAGO',
                'horario' => '14:00 a 16:00',
                'dias' => 'Mie',
                'cupo' => 6,
                'subject_id' => $subject1
        ]);
    
        Group::create([
                'gpo' => 15,
                'profesor' => 'ING. ULISES MARTINEZ GILBON',
                'horario' => '07:00 a 09:00',
                'dias' => 'Jue',
                'cupo' => 6,
                'subject_id' => $subject1
        ]);
    
        Group::create([
                'gpo' => 16,
                'profesor' => 'ING. JOSE ALBERTO LOPEZ CERVANTES',
                'horario' => '11:30 a 13:30',
                'dias' => 'Jue',
                'cupo' => 6,
                'subject_id' => $subject1
        ]);
    
        Group::create([
                'gpo' => 17,
                'profesor' => 'ING. CHRISTIAN HERNANDEZ SANTIAGO',
                'horario' => '14:00 a 16:00',
                'dias' => 'Jue',
                'cupo' => 6,
                'subject_id' => $subject1
        ]);
    
        Group::create([
                'gpo' => 18,
                'profesor' => 'M.I. MARIO ALBERTO HERNANDEZ FLORES',
                'horario' => '14:00 a 16:00',
                'dias' => 'Jue',
                'cupo' => 6,
                'subject_id' => $subject1
        ]);
    
        Group::create([
                'gpo' => 19,
                'profesor' => 'ING. ADRIANA S LOPEZ GARCIA',
                'horario' => '16:00 a 18:00',
                'dias' => 'Jue',
                'cupo' => 6,
                'subject_id' => $subject1
        ]);
    
        Group::create([
                'gpo' => 20,
                'profesor' => 'M.I. JESUS ALEJANDRO FLORES RAMIREZ',
                'horario' => '07:00 a 09:00',
                'dias' => 'Vie',
                'cupo' => 6,
                'subject_id' => $subject1
        ]);
    
        Group::create([
                'gpo' => 21,
                'profesor' => 'ING. JOSE ALBERTO LOPEZ CERVANTES',
                'horario' => '11:30 a 13:30',
                'dias' => 'Vie',
                'cupo' => 6,
                'subject_id' => $subject1
        ]);
    
        Group::create([
                'gpo' => 22,
                'profesor' => 'ING. FLORICEL RAMOS VARGAS',
                'horario' => '16:00 a 18:00',
                'dias' => 'Vie',
                'cupo' => 6,
                'subject_id' => $subject1
        ]);
    
        Group::create([
                'gpo' => 23,
                'profesor' => 'ING. ISMAEL ROMERO OCARANZA',
                'horario' => '07:00 a 09:00',
                'dias' => 'Sab',
                'cupo' => 6,
                'subject_id' => $subject1
        ]);
    
        Group::create([
                'gpo' => 24,
                'profesor' => 'ING. CLAUDIA ESPINOSA VILLAGRAN',
                'horario' => '09:15 a 11:15',
                'dias' => 'Sab',
                'cupo' => 6,
                'subject_id' => $subject1
        ]);
    
        Group::create([
                'gpo' => 25,
                'profesor' => 'ING. CLAUDIA ESPINOSA VILLAGRAN',
                'horario' => '11:30 a 13:30',
                'dias' => 'Sab',
                'cupo' => 6,
                'subject_id' => $subject1
        ]);
    }    

    function seed6590(){
        $subject1 = Subject::where('id',6590)->value('id');
        Group::create([
                'gpo' => 1,
                'profesor' => 'ING. JOSE ROQUE ROMAN GUADARRAMA',
                'horario' => '11:00 a 13:00',
                'dias' => 'Lun',
                'cupo' => 20,
                'subject_id' => $subject1
        ]);
    
        Group::create([
                'gpo' => 2,
                'profesor' => 'ING. LUIS SERGIO VALENCIA CASTRO',
                'horario' => '11:00 a 13:00',
                'dias' => 'Mar',
                'cupo' => 20,
                'subject_id' => $subject1
        ]);
    
        Group::create([
                'gpo' => 3,
                'profesor' => 'ING. CARLOS ALDAIR ROMAN BALBUENA',
                'horario' => '13:00 a 15:00',
                'dias' => 'Mie',
                'cupo' => 20,
                'subject_id' => $subject1
        ]);
    
        Group::create([
                'gpo' => 4,
                'profesor' => 'ING. LUIS SERGIO VALENCIA CASTRO',
                'horario' => '11:00 a 13:00',
                'dias' => 'Jue',
                'cupo' => 20,
                'subject_id' => $subject1
        ]);
    
        Group::create([
                'gpo' => 5,
                'profesor' => 'ING. REYNALDO MARTELL AVILA',
                'horario' => '15:00 a 17:00',
                'dias' => 'Jue',
                'cupo' => 20,
                'subject_id' => $subject1
        ]);
    
        Group::create([
                'gpo' => 6,
                'profesor' => 'ING. JOSE ROQUE ROMAN GUADARRAMA',
                'horario' => '09:00 a 11:00',
                'dias' => 'Vie',
                'cupo' => 20,
                'subject_id' => $subject1
        ]);
    }    

}
