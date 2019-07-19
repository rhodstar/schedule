@extends('layouts.app')

@section('content')
    <!-- Page Content -->
    <div class="container mt-3">
        <div class="row">
            <div class="col-sm-12">

            <div class="jumbotron">
                <h1 class="display-4">Bienvenido al horario FI</h1>
                <p class="lead">Está página web fue creada con la finalidad de crear un horario lo más rápido posible ya que las vacantes para los grupos siempre se suelen acabar lo que hace que se tenga que reacomodar algunas de nuestras materias.</p>
                <hr class="my-4">
                <p>Hay dos formas de utilizarlo, la primera opción es :
                    <ul>
                        <li>
                            <b>Agregar por clave</b> en donde puedes buscar la materia y posterioremente se despliega una lista de los grupos en donde puedes escoger uno con el botón "Agregar" </p>
                        </li>
                        <li>
                            <b>Agregar por clave y grupo</b>, está opción es más rápida porque permite ingresar la clave y el grupo a la vez.
                        </li>
                    </ul>
                <a class="btn btn-danger btn-lg mr-2" href="{{route('addByKey')}}" role="button">Agregar por clave</a>
                <a class="btn btn-danger btn-lg" href="{{route('addByKeyAndSub')}}" role="button">Agregar por clave y grupo</a>
            </div>

            </div>
        </div>
    </div>
    <!-- /.container -->
@endsection

