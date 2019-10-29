/**
 * @description
 *  保存生成代码的相关脚本，对外暴露接口暂为生成代码类型与生成路径
 *  代码模版保存在src/_template中
 * @interface type: 生成代码类型page | component
 * @interface path: 生成路径位置
 */
const path = require('path')
const fs = require('fs')
const ejs = require('ejs')

// 参数获取方式有待调整...
let type = 'page'
let name = ''
switch (process.argv.length) {
  case 2:
    throw new Error('')
  case 3:
    name = process.argv[2]
    break
  case 4:
    type = process.argv[2]
    name = process.argv[3]
    break
}

if (type !== 'page' && type !== 'component') { throw new Error('type参数只能为page或component') }

if (type === 'page') {
  // 首先将template复制到path位置，然后通过模版引擎将变量替换
  const pagePath = path.resolve(__dirname, '../src/pages', name)
  const templatePath = path.resolve(__dirname, '../src/_template/page')

  /**
   * 根据模版创建页面文件
   * 回调写法有点糟糕，待优化
   */
  fs.mkdir(pagePath, function(err) {
    console.log('err', err)
    fs.readFile(`${templatePath}/index.tsx`, function(err, sourceData) {
      const targetData = ejs.render(sourceData.toString(), {
        name: name[0].toUpperCase() + name.slice(1), // 组件名首字母大写
        model: name,
      })
      fs.writeFile(`${pagePath}/index.tsx`, targetData, function(err) {
        if (err) { console.error(err) }
      })
    })

    fs.readFile(`${templatePath}/model.ts`, function(err, sourceData) {
      const targetData = ejs.render(sourceData.toString(), {
        model: name,
      })
      fs.writeFile(`${pagePath}/model.ts`, targetData, function(err) {
        if (err) { console.error(err) }
      })
    })

    fs.readFile(`${templatePath}/style.scss`, function(err, sourceData) {
      fs.writeFile(`${pagePath}/style.scss`, sourceData.toString(), function(err) {
        if (err) { console.error(err) }
      })
    })
  })
}

if (type === 'component') {
  const componentPath = path.resolve(__dirname, '../src/components', name)
  const templatePath = path.resolve(__dirname, '../src/_template/component')

  fs.mkdir(componentPath, function(err) {
    console.log('err', err)
    fs.readFile(`${templatePath}/index.tsx`, function(err, sourceData) {
      const targetData = ejs.render(sourceData.toString(), {
        className: name,
        name: name[0].toUpperCase() + name.slice(1), // 组件名首字母大写
      })
      fs.writeFile(`${componentPath}/index.tsx`, targetData, function(err) {
        if (err) { console.error(err) }
      })
    })

    fs.readFile(`${templatePath}/style.scss`, function(err, sourceData) {
      const targetData = ejs.render(sourceData.toString(), {
        className: name,
      })
      fs.writeFile(`${componentPath}/style.scss`, targetData, function(err) {
        if (err) { console.error(err) }
      })
    })
  })
}
