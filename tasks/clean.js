//构建工具
import gulp from 'gulp';
//删除动作
import del from 'del';
//解析命令行参数
import args from './util/args';

gulp.task('clean', () => {
    return del(['server/public', 'server/views']) //清空
})