let 颜色="000000";
if(localStorage.getItem("像素点")){颜色=localStorage.getItem("像素点")}else{localStorage.setItem("像素点",颜色)}
let 背景="";
let 反色="";
if(颜色[0]=="D"||颜色[0]=="E"||颜色[0]=="F"){if(颜色[2]=="D"||颜色[2]=="E"||颜色[2]=="F"){if(颜色[4]=="D"||颜色[4]=="E"||颜色[4]=="F"){背景="#000000";反色="#FFFFFF";}}}
if(背景==""){背景="#FFFFFF";反色="#000000"}

let 名字="小像素点";
try{
let 地址="/i/x/"+颜色+".json";
let GetJson=$.ajax({
    url:地址,
    type:"GET",
    dataType:"json",
    async:false,
    success:function (data) {
    }
});
名字=GetJson.responseText;
名字=名字.split("／")[0];
if(名字.length<50){
    if(名字&&名字!=""){}else{名字="小像素点"}
}else{
    名字="小像素点";
    console.log("bug");
    adddlert("bug");
}
}catch(e){}
document.getElementById("style_root").innerHTML=":root{--点点:#"+颜色+";--背景:"+背景+";--反色:"+反色+"}";
document.getElementById("屋顶").innerHTML="<h2>"+名字+"<small>的小房间</small></h2>";

let 预设={
"o":[
    "o／〈x〉在认真聆听。",
    "o／〈x〉在认真聆听。",
    "o／〈x〉在认真聆听。",
    "o／〈x〉在认真聆听。",
    "o／〈x〉在认真聆听。",
    "o／〈x〉在认真聆听。",
    "o／〈x〉觉得你的声音很好听。",
    "小跳两下／〈x〉跳了两下，表示自己还在。＼〈x〉跳了两下，示意它在认真听。",
    "歪头／〈x〉歪了歪头。",
],
    
"😃":["高兴跳跳／〈x〉跳了跳。"],
"🙁":["凑近／〈x〉蹭了蹭你。＼〈x〉拍了拍你。＼〈x〉给了你一把薯片。"],
"🎂":["蛋糕／〈x〉拿来了一个蛋糕。"],



"点点赢了":["高兴跳跳／〈x〉赢了。"],
"你赢了":["凑近／〈x〉恭喜你获得胜利。"],
"平局":["小跳两下／平局。","小跳两下／平局。","小跳两下／平局。","小跳两下／平局，〈x〉想再来一局。","歪头／平局，〈x〉问你要不要再来一局？"],

}

let 动作={
"o":"0%{}",
"凑近":"0%{}1%,3%,5%,11.5%,13%,26.5%,29.5%,32.5%{top:-8px}2%,4%,6%,11%,12.5%,15%,25%,28%,31%,34%{top:0}9%,25%{transform:scale(4.0)rotate(0deg)rotateY(0deg)}27.5%{transform:scale(4.0)rotate(0deg)rotateY(180deg)}34%{transform:scale(1.0)rotate(0deg)rotateY(180deg)}36.5%{transform:scale(1.0)rotate(0deg)rotateY(0deg)}",
"蛋糕":"0%,33%{left:0}10%,13%{left:300px}0%,33%,35%,37%{top:0}34%,36%{top:-20px}，0%,100%{top:-5px;width:30px;height:15px}0%,13%{left:315px}33%,100%{left:15px}0%,50%{opacity:1}60%{opacity:0}，0%,100%{top:-15px;width:20px;height:10px}0%,13%{left:320px}33%,100%{left:20px}0%,50%{opacity:1}60%{opacity:0}，0%,100%{top:-22px;width:4px;height:10px}0%,13%{left:323px}33%,100%{left:23px}0%,50%{opacity:1}60%{opacity:0}，0%,100%{top:-22px;width:4px;height:10px}0%,13%{left:332px}33%,100%{left:32px}0%,50%{opacity:1}60%{opacity:0}",
"高兴跳跳":"0%{top:0}1%{top:-50px}2%{top:0}3%{top:-50px}4%{top:0}",
"小跳两下":"0%{top:0}1%{top:-20px}2%{top:0}3%{top:-20px}4%{top:0}",
"歪头":"0%,3%,20%{transform:rotate(0deg)}6%,14%{transform:rotate(20deg)}",
}

let 表情="";

function 发送(o){
if(o){
    if(o.indexOf("／")!=-1){
        预设["临时"]=o;
        表情="临时";
    }else{
        表情=o;
    }
}
let 临时=预设[表情];
临时=临时[Math.floor(Math.random()*临时.length)].split("／");

let 临时2=动作[临时[0]].split("，");

临时=临时[1].split("＼");
临时=临时[Math.floor(Math.random()*临时.length)];
临时=临时.replace(new RegExp('〈x〉',"g"),"<b>"+名字+"</b>");
document.getElementById("实时").innerHTML=临时;

dy="";

let dy2="";
for(let i2=0;临时2.length>i2;i2++){
if(i2==0){dy+="@keyframes "+表情+"{";
}else{dy+="@keyframes "+表情+"_群演"+i2+"{"}
if(临时2[i2].indexOf("({")!=-1){ //代码
let 临时3=临时2[i2].split("({");
dy+=临时3[0];
let e="无";
for(let i3=1;临时3.length>i3;i3++){
    let 临时4=临时3[i3].split("})");
    临时4[0]=临时4[0].split(",");
    if(临时4[0][0]=="a"){dy+="background-color:#00000000;background-blend-mode:lighten;background-size:cover;-webkit-mask-mode:luminance;mask-mode:luminance;background-image:url("+临时4[0][2]+"),linear-gradient("+临时4[0][1]+","+临时4[0][1]+");-webkit-mask-image:url("+临时4[0][2]+");mask-image:url("+临时4[0][2]+");"}
    if(临时4[0][0]=="b"){for(let i4=0;临时4[0][3]>i4;i4++){dy+=(临时4[0][1]+(临时4[0][2]*i4))+"%,"}}
    if(临时4[0][0]=="c"){
        if(反色=="#000000"){dy+=临时4[0][1]}else{dy+=临时4[0][2]}
    }
    if(临时4[0][0]=="d"){dy+=临时4[0][Math.floor(Math.random()*(临时4[0].length-1))+1]}
    if(临时4[0][0]=="e"){if(e=="无"){e=Math.floor(Math.random()*(临时4[0].length-1))+1}dy+=临时4[0][e]}
    if(临时4[0][0]=="f"){
        let i5=0;
        for(let i4=1;临时4[0].length>i4;i4+=3){
            if(!f[临时4[0][i4]]){
                if(临时4[0][i4]=="周"){f["周"]=new Date().getDay()+1}
                if(临时4[0][i4]=="季"){
                    if(f["月"]==3||f["月"]==4||f["月"]==5){f["季"]="春";
                    }else if(f["月"]==6||f["月"]==7||f["月"]==8){f["季"]="夏";
                    }else if(f["月"]==9||f["月"]==10||f["月"]==11){f["季"]="秋";
                    }else{f["季"]="冬"}
                }
            }
            if(临时4[0][i4+1]&&f[临时4[0][i4]]==临时4[0][i4+1]){
                i5=1;
                dy+=临时4[0][i4+2];
                break;
            }
        }
        if(i5==0){dy+=临时4[0][临时4[0].length-1];}
    }
    dy+=临时4[1];
}
}
else{dy+=临时2[i2]}
dy+="}";
dy2="<div class='群演' style='animation-name:"+表情+"_群演"+i2+"'></div>"+dy2;
}
document.getElementById("小窝").innerHTML=dy2+"<div id='点点'></div>";
document.getElementById("style").innerHTML=dy;
document.getElementById("点点").style="animation-name:"+表情+";";
表情="o";
}