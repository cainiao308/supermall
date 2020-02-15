<template>
    <div class="home">
        <Navbar class="nav-home">
            <div slot="center">购物街</div>
        </Navbar>
        <MainSwiper :banners="banners"/>
        <Recommend :recommends = "recommands"/>
        <Feature/>
        <TabControl :titles="['流行','新款','精选']" class="tab-control"/>
        <ul>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
             <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
             <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
             <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
             <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
             <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
        </ul>
    </div>
</template>

<script>
import Navbar from 'components/common/navbar/Navbar'
import {getdata , getHomeGoods} from 'network/home'
import MainSwiper from 'views/home/child/MainSwiper'
import Recommend from 'views/home/child/Recommend'
import Feature from 'views/home/child/Feature'
import TabControl from 'components/content/tabControl/TabControl'


export default {
    name:"Home",
    components:{
        Navbar,
        MainSwiper,
        Recommend,
        Feature,
        TabControl
    },
    data() {
        return {
            banners:[],
            recommands:[],
            goods:{
                'pop':{page:0 , list:[]},
                'new':{page:0 , list:[]},
                'sell':{page:0 , list:[]}
            }
        }
    },
    created() {
        getdata().then(res =>{
            this.banners = res.data.banner.list
            this.recommands = res.data.recommend.list
        })
        this.getGoods('pop')
        this.getGoods('pop')
        this.getGoods('new')
        this.getGoods('sell')
    },
    methods: {
        getGoods(type){
             let page = this.goods[type].page
             this.goods[type].page ++
             getHomeGoods(type , this.goods[type].page).then(res =>{
                console.log(res);
                this.goods[type].list.push(...res.data.list)
            })
        }
    },
}
</script>

<style scoped>
    .home {
        padding-top: 44px
    }
    .nav-home {
        background-color: var(--color-tint);
        color: #fff;
        position: fixed;
        z-index: 10;
        left: 0;
        right: 0;
        top: 0
    }
    .tab-control{
        position: sticky;
        top: 44px;
        background-color: #fff;
    }
</style>
    
