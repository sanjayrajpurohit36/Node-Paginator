<template>
  <div class="container-fluid out_box">
    <div>
      <div class="heading">
        <h1>Data</h1><hr>
      </div> 
      <div class="table-responsive" id="data">
        <table class="table text-center table-striped table-bordered">
          <caption name="records">Records<span>: {{totalRecords}} </span></caption>
          <thead class="thead-dark">
            <tr>
              <th scope="col">  
                S.No
              </th>
              <th scope="col">
                Name
              </th>
              <th scope="col">
                Age
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(todo, index) in todos" :key="todo.id" class="todo-item">
              <td>
                {{todo.id + 1}}
              </td>
              <td>
                {{todo.name}}
              </td>
              <td>
                {{todo.age}}
              </td>
            </tr>
          </tbody>
        </table>
        <center>
        <nav aria-label="...">
          <ul class="pagination pagination-sm">
            <li class="page-item" v-bind:class="{'disabled': current_page==0}">
              <a class="page-link" href="javascript:void(0)" v-on:click="showTable(0)">First</a>
            </li>
            <li class="page-item" v-bind:class="{'disabled': current_page==0}">
              <a class="page-link" href="javascript:void(0)" v-on:click="showTable(current_page - 1)">Previous</a>
            </li>
            <li class="page-item" v-for="(no_of_pages, index) in no_of_pages" :key="no_of_pages" v-on:click="showTable(index)"v-bind:class="{'active': index==current_page}" >
              <a class="page-link" href="javascript:void(0)">{{no_of_pages}}</a>
            </li>
            <li class="page-item" v-bind:class="{'disabled': current_page==no_of_pages - 1}">
              <a class="page-link" href="javascript:void(0)" v-on:click="showTable(current_page + 1)">Next</a>
            </li>
            <li class="page-item" v-bind:class="{'disabled': current_page==no_of_pages - 1}">
              <a class="page-link" href="javascript:void(0)" v-on:click="showTable(no_of_pages - 1)">Last</a>
            </li>
          </ul> 
        </nav>
        </center>
      </div>  
    </div>
  </div>                       
</template>

<script>
import axios from 'axios';
export default {
  name: 'TodoList',
  data () {
    return {
      newId: 1,         // starting id for books
      newItem: {        // Object for books
        id: '',
        title: '',
        age: ''
      },
      delId: -1,
      totalRecords: 0,
      todos: {},        // for keeping all books data
      errors: [],
      no_of_pages: 0,
      current_page: 0
    }
  },
  methods:{
    showTable: function(page_no) {
      let vm = this;  
      axios.get(`http://localhost:8000/api/show?page_no=` + (page_no))
      .then(response => {
        // JSON responses are automatically parsed.
        vm.todos = response.data.data;  
        vm.no_of_pages = response.data.no_of_pages;
        vm.current_page = response.data.current_page;
        vm.totalRecords = response.data.total_data;
        })
    },
  },
  mounted() {
    let vm = this;
    vm.showTable(); 
  }
}
</script>
