# 前端知识点

## 综合性问题
### 1、[vue双向绑定的原理](https://segmentfault.com/a/1190000006599500)
### 2、[虚拟DOM的原理](http://www.jianshu.com/p/ec4a1b7d37dd)
### 3、[promise的原理](https://zhuanlan.zhihu.com/p/25178630)
### 4、[前端页面渲染机制](http://blog.codingplayboy.com/2017/03/29/webpage_render/#DOM)
### 5、不支持冒泡的事件
>* mouseenter、mouseleave
>* load、unload
>* focus、blur
>* error
>* abort
>* resize
### 6、前端SEO注意事项
>1. 合理设置title、description、keywords，三者的权重递减
>2. 语义化HTML，符合W3C规范
>3. 重要的内容放在最前面
>4. 少用iframe
>5. 非装饰性图片添加alt属性
>6. 提高网站的响应速度
### 7、浏览器内核与对应前缀
| 浏览器| 内核|前缀|
| --------|--------|--------|
| Chrome| WebKit |-webkit-|
| Safari|WebKit|-webkit-|
| IE|Trident|-ms-|
| FireFox|Gecko|-moz-|
| Opera|Presto|-o-|
### 8、浏览器常见的兼容性问题
>* CSS兼容问题
  >>1. png24位图片在ie6上出现背景，解决方案使用8位png图片
  >>2. 浮动元素设置了margin在IE6下会产生双倍margin,解决方案将浮动元素设置display: inline
  >>3. 盒模型差异：IE盒子模型，标准盒子模型
  >>4.  Chrome 中文界面下默认会将小于 12px 的文本强制按照 12px 显示,可通过加入 CSS 属性 -webkit-text-size-adjust: none; 解决。
>* JS兼容性问题
  >>1. IE下event不存在target属性,使用srcElement代替
  >>2. event的x,y在IE中支持，pageX和pageY在Firefox中支持
  >>3. 老版本的 Internet Explorer （IE5 和 IE6）使用 ActiveX 对象：xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
### 9、从浏览器地址栏输入url到显示页面的步骤
>1. 在浏览器中输入url并回车
>2. 浏览器查看该url对应的缓存是否存在，存在的话检查是否过期（命中强缓存），没有过期的话直接从缓存中读取
>3. 浏览器解析url，提取出协议、主机、端口号、资源路径等
>4. 构造HTTP请求(请求行、请求头、请求体)
  >>* 请求行：请求方法（GET），请求URI(path)，协议版本(HTTP/1.1)，CRLF
  >>* 请求头：Host: *.*.com、If-Modified-Since: *、Cache-Control: max-age=0、Cookie: authorstyle=yes、Referer: https://www.google.com.hk/ ...
  >>* 请求体：name=qiu&age=25，GET请求体为空
>5. 查询主机IP地址，查找顺序如下：
  >>* 浏览器缓存
  >>* 本地缓存
  >>* host文件
  >>* 路由器缓存
  >>* 运营商DNS服务器
  >>* 二级域名DNS服务器
  >>* 顶级域名DNS服务器
>6. 与目标IP地址建立TCP链接（三次握手）
  >>* 客户端向服务器端发送SYN握手信号
  >>* 服务器返回ACK确认信号与SYN握手信号
  >>* 客户端发送ACK确认信号 
>7. 发送HTTP请求
>8. 服务器解析请求，检查是否命中协商缓存,命中则返回304状态码
>9. 构造HTTP响应（状态行、相应头、响应体）
  >>* 状态行：HTTP版本，状态码，状态描述，CRLF
  >>* 响应头：Last-Modified:*、Cache-Control: max-age=21600、Content-Type: text/html; charset=iso-8859-1 ...
  >>* 响应体：HTML文件内容
>10. 浏览器检查状态码200、304
>11. 缓存资源
>12. 解析HTML文档（自上而下解析）
>13. 构建DOM树(文档内所有节点构成的一个树形结构)
>14. 构建CSSOM树（与DOM树结构相似，只是另外为每一个节点关联了样式信息）
>15. 根据DOM树和CSSOM树构建渲染树（每一个渲染对象都对应着DOM节点，但是非视觉（隐藏，不占位）DOM元素不会插入渲染树）
>16. 布局（layout）
>17. 绘制（paint）
>18. 显示页面
### 10、网站性能优化
>1. 减少http请求：合并CSS、JS文件，CSS Sprites，小图转化为base64格式
>2. 减少dom层级
>3. CSS放在head中
>4. JS放在body尾部
>5. 开启缓存：强缓存（Cache=Control、Expires）与协商缓存（Last-Modified/if-modified-since、Etags/if-none-match）
>6. 启用gzip压缩
>7. 压缩图片、JS文件、CSS文件
>8. CDN
>9. 减少dom的访问
>10. 不使用CSS表达式与@import
>11. 样式结构层次尽量简单
### 11、什么是渐进增强
在web设计时强调可访问性、语义化HTML标签，保证所有人都能访问页面的基本内容和功能，同时为高级浏览器用户提供更好的用户体验。
>* 所有浏览器都能访问基本内容
>* 所有浏览器都能使用基本功能
>* 语义化HTML标签
>* 通过外部样式增强页面布局
>* 通过外部脚本增强页面功能
### 12、HTML语义化及好处
通过包含语义的标签恰当的表示页面的结构，即使在没有样式的情况下页面也能恰当的展示
>* 页面结构清晰
>* 利于SEO
>* 便于盲人阅读
>* 没有样式也能够恰当展示
### 13、HTTP状态码及含义
>* 1XX：服务器端已接收到请求，但需要客户端的进一步操作
>* 2XX：服务器成功接收并处理了请求
>* 3XX：需要进一步操作以完成请求
  >>* 301：请求的资源被永久地转移到了新的URI，返回信息会包括新的URI，浏览器会自动定向到新URI。今后任何新的请求都应使用新的URI代替
  >>* 302：请求的资源被临时的转移到了新的URI，客户端应继续使用原有URI
  >>* 304：请求的资源没有修改，服务器不会返回资源，客户端使用缓存资源
>* 4XX：客户端错误，请求包含错误的语法或无法完成请求
  >>* 404：请求的资源无法找到
>* 5XX：服务器错误，服务器在处理请求的过程中发生了错误
### 14、ES6新特性
>* 块作用域（let、const）
>* class、extends
>* 箭头函数
>* 模块
>* promise
### 15、手写一个ajax请求
```javascript
var request = new XMLHttpRequest(); // 新建XMLHttpRequest对象
//var request = new ActiveXObject('Microsoft.XMLHTTP'); // 新建Microsoft.XMLHTTP对象

request.onreadystatechange = function () { // 状态发生变化时，函数被回调
    if (request.readyState === 4) { // 成功完成
        // 判断响应结果:
        if (request.status === 200) {
            // 成功，通过responseText拿到响应的文本:
            return success(request.responseText);
        } else {
            // 失败，根据响应码判断失败原因:
            return fail(request.status);
        }
    } else {
        // HTTP请求还在继续...
    }
}

// 发送请求:
request.open('GET', '/api/categories');
request.send();
```
### 16、ajax readyState
>* 0：请求未初始化
>* 1：服务器连接已建立
>* 2：正在发送请求
>* 3：正在接受服务器相应
>* 4：接受服务器相应完毕
