export const BloodLoss = ({ ...obj }) => {
  let num = 0
  let timer = null
  let max = 400
  let xieNode = document.querySelector('.xie');

  if (localStorage.x) { //从localStorage中取出上次血量
    max = localStorage.x
    xieNode.style.width = max + 'px'
  };


  onclick = function () {
    let r = Math.random() * 5 + 5
    max -= r

    localStorage.setItem('x', max) //将血量存到localStorage中
    console.log(localStorage)
    xieNode.style.width = max + 'px'


    clearInterval(timer); //实现画面震动效果
    timer = setInterval(function () {
      num++; //num控制画面震动时间，点击一下后，每隔30ms震动一次，震动10次
      if (num == 10) {
        clearInterval(timer);
        num = 0;
        document.body.style.left = 0;
        document.body.style.top = 0;
        return;
      };
      document.body.style.left = Math.random() * -20 + 10 + 'px';
      document.body.style.top = Math.random() * -20 + 10 + 'px';
    }, 30)
  }
}

export const BattleInfo = (arr = []) => {

}



