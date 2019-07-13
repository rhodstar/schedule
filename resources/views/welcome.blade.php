<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Horario FI</title>

        <!-- Styles -->
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
        <link href="{{ asset('css/horario.css') }}" rel="stylesheet">

        <!-- Scripts -->
        <script src="{{ asset('js/app.js') }}" defer></script>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">

    </head>
    <body>
        <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
            <div class="container">
                <a class="navbar-brand" href="{{ url('/')}}">Horario FI</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" 
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="https://github.com/rhofp/horario-fi">Fork me</a>
                        </li>
                    </ul>
                </div>
            </div>    
        </nav>

        <!-- Page Content -->
        <div class="container mt-3">
            <div class="row">
                <div class="col-sm-12">
                    <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active" id="pills-schedule-table-tab" data-toggle="pill" 
                            href="#pills-schedule-table" role="tab" aria-controls="pills-schedule-table" 
                            aria-selected="false"
                            >Mi horario
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="pills-search-tab" data-toggle="pill" href="#pills-search" 
                            role="tab" aria-controls="pills-search" aria-selected="true">
                            Buscar materias
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="pills-group-add-tab" data-toggle="pill" href="#pills-group-add"
                            role="tab" aria-controls="pills-group-add" aria-selected="false">
                            Agregar mis materias
                        </a>
                    </li>
                    </ul>
                    
                    
                    <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade" id="pills-search" role="tabpanel" aria-labelledby="pills-search-tab">
                        <form class="form-inline">
                            <input class="form-control mb-2 mr-sm-2" placeholder="Clave asignatura" id="subjectkey">
                            <button class="btn btn-primary mb-2 " type="button" onclick="loadSubjects()">Buscar</button>
                        </form>
                        <div id="list-subjects"> </div>  
                    </div>
                    <div class="tab-pane fade" id="pills-group-add" role="tabpanel" aria-labelledby="pills-group-add-tab">
                        <form class="form-inline">

                        <input type="text" class="form-control mb-2 mr-sm-2" placeholder="Clave">
                        <input type="text" class="form-control mb-2 mr-sm-2" placeholder="Grupo">
                        
                        <button type="button" class="btn btn-primary mb-2">Agregar</button>
                        </form>              
                        <div id="list-subjects-added"> </div>   
                    </div>
                    <div class="tab-pane fade show active" id="pills-schedule-table" role="tabpanel" 
                        aria-labelledby="pills-schedule-table-tab">
                        <div class="col-sm-12 col-md-12 table-responsive" id="schedule-table">
                    </div>
                    </div>
                    </div> 
                </div>
            </div>
        </div>
        <!-- /.container -->

        <!-- Footer -->
        <footer class="py-5 bg-dark">
        <div class="container">
        <p class="m-0 text-center text-white">Open source project. Feel free to contribute. </p>
        </div>
        <!-- /.container -->
        </footer>
        <script src="{{ asset('js/TimeClass.js') }}"></script>
        <script src="{{ asset('js/subjectsData.js') }}"></script>
        <script src="{{ asset('js/loadTable.js') }}"></script>
        <script src="{{ asset('js/loadSubjects.js') }}"></script>
        <script src="{{ asset('js/searchCell.js') }}"></script>
    </body>
</html>
