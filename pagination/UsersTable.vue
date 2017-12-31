<template>

	<div class="row">

	    <div class="col-md-8 col-md-offset-2">
	    
	    <h5>Users</h5>

	    	<table class="table">
	        

	            <tr>
	                <th>Name</th>
	                <th>Email</th>
	                <th>Created At</th>
	            </tr>
	            
	            <tr v-for="user in users.data">
	                <td>{{ user.name }}</td>
	                <td>{{ user.email }}</td>
	                <td>{{ user.created_at }}</td>
	            </tr>

	        </table>
	             
	        <pagination-component 	:pagination="users"
	            					@paginate="getUsers()"
	            					:offset="4">

	        </pagination-component>

	    </div>
    
    </div>

</template>

<script>

	var data = {
			        
		users: {
		    total: 0,
		    per_page: 2,
		    from: 1,
		    to: 0,
		    current_page: 1
		},
		offset: 4,
    };
	
	export default{
	  	data : function () {
	    	return data
	  	},
	    mounted() {
	        this.getUsers();
	    },
	    methods: {
	        getUsers() {
	            axios.get(`/users-json?page=${this.users.current_page}`)
	                .then((response) => {
	                    this.users = response.data;
	                })
	                .catch(() => {
	                    console.log('handle server error from here');
	                });
	        }
	    }
  }
</script>