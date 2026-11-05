function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5ajc1xYMuWt":
        Script1();
        break;
      case "5g1PRyFtzCW":
        Script2();
        break;
      case "6glt7Jk2zal":
        Script3();
        break;
      case "6B7vWGO99QG":
        Script4();
        break;
      case "6R3hk7TBcmq":
        Script5();
        break;
      case "5sxdBakn0FF":
        Script6();
        break;
      case "6ilpTvClVjt":
        Script7();
        break;
      case "6rcid9j08Vu":
        Script8();
        break;
      case "5u3aavUmj0x":
        Script9();
        break;
      case "6gZ1LmgyVjE":
        Script10();
        break;
      case "6m5chuCqjbi":
        Script11();
        break;
      case "6N0XVFChJsX":
        Script12();
        break;
      case "6SNm96mTvVC":
        Script13();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
var getKeyDown = player.getKeyDown;
var keydown = player.keydown;
var keyup = player.keyup;
window.Script1 = function()
{
  const target = object('6R1Rtx5xaln');
const duration = 250;
const easing = 'ease-out';
const id = '6SOfRLKL3QZ';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script2 = function()
{
  player.once(() => {
const target = object('5dsBA3iC9cF');
const duration = 2200;
const easing = 'ease-out';
const id = '6VX2hAHxEZP';
const pulseAmount = 0.03;
const delay = 3000;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script3 = function()
{
  player.once(() => {
const target = object('6eGblfTf7Pq');
const duration = 1500;
const easing = 'ease-out';
const id = '5oaYiptsqw5';
const pulseAmount = 0.03;
const delay = 6000;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script4 = function()
{
  player.once(() => {
const target = object('5UtTtxemRI1');
const duration = 1250;
const easing = 'ease-out';
const id = '6021XGDQE4u';
const pulseAmount = 0.03;
const delay = 8500;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script5 = function()
{
  player.once(() => {
const target = object('5tEMNbs91qI');
const duration = 1250;
const easing = 'ease-out';
const id = '6JUPx2fOvu8';
const pulseAmount = 0.03;
const delay = 9800;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script6 = function()
{
  player.once(() => {
const target = object('6nb3IdpIEss');
const duration = 1500;
const easing = 'ease-out';
const id = '6ZzYLqsVYQU';
const pulseAmount = 0.03;
const delay = 11500;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script7 = function()
{
  player.once(() => {
const target = object('6bmCETfpHvT');
const duration = 2750;
const easing = 'ease-out';
const id = '6dFLkmmlA2l';
const pulseAmount = 0.07;
const delay = 2000;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script8 = function()
{
  player.once(() => {
const target = object('6E1zQH2VeKc');
const duration = 1200;
const easing = 'ease-out';
const id = '5oDegm7RsLN';
const pulseAmount = 0.03;
const delay = 15500;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script9 = function()
{
  player.once(() => {
const target = object('5m6zqZc8n1r');
const duration = 1200;
const easing = 'ease-out';
const id = '5tytKZOfhKz';
const pulseAmount = 0.03;
const delay = 23500;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script10 = function()
{
  player.once(() => {
const target = object('6TbAD0KhJWL');
const duration = 1200;
const easing = 'ease-out';
const id = '6Nf3LSY6dFT';
const pulseAmount = 0.03;
const delay = 21500;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script11 = function()
{
  player.once(() => {
const target = object('6dvY44k2ezh');
const duration = 1200;
const easing = 'ease-out';
const id = '5dTNSK36qTT';
const pulseAmount = 0.03;
const delay = 16500;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script12 = function()
{
  player.once(() => {
const target = object('6KHuvzjCjBI');
const duration = 3300;
const easing = 'ease-out';
const id = '6hO5ei1yGjG';
const pulseAmount = 0.03;
const delay = 18000;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

};
