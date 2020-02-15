<template>
    <div class="mainSwiper">
        <Swiper>
            <SwiperItem v-for="item in banners" :key="item.id" >
                <a :href="item.link">
                    <img :src="item.image" alt="">
                </a>
            </SwiperItem>
        </Swiper>
    </div>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper'

export default {
    name:"MainSwiper",
    props:{
        banners:{
            type:Array,
            default(){
                return []
            }
        }
    },
    components:{
        Swiper, 
        SwiperItem
    }
}
</script>