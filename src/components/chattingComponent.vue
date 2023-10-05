<template>
    <div class="room-chat">
        <div class="chatting-components">
            <div class="receiver"  v-for="(item, index) in chats" :key="index">
                <img class="image-receiver" src="../assets/no-image.png" alt="">
                <div class="text-receiver">
                    {{item}}
                </div>
            </div>
            <div class="sender" >
                <img class="image-sender" src="../assets/no-image.png" alt="">
                <div class="text-sender">
                   asdasdd
                </div>
            </div>
        </div>
        <div class="typing-text">
            <div class="chat-text">
                <el-input type="textarea" v-model="chat" @keypress.enter="onSubmit"></el-input>
            </div>
            <div class="submit-button">
                <el-button type="primary" @click="onSubmit">send</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters,mapActions} from 'vuex'
    export default {
        name: 'ChattingComponent',
        data() {
            return {
                chat: ''
            }
        },
        created(){
            this.chats
        },
        computed: {
            ...mapGetters({chats: 'getChats'})
        },
        methods: {
            ...mapActions(['SendChat']),
            onSubmit(){
                this.SendChat(this.chat)
                console.log(this.chat)
                this.chat = ''
            }
        }
    }
</script>