<template>
    <div class="boardview">
        <h1>게시글 내용 확인</h1>
        <table>
            <colgroup>
                <col style="width:18.5%">
                <col style="width:">
            </colgroup>
            <tbody>
                <tr>
                    <th scope="row">제목</th>
                    <td class="title">{{ boardItem.subject }}</td>
                </tr>
                <tr>
                    <th scope="row">작성자</th>
                    <td>{{ boardItem.writer }}</td>
                </tr>
                <tr>
                    <th scope="row">작성일자</th>
                    <td>{{ boardItem.writedate }}</td>
                </tr>
                <tr>
                    <th scope="row">내용</th>
                    <td>{{ boardItem.content }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name : 'BoardView',
    data:function(){
        return {
            boardItem:{}
        }
    },
    methods: {
            getBoardRead(){
                this.axios.get("http://localhost:9000/boards/"+this.$route.query.boardNo).then((res)=>{
                    console.log(res);
                }).catch((err) => {
                    console.log(err);
                })                
            },
            boardListClick(){
                this.$router.router.push({name:'BoardList'});
            }
        },
        mounted(){
            this.getBoardRead();
        }
    }

</script>

<style scoped>
.board {width:800px; margin:20px auto;}
.board table {width:100%; border-top:2px solid black; border-spacing: 0;}
.board table th {padding:8px 10px 10px 10px; vertical-align:middle; color:black; font-size: 14px; border-bottom: 1px solid #ccc; background: #f8f8f8;}
.board table td { padding:7px 20px 9px 20px; text-align:left; vertical-align:middle; border-bottom:1px solid #ccc; font-size:14px;line-height: 150%;}
.board table td.title {font-weight:bold;}
</style>