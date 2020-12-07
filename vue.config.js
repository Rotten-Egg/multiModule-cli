const path = require('path')
const glob = require('glob') // 用于筛选文件

//配置路径别名
function resolve(dir) {
    return path.join(__dirname, dir)
}

// 获取某文件夹下的html与js
function handleEntry(entry) {
    let entries = {},
        entryPathName = '',
        entryTemplate = '';

    glob.sync(entry).forEach((item, index) => {
        entryTemplate = item.split('/').splice(-3)
        entryPathName = item.split('/')[3] // 正确输出js和html的路径
        entries[entryPathName] = {
            'pages': {
                'index': {
                    entry: 'src/' + entryTemplate[0] + '/' + entryTemplate[1] + '/main.js',
                    template: "public/index.html",
                    title: entryTemplate[2],
                    filename: "index.html",
                },
            },
        }
    })
    return entries
}

const config = handleEntry('./src/projects/**?/*.js')

let projectName = process.env.PROJECT_NAME;

module.exports = {
    ...config[projectName],
    publicPath: "./",
    outputDir: "dist/" + projectName + "/",
    chainWebpack: config => {
        config.resolve.alias
            .set("@", resolve("src"))
            .set("projects", resolve("src/projects"))
            .set("components", resolve("src/components"))
    },
};