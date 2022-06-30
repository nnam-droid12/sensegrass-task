const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app){
    app.use('*',
    createProxyMiddleware({
        target: 'https://sensegrass-task-api.herokuapp.com',
        changeOrigin: true
    })

    );
};