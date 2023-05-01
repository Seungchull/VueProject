<template>
    <div class="login">
        <h1>Login</h1>
        <form class="loginform">
            <p>
                <label for="memberIdInput">아이디</label>
                <input type="text" id="memberIdInput" class="input_text" ref="memberIdInput" v-model.trim="memberId" placeholder="아이디를 입력하세요" />
            </p>
            <p>
                <label for="memberPasswordInput">비밀번호</label>
                <input type="password" id="memberPasswordInput" class="input_text" ref="memberPasswordInput" v-model.trim="memberPassword" placeholder="비밀번호를 입력하세요"/>
            </p>
            <p class="buttons">
                <button class="button grey">로그인</button>
                <button class="button">돌아가기</button>
            </p>
        </form>
    </div>
</template>

<script>
export default {
    name: 'LoginView',
    data: function(){
        return {
            memberId:'',
            memberPassword: '',
            
        }
    }
}
</script>
<style scoped>
.login { width:800px; margin:20px auto; }
.loginform { width:400px; margin:auto; }
.loginform p > label { display:inline-block; width:100px; font-size:14px; padding-right:10px; }
.loginform p > .input_text { width:200px; font-size:14px; height:32px; }
.buttons { position:relative; height:32px; margin-top:20px; }
.buttons > .button { overflow:visible; cursor:pointer; min-width:125px; height:32px; margin:0 2px; padding:0 15px; line-height:32px; font-size:14px; border:1px solid #dfdfdf; background:#fff; border-radius:10px; }
.buttons > .button.grey { color:#fff; border-color:grey !important; background:grey !important; }
</style>
