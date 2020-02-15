<template>
    <div class="recommend">
        <div v-for="item in recommends" :key="item.sort" class="recommenditem">
            <a :href="item.link">
                <img :src="item.image" alt="">
                <div>{{item.title}}</div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name:"Recommend",
    props:{
        recommends:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style scoped>
.recommend{
    display: flex;
    text-align: center;
    font-size: 12px;
    padding: 10px 0 20px;
    border-bottom: 10px solid #eeeeee
}

.recommenditem{
   flex: 1
}

.recommenditem img{
    width: 70px;
    height: 70px;
    margin-bottom: 10px
}
</style>>
    