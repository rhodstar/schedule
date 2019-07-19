@extends('layouts.app')

@section('content')
    <!-- Page Content -->
    <div class="container mt-3">
        <div class="row">
            <div class="col-sm-12">
                
                <form class="form-inline" action="/addByKey/s" method="GET" role="search">
                    {{ csrf_field() }}
                    <input type="text" class="form-control mb-2 mr-sm-2" 
                    placeholder="Clave asignatura" id="subjectkey" name="key">
                    <button class="btn btn-outline-danger mb-2 " type="submit">Buscar</button>
                </form>

                <div class="table-responsive mt-2" >
                    @if(isset($details))
                    <h5>Materia: {{$subject}}({{$query}})</h5>
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th>Grupo</th>
                                <th>Profesor</th>
                                <th>Horario</th>
                                <th>Días</th>
                                <!--th>Cupo</th-->
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach($details as $group)
                            <tr>
                                <td>{{$group->gpo}}</td>
                                <td>{{$group->profesor}}</td>
                                <td>{{$group->horario}}</td>
                                <td>{{$group->dias}}</td>
                                <!--td>{{$group->cupo}}</td-->
                                <td>
                                    <button class="btn btn-primary mb-2" type="button" 
                                        onclick="searchCell(1644,{$group->gpo})" 
                                        id="">
                                    Agregar
                                    </button>
                                </td>
                            </tr>
                            @endforeach
                        </tbody>
                    </table>
                    @elseif(isset($message))
                    <div class="alert alert-warning" role="alert">
                        <p>{{ $message }}</p>
                    </div>
                    @endif
                </div>
             
            </div>
        </div>
    </div>
    <!-- /.container -->
@endsection