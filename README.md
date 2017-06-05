# INPUT-COMBO

## 立即使用

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
#### POWERMODE模式

```HTML
    <script src="./power.js"></script>
```

## Options 参数

Options List:

- id: `codument.body` 开始的X轴位置
- level: `6` 最大等级
- levelUpNum `30` 升级步进
- greatNum: `10` 鼓励文字步进
- greatArr: `["Super!", "Radical!", "Fantastic!", "Great!", "OMG", "Whoah!", ":O", "Nice!", "Splendid!", "Wild!", "Grand!", "Impressive!", "Stupendous!", "Extreme!", "Awesome!"]` 鼓励文字
------- 以下需要载入 power.js ----------
- colorful `true` 彩色文字粉末
- shake `true` 输入框晃动



## Events 事件
 
```

Events 列表

- inputFn - 输入后触发
- overFn - Combo 结束触发
- levelFn - 升级后触发
