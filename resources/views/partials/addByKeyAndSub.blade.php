<div >
    <form class="form-inline" method="GET" action="/key_sub">
    {{ csrf_field() }}
    <input type="text" class="form-control mb-2 mr-sm-2" placeholder="Clave" name="key">
    <input type="text" class="form-control mb-2 mr-sm-2" placeholder="Grupo" name="group">
    
    <button type="submit" class="btn btn-outline-danger mb-2">Agregar</button>
    </form>              
   
    <div class="table-responsive mt-2" >
        @if(isset($details))
        <?php dd($group)?>
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
            </tbody>
        </table>
        @elseif(isset($message))
        <div class="alert alert-warning" role="alert">
            <p>{{ $message }}</p>
        </div>
        @endif
    </div>

</div>