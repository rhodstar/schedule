@extends('layouts.app')

@section('content')      
<!-- Page Content -->
<div class="container ">
    <div class="row">

        <div class="col-sm-12 col-md-3">
            <form class="form" method="GET" action="/addByKeyAndSub/s">
            {{ csrf_field() }}
            <input type="text" class="form-control mb-2" placeholder="Clave" name="key">
            <input type="text" class="form-control mb-2" placeholder="Grupo" name="group">
            
            <button type="submit" class="btn btn-outline-danger mb-2 mr-1"> Agregar </button>
            <button class="btn btn-danger mb-2" type="button"> Reiniciar Horario  </button>
            </form>              
        </div>

        <div class="col-sm-12 col-md-9">

            <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item">
                    <a class="nav-link active" id="list-sub-tab" data-toggle="tab" href="#list-sub" role="tab" aria-controls="list-sub" aria-selected="true">Materias</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="horario-tab" data-toggle="tab" href="#horario" role="tab" aria-controls="horario" aria-selected="false">Horario</a>
                </li>

            </ul>
            <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="list-sub" role="tabpanel" aria-labelledby="list-sub-tab">
                @isset($subjects)
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th>Clave</th>
                                <th>Materia</th>
                                <th>Grupo</th>
                                <th>Profesor</th>
                                <th>Horario</th>
                                <th>Días</th>
                                <!--th>Cupo</th-->
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                        @foreach($subjects as $subject)
                            <tr>
                                <td>{{ $subject['key'] }}</td>
                                <td>{{ $subject['name'] }}</td>
                                <td>{{ $subject['gpo'] }}</td>
                                <td>{{ $subject['profesor'] }}</td>
                                <td>{{ $subject['horario'] }}</td>
                                <td>{{ $subject['dias'] }}</td>
                                <!--td></td-->
                                <td>
                                    <button class="btn btn-success mb-2" type="button">Cambiar</button>
                                </td>
                                <td>
                                    <button class="btn btn-danger mb-2" type="button">Remover</button>
                                </td>
                            </tr>
                        @endforeach
                        </tbody>
                    </table>
                        
                    @else
                    <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <h1 class="display-4">¡Bienvenido!</h1>
                        <p class="lead">Agrega tus materias en el panel que aparece a tu izquierda.</p>
                    </div>
                    </div> 
                    @endif              
                
                </div>
                <div class="tab-pane fade" id="horario" role="tabpanel" aria-labelledby="horario-tab">...</div>
            </div>    
        </div>      

    </div>
</div>
<!-- /.container -->
@endsection
