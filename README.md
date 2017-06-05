# INPUT-COMBO

## Preview 预览


## How to Use 如何使用

```HTML
    <link rel="stylesheet" href="./inputCombo.css">
    <script src="./inputCombo.js"></script>

    <div id='warp'>
        <input type='text'>
    </div>

    <script>
        var inputCombo = new InputCombo({
            id: 'warp'
        });
        inputCombo.init();
    </script>
```
#### POWERMODE 模式

```HTML
    <script src="./power.js"></script>
```

## Options 参数

```javascript

var inputCombo = new InputCombo({
            id: 'warp'.
            level:6,
            levelUpNum:30,
            greatNum:10,
            greatArr:["Super!", "Radical!", "Fantastic!", "Great!", "OMG", "Whoah!", ":O", "Nice!", "Splendid!", "Wild!", "Grand!", "Impressive!", "Stupendous!", "Extreme!", "Awesome!"],
            colorful:true,
            shake:true,
            inputFn:function(){
                console.log('input');
            },
            overFn:function(){
                console.log('over');
            },
            levelFn:function(){
                console.log('levelUp');
            }
        });
```


Options List:

- id: `document.body` 开始的X轴位置
- level: `6` 最大等级
- levelUpNum `30` 升级步进
- greatNum: `10` 鼓励文字步进
- greatArr: `["Super!", "Radical!", "Fantastic!", "Great!", "OMG", "Whoah!", ":O", "Nice!", "Splendid!", "Wild!", "Grand!", "Impressive!", "Stupendous!", "Extreme!", "Awesome!"]` 鼓励文字

------- 以下需要载入 power.js ----------
- colorful `true` 彩色文字粉末
- shake `true` 输入框晃动



### Events 事件
 
```

Events 列表

- inputFn - 输入后触发
- overFn - Combo 结束触发
- levelFn - 升级后触发
