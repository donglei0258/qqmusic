const proxy = require('http-proxy-middleware')

module.exports = function (app){
    app.use(proxy('/music',{
        target:'https://u.y.qq.com',
        changeOrigin:true,
        pathRewrite:{
            '^/music':''
        }
    }))
    
    app.use(proxy('/find',{
        target:'https://c.y.qq.com',
        changeOrigin:true,
        pathRewrite:{
            '^/find':''
        }
    }))
    app.use(proxy('/findMusic',{
        target:'https://api.apiopen.top',
        changeOrigin:true,
        pathRewrite:{
            '^/findMusic':''
        }
    }))
}