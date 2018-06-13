import yargs from 'yargs';

//区分开发环境or发布环境
const args = yargs
    .option('production', {
        boolean: true,
        default: false,
        describe: 'production all scripts'
    })
    //监听修改的文件
    .option('watch', {
        boolean: true,
        default: false,
        describe: 'watch all files'
    })
    //输出命令行日志
    .option('verbose', {
        boolean: true,
        default: false,
        describe: 'logs'
    })
    //处理sourcemaps参数，强制生成sourcemaps
    .option('sourcemaps', {
        describe: 'force the creation of sourcemaps'
    })
    //设置服务器端口
    .option('port', {
        string: true,
        default: 8080,
        describe: 'server port'
    })
    //让命令行作为字符串解析
    .argv;
export default args;