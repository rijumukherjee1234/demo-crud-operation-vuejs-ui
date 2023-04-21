<template>
    <div>
        <div class="app-admin-wrap layout-sidebar-vertical sidebar-full">
        <aside>
            <side-bar></side-bar>
        </aside>
        <div class="switch-overlay"></div>
        <div class="main-content-wrap mobile-menu-content bg-off-white m-0">
            <router-view></router-view>
        </div>
    </div>
    </div>
</template>
<script>
import SideBar from '@/components/SideBar.vue';
export default {
    components:{
        SideBar
    },
    
}
</script>
<style>
   @import "@/assets/css/themes/lite-purple.css";
   @import "@/assets/css/plugins/perfect-scrollbar.css";
   @import "@/assets/css/plugins/metisMenu.min.css";
   @import "@/assets/fonts/iconsmind.css";
</style>