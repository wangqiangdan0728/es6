//构建工具
import gulp from 'gulp';
//gulp语句作if判断
import gulpif from 'gulp-if';
//启动脚本作为服务器的包
import liveserver from 'gulp-live-server';
//解析命令行参数
import args from './util/args';

gulp.task('server', (cb) => {
    if (!args.watch) return cb();
    var server = liveserver.new(['--harmony', 'server/bin/www']); //创建服务器
    server.start(); //启动服务器

    //监听文件，进行热更新
    gulp.watch(['server/public/**/*.js', 'server/views/**/*.ejs'], function(file) {
        server.notify.apply(server, [file]); //通知服务器，文件发生改变
    });

    //监听路由，接口变化，需要重启服务器
    gulp.watch(['server/routes/**/*.js', 'server/app.js'], () => {
        server.start.bind(server)()
    })
})