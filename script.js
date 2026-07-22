console.log("つながった！");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");

document.querySelectorAll(".popup-img").forEach(img => {

    img.addEventListener("click", function(){

        modal.style.display = "flex";

        modalImg.src = this.src;

    });

});

document.querySelector(".close").addEventListener("click", function(){

    modal.style.display = "none";

});

modal.addEventListener("click", function(e){

    if(e.target === modal){

        modal.style.display = "none";

    }

});

function createGraph(id, data, scale){

    const graph = document.getElementById(id);

    data.forEach(item=>{

        graph.innerHTML += `
        <div class="item">
            <div class="bar" style="height:${item.value*scale}px">
                ${item.value}
            </div>
            <p>${item.name}</p>
        </div>
        `;

    });

}

// 平均ネタ秒数（秒）
createGraph("neta",[
    {name:"創成期",value:307},
    {name:"革命期",value:291},
    {name:"変革期",value:288},
    {name:"現代期",value:259}
],0.5);

// 平均ボケ数
createGraph("boke",[
    {name:"創成期",value:29.7},
    {name:"革命期",value:29.7},
    {name:"変革期",value:31.7},
    {name:"現代期",value:18.3}
],5);

// 平均ツッコミ数
createGraph("tsukkomi",[
    {name:"創成期",value:19.7},
    {name:"革命期",value:31.3},
    {name:"変革期",value:37},
    {name:"現代期",value:22.3}
],5);

// 平均ボケ間隔
createGraph("bokeTime",[
    {name:"創成期",value:10.3},
    {name:"革命期",value:9.8},
    {name:"変革期",value:9.1},
    {name:"現代期",value:14.2}
],10);

// 平均ツッコミ間隔
createGraph("tsukkomiTime",[
    {name:"創成期",value:15.6},
    {name:"革命期",value:9.3},
    {name:"変革期",value:7.8},
    {name:"現代期",value:11.6}
],10);