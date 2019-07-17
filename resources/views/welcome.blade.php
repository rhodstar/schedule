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
                    @include('partials.navpills')                    
                    
                <div class="tab-content" id="pills-tabContent">
                    @include('partials.addByKey')
                    @include('partials.addByKeyAndSub')

                    <div class="tab-pane fade" id="pills-schedule-table" role="tabpanel" 
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
        <script src="{{ asset('js/loadTable.js') }}"></script>
        <script src="{{ asset('js/searchCell.js') }}"></script>
    </body>
</html>
