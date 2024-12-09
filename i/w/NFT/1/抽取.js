let data=[[],[]];
let D={}
let 最大数=0;
for(let i=0;数据[0].length>i;i++){
    let 临时数=0;
    data[0][i]=[];
    for(let k=0;数据[0][i].length>k;k++){

        let 此号=k+1;
        if(此号>1290){
            notyf.alert("元素数量过多")
        }else if(此号>99){
            此号=此号.toString(36);
        }else if(此号<10){
            此号=(此号+"").padStart(2,'0');
        }
        数据[0][i][k][3]=数据[0][i][k][3]||此号;

        if(数据[0][i][k][2]=="S"){临时数+=1;for(let l=0;1>l;l++){data[0][i][data[0][i].length]=数据[0][i][k]}}
        if(数据[0][i][k][2]=="A"){临时数+=5;for(let l=0;5>l;l++){data[0][i][data[0][i].length]=数据[0][i][k]}}
        if(数据[0][i][k][2]=="B"){临时数+=20;for(let l=0;20>l;l++){data[0][i][data[0][i].length]=数据[0][i][k]}}
        if(数据[0][i][k][2]=="C"){临时数+=50;for(let l=0;50>l;l++){data[0][i][data[0][i].length]=数据[0][i][k]}}
        if(数据[0][i][k][2]=="D"){临时数+=1;if(!D["0_"+i]){D["0_"+i]=[数据[0][i][k]]}else{D["0_"+i][D["0_"+i].length]=数据[0][i][k]}}
    }
    if(临时数>最大数){最大数=临时数;}
}
for(let i=0;数据[1].length>i;i++){
    let 临时数=0;
    data[1][i]=[];
    for(let k=0;数据[1][i].length>k;k++){

        let 此号=k+1;
        if(此号>1290){
            notyf.alert("元素数量过多")
        }else if(此号>99){
            此号=此号.toString(36);
        }else if(此号<10){
            此号=(此号+"").padStart(2,'0');
        }
        数据[1][i][k][3]=数据[1][i][k][3]||此号;

        if(数据[1][i][k][2]=="S"){临时数+=1;for(let l=0;1>l;l++){data[1][i][data[1][i].length]=数据[1][i][k]}}
        if(数据[1][i][k][2]=="A"){临时数+=5;for(let l=0;5>l;l++){data[1][i][data[1][i].length]=数据[1][i][k]}}
        if(数据[1][i][k][2]=="B"){临时数+=20;for(let l=0;20>l;l++){data[1][i][data[1][i].length]=数据[1][i][k]}}
        if(数据[1][i][k][2]=="C"){临时数+=50;for(let l=0;50>l;l++){data[1][i][data[1][i].length]=数据[1][i][k]}}
        if(数据[1][i][k][2]=="D"){临时数+=1;if(!D["1_"+i]){D["1_"+i]=[数据[1][i][k]]}else{D["1_"+i][D["1_"+i].length]=数据[1][i][k]}}
    }
    if(临时数>最大数){最大数=临时数;}
}

for(let i=0;数据[0].length>i;i++){
    data[0][i]=data[0][i].concat(Array(最大数).fill(0).slice(data[0][i].length))
}
for(let i=0;数据[1].length>i;i++){
    data[1][i]=data[1][i].concat(Array(最大数).fill(0).slice(data[1][i].length))
}

let 编号2;
let dy;

function 抽取(o){
    let 结果=[[],[]];
    let 编号="";
    编号2=标题[0];

    for(let i=0;数据[0].length>i;i++){
        let 临时=Math.floor(Math.random()*最大数);
        if(data[0][i][临时]==0){
            if(D["0_"+i]){
                临时=Math.floor(Math.random()*D["0_"+i].length);
                临时=D["0_"+i][临时];
                结果[0][结果[0].length]=临时;
                编号+=临时[0]+"."+临时[1]+"／";
                编号2+=临时[3];
            }else{
                临时=0;
                结果[0][结果[0].length]=0;
                编号+="0／";
                编号2+="00"
            }
        }else{
            临时=data[0][i][临时];
            结果[0][结果[0].length]=临时;
            编号+=临时[0]+"."+临时[1]+"／";
            编号2+=临时[3];
        }
    }
    for(let i=0;数据[1].length>i;i++){
        let 临时=Math.floor(Math.random()*最大数);
        if(data[1][i][临时]==0){
            if(D["1_"+i]){
                临时=Math.floor(Math.random()*D["1_"+i].length);
                临时=D["1_"+i][临时];
                结果[1][结果[1].length]=临时;
                编号+=临时[0]+"."+临时[1]+"／";
                编号2+=临时[3];
            }else{
                临时=0;
                结果[1][结果[1].length]=0;
                编号+="0／";
                编号2+="00";
            }
        }else{
            临时=data[1][i][临时];
            结果[1][结果[1].length]=临时;
            编号+=临时[0]+"."+临时[1]+"／";
            编号2+=临时[3];
        }
    }

    编号2=编号2.replace(new RegExp('x',"g"),"")

    dy='{"x":"","w":"'+标题[1]+'","q":[';
    let 临时="";
    for(let i=0;结果[0].length>i;i++){
        if(结果[0][i]!=0){
            if(临时!=""){临时+=","}
            临时+='["'+结果[0][i][0]+'","'+结果[0][i][1]+'","'+结果[0][i][2]+'"]'
        }
    }
    dy+=临时+'],"e":[';
    临时="";
    for(let i=0;结果[1].length>i;i++){
        if(结果[1][i]!=0){
            if(临时!=""){临时+=","}
            临时+='["'+结果[1][i][0]+'","'+结果[1][i][1]+'","'+结果[1][i][2]+'"]'
        }
    }
    dy+=临时+']}';

    if(已有.indexOf(编号2)!=-1){
        if(o<=1){
            document.getElementById("结果").innerHTML=dy;
            document.getElementById("编号").innerHTML="【有重复，但次数用尽】";
        }else{
            o-=1;
            抽取(o);
        }
    }else{
        document.getElementById("结果").innerHTML="结果：<a onclick='复(dy)'>"+dy+"</a>";
        document.getElementById("编号").innerHTML="编号：<a onclick='复(编号2)'>【<span id='编号结果'>"+编号2+"</span>】</a>（"+编号+"）";
    }
}


function 复(o){
document.getElementById('复制').value=o;let 复制=document.querySelector('#复制');复制.select();document.execCommand("Copy");notyf.confirm("已复制");}

!function(){function n(n,t){for(property in t)t.hasOwnProperty(property)&&(n[property]=t[property]);return n}function t(n,t){var i=document.createElement("div");i.className="notyf";var e=document.createElement("div");e.className="notyf-wrapper";var o=document.createElement("div");o.className="notyf-icon";var a=document.createElement("i");a.className=t;var r=document.createElement("div");r.className="notyf-message",r.innerHTML=n,o.appendChild(a),e.appendChild(o),e.appendChild(r),i.appendChild(e);var c=this;return setTimeout(function(){i.className+=" disappear",i.addEventListener(c.animationEnd,function(n){n.target==i&&c.container.removeChild(i)});var n=c.notifications.indexOf(i);c.notifications.splice(n,1)},c.options.delay),i}function i(){var n,t=document.createElement("fake"),i={transition:"animationend",OTransition:"oAnimationEnd",MozTransition:"animationend",WebkitTransition:"webkitAnimationEnd"};for(n in i)if(void 0!==t.style[n])return i[n]}this.Notyf=function(){this.notifications=[];var t={delay:2e3,alertIcon:"notyf-alert-icon",confirmIcon:"notyf-confirm-icon"};arguments[0]&&"object"==typeof arguments[0]?this.options=n(t,arguments[0]):this.options=t;var e=document.createDocumentFragment(),o=document.createElement("div");o.className="notyf-container",e.appendChild(o),document.body.appendChild(e),this.container=o,this.animationEnd=i()},this.Notyf.prototype.alert=function(n){var i=t.call(this,n,this.options.alertIcon);i.className+=" alert",this.container.appendChild(i),this.notifications.push(i)},this.Notyf.prototype.confirm=function(n){var i=t.call(this,n,this.options.confirmIcon);i.className+=" confirm",this.container.appendChild(i),this.notifications.push(i)}}();
let notyf = new Notyf({delay:3000});