<template>
    <div class="signup">
        <h1>회원가입</h1>
        <form class="signupform">
            <p>
                <label for="memberIdInput">아이디</label>
                <input type="text" id="memberIdInput" class="input_text" v-model.trim="memberId" placeholder="아이디를 입력하세요" />
            </p>
            <p>
                <label for="memberPasswordInput">비밀번호</label>
                <input type="password" id="memberPasswordInput" class="input_text" v-model.trim="memberPassword" placeholder="비밀번호를 입력하세요" />
            </p>
            <p>
                <label for="memberEmailInput">이메일</label>
                <input type="email" id="memberEmailInput" class="input_text" v-model.trim="memberEmail" placeholder="이메일을 입력하세요"/>
            </p>
            <p>
                <label for="memberPhoneInput">전화번호</label>
                <input type="phone" id="memberPhoneInput" class="input_text" v-model.trim="memberPhone" placeholder="전화번호를 입력하세요(- 없이)"/>
            </p>
            <p class="buttons">
                <button class="button grey">가입하기</button>
                <button class="button">이전페이지로</button>
            </p>
        </form>
    </div>
</template>

<script>
export default {
    name: 'SignUpView',
    data: function(){
        return {
            memberId:'',
            memberPassword:'',
            memberEmail:'',
            memberPhone:'',
        }
    }
}
</script>
<style scoped>
.signup { width:800px; margin:20px auto;}
.signupform { width:400px; margin:auto;}
.signupform p > label { display: inline-block; width:100px; font-size:14px; padding-right: 10px;}
.signupform p > .input_text { width:200px; font-size:14px; height:32px; }
.buttons { position:relative; height:32px; margin-top:20px; }
.buttons > .button { overflow:visible; cursor:pointer; min-width:125px; height:32px; margin:0 2px; padding:0 15px; line-height:32px; font-size:14px; border:1px solid #dfdfdf; background:#fff; border-radius:10px; }
.buttons > .button.grey { color:#fff; border-color:grey !important; background:grey !important; }
</style>