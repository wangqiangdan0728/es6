//构建工具
import gulp from 'gulp';
//gulp语句作if判断
import gulpif from 'gulp-if';
//文件拼接
import concat from 'gulp-concat';
//打包工具
import webpack from 'webpack';
//处理文件流
import gulpWebpack from 'webpack-stream';
//文件重命名作标志
import named from 'vinyl-named';
//热更新，自动更新
import livereload from 'gulp-livereload';
//处理文件信息流
import plumber from 'gulp-plumber';
//文件重命名
import rename from 'gulp-rename';
//压缩js、css文件
import uglify from 'gulp-uglify';
//命令行工具输出包
import { log, colors } from 'gulp-util';
//解析命令行参数
import args from './util/args';

gulp.task('scripts', () => {
    return gulp.src(['app/js/index.js']) //打开index文件
        .pipe(plumber({
            errorHandle: function() {

            }
        })) //处理常规的错误逻辑,改变默认的处理错误的机制
        .pipe(named()) //重命名
        .pipe(gulpWebpack({
            module: {
                loaders: [{
                    test: /\.js$/,
                    loader: 'babel-loader'
                }]
            }
        }), null, (err, stats) => {
            log(`Finished '${colors.cyan('scripts')}'`, stats.toString({
                chunks: false
            }))
        })
        .pipe(gulp.dest('server/public/js')) //编译完成后输出路径
        .pipe(rename({
            basename: 'cp',
            extname: '.min.js'
        }))
        .pipe(uglify({
            compress: {
                properties: false
            },
            output: {
                'quote_keys': true
            }
        })) //压缩文件
        .pipe(gulp.dest('server/public/js'))
        .pipe(gulpif(args.watch, livereload())); //监听文件，修改进行热更新
})