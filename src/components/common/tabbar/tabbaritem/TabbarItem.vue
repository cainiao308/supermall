<template>
    <div class="tabar-item" @click="ItemClick">
        <div v-if="isActive"><slot  name="item-img"/></div>
        <div v-else><slot  name="item-img-active"/></div>
        <div :style="comactiveColor"><slot name="item-title" /></div>
    </div>
</template>

<script>
export default {
    name: "TabbarItem",
    props:{
        path:String,
        activeColor:{
            type:String,
            default: 'red'
        }
    },
    data() {
        return {
            // isActive: true,
        }
    },
    computed: {
        isActive(){
            return this.$route.path.indexOf(this.path)
        },
        comactiveColor(){
            return this.isActive? {}:{color:this.activeColor}
        }
    },
    methods: {
        ItemClick(){
            console.log(this.$route.path);
            this.$router.replace(this.path,() => {}, (e) => {
                console.log('输出报错',e) 
            })      
        }
    },
}
</script>

<style  scoped>
  .tabar-item{
    flex:1;
    text-align: center;
  }

  .tabar-item img{
      width: 24px;
      height: 24px
  }


</style>