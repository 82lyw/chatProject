<template>
    <div class="modal">
          <div class="modal-header">
            <h4>{{ modalTitle }}</h4>
          </div>
          <div class="modal-content">
            <div>
              <slot name="modal-content">内容区域</slot>
            </div>
          </div>
          <div class="modal-footer">
              <input class="btn" type="button" v-model="okBtn" @click="okHandle" />
          </div>
        </div>
</template>

<script>

export default {
    
    data () {
        return {
            modalTitle:"标题",
            okBtn:'确认',
            cancelBtn: '取消'
        }
    },
    methods: {
        okHandle:function () {
                console.log("点击确定");
                this.$emit("on-ok");
            }
    }


}
</script>

<style scoped>
p,h4{
    margin:0;
    }
        .modal{
            top: 50vh;
            width: 76vw;
            background-color: #fff;
            border: 1px solid rgba(0, 0, 0, .3);
            border-radius: 1rem;
            box-shadow: 0 4px 12px rgba(0, 0, 0, .5);
            margin: 6rem;
        }
        .modal-header {
            color: #fff;
            background: rgba(255, 89, 85, 0.24);
            border-radius: 1rem 1rem 0 0;
            padding: 15px;
            border-bottom: 1px solid rgba(255, 89, 85, 0.3);
        }
        .modal-content div {
            padding: 15px 10px;
        }
        .modal-footer {
            padding: 15px;
            border-top: 1px solid #e5e5e5;
            text-align: center;
            border-radius: 0 0 1rem 1rem;
            border-top: 1px solid rgba(255, 89, 85, 0.3);
            background: rgba(255, 89, 85, 0.24);
        }
        .btn {
            height: 28px;
            padding: 0 20px;
            cursor: pointer;
            line-height: 28px;
            display: inline-block;
            color: #666666;
            margin-right: 5px;
            outline: none;
            text-align: center;
            border: 0;
            background: none;
            font-size: 1.6rem;
        }
</style>