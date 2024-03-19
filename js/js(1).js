
    {//鼠标小飞机功能
        const fj = document.createElement('i');
        const set = document.querySelector('.settle')
        let rad = 0;
        fj.classList.add('fj');
        set.insertBefore(fj,document.querySelector('.settle h1'))
        set.addEventListener('mousemove',function (e) {
        if (Math.abs(e.movementX) + Math.abs(e.movementY) >5){
        rad = Math.atan2(e.movementX,-e.movementY)
    }
        fj.style.transform = `translate(${+e.pageX-80}px,${+e.pageY-1368}px) rotate(${rad}rad)`
    })
    }
    const nav = document.querySelector('header nav');
    const search = nav.querySelector('header nav div.search');
    const divTab = nav.querySelector('nav .tab');
    const ban = document.querySelector('.banner');
    const uls = ban.querySelector(".banner__ul-img")
    const lis = document.querySelectorAll('.banner__ul-button li')
    const src = [
    `               <dl>
    <dt>游戏币</dt>
    <dd>拯救者Y7000P</dd>
    <dd>拯救者 Y9000P</dd>
    <dd>拯救者 Y9000X</dd>
    <dd>拯救者 R7000</dd>
    <dd>拯救者 R7000P</dd>
    <dd>拯救者 R9000P</dd>
    <dd>拯救者 R9000X</dd>
    <dd>G5000</dd>
    <dd>掌上游戏机</dd>
</dl>
    <dl>
        <dt>轻薄本</dt>
        <dd>小新Pro16</dd>
        <dd>小新Pro AI 2024</dd>
        <dd>小新Pro14</dd>
        <dd>小新 14</dd>
        <dd>小新 16</dd>
        <dd>小新 Air 14</dd>
    </dl>
    <dl>
        <dt>便携本</dt>
        <dd>YOGA Air 14s</dd>
        <dd>YOGA Pro 14s</dd>
        <dd>YOGA Pro 16s</dd>
        <dd>YOGA Book 9i</dd>
    </dl>

    <dl>
        <dt>常规本</dt>
        <dd>ideapad</dd>
    </dl>
    <dl>
        <dt>分体台式机</dt>
        <dd>天逸510S 7.4L机箱</dd>
        <dd>天逸510Pro 14L机箱</dd>
        <dd>Mini主机</dd>
        <dd>超高性价比主机</dd>
    </dl>
    <dl>
        <dt>游戏台式机</dt>
        <dd>刃</dd>
        <dd>GeekPro</dd>
    </dl>
    <dl>
        <dt>一体台式机</dt>
        <dd>小新</dd>
        <dd>YOGA</dd>
        <dd>天骄</dd>
        <dd>超高性价比</dd>
    </dl>
    <dl>
        <dt>场景</dt>
        <dd>高清游戏</dd>
        <dd>家庭娱乐</dd>
        <dd>潮范校园</dd>
        <dd>便捷出行</dd>
        <dd>快乐学习</dd>
    </dl>
    <dl>
        <dt>特色服务</dt>
        <dd>私人定制</dd>
        <dd>以旧换新</dd>
        <dd>保值焕新</dd>
    </dl>
    `,`<dl>
    <dt>游戏币</dt>
    <dd>拯救者Y7000P</dd>
    <dd>拯救者 Y9000P</dd>
    <dd>拯救者 Y9000X</dd>
    <dd>拯救者 R7000</dd>
    <dd>拯救者 R7000P</dd>
    <dd>拯救者 R9000P</dd>
    <dd>拯救者 R9000X</dd>
    <dd>G5000</dd>
    <dd>掌上游戏机</dd>
</dl>
    <dl>
        <dt>轻薄本</dt>
        <dd>小新Pro16</dd>
        <dd>小新Pro AI 2024</dd>
        <dd>小新Pro14</dd>
        <dd>小新 14</dd>
        <dd>小新 16</dd>
        <dd>小新 Air 14</dd>
    </dl>
    <dl>
        <dt>便携本</dt>
        <dd>YOGA Air 14s</dd>
        <dd>YOGA Pro 14s</dd>
        <dd>YOGA Pro 16s</dd>
        <dd>YOGA Book 9i</dd>
    </dl>`,`<dl>
    <dt>轻薄本</dt>
    <dd>小新Pro16</dd>
    <dd>小新Pro AI 2024</dd>
    <dd>小新Pro14</dd>
    <dd>小新 14</dd>
    <dd>小新 16</dd>
    <dd>小新 Air 14</dd>
</dl>
    <dl>
        <dt>便携本</dt>
        <dd>YOGA Air 14s</dd>
        <dd>YOGA Pro 14s</dd>
        <dd>YOGA Pro 16s</dd>
        <dd>YOGA Book 9i</dd>
    </dl>`
    ]
    NodeList.prototype.map = function (func){
    for (let k of this){
    func(k);
}
}
    lis.map(
    v =>{
    v.onclick=()=>{
        v.querySelector('i').click()
    }
}
    )
    {//导航栏

        $('header nav ul.one>li:not(.lg)').mouseenter(
            function () {
                $(this.querySelector('div')).css('display', 'flex').hide()
               .stop().fadeIn(400)
            }
        )
        .mouseleave(
            function () {
                $(this.querySelector('div')).css('display', 'flex')
                .stop().fadeOut(400)
            }
        )


        const spans  = document.querySelectorAll("header nav>ul:nth-child(1) span")
        spans.map(v=>{
        v.style.width = `${v.clientWidth-28}px`
    })
        const ele_s = nav.querySelectorAll('*:not(nav ul,nav .lg,nav .logo,nav .search,nav #search,nav .close)')
        divTab.innerHTML = src[0]
        const hidden = (e)=>{
        for (let k in ele_s){
        if (+k<ele_s.length){
        if (e){ele_s[k].classList.remove('hidden')}else{ele_s[k].classList.add('hidden')}
    }
    }
    }
        const csh = ()=>{
        const tabs = nav.querySelectorAll('.tab');
        for (let k in tabs){
        if (+k+1){
        const ram = Math.floor(Math.random()*3)
        tabs[k].innerHTML = src[ram]
    }
    }
    }
        csh()
        nav.addEventListener('click',function (e){
        if (e.target.classList.contains('fdj')){
        hidden(0)
        search.classList.add('display')
    }else if (e.target.classList.contains('close')){
        hidden(1)
        search.classList.remove('display')
    }
        if (e.target.parentNode.classList.contains('menu')){
        e.target.insertBefore(nav.querySelector('.li_bottom'),e.target.lastChild)
    }
        if ((e.target.parentNode.classList.contains('menu'))){
        csh()
    }
    })
    }//导航栏
    {//轮播图
        let i =0;
        lis.map(value=>{
        value.setAttribute('data-id',i++)
    })
        let vw = 0;
        const ulHd = function (e){  //驱动程序
        if (e.target.classList.contains('banner__div--right')){
        if (!this.classList.contains('gd')&&!vw){this.classList.add('gd')}
        if (vw===900){
        vw=-100;
    }
        this.style.marginLeft = `-${vw+=100}vw`;
        if (!vw){this.classList.remove('gd')};

    }else if (e.target.classList.contains('banner__div--left')){
        this.classList.add('gd');
        if (!vw){
        vw =1000;
        this.classList.remove('gd');
    }
        this.style.marginLeft = `-${vw-=100}vw`;
    }else if (e.target.tagName==='I'){
        vw =  +e.target.parentNode.dataset.id*100;
        this.style.marginLeft = `-${vw}vw`;
    }
    }
        ban.addEventListener('click',(e)=>{
        ulHd.call(uls,e);
        ban.querySelector('.active').classList.remove('active');
        ban.querySelector(`.banner__ul-button li:nth-child(${vw/100+1}) i`).classList.add('active');
    })

        const play = ()=>{
            document.querySelector('.banner__div--right').click();
        }
        let ap =setInterval(play,1000);
        console.log(ap)
        ban.addEventListener('mouseleave',()=>{
            console.log('继续',ap)
            if (!ap){   //如果因页面卡顿 or某种时机导致鼠标移入暂停未触发，那么也不会因再次执行开启这个定时器，导致两个定时器的执行  见246
                ap =setInterval(play,1000)
            }
        });
        ban.addEventListener('mouseover',()=>{
            console.log('暂停',ap)
            clearInterval(ap);
            ap = null  //这里设置null,因为就算清楚了定时器，其值也是个true值
        })
    }//轮播图
    //tab栏
    const cont = [
    ` <li data-id="0" className="tab_act"><img src="img/19.png" alt=""><span>Lenovo台式机</span></li>
    <li data-id="1"><img src="img/20.png" alt=""><span>Lenovo笔记本</span></li>
    <li data-id="2"><img src="img/22.png" alt=""><span>ThinkPad电脑</span></li>
    <li data-id="3"><img src="img/24.png" alt=""><span>平板</span></li>
    <li data-id="4"><img src="img/26.png" alt=""><span>手机</span></li>
    <li data-id="5"><img src="img/28.png" alt=""><span>选件/服务</span></li>
    <li data-id="6"><img src="img/30.png" alt=""><span>显示器/IP周边</span></li>
    <li data-id="7"><img src="img/32.png" alt=""><span>智能产品</span></li>
    `,
    ` <li data-id="0" className="tab_act"><img src="img/67.png" alt=""><span>ThinkPad</span></li>
    <li data-id="1"><img src="img/68.png" alt=""><span>ThinkBook</span></li>
    <li data-id="2"><img src="img/70.png" alt=""><span>台式机</span></li>
    <li data-id="3"><img src="img/72.png" alt=""><span>扬天</span></li>
    <li data-id="4"><img src="img/74.png" alt=""><span>配件/办公</span></li>
    <li data-id="5"><img src="img/76.png" alt=""><span>会议平板</span></li>
    <li data-id="6"><img src="img/78.png" alt=""><span>服务器</span></li>
    <li data-id="7"><img src="img/80.png" alt=""><span>解决方案</span></li>
    `,
    `
    <li data-id="0" className="tab_act"><img src="img/115.png" alt=""><span>笔记本</span></li>
    <li data-id="1"><img src="img/116.png" alt=""><span>基础设施产品</span></li>
    <li data-id="2"><img src="img/118.png" alt=""><span>平板/智慧商显</span></li>
    <li data-id="3"><img src="img/120.png" alt=""><span>台式机</span></li>
    <li data-id="4"><img src="img/122.png" alt=""><span>工作站</span></li>
    <li data-id="5"><img src="img/124.png" alt=""><span>智能边缘</span></li>
    <li data-id="6"><img src="img/126.png" alt=""><span>教学互动</span></li>
    <li data-id="7"><img src="img/128.png" alt=""><span>商用解决方案</span></li>
    `
    ];
    const cont_1=[
    ` <li>
    <img src="img/34.png" alt="">
        <h3>拯救者 刃7000K</h3>
        <span>14代英特尔酷睿i5-14600K(F)/Windows 11 家庭中文版/RTX4060Ti 8G/16G（8*2）/1T SSD</span>
        <span><i>￥</i> 8799</span>
</li>
    <li>
        <img src="img/35.png" alt="">
            <h3>小新27</h3>
            <span>13代英特尔酷睿i5-13500H/Windows 11 家庭中文版/27英寸/16G(8Gx2)/1T SSD/集成显卡/白色</span>
            <span><i>￥</i>4799</span>
    </li>
    <li>
        <img src="img/36.png" alt="">
            <h3>天逸510S</h3>
            <span>13代英特尔酷睿i5-13400/Windows 11 家庭中文版/16G/512G SSD+1T HDD /集成显卡</span>
            <span><i>￥</i>3599</span>
    </li>
    <li>
        <img src="img/37.png" alt="">
            <h3>一体计算机</h3>
            <span>Intel N95/16GB/512GB/集成显卡/白色无线键鼠套装/三年有限保修及三年上门服务/Win10家庭版/白色</span>
            <span><i>￥</i>2199</span>
    </li>
    `,
    ` <li>
    <img src="img/158.png" alt="">
        <h3>智慧制造</h3>
        <span>凭借“双实企业”领军优势，以全栈式、领先的技术和全周期陪伴式服务，助力“中国智造”升级跃迁</span>
        <span><i>￥</i> 8799</span>
</li>
    <li>
        <img src="img/159.png" alt="">
            <h3>智慧教育</h3>
            <span>教育ICT领域市场份额第一，提供全学段、全场景教学信息化产品、解决方案和完善的服务。</span>
            <span><i>￥</i>4799</span>
    </li>
    <li>
        <img src="img/160.png" alt="">
            <h3>智慧医疗</h3>
            <span>提供高效的数字底座、定制化解决方案以及全程护航的服务体系。</span>
            <span><i>￥</i>3599</span>
    </li>
    <li>
        <img src="img/161.png" alt="">
            <h3>数字政府</h3>
            <span>提供数字化底座、集成与资源整合、生态构建的全生命周期解决方案，助力政府快速实现善政、兴业、惠民。</span>
            <span><i>￥</i>2199</span>
    </li>
    `,
    ` <li>
    <img src="img/90.png" alt="">
        <h3>扬天M4000q 2022</h3>
        <span>第12代智能英特尔酷睿i3-12100/Windows 11 家庭中文版/8G /512 SSD/Inter UHD Graphics 730/3年有限保修（全国有限上门，其中第2/3年仅主要部件保修）百应在线顾问</span>
        <span><i>￥</i> 8799</span>
</li>
    <li>
        <img src="img/91.png" alt="">
            <h3>扬天M4000q 2022</h3>
            <span>第12代智能英特尔酷睿i3-12100/Windows 11 家庭中文版/8G/1T HDD+256 SSD/Inter UHD Graphics 730/3年有限保修（全国有限上门，其中第2/3年仅主要部件保修）百应在线顾问</span>
            <span><i>￥</i>4799</span>
    </li>
    <li>
        <img src="img/92.png" alt="">
            <h3>扬天M4000q 2022</h3>
            <span>第12代智能英特尔酷睿i5-12400/Windows 11 家庭中文版/8G/512G/Inter UHD Graphics 730/3年有限保修（全国有限上门，其中第2/3年仅主要部件保修）百应在线顾问</span>
            <span><i>￥</i>3599</span>
    </li>
    <li>
        <img src="img/93.png" alt="">
            <h3>扬天M4000q 2022</h3>
            <span>第12代智能英特尔酷睿i7-12700/Windows 11 家庭中文版/8G/512G SSD/Inter UHD Graphics 730/3年有限保修（全国有限上门，其中第2/3年仅主要部件保修）百应在线顾问</span>
            <span><i>￥</i>2199</span>
    </li>
    `
    ]
    const tab_head = document.querySelector('.classify__jzz');
    const tab_body = document.querySelector('.classify__ul--sb');
    const tab_foot = document.querySelector('.classify__ul--cp');
    const xhx = tab_head.querySelector('.xhx');
    const getImgIndex = (img)=>{  //获取图片的src
    const strArr = (img.src+'').split('');
    const period = strArr.lastIndexOf('.');
    const comma = strArr.lastIndexOf('/');
    return +strArr.slice(comma+1,period).join('');
}
    const csh_1 = (flag)=>{
    const csh = [];
    Array.from(tab_body.querySelectorAll('img')).forEach(value => {
    csh.push(getImgIndex(value));
})
    if (flag){
    return csh
}else {
    csh[0] -= 1;
    return csh
}
}
    let cshArr = csh_1(false);
    let j = [];
    let i = []; //记录器 针对开头的
    tab_head.addEventListener('mouseover',function (e) {
    if (e.target.closest("li")){
    e.target.closest("li").querySelector('p').appendChild(xhx);
    i[0]=e.target.closest("li").dataset.id;
    if (i[0]!==i[1]){
    tab_foot.innerHTML = cont_1[Math.floor(Math.random()*cont_1.length)];
    tab_body.innerHTML = cont[e.target.closest("li").dataset.id];
    cshArr = csh_1(false);
    j = [];
}
    i[1]=e.target.closest("li").dataset.id;
}
})
    tab_body.addEventListener('mouseover',function (e) {
    const li = e.target.closest("li");
    if (!li){ //没选到li直接结束
    return
}
    const img = li.querySelector('img');
    j[0] = li.dataset.id;
    if (j[0]!==j[1]){
    if (img){
    let i_1=0;
    Array.from(tab_body.querySelectorAll('img')).map(
    value => {
    value.src = `img/${cshArr[i_1++]}.png`;
}
    );
    img.src = `img/${getImgIndex(img)+1}.png`;
    tab_foot.innerHTML = cont_1[Math.floor(Math.random()*cont_1.length)];
}
}
    j[1] = li.dataset.id;
})
    {//小轮播
        const ul_r = document.querySelector('.news__banner--right ul ');
        const ul_l = document.querySelector('.news__banner--left ul');
        const lis_1 = document.querySelectorAll('.news__banner--right ul li');
        const spans = document.querySelectorAll('.news__banner--left>span');
        ul_r.addEventListener('mouseover',function (e){
        if (e.target.closest('li')){
        ul_l.style.left =  `-${+e.target.closest('li').dataset.id*1064}px`;
        document.querySelector('.span_active').classList.remove('span_active');
        spans[+e.target.closest('li').dataset.id].classList.add('span_active');
    }
    })
    }//小轮播
    {// 最后一个轮播图
        const imgs = document.querySelectorAll('.section__ul--cp_img li');
        const ulLj = document.querySelector('.section__ul--tab');
        let index =2;
        ulLj.querySelectorAll('li')[index].classList.add('active');
        const layout = ()=>{
        const x = 100;
        const sca = 0.8;
        for(let i=0;i<imgs.length;i++){
        const sign = Math.sign(i-index);
        const currentImg = imgs[i];
        currentImg.style.zIndex  = `${imgs.length - Math.abs(index-i)}`;
        let xOffset = (i-index)*x;
        const scale = sca **Math.abs(i-index);
        if (i!==index){
        xOffset = xOffset+400*sign;
        currentImg.style.filter = 'brightness(0.5)';
    }
        currentImg.style.transform = `translateX(${xOffset}px) scale(${scale})`;
    }
    }
        layout();
        ulLj.addEventListener('mouseover',function (e){
        if (e.target.tagName === 'LI'){
        index = e.target.dataset.id;
        layout();
        imgs[e.target.dataset.id].style.filter = 'brightness(1.1)';
        ulLj.querySelector('.active').classList.remove('active');
        e.target.classList.add('active');
    }
    })
    }//最后一个轮播图
