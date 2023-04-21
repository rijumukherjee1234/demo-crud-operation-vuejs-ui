<template>
    <div class="sidebar-panel bg-white">
            <div class="gull-brand pr-3 text-center mt-4 mb-2 d-flex justify-content-center align-items-center">
                <a href=""><img class="pl-3" :src="logo" alt="alt" /></a>
            </div>
            <div class="scroll-nav ps ps--active-y" data-perfect-scrollbar="data-perfect-scrollbar" data-suppress-scroll-x="true">
                <div class="side-nav">
                    <div class="main-menu">
                        <ul class="metismenu" id="menu">
                            <li class="Ul_li--hover">
                                <router-link to="dashboard">
                                        <i class="i-Dashboard text-20 mr-2 text-muted"></i>
                                        <span class="item-name text-15 text-muted">Dashboard</span>
                                </router-link>
                            </li>
                            <li class="Ul_li--hover ">
                                <a class="has-arrow" href="#" v-b-toggle.collapse-1>
                                    <i class="i-Business-Man text-20 mr-2 text-muted"></i>
                                    <span class="item-name text-15 text-muted">User</span>
                                </a>
                                <b-collapse id="collapse-1">
                                    <ul class="" style="height: 0px;">
                                        <li class="item-name">
                                            <router-link :to="{name:'view-user'}">
                                                <a><span class="item-name">View User</span></a>
                                            </router-link>
                                        </li>
                                        <li class="item-name">
                                            <router-link to="add-user">
                                                <a><span class="item-name">Add User</span></a>
                                            </router-link>
                                        </li>
                                    </ul>
                                </b-collapse>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
</template>
<script>
    export default {
        data(){
            return{
                logo: require("@/assets/images/BackboneLayout.png"),
            }
        },
        methods:{
            
        },
        computed:{
            
        },
        created(){}
    }
</script>

<style >

</style>