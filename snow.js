myDate=new Date(); 
xmas=Date.parse("Dec 25, "+myDate.getFullYear()) //圣诞日期毫秒数
//console.log(xmas)
today=Date.parse(myDate)//现在的日期的毫秒数 
//console.log(today)

daysToChristmas=Math.round((xmas-today)/(1000*60*60*24))// 距离圣诞的天数
//console.log(daysToChristmas)

if (daysToChristmas==0) 
$('#days').text("It's Christmas!! Merry Christmas!");//圣诞快乐

if (daysToChristmas<0) 
$('#days').text("Christmas was "+-1*(daysToChristmas)+" days ago.");//多少天之前是圣诞

if (daysToChristmas>0) 
$('#days').text(daysToChristmas+" days to Christmas!");//距离圣诞还有多少天

//make snow
snowDrop(150,randomInt(60, 1280));
//console.log(randomInt(60,1200))
snow(150, 150);
//num表示雪花个数，speed表示多长时间出现一个
function snow(num, speed) {
		if (num > 0) {
			setTimeout(function () {
				$('#drop_' + randomInt(1, 250)).addClass('animate');
				//console.log(randomInt(1, 950))
				num--;
				snow(num, speed);
			}, speed);
		}
	};

	function snowDrop(num, position) {//position雪花落下的位置
		if (num > 0) {
			var drop = '<div class="drop snow" id="drop_' + num + '"></div>';

			$('body').append(drop);
			$('#drop_' + num).css('left', position);
			num--;
			snowDrop(num, randomInt(60, 1280));
			//console.log(randomInt(60, 1280))
		}
	};

function randomInt(min, max) {//min和max为雪花落下位置范围
		return Math.floor(Math.random() * (max-min+1)+min);
	};