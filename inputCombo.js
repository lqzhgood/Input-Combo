function InputCombo(option) {
    if (option) {
        this.config = {
            levelArr: []
        };
        this.config.id = option.el || document.body;
        this.config.level = option.level || 6;
        this.config.levelUpNum = option.levelUpNum || 30;
        this.config.greatNum = option.greatNum || 10;
        this.config.greatArr = option.greatArr || ["Super!", "Radical!", "Fantastic!", "Great!", "OMG", "Whoah!", ":O", "Nice!", "Splendid!", "Wild!", "Grand!", "Impressive!", "Stupendous!", "Extreme!", "Awesome!"];
        this.config.colorful = option.colorful || true;
        this.config.shake = option.shake || true;
        this.config.inputFn = option.inputFn || function () { };
        this.config.overFn = option.overFn || function () { };
        this.config.levelFn = option.leveFn || function () { };
    } else {
        this.config = {
            id: document.body
            , level: 6
            , levelArr: []
            , levelUpNum: 30
            , greatNum: 10
            , greatArr: ["Super!", "Radical!", "Fantastic!", "Great!", "OMG", "Whoah!", ":O", "Nice!", "Splendid!", "Wild!", "Grand!", "Impressive!", "Stupendous!", "Extreme!", "Awesome!"]
            , openColor: true
            , shake: true
        }
    }
};
InputCombo.prototype = {
    $: function (id) {
        if (typeof id == 'string') {
            return document.getElementById(id);
        }
        return id;
    },
    init: function () {
        this.config.inputNum = 0;
        this.config.great = 0;
        this.config.nowLevel = 0;
        this.domWrap = this.$(this.config.id);
        var dom = "<div class='streak-container lv1'><div class='current'>Combo</div><div class='counter'>0</div><div class='bar'></div><div class='exclamations'></div></div>"
        console.log('this.domWrap', this.domWrap);
        this.domWrap.innerHTML += dom;
        this.$num = this.domWrap.getElementsByClassName("counter")[0];
        this.$bar = this.domWrap.getElementsByClassName("bar")[0];
        this.$exclamations = this.domWrap.getElementsByClassName("exclamations")[0];
        this.$exclamation = this.domWrap.getElementsByClassName("exclamation");
        this.$streak = this.domWrap.getElementsByClassName("streak-container")[0];
        // 赋值等级数组
        for (var i = 1; i <= this.config.level; i++) {
            this.config.levelArr.push("lv" + i);
        }
        // 载入 POWERMODE 模式
        if (POWERMODE) {
            POWERMODE.colorful = this.config.colorful;
            POWERMODE.shake = this.config.shake;
            document.body.addEventListener('input', POWERMODE);
        }
        this.start();
        return this;
    },
    start: function () {
        var _this = this;
        _this.$num.addEventListener("webkitAnimationEnd", function () {
            this.className = this.className.replace(' animate', '');
        }, false);
        _this.$bar.addEventListener("webkitAnimationEnd", function () {
            this.className = this.className.replace(' animate', '');
            _this.config.inputNum = 0;
            _this.config.great = 0;
            _this.config.nowLevel = 0;
            _this.$num.innerText = _this.config.inputNum;
            _this.$streak.className = "streak-container " + _this.config.levelArr[0];
            _this.config.overFn();
        }, false);
        _this.$exclamations.addEventListener("webkitAnimationEnd", function (e) {
            var e = e || window.event;
            var target = e.target || e.srcElement;
            if (target.nodeName.toLocaleLowerCase() == 'span') {
                target.remove();
            }
        }, false)
        this.domWrap.addEventListener("keypress", function () {
            _this.combo();
        }, false);
    },
    combo: function () {
        var _this = this;
        this.config.inputNum++;
        _this.$num.innerText = this.config.inputNum;
        if (_this.$num.className.indexOf('animate') != -1) {
            _this.$num.className += " animate";
        }
        _this.$bar.className = _this.$bar.className.replace(' animate', '');
        setTimeout(function () {
            if (_this.$bar.className.indexOf('animate') == -1) {
                _this.$bar.className += " animate";
            }
        }, 10)
        if (this.config.inputNum % this.config.greatNum == 0) {
            var span = document.createElement('span');
            span.className = 'exclamation';
            span.innerText = this.config.greatArr[this.config.great];
            _this.$exclamations.appendChild(span);
            this.config.great++;
            if (this.config.great > this.config.greatArr.length - 1) {
                this.config.great = 0;
            }
        }
        if (this.config.inputNum % this.config.levelUpNum == 0) {
            this.levelUp();
        }
        this.config.inputFn();
    },
    levelUp: function () {
        if (this.config.nowLevel < this.config.levelArr.length - 1) {
            this.config.nowLevel++;
        }
        var classText = this.$streak.className;
        this.config.levelArr.forEach(function (k) {
            classText = classText.replace(k, '');
        })
        this.$streak.className = classText + this.config.levelArr[this.config.nowLevel];
        this.config.levelFn();
    }
};


