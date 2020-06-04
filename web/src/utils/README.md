## 工具方法

- [日期类](#date)
- [常用](#index)
- [浏览器](#browser)
- [校验](#validate)
- [接口](#http)

### 日期类 `date.js`<div id="date"></div>

引用方式:

```js
import {method} from '@/utils/date.js'
```


[toNextTimes(n)](#toNextTimes) ⇒ `number`
获取当前时间的n天后的时间戳

[timeToTimestamp(time)](#timeToTimestamp) ⇒ `number`
日期转时间戳

[check()](#check)
日期数字小于10，补“0”

[getTimeInterval(startTime, endTime) ](#getTimeInterval)⇒ `string`
返回指定时间戳之间的时间间隔

[getFormatDate(date, dateType)](#getFormatDate) ⇒ `string`
按类型格式化日期

[leapYear(year)](#leapYear) ⇒ `boolean`
判断是否为闰年

[leapYears(start, end)](#leapYears) ⇒ `array`
返回两个年份之间的闰年

[isTime(str)](#isTime) ⇒ `boolean`
判断时间格式是否有效
短时间，如 (10:24:06)

[strDateTimeLong(str)](#strDateTimeLong) ⇒ `boolean`
长日期时间，形如 (2019-10-24 10:24:06)

[strDateTimeShort(str)](#strDateTimeShort) ⇒ `boolean`
短日期，形如 (2019-10-24)

[compareDate(d1, d2)](#compareDate) ⇒ `boolean`
验证日期大小
例：&quot;2019-10-24&quot; 和 &quot;2019-10-25&quot;

[isToday(val)](#isToday) ⇒ `boolean`
验证一个日期是不是今天

[isYesterday(val)](#isYesterday) ⇒ `boolean`
验证传入的日期是否是昨天

[convertDate(date, day)](#convertDate) ⇒ `string`
设置几天后的日期

<div id="toNextTimes"></div>

#### toNextTimes(n) ⇒ `number`
获取当前时间的n天后的时间戳

**Kind**: global function
**Returns**: `number` - 返回值为时间毫秒值

| Param | Type | Description |
| --- | --- | --- |
| n | `number` | 天数 |

<div id="timeToTimestamp"></div>

#### timeToTimestamp(time) ⇒ `number`
日期转时间戳

**Kind**: global function
**Returns**: `number` - 返回值为时间毫秒值

| Param | Type | Description |
| --- | --- | --- |
| time | String | 日期字符串，如'2018-8-8','2018,8,8','2018/8/8' |

<div id="check"></div>

#### check()
日期数字小于10，补“0”

**Kind**: global function
<div id="getTimeInterval"></div>

#### getTimeInterval(startTime, endTime) ⇒ `string`
返回指定时间戳之间的时间间隔

**Kind**: global function
**Returns**: `string` - str 返回时间字符串

| Param | Type | Description |
| --- | --- | --- |
| startTime | \* | 开始时间的时间戳 |
| endTime | \* | 结束时间的时间戳 |

<div id="getFormatDate"></div>

#### getFormatDate(date, dateType) ⇒ `string`
按类型格式化日期

**Kind**: global function
**Returns**: `string` - dateText 返回为指定格式的日期字符串

| Param | Type | Description |
| --- | --- | --- |
| date | \* | 具体日期变量 |
| dateType | `string` | 需要返回类型 |

<div id="leapYear"></div>

#### leapYear(year) ⇒ `boolean`
判断是否为闰年

**Kind**: global function
**Returns**: `boolean` - 返回布尔值

| Param | Type | Description |
| --- | --- | --- |
| year | `number` | 要判断的年份 |

<div id="leapYears"></div>

#### leapYears(start, end) ⇒ `array`
返回两个年份之间的闰年

**Kind**: global function
**Returns**: `array` - arr 返回符合闰年的数组

| Param | Type | Description |
| --- | --- | --- |
| start | `number` | 开始年份 |
| end | `number` | 结束年份 |

<div id="isTime"></div>

#### isTime(str) ⇒ `boolean`
判断时间格式是否有效
短时间，如 (10:24:06)

**Kind**: global function
**Returns**: `boolean` - 返回布尔值

| Param | Type | Description |
| --- | --- | --- |
| str | `string` | 需要验证的短时间 |

<div id="strDateTimeLong"></div>

#### strDateTimeLong(str) ⇒ `boolean`
短日期，形如 (2019-10-24)

**Kind**: global function
**Returns**: `boolean` - 返回布尔值

| Param | Type | Description |
| --- | --- | --- |
| str | `string` | 需要验证的短时间 |

<div id="strDateTimeShort"></div>

#### strDateTimeShort(str) ⇒ `boolean`
长日期时间，形如 (2019-10-24 10:24:06)

**Kind**: global function
**Returns**: `boolean` - 返回布尔值

| Param | Type | Description |
| --- | --- | --- |
| str | `string` | 需要验证的短时间 |

<div id="compareDate"></div>

#### compareDate(d1, d2) ⇒ `boolean`
验证日期大小
例："2019-10-24" 和 "2019-10-25"

**Kind**: global function
**Returns**: `boolean` - 返回布尔值

| Param | Type | Description |
| --- | --- |--- |
| d1 | `string` |需要验证的日期1 |
| d2 | `string` |需要验证的日期2|

<div id="isToday"></div>

#### isToday(val) ⇒ `boolean`
验证一个日期是不是今天

**Kind**: global function
**Returns**: `boolean` - 返回布尔值

| Param | Type | Description |
| --- | --- | --- |
| val | `string` | 需要验证的日期 |

<div id="isYesterday"></div>

#### isYesterday(val) ⇒ `boolean`
验证传入的日期是否是昨天

**Kind**: global function
**Returns**: `boolean` - 返回布尔值

| Param | Type | Description |
| --- | --- | --- |
| val | `string` | 需要验证的日期 |

<div id="convertDate"></div>

#### convertDate(date, day) ⇒ `string`
设置几天后的日期

**Kind**: global function
**Returns**: `string` - 返回想要得到的日期

| Param | Type | Description |
| --- | --- | --- |
| date | `string` | 起始日期 |
| day | `number` | 向后的天数 |


### 常用方法 `index.js`<div id="index"></div>

引用方式:
```js
import {method} from '@/utils/index.js'
```


[formatMoney](#formatMoney)  
金钱格式化，三位加逗号

[base64ToFile](#base64ToFile)
base64转file

[base64ToBlob](#base64ToBlob)
base64转blob

[blobToFile](#blobToFile)
blob转file

[fileToBase64](#fileToBase64)
file转base64

[createTree](#createTree)
根据pid生成树形结构

[RandomNum](#RandomNum)
生成指定范围随机数

[similarity](#similarity)
数组交集

[randomHexColorCode](#randomHexColorCode)
随机16进制颜色 randomHexColorCode
方法二

[escapeHTML](#escapeHTML)
转义html(防XSS攻击)

[detectDeviceType](#detectDeviceType)
检测移动/PC设备

[hideTag](#hideTag)
隐藏所有指定标签
例: hide(document.querySelectorAll(&#39;img&#39;))

[getStyle](#getStyle)
返回指定元素的生效样式

[elementContains](#elementContains)
检查是否包含子元素

[outOfNum](#outOfNum)
数字超过规定大小加上加号“+”，如数字超过99显示99+

[sumNum](#sumNum)
计算多个数字或者数组中数字的总和

[getUUID()](#getUUID)
获取uuid

[isAuth(key)](#isAuth)
是否有权限

[treeDataTranslate(data, id, pid)](#treeDataTranslate)
树形数据转换

[clearLoginInfo()](#clearLoginInfo)
清除登录信息

[subText()](#subText)
截取字符串并加身略号

[fileToBase64String(file, format, size, formatMsg, sizeMsg)](#fileToBase64String) ⇒ Promise.&lt;any&gt;
获取文件base64编码

[formatFileSize(fileSize)](#formatFileSize)
B转换到KB,MB,GB并保留两位小数

[getTreeData()](#getTreeData)
递归生成树形结构

[foreachTree()](#foreachTree)
遍历树节点

[traceParentNode()](#traceParentNode)
追溯父节点

[traceChildNode()](#traceChildNode)
寻找所有子节点

[inArray(item, data)](#inArray)
查询数组中是否存在某个元素并返回元素第一次出现的下标

[OutOsName(osVersion)](#OutOsName)
Windows根据详细版本号判断当前系统名称

[getOSType()](#getOSType)
判断手机是Andoird还是IOS
 0: ios
 1: android
 2: 其它

[debounce(func, wait, immediate)](#debounce)
函数防抖

[throttle(func, wait, type)](#throttle)
函数节流

[type(target)](#type)
判断类型

[arrScrambling(arr)](#arrScrambling)
数组乱序

[countOccurrences(arr, value)](#countOccurrences)
数组中某元素出现的次数

[add(arg1, arg2)](#add)
加法函数（精度丢失问题）

[sub(arg1, arg2)](#sub)
减法函数（精度丢失问题）

[division(num1, num2)](#division)
除法函数（精度丢失问题）

[mcl(num1, num2)](#mcl)
乘法函数（精度丢失问题）

[tco(f)](#tco)
递归优化（尾递归）

[randomNumInteger()](#randomNumInteger)
生成随机整数

[trim(str, type)](#trim)
去除空格

[turnCase(str, type)](#turnCase)
大小写转换

[hexColor()](#hexColor)
随机16进制颜色 hexColor
方法一

[numberToChinese(num)](#numberToChinese)
将阿拉伯数字翻译成中文的大写数字

[changeToChinese(Num)](#changeToChinese)
将数字转换为大写金额



<div id="formatMoney"></div>

#### formatMoney
金钱格式化，三位加逗号

**Kind**: global function

| Param | Type |
| --- | --- |
| num | `number` |

<div id="base64ToFile"></div>

#### base64ToFile
base64转file

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| base64 | `base64` |  |
| filename | `string` | 转换后的文件名 |

<div id="base64ToBlob"></div>

#### base64ToBlob
base64转blob

**Kind**: global function

| Param | Type |
| --- | --- |
| base64 | `base64` |

<div id="blobToFile"></div>

#### blobToFile
blob转file

**Kind**: global function

| Param | Type |
| --- | --- |
| blob | `blob` |
| fileName | `string` |

<div id="fileToBase64"></div>

#### fileToBase64
file转base64

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| file | \* | 图片文件 |

<div id="createTree"></div>

#### createTree
根据pid生成树形结构

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| items | object | 后台获取的数据 |
| id | \* | 数据中的id |
| link | \* | 生成树形结构的依据 |

<div id="RandomNum"></div>

#### RandomNum
生成指定范围随机数

**Kind**: global function

| Param | Type |
| --- | --- |
| min | `number` |
| max | `number` |

<div id="similarity"></div>

#### similarity
数组交集

**Kind**: global function

| Param | Type |
| --- | --- |
| arr1 | `array` |
| arr2 | `array` |

<div id="randomHexColorCode"></div>

#### randomHexColorCode
方法二进制颜色 randomHexColorCode

**Kind**: global function
<div id="escapeHTML"></div>

#### escapeHTML
转义html(防XSS攻击)

**Kind**: global function
<div id="detectDeviceType"></div>

#### detectDeviceType
检测移动/PC设备

**Kind**: global function
<div id="hideTag"></div>

#### hideTag
例: hide(document.querySelectorAll('img'))

**Kind**: global function
<div id="getStyle"></div>

#### getStyle
返回指定元素的生效样式

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| el | `element` | 元素节点 |
| ruleName | `string` | 指定元素的名称 |

<div id="elementContains"></div>

#### elementContains
检查是否包含子元素

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| parent | `element` |  |
| child | `element` | 例：elementContains(document.querySelector('head'), document.querySelector('title')); // true |

<div id="outOfNum"></div>

#### outOfNum
数字超过规定大小加上加号“+”，如数字超过99显示99+

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| val | `number` | 输入的数字 |
| maxNum | `number` | 数字规定界限 |

<div id="sumNum"></div>

#### sumNum
计算多个数字或者数组中数字的总和

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| arr | `number` \| `array` | 输入的数字 |

<div id="getUUID"></div>

#### getUUID()
获取uuid

**Kind**: global function
<div id="isAuth"></div>

#### isAuth(key)
是否有权限

**Kind**: global function

| Param | Type |
| --- | --- |
| key | \* |

<div id="treeDataTranslate"></div>

#### treeDataTranslate(data, id, pid)
树形数据转换

**Kind**: global function

| Param | Type |
| --- | --- |
| data | \* |
| id | \* |
| pid | \* |

<div id="clearLoginInfo"></div>

#### clearLoginInfo()
清除登录信息

**Kind**: global function
<div id="subText"></div>

#### subText()
截取字符串并加身略号

**Kind**: global function
<div id="fileToBase64String"></div>

#### fileToBase64String(file, format, size, formatMsg, sizeMsg) ⇒ Promise.&lt;any&gt;
获取文件base64编码

**Kind**: global function

| Param | Description |
| --- | --- |
| file |  |
| format | 指定文件格式 |
| size | 指定文件大小(字节) |
| formatMsg | 格式错误提示 |
| sizeMsg | 大小超出限制提示 |

<div id="formatFileSize"></div>

#### formatFileSize(fileSize)
B转换到KB,MB,GB并保留两位小数

**Kind**: global function

| Param | Type |
| --- | --- |
| fileSize | `number` |

<div id="getTreeData"></div>

#### getTreeData()
递归生成树形结构

**Kind**: global function
<div id="foreachTree"></div>

#### foreachTree()
遍历树节点

**Kind**: global function
<div id="traceParentNode"></div>

#### traceParentNode()
追溯父节点

**Kind**: global function
<div id="traceChildNode"></div>

#### traceChildNode()
寻找所有子节点

**Kind**: global function
<div id="inArray"></div>

#### inArray(item, data)
查询数组中是否存在某个元素并返回元素第一次出现的下标

**Kind**: global function

| Param | Type |
| --- | --- |
| item | \* |
| data | `array` |

<div id="OutOsName"></div>

#### OutOsName(osVersion)
Windows根据详细版本号判断当前系统名称

**Kind**: global function

| Param | Type |
| --- | --- |
| osVersion | `string` |

<div id="getOSType"></div>

#### getOSType()
 2: 其它oidndoird还是IOS

**Kind**: global function
<div id="debounce"></div>

#### debounce(func, wait, immediate)
函数防抖

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| func | function |  |
| wait | `number` | 延迟执行毫秒数 |
| immediate | `boolean` | true 表立即执行，false 表非立即执行 |

<div id="throttle"></div>

#### throttle(func, wait, type)
函数节流

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| func | function | 函数 |
| wait | `number` | 延迟执行毫秒数 |
| type | `number` | 1 表时间戳版，2 表定时器版 |

<div id="type"></div>

#### type(target)
判断类型

**Kind**: global function

| Param | Type |
| --- | --- |
| target | \* |

<div id="arrScrambling"></div>

#### arrScrambling(arr)
数组乱序

**Kind**: global function

| Param | Type |
| --- | --- |
| arr | `array` |

<div id="countOccurrences"></div>

#### countOccurrences(arr, value)
数组中某元素出现的次数

**Kind**: global function

| Param | Type |
| --- | --- |
| arr | `array` |
| value | \* |

<div id="add"></div>

#### add(arg1, arg2)
加法函数（精度丢失问题）

**Kind**: global function

| Param | Type |
| --- | --- |
| arg1 | `number` |
| arg2 | `number` |

<div id="sub"></div>

#### sub(arg1, arg2)
减法函数（精度丢失问题）

**Kind**: global function

| Param | Type |
| --- | --- |
| arg1 | `number` |
| arg2 | `number` |

<div id="division"></div>

#### division(num1, num2)
除法函数（精度丢失问题）

**Kind**: global function

| Param | Type |
| --- | --- |
| num1 | `number` |
| num2 | `number` |

<div id="mcl"></div>

#### mcl(num1, num2)
乘法函数（精度丢失问题）

**Kind**: global function

| Param | Type |
| --- | --- |
| num1 | `number` |
| num2 | `number` |

<div id="tco"></div>

#### tco(f)
递归优化（尾递归）

**Kind**: global function

| Param | Type |
| --- | --- |
| f | function |

<div id="randomNumInteger"></div>

#### randomNumInteger()
生成随机整数

**Kind**: global function
<div id="trim"></div>

#### trim(str, type)
去除空格

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| str | `string` | 待处理字符串 |
| type | `number` | 去除空格类型 1-所有空格  2-前后空格  3-前空格 4-后空格 默认为1 |

<div id="turnCase"></div>

#### turnCase(str, type)
大小写转换

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| str | `string` | 待转换的字符串 |
| type | `number` | 1-全大写 2-全小写 3-首字母大写 其他-不转换 |

<div id="hexColor"></div>

#### hexColor()
方法一进制颜色 hexColor

**Kind**: global function
<div id="numberToChinese"></div>

#### numberToChinese(num)
将阿拉伯数字翻译成中文的大写数字

**Kind**: global function

| Param | Type |
| --- | --- |
| num | `number` |

<div id="changeToChinese"></div>

#### changeToChinese(Num)
将数字转换为大写金额

**Kind**: global function

| Param | Type |
| --- | --- |
| Num | `number` |

### 浏览器类 `browser.js`<div id="browser"></div>

引用方式:
```js
import {method} from '@/utils/browser.js'
```


[currentURL](#currentURL)
返回当前url

[getScrollPosition](#getScrollPosition)
返回当前滚动条位置

[smoothScroll](#smoothScroll)
滚动到指定元素区域

[scrollToTop](#scrollToTop)
平滑滚动到页面顶部

[httpsRedirect](#httpsRedirect)
http跳转https

[bottomVisible](#bottomVisible)
检查页面底部是否可见

[getExplorerName](#getExplorerName)
获取当前浏览器名称

[getUrlParam(name, origin)](#getUrlParam)
获取url参数（第一种）

[getUrlParams(name, origin)](#getUrlParams)
获取url参数（第二种）

[replaceParamVal(paramName, replaceWith)](#replaceParamVal)
修改url中的参数

[funcUrlDel(name)](#funcUrlDel)
删除url中指定的参数

[getUrlAllParams(url)](#getUrlAllParams)
获取全部url参数,并转换成json对象

[getClientHeight()](#getClientHeight)
获取窗口可视范围的高度

[getPageViewWidth()](#getPageViewWidth)
获取窗口可视范围宽度

[getPageWidth()](#getPageWidth)
获取窗口宽度

[getViewportOffset()](#getViewportOffset)
获取窗口尺寸

[getPageScrollTop()](#getPageScrollTop)
获取滚动条距顶部高度

[getPageScrollLeft()](#getPageScrollLeft)
获取滚动条距左边的高度

[launchFullscreen(element)](#launchFullscreen)
开启全屏

[exitFullscreen()](#exitFullscreen)
关闭全屏

[openWindow(url, windowName, width, height)](#openWindow)
打开一个窗口

[AutoResponse(width)](#AutoResponse)
自适应页面（rem）

<div id="currentURL"></div>

#### currentURL
返回当前url

**Kind**: global function
<div id="getScrollPosition"></div>

#### getScrollPosition
返回当前滚动条位置

**Kind**: global function
<div id="smoothScroll"></div>

#### smoothScroll
滚动到指定元素区域

**Kind**: global function
<div id="scrollToTop"></div>

#### scrollToTop
平滑滚动到页面顶部

**Kind**: global function
<div id="httpsRedirect"></div>

#### httpsRedirect
http跳转https

**Kind**: global function
<div id="bottomVisible"></div>

#### bottomVisible
检查页面底部是否可见

**Kind**: global function
<div id="getExplorerName"></div>

#### getExplorerName
获取当前浏览器名称

**Kind**: global function
<div id="getUrlParam"></div>

#### getUrlParam(name, origin)
获取url参数（第一种）

**Kind**: global function

| Param | Type |
| --- | --- |
| name | \* |
| origin | \* |

<div id="getUrlParams"></div>

#### getUrlParams(name, origin)
获取url参数（第二种）

**Kind**: global function

| Param | Type |
| --- | --- |
| name | \* |
| origin | \* |

<div id="replaceParamVal"></div>

#### replaceParamVal(paramName, replaceWith)
修改url中的参数

**Kind**: global function

| Param | Type |
| --- | --- |
| paramName | `string` |
| replaceWith | `string` |

<div id="funcUrlDel"></div>

#### funcUrlDel(name)
删除url中指定的参数

**Kind**: global function

| Param | Type |
| --- | --- |
| name | `string` |

<div id="getUrlAllParams"></div>

#### getUrlAllParams(url)
获取全部url参数,并转换成json对象

**Kind**: global function

| Param | Type |
| --- | --- |
| url | `string` |

<div id="getClientHeight"></div>

#### getClientHeight()
获取窗口可视范围的高度

**Kind**: global function
<div id="getPageViewWidth"></div>

#### getPageViewWidth()
获取窗口可视范围宽度

**Kind**: global function
<div id="getPageWidth"></div>

#### getPageWidth()
获取窗口宽度

**Kind**: global function
<div id="getViewportOffset"></div>

#### getViewportOffset()
获取窗口尺寸

**Kind**: global function
<div id="getPageScrollTop"></div>

#### getPageScrollTop()
获取滚动条距顶部高度

**Kind**: global function
<div id="getPageScrollLeft"></div>

#### getPageScrollLeft()
获取滚动条距左边的高度

**Kind**: global function
<div id="launchFullscreen"></div>

#### launchFullscreen(element)
开启全屏

**Kind**: global function

| Param | Type |
| --- | --- |
| element | \* |

<div id="exitFullscreen"></div>

#### exitFullscreen()
关闭全屏

**Kind**: global function
<div id="openWindow"></div>

#### openWindow(url, windowName, width, height)
打开一个窗口

**Kind**: global function

| Param | Type |
| --- | --- |
| url | `string` |
| windowName | `string` |
| width | `number` |
| height | `number` |

<div id="AutoResponse"></div>

#### AutoResponse(width)
自适应页面（rem）

**Kind**: global function

| Param | Type |
| --- | --- |
| width | `number` |

### 校验类 `validate.js` <div id="validate"></div>

引用方式:
```js
import {method} from '@/utils/validate.js'
```


[isTrainNum](#isTrainNum)
验证火车车次

[isIMEI](#isIMEI)
验证手机机身码(IMEI)

[isHttpAndPort](#isHttpAndPort)
验证必须带端口号的网址(或ip)

[isRightWebsite](#isRightWebsite)
验证网址(支持端口和&quot;?+参数&quot;和&quot;#+参数)

[isCreditCode](#isCreditCode)
验证统一社会信用代码

[isThunderLink](#isThunderLink)
验证迅雷链接

[ised2k](#ised2k)
验证ed2k链接(宽松匹配)

[isMagnet](#isMagnet)
验证磁力链接(宽松匹配)

[isSubnetMask](#isSubnetMask)
验证子网掩码

[isLinuxFolderPath](#isLinuxFolderPath)
验证linux&quot;文件夹&quot;路径

[isLinuxFilePath](#isLinuxFilePath)
验证linux&quot;文件&quot;路径

[isWindowsFolderPath](#isWindowsFolderPath)
验证window&quot;文件夹&quot;路径

[isWindowsFilePath](#isWindowsFilePath)
验证window下&quot;文件&quot;路径

[isAShare](#isAShare)
验证股票代码(A股)

[isGrade](#isGrade)
验证大于等于0, 小于等于150, 支持小数位出现5, 如145.5, 用于判断考卷分数

[isHtmlComments](#isHtmlComments)
验证html注释

[isMD5](#isMD5)
验证md5格式(32位)

[isVersion](#isVersion)
验证版本号格式必须为X.Y.Z

[isVideoUrl](#isVideoUrl)
验证视频链接地址（视频格式可按需增删）

[isImageUrl](#isImageUrl)
验证图片链接地址（图片格式可按需增删）

[is24Hour](#is24Hour)
验证24小时制时间（HH:mm:ss）

[is12Hour](#is12Hour)
验证12小时制时间（hh:mm:ss）

[isBase64](#isBase64)
验证base64格式

[isMoneyAll](#isMoneyAll)
验证数字/货币金额（支持负数、千分位分隔符）

[isMoney](#isMoney)
验证数字/货币金额 (只支持正数、不支持校验千分位分隔符)

[isAccountNumber](#isAccountNumber)
验证银行卡号（10到30位, 覆盖对公/私账户, 参考微信支付）

[isChineseName](#isChineseName)
验证中文姓名

[isEnglishName](#isEnglishName)
验证英文姓名

[isLicensePlateNumberNER](#isLicensePlateNumberNER)
验证车牌号(新能源)

[isLicensePlateNumberNNER](#isLicensePlateNumberNNER)
验证车牌号(非新能源)

[isLicensePlateNumber](#isLicensePlateNumber)
验证车牌号(新能源+非新能源)

[isMPStrict](#isMPStrict)
验证手机号中国(严谨), 根据工信部2019年最新公布的手机号段

[isMPRelaxed](#isMPRelaxed)
验证手机号中国(宽松), 只要是13,14,15,16,17,18,19开头即可

[isMPMostRelaxed](#isMPMostRelaxed)
验证手机号中国(最宽松), 只要是1开头即可, 如果你的手机号是用来接收短信, 优先建议选择这一条

[isDate](#isDate)
验证日期

[isEmail](#isEmail)
验证email(邮箱)

[isLandlineTelephone](#isLandlineTelephone)
验证座机电话(国内),如: 0341-86091234

[isIDCardOld](#isIDCardOld)
验证身份证号(1代,15位数字)

[isIDCardNew](#isIDCardNew)
验证身份证号(2代,18位数字),最后一位是校验位,可能为数字或字符X

[isIDCard](#isIDCard)
身份证号, 支持1/2代(15位/18位数字)

[isPassport](#isPassport)
验证护照（包含香港、澳门）

[isWebAccount](#isWebAccount)
验证帐号是否合法(字母开头，允许5-16字节，允许字母数字下划线组合

[isChineseCharacter](#isChineseCharacter)
验证中文/汉字

[isDecimal](#isDecimal)
验证小数

[isNumber](#isNumber)
验证数字

[isHTMLtags](#isHTMLtags)
验证html标签(宽松匹配)

[isQQNum](#isQQNum)
验证qq号格式正确

[isNumAndStr](#isNumAndStr)
验证数字和字母组成

[isEnglish](#isEnglish)
验证英文字母

[isCapital](#isCapital)
验证大写英文字母

[isLowercase](#isLowercase)
验证小写英文字母组成

[isCorrectFormatPassword](#isCorrectFormatPassword)
验证密码强度，最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符

[isCorrectFormatUsername](#isCorrectFormatUsername)
验证用户名，4到16位（字母，数字，下划线，减号）

[isIPv4](#isIPv4)
验证ip-v4

[isIPv6](#isIPv6)
验证ip-v6

[isColor16](#isColor16)
验证16进制颜色

[isWeChatNum](#isWeChatNum)
验证微信号，6至20位，以字母开头，字母，数字，减号，下划线

[isPostcode](#isPostcode)
验证邮政编码(中国)

[isCHNAndEN](#isCHNAndEN)
验证中文和数字

[isNoWord](#isNoWord)
验证不能包含字母

[isJavaPackage](#isJavaPackage)
验证java包名

[isMobile(s)](#isMobile)
手机号码

[isPhone(s)](#isPhone)
电话号码

[isURL(s)](#isURL)
URL地址

<div id="isTrainNum"></div>

#### isTrainNum
验证火车车次

**Kind**: global function

| Param | Type |
| --- | --- |
| value | `string` |

<div id="isIMEI"></div>

#### isIMEI
验证手机机身码(IMEI)

**Kind**: global function

| Param | Type |
| --- | --- |
| value | `string` |

<div id="isHttpAndPort"></div>

#### isHttpAndPort
验证必须带端口号的网址(或ip)

**Kind**: global function

| Param | Type |
| --- | --- |
| value | `string` |

<div id="isRightWebsite"></div>

#### isRightWebsite
验证网址(支持端口和"?+参数"和"#+参数)

**Kind**: global function

| Param | Type |
| --- | --- |
| value | `string` |

<div id="isCreditCode"></div>

#### isCreditCode
验证统一社会信用代码

**Kind**: global function

| Param | Type |
| --- | --- |
| value | `string` |

<div id="isThunderLink"></div>

#### isThunderLink
验证迅雷链接

**Kind**: global function

| Param | Type |
| --- | --- |
| value | `string` |

<div id="ised2k"></div>

#### ised2k
验证ed2k链接(宽松匹配)

**Kind**: global function

| Param | Type |
| --- | --- |
| value | `string` |

<div id="isMagnet"></div>

#### isMagnet
验证磁力链接(宽松匹配)

**Kind**: global function

| Param | Type |
| --- | --- |
| value | `string` |

<div id="isSubnetMask"></div>

#### isSubnetMask
验证子网掩码

**Kind**: global function

| Param | Type |
| --- | --- |
| value | `string` |

<div id="isLinuxFolderPath"></div>

#### isLinuxFolderPath
验证linux"文件夹"路径

**Kind**: global function

| Param | Type |
| --- | --- |
| value | `string` |

<div id="isLinuxFilePath"></div>

#### isLinuxFilePath
验证linux"文件"路径

**Kind**: global function

| Param | Type |
| --- | --- |
| value | `string` |

<div id="isWindowsFolderPath"></div>

#### isWindowsFolderPath
验证window"文件夹"路径

**Kind**: global function

| Param | Type |
| --- | --- |
| value | `string` |

<div id="isWindowsFilePath"></div>

#### isWindowsFilePath
验证window下"文件"路径

**Kind**: global function

| Param | Type |
| --- | --- |
| value | `string` |

<div id="isAShare"></div>

#### isAShare
验证股票代码(A股)

**Kind**: global function

| Param | Type |
| --- | --- |
| value | `string` |

<div id="isGrade"></div>

#### isGrade
验证大于等于0, 小于等于150, 支持小数位出现5, 如145.5, 用于判断考卷分数

**Kind**: global function

| Param | Type |
| --- | --- |
| value | `string` |

<div id="isHtmlComments"></div>

#### isHtmlComments
验证html注释

**Kind**: global function

| Param | Type |
| --- | --- |
| value | `string` |

<div id="isMD5"></div>

#### isMD5
验证md5格式(32位)

**Kind**: global function

| Param | Type |
| --- | --- |
| value | `string` |

<div id="isVersion"></div>

#### isVersion
验证版本号格式必须为X.Y.Z

**Kind**: global function

| Param | Type |
| --- | --- |
| value | `string` |

<div id="isVideoUrl"></div>

#### isVideoUrl
验证视频链接地址（视频格式可按需增删）

**Kind**: global function

| Param | Type |
| --- | --- |
| value | `string` |

<div id="isImageUrl"></div>

#### isImageUrl
验证图片链接地址（图片格式可按需增删）

**Kind**: global function

| Param | Type |
| --- | --- |
| value | `string` |

<div id="is24Hour"></div>

#### is24Hour
验证24小时制时间（HH:mm:ss）

**Kind**: global function

| Param | Type |
| --- | --- |
| value | `string` |

<div id="is12Hour"></div>

#### is12Hour
验证12小时制时间（hh:mm:ss）

**Kind**: global function

| Param | Type |
| --- | --- |
| value | `string` |

<div id="isBase64"></div>

#### isBase64
验证base64格式

**Kind**: global function

| Param | Type |
| --- | --- |
| value | `string` |

<div id="isMoneyAll"></div>

#### isMoneyAll
验证数字/货币金额（支持负数、千分位分隔符）

**Kind**: global function

| Param | Type |
| --- | --- |
| value | `string` |

<div id="isMoney"></div>

#### isMoney
验证数字/货币金额 (只支持正数、不支持校验千分位分隔符)

**Kind**: global function

| Param | Type |
| --- | --- |
| value | `string` |

<div id="isAccountNumber"></div>

#### isAccountNumber
验证银行卡号（10到30位, 覆盖对公/私账户, 参考微信支付）

**Kind**: global function

| Param | Type |
| --- | --- |
| value | `string` |

<div id="isChineseName"></div>

#### isChineseName
验证中文姓名

**Kind**: global function

| Param | Type |
| --- | --- |
| value | `string` |

<div id="isEnglishName"></div>

#### isEnglishName
验证英文姓名

**Kind**: global function

| Param | Type |
| --- | --- |
| value | `string` |

<div id="isLicensePlateNumberNER"></div>

#### isLicensePlateNumberNER
验证车牌号(新能源)

**Kind**: global function

| Param | Type |
| --- | --- |
| value | `string` |

<div id="isLicensePlateNumberNNER"></div>

#### isLicensePlateNumberNNER
验证车牌号(非新能源)

**Kind**: global function

| Param | Type |
| --- | --- |
| value | `string` |

<div id="isLicensePlateNumber"></div>

#### isLicensePlateNumber
验证车牌号(新能源+非新能源)

**Kind**: global function

| Param | Type |
| --- | --- |
| value | `string` |

<div id="isMPStrict"></div>

#### isMPStrict
验证手机号中国(严谨), 根据工信部2019年最新公布的手机号段

**Kind**: global function

| Param | Type |
| --- | --- |
| value | `string` |

<div id="isMPRelaxed"></div>

#### isMPRelaxed
验证手机号中国(宽松), 只要是13,14,15,16,17,18,19开头即可

**Kind**: global function

| Param | Type |
| --- | --- |
| value | `string` |

<div id="isMPMostRelaxed"></div>

#### isMPMostRelaxed
验证手机号中国(最宽松), 只要是1开头即可, 如果你的手机号是用来接收短信, 优先建议选择这一条

**Kind**: global function

| Param | Type |
| --- | --- |
| value | `string` |

<div id="isDate"></div>

#### isDate
验证日期

**Kind**: global function

| Param | Type |
| --- | --- |
| value | `string` |

<div id="isEmail"></div>

#### isEmail
验证email(邮箱)

**Kind**: global function

| Param | Type |
| --- | --- |
| value | `string` |

<div id="isLandlineTelephone"></div>

#### isLandlineTelephone
验证座机电话(国内),如: 0341-86091234

**Kind**: global function

| Param | Type |
| --- | --- |
| value | `string` |

<div id="isIDCardOld"></div>

#### isIDCardOld
验证身份证号(1代,15位数字)

**Kind**: global function

| Param | Type |
| --- | --- |
| value | `string` |

<div id="isIDCardNew"></div>

#### isIDCardNew
验证身份证号(2代,18位数字),最后一位是校验位,可能为数字或字符X

**Kind**: global function

| Param | Type |
| --- | --- |
| value | `string` |

<div id="isIDCard"></div>

#### isIDCard
身份证号, 支持1/2代(15位/18位数字)

**Kind**: global function

| Param | Type |
| --- | --- |
| value | `string` |

<div id="isPassport"></div>

#### isPassport
验证护照（包含香港、澳门）

**Kind**: global function

| Param | Type |
| --- | --- |
| value | `string` |

<div id="isWebAccount"></div>

#### isWebAccount
验证帐号是否合法(字母开头，允许5-16字节，允许字母数字下划线组合

**Kind**: global function

| Param | Type |
| --- | --- |
| value | `string` |

<div id="isChineseCharacter"></div>

#### isChineseCharacter
验证中文/汉字

**Kind**: global function

| Param | Type |
| --- | --- |
| value | `string` |

<div id="isDecimal"></div>

#### isDecimal
验证小数

**Kind**: global function

| Param | Type |
| --- | --- |
| value | `string` |

<div id="isNumber"></div>

#### isNumber
验证数字

**Kind**: global function

| Param | Type |
| --- | --- |
| value | `string` |

<div id="isHTMLtags"></div>

#### isHTMLtags
验证html标签(宽松匹配)

**Kind**: global function

| Param | Type |
| --- | --- |
| value | `string` |

<div id="isQQNum"></div>

#### isQQNum
验证qq号格式正确

**Kind**: global function

| Param | Type |
| --- | --- |
| value | `string` |

<div id="isNumAndStr"></div>

#### isNumAndStr
验证数字和字母组成

**Kind**: global function

| Param | Type |
| --- | --- |
| value | `string` |

<div id="isEnglish"></div>

#### isEnglish
验证英文字母

**Kind**: global function

| Param | Type |
| --- | --- |
| value | `string` |

<div id="isCapital"></div>

#### isCapital
验证大写英文字母

**Kind**: global function

| Param | Type |
| --- | --- |
| value | `string` |

<div id="isLowercase"></div>

#### isLowercase
验证小写英文字母组成

**Kind**: global function

| Param | Type |
| --- | --- |
| value | `string` |

<div id="isCorrectFormatPassword"></div>

#### isCorrectFormatPassword
验证密码强度，最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符

**Kind**: global function

| Param | Type |
| --- | --- |
| value | `string` |

<div id="isCorrectFormatUsername"></div>

#### isCorrectFormatUsername
验证用户名，4到16位（字母，数字，下划线，减号）

**Kind**: global function

| Param | Type |
| --- | --- |
| value | `string` |

<div id="isIPv4"></div>

#### isIPv4
验证ip-v4

**Kind**: global function

| Param | Type |
| --- | --- |
| value | `string` |

<div id="isIPv6"></div>

#### isIPv6
验证ip-v6

**Kind**: global function

| Param | Type |
| --- | --- |
| value | `string` |

<div id="isColor16"></div>

#### isColor16
验证16进制颜色

**Kind**: global function

| Param | Type |
| --- | --- |
| value | `string` |

<div id="isWeChatNum"></div>

#### isWeChatNum
验证微信号，6至20位，以字母开头，字母，数字，减号，下划线

**Kind**: global function

| Param | Type |
| --- | --- |
| value | `string` |

<div id="isPostcode"></div>

#### isPostcode
验证邮政编码(中国)

**Kind**: global function

| Param | Type |
| --- | --- |
| value | `string` |

<div id="isCHNAndEN"></div>

#### isCHNAndEN
验证中文和数字

**Kind**: global function

| Param | Type |
| --- | --- |
| value | `string` |

<div id="isNoWord"></div>

#### isNoWord
验证不能包含字母

**Kind**: global function

| Param | Type |
| --- | --- |
| value | `string` |

<div id="isJavaPackage"></div>

#### isJavaPackage
验证java包名

**Kind**: global function

| Param | Type |
| --- | --- |
| value | `string` |

<div id="isMobile"></div>

#### isMobile(s)
手机号码

**Kind**: global function

| Param | Type |
| --- | --- |
| s | \* |

<div id="isPhone"></div>

#### isPhone(s)
电话号码

**Kind**: global function

| Param | Type |
| --- | --- |
| s | \* |

<div id="isURL"></div>

#### isURL(s)
URL地址

**Kind**: global function

| Param | Type |
| --- | --- |
| s | \* |

### 接口 `httpRequest.js`<div id="http"></div>

使用方式 
```js
this.$http({
    method:"get"|"post",
    url:"",
    params:""|data:"",
})
```

[http.adornUrl](#adornUrl) 
请求地址处理

[http.adornParams](#adornParams)
get请求参数处理

[http.adornData](#adornData)
post请求数据处理

<div id="adornUrl"></div>

#### http.adornUrl
请求地址处理

**Kind**: private function

| Param | Type | Description |
| --- | --- | --- |
|actionName|\{\*\}| action方法名称|

<div id="adornParams"></div>

#### http.adornParams
get请求参数处理

**Kind**: private function

| Param | Type | Description |
| --- | --- | --- |
|params|\{\*\}| 参数对象 |
|openDefultParams|`boolean`|是否开启默认参数?默认为true|

<div id="adornData"></div>

#### http.adornData
post请求数据处理

**Kind**: private function

| Param | Type | Description |
| --- | --- | --- |
|data|\{\*\}| 数据对象 |
|openDefultdata|`boolean`|是否开启默认参数?默认为true|
|contentType|`string`|数据格式 默认为`json` 属性为 `json` \| `form`|

