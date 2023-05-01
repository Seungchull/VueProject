<template>
  <div class="main-top-promotion">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-6">
          <div class="py-3 py-lg-5">
            <h1 class="text-white fw-bold">
              어서오세요 <br> 쉐어링 플랫폼
            </h1>
            <p class="text-white mb-4 lead">
              SharingCircle 입니다.
            </p>
          </div>
        </div>
        <div class="col-sm-12 col-md-6">
        </div>
      </div>
    </div>
  </div>
  <div class="home">
    <img alt="Vue logo" src="../assets/sclogo.png">
    <HelloWorld msg="SharingCircle에 오신 여러분을 환영합니다."/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
<style>
.main-top-promotion{
  position: relative;
  width: 100%;
  background-color: grey;
}
</style>
