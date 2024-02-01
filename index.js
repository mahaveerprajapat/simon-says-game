let gameseq = [];
let userseq =[];

let btns =["yellow","red","purple","green"];
let started = false;
let level = 0;
let h2 =document.querySelector('h2');
document.addEventListener("keypress",function(){
    if(started == false)
    {
        console.log("game started");
        started = true;

        levelUp();
    }
});

    function gameFlash(btn){
        btn.classList.add("Flash");
        setTimeout(function(){
            btn.classList.remove("Flash");
        },250);
    }

    function userFlash(btn){
        btn.classList.add("userFlash");
        setTimeout(function(){
            btn.classList.remove("userFlash");
        },250);
    }
    function levelUp(){
        userseq = [];
        level++;
        h2.innerText = `level ${level}`;

        let randinx = Math.floor(Math.random()*3);
        let randcolor = btns[randinx];
        let randbtn = document.querySelector(`.${randcolor}`);

        // console.log(randinx);
        // console.log(randcolor);
        // console.log(randbtn);

        gameseq.push(randcolor);
        console.log(gameseq);
        //radom btn choose
        gameFlash(randbtn);
    }

    function checkans(idx)
    {
        
        if(userseq[idx] === gameseq[idx]){
            if(userseq.length == gameseq.length){
                setTimeout(levelUp,1000);
            }
        }else{
            h2.innerHTML = `game over! your score was <b>${level}</b> <br> press any key to start.`;
            reset();
        }
    }

    function btnpress(){
        let btn = this;
        userFlash(btn);

        usercolor = btn.getAttribute("id");
        userseq.push(usercolor);

        checkans(userseq.length-1);
    }

    let allbts = document.querySelectorAll(".btn");

    for(btn of allbts)
    {
        btn.addEventListener("click",btnpress);
    }

    function reset()
    {
        started = false;
        gameseq = [];
        userseq = [];
        level = 0;
    }