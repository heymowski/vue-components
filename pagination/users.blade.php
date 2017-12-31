@extends('layouts.app')

@section('content')

    <div class="container">

        <users-table>
        

            
        </users-table>

{{--         <div class="row">
            <div class="col-md-8 col-md-offset-2">
    		<h5>Hola</h5>

    		<table class="table table-bordered">
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Created At</th>
                            </tr>
                            <tr v-for="user in users.data">
                                <td>@{{ user.name }}</td>
                                <td>@{{ user.email }}</td>
                                <td>@{{ user.created_at }}</td>
                            </tr>
                   </table>
                     
    	           <pagination-component  :pagination="users"
                                    @paginate="getUsers()"
                                    :offset="4">
                   </pagination-component>
            </div>
        </div> --}}
    </div>

@endsection
