<div >
    <form class="form-inline" method="GET" action="/addByKeyAndSub/s">
    {{ csrf_field() }}
    <input type="text" class="form-control mb-2 mr-sm-2" placeholder="Clave" name="key">
    <input type="text" class="form-control mb-2 mr-sm-2" placeholder="Grupo" name="group">
    
    <button type="submit" class="btn btn-outline-danger mb-2">Agregar</button>
    </form>              
   
    <div class="table-responsive mt-2" >
        @if(isset($details))
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
                @foreach($details as $group)
                <tr>
                    <td>{{$query}}</td>
                    <td>{{$subject}}</td>
                    <td>{{$group->gpo}}</td>
                    <td>{{$group->profesor}}</td>
                    <td>{{$group->horario}}</td>
                    <td>{{$group->dias}}</td>
                    <!--td>{{$group->cupo}}</td-->
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
        @elseif(isset($message))
        <div class="alert alert-warning" role="alert">
            <p>{{ $message }}</p>
        </div>
        @endif
    </div>
</div>