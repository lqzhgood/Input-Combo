var textCombo = {
    init: function (config) {
        var dom = " <div class='streak-container lv1'><div class='current'>Combo</div><div class='counter'>0</div><div class='bar'></div><div class='exclamations'></div></div>"
        $("body").append(dom);
        if (config) {
            if (!config.openColor) config.openColor = true;
            if (!config.global) config.global = false;
            if (!config.level) config.level = 6;
            if (!config.levelUpNum) config.levelUpNum = 30;
            if (!config.gtreatNum) config.gtreatNum = 10;
            if (!config.greatArr) config.greatArr = ["Super!", "Radical!", "Fantastic!", "Great!", "OMG", "Whoah!", ":O", "Nice!", "Splendid!", "Wild!", "Grand!", "Impressive!", "Stupendous!", "Extreme!", "Awesome!"];
            textCombo.config = config;
        }
        else {
            config = textCombo.config
        }
        if (config.openColor) {
            POWERMODE.colorful = true;
            POWERMODE.shake = false;
            document.body.addEventListener('input', POWERMODE);
        }
        window.inputNum = 0;
        window.great = 0;
        window.levelArr = ["lv1", "lv2", "lv3", "lv4", "lv5", "lv6"];
        window.greatArr = config.greatArr;
        window.levelArr = [];
        do {
            if (config.level > 0) {
                window.levelArr.push("lv" + config.level);
            }
        } while (config.level--)
        textCombo.start(config);
    }
    , start: function (config) {
        var $num = $(".counter");
        var $bar = $(".bar");
        var $exclamation = $(".exclamation");
        $num.on("webkitAnimationEnd", function () {
            $(this).removeClass("animate");
        });
        $bar.on("webkitAnimationEnd", function () {
            $(this).removeClass("animate");
            inputNum = 0;
            great = 0;
            $num.html(inputNum);
            $(".streak-container")[0].className = "streak-container lv1";
        });
        $exclamation.on("webkitAnimationEnd", function () {
            $(this).remove();
        })
        if (config.global) {
            $("body").on("keypress", function () {
                textCombo.combo();
            });
        }
    }
    , combo: function () {
        var config = textCombo.config;
        var $num = $(".counter");
        var $bar = $(".bar");
        var $exclamation = $(".exclamation");
        inputNum++;
        $num.html(inputNum);
        $num.addClass("animate");
        $bar.removeClass("animate");
        setTimeout(function () {
            $bar.addClass("animate");
        }, 10)
        if (inputNum % config.gtreatNum == 0) {
            $(".exclamations").append("<span class='exclamation'>" + greatArr[great] + "</span>");
            great++;
            if (great > greatArr.length - 1) {
                great = 0;
            }
        }
        if (inputNum % config.levelUpNum == 0) {
            textCombo.levelUp();
        }
    }
    , levelUp: function () {
        var $sc = $(".streak-container");
        var lvClass = $sc[0].className.split(" ")[1];
        if (lvClass != "") {
            $sc.removeClass(lvClass);
            var n = lvClass.split("lv")[1];
            if (n < levelArr.length) {
                n++;
            }
            $sc.addClass("lv" + n);
        }
    }
    , config: {
        openColor: true
        , global: false
        , level: 6
        , levelUpNum: 30
        , gtreatNum: 10
        , greatArr: ["Super!", "Radical!", "Fantastic!", "Great!", "OMG", "Whoah!", ":O", "Nice!", "Splendid!", "Wild!", "Grand!", "Impressive!", "Stupendous!", "Extreme!", "Awesome!"]
        , shake: true
    }
}