module.exports = {
    configureWebpack:{
        resolve:{
            alias: {
                'assets':'@/assets',
                'components':'@/components',
                'common':'@/common',
                'network':'@/network',
                'views':'@/views'
            }
        }
    }
}

// module.exports = {
//     configureWebpack: {
//       resolve: {
//         alias: {
//           'assets': '@/assets',
//           'components': '@/components',
//           'views': '@/views',
//         }
//       }
//     },
//   }