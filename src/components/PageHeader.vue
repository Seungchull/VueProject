<!-- PageHeader.vue -->
<template>
    <header>
        <!-- 화면 가로 크기가 576px보다 작으면 세로 정렬로 변경 -->
        <nav class="navbar navbar-expand-sm navbar-light bg-light">
            <!-- container-fluid : 화면 가로 크기와 동일하게 설정 -->
            <div class="container-fluid">
                
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link">홈 </router-link>  
                    </li>
                    <li class="nav-item">
                        <router-link to="/about" class="nav-link">포인트충전 </router-link> 
                    </li>
                    <li class="nav-item">
                        <router-link :to="{name: 'BoardList'}" class="nav-link">게시판
                        </router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
       
    
</template>

<script>
export default {

}
</script>
<!-- !important : 같은 속성을 여러번 정의했을 때,나중에 설정한 값이 적용되지 않게 하기 위해 작성 -->
<style scoped>
nav .navbar-nav a.router-link-exact-active {
    color: goldenrod !important;
    
}
nav .navbar-nav a.nav-link{
    font-weight: bold;
    color: #2c3e50 !important;
}
</style>