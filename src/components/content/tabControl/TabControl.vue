<template>
    <div class="tab-control">
        <div v-for="(item , index) in titles"
            :class="index === currentIndex ? 'active': null" 
            :key="item" class="tabcontrolitem"
            @click="change(index)">
            <span>{{item}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "TabControl",
    props:{
        titles:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data() {
        return {
            currentIndex: 0
        }
    },
    methods: {
        change(index){
            this.currentIndex = index
        }
    },
}
</script>

<style scoped>
.tab-control{
    display: flex;
    text-align: center;
    font-size: 15px
}
.tabcontrolitem {
    flex: 1;
    line-height: 40px
    
}
.active{
    color: var(--color-high-text);
    border-bottom: 5px solid pink
}
</style>