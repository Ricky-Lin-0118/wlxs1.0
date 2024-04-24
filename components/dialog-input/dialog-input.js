Component({
  data: {
    conversations: [],
    inputMessage: ''
  },
  methods: {
    handleSend: function(e) {
      const inputBox = this.selectComponent('.input-box');
      this.data.conversations.push({
        role: 'user',
        content: this.data.inputMessage,
        index: this.data.conversations.length
      });
      this.setData({
        conversations: this.data.conversations,
        inputMessage: ''
      });   
      wx.request({
        url: 'https://api.funworld.cc:5000/ai/talk',
        method: 'POST',
        data: {
          'conversations': this.data.conversations
        },
        header:{
          'Content-Type': 'application/json'
        },
        success: (res) => {
          const receiveMessage = res.data.answer;
          const totaltoken = res.data.token.total_tokens;
          if(totaltoken > 2000){
            this.data.conversations.shift()
            this.data.conversations.shift()
          }
          this.data.conversations.push({
            role: 'assistant',
            content: receiveMessage
          })
          console.log(this.data.conversations)
          this.setData({
            conversations: this.data.conversations
          })
        },
        fail: (err) => {
          console.error(err);
        }
      })
    },
    handleInput: function(e){
      this.data.inputMessage = e.detail.value;
    }
  }
})