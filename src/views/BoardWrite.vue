<template>
    <div class="board">
        <h1>글 작성</h1>
    </div>
    <table>
	<colgroup>
		<col style="width:18.5%">
		<col style="width:auto">
	</colgroup>
	<tbody>
		<tr>
			<th scope="row">제목</th>
			<td><input type="text" placeholder="제목을 입력하세요."  v-model.trim="writer"></td>
		</tr>
		<tr>
			<th scope="row">제목</th>
			<td><input type="text" placeholder="제목을 입력하세요."  v-model.trim="subject"></td>
		</tr>
		<tr>
			<th scope="row">내용</th>
			<td><textarea rows="10" placeholder="내용을 입력하세요."  v-model.trim="content"></textarea></td>
		</tr>
	</tbody>
</table>
<div class="buttons">
	<div class="right">
		<button class="button blue" @click="boardSaveClick">등록</button>
		<button class="button" @click="boardCancelClick">취소</button>
	</div>
</div>
</template>

<script>
export default {
    name : 'BoardWrite',
    data : function(){
        return {
            writer:'',
            subject:'',
            content:''
        }
    }
}
</script>

<style scoped>
.board {width:800px; margin: 20px auto; }
.board table { width:100%; border-top:2px solid black; border-spacing:0; }
.board table th { padding:8px 10px 10px 10px; vertical-align:middle; color: black; font-size:14px; border-bottom:1px solid #ccc; background:#f8f8f8; }
.board table td { padding:7px 20px 9px 20px; text-align:left; vertical-align:middle; border-bottom:1px solid #ccc; font-size:14px; line-heighT:150%; }
.board table td input, .board table td textarea { width:100%; color:#000 !important; } 
.buttons { position:relative; height:32px; margin-top:20px; }
.buttons > div.right { position:absolute; height:32px; right:0; }
.buttons > div > .button { overflow:visible; cursor:pointer; min-width:125px; height:32px; margin:0 2px; padding:0 15px; line-height:32px; font-size:14px; border:1px solid #dfdfdf; background:#fff; border-radius:10px; }
.buttons > div > .button.blue { color:#fff; border-color:black !important; background:black !important; }
</style>