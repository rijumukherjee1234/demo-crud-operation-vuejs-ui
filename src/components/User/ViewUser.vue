<template>
    <div>
        <header class="main-header bg-white d-flex justify-content-between p-2">
                <div class="header-toggle">
                    <div class="breadcrumb">
                        <ul>
                            <li>User</li>
                            <li>View User</li>
                        </ul>
                    </div>
                </div>
                <div class="header-part-right">
                    <div class="dropdown">
                        <div class="user col align-self-end">
                            <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="person circle" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-person-circle b-icon bi" style="font-size: 2.1em;">
                                <g>
                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"></path>
                                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"></path>
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>
        </header>
        <div class="main-content pt-4">
                <div class="row">
                    <div class="col-md-12 mb-4">
                        <div class="card text-left">
                                <div class="card-body">
                                    <div class="row">
                                        <b-table striped hover :items="UserList" :fields="fields">
                                            <template #cell(Index)="data">
                                                {{ data.index + 1 }}
                                            </template>
                                            <template v-slot:cell(action)="row">
                                                <div class="text-nowrap">
                                                    <!-- <button @click="removeItem(row)" class="btn btn-success ripple" type="button" data-toggle="modal" data-target="#editUser"><i class="nav-icon i-Pen-2"></i></button> -->
                                                    &nbsp;<button @click="deleteUser(row)" class="btn btn-danger ripple" type="button"><i class="nav-icon i-Close-Window"></i></button>
                                                </div>
                                            </template>
                                        </b-table>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
  </template>
  <script>
  
  export default {
    data() {
        return {
            UserList:[
                {
                    "USER_TYPE":"External",
                    "ORGANISATION_NAME":"FDS Group",
                    "USER_FULL_NAME":"Riju Mukherjee",
                    "USER_EMAIL":"Rijumukherjee506@gmail.com",
                    "USER_CONTACT_NO":"9749830147",
                    "USER_ROLE":"Cashier",
                   
                }
            ],
            fields:[
                {key:'Index', label:'Sl. No.',class:'middle-align'},
                {key:'USER_TYPE', label:'User Type'},
                {key: 'ORGANISATION_NAME', label:'Organisation Name'},
                {key: 'USER_ROLE', label:'Role'},
                {key: 'USER_FULL_NAME', label:'Name'},
                {key: 'USER_EMAIL', label:'Email'},
                {key: 'USER_CONTACT_NO', label:'Contact No.'},
                {key: 'Action', label:'Action'},
            ],
        }
    },
    mounted(){
       // this.getUserlist();
    },
    methods:{
       
        // getUserlist() {
        //     this.$apiCall.get(this.$apiBus.view_user, {
        //         params : {
        //             ITEM: "VIEW_ALL",
        //             RECORD_SYS_ID: 0,
        //         }
        //     }).then(res => {
        //         if (res.status == 'true') {
        //             this.UserList = res.response;
        //         } else {
        //             this.UserList = [];
        //         }
        //     });
        // },
        
      
        // async deleteUser(data) {
        //     let deleteItemObj = data.item;
        //     const result = await Global.showConfirmationAlert(
        //         `Are you sure?`,
        //         "you want to delete this record!",
        //         "warning"
        //     );
        //     if (result.isConfirmed) {
        //         let postDataObj = {
        //             ITEM: "DELETE",
        //             USER_SYS_ID: deleteItemObj.USER_SYS_ID,
        //         };
        //         this.$apiCall.post(this.$apiBus.add_update_user,postDataObj).then(res => {
        //             if (res.status == "true") {
        //                 Global.showSuccessAlert(true, "success", res.response);
        //                 this.getUserlist();
        //             }
        //             else {
        //                 Global.showErrorAlert(true, "error", "Opp's Something Went Wrong!");
        //             }
        //         });
        //     }
        // },

    }
  }
  </script>
<style >
.middle-align{
    text-align
    
    : center;
}
</style>