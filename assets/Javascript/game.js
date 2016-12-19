window.onload = function() {
    var randomNumber = 0;
    var crystalRandom = [];
    var score = 0;
    var one = 0;
    var two = 0;
    var three = 0;
    var four = 0;
    var wins = 0;
    var losses = 0;
    var clicks = 0;

    function loadGame() {
        randomNumber = 0;
        crystalRandom = [];
        score = 0;
        one = 0;
        two = 0;
        three = 0;
        four = 0;
        clicks = 0;
        randomNumber = Math.floor((Math.random() * 81) + 19);
        console.log("randomNumber" + " " + randomNumber);
        var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            ranNums = [],
            i = nums.length,
            j = 0;

        while (i--) {
            j = Math.floor(Math.random() * (i + 1));
            ranNums.push(nums[j]);
            nums.splice(j, 1);
        }
        one = ranNums[0];
        two = ranNums[1];
        three = ranNums[2];
        four = ranNums[3];

        console.log("CrystalOne" + " " + one);
        console.log("CrystalTwo" + " " + two);
        console.log("CrystalThree" + " " + three);
        console.log("CrystalFour" + " " + four);

        $("#number").html(randomNumber);
        $("#crystalOne").attr("value", one);
        $("#crystalTwo").attr("value", two);
        $("#crystalThree").attr("value", three);
        $("#crystalFour").attr("value", four);
    };
    startGame()
    loadGame();
    $("#button").css('cursor', 'crosshair');
    $("#button").on('click', function() {
        loadGame();
        wins = 0;
        losses = 0;
        clicks = 0;
        $("#score").html(score);
        $("#wins").html("Wins:" + " " + wins);
        $("#losses").html("Losses:" + " " + losses);
        $("#clicks").text("Clicks:" + " " + clicks);
    });

    function timeOut() {
        $("#display").css('visibility', 'hidden');
        $("#clicks").text("Clicks: 0");
    };

    function scoreChecker() {
        if (randomNumber === score) {
            score = 0;
            $("#score").html(score);
            wins++;
            $("#wins").html("Wins:" + " " + wins);
            $("#display").css('visibility', 'visible');
            $("#wonLost").text("You Won!");
            $("#display").effect("shake", { times: 4 }, 450);
            setTimeout(timeOut, 3000);
            loadGame();
        } else if (score > randomNumber) {
            score = 0;
            $("#score").html(score);
            losses++;
            $("#losses").html("Losses:" + " " + losses);
            $("#wonLost").text("You Lost!");
            $("#display").css('visibility', 'visible');
            $("#display").effect("shake", { times: 4 }, 450);

            setTimeout(timeOut, 3000);

            loadGame();
        };
    }

    function startGame() {

        $("#crystalOne").on('click', function() {
            $("#crystalOne").animate({ top: -10, }, 150);
            $("#crystalOne").animate({ top: 0, }, 100);
            score += one;
            clicks++;
            $("#clicks").text("Clicks:" + " " + clicks);
            console.log("attrValue:" + one);
            console.log("score:" + score);
            $("#score").html(score);
            scoreChecker();

        });
        $("#crystalTwo").on('click', function() {
            $("#crystalTwo").animate({ top: -10, }, 150);
            $("#crystalTwo").animate({ top: 0, }, 100);
            score += two;
            clicks++;
            $("#clicks").text("Clicks:" + " " + clicks);
            console.log("attrValue:" + two);
            console.log("score:" + score);
            $("#score").html(score);
            scoreChecker();
        });
        $("#crystalThree").on('click', function() {
            $("#crystalThree").animate({ top: -10, }, 150);
            $("#crystalThree").animate({ top: 0, }, 100);
            score += three;
            clicks++;
            $("#clicks").text("Clicks:" + " " + clicks);
            console.log("attrValue:" + three);
            console.log("score:" + score);
            $("#score").html(score);
            scoreChecker();
        });
        $("#crystalFour").on('click', function() {
            $("#crystalFour").animate({ top: -10, }, 150);
            $("#crystalFour").animate({ top: 0, }, 100);
            score += four;
            clicks++;
            $("#clicks").text("Clicks:" + " " + clicks);
            console.log("attrValue:" + four);
            console.log("score:" + score);
            $("#score").html(score);
            scoreChecker();
        });
    }







}