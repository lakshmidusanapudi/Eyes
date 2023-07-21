const balls=document.getElementsByClassName('ball');
///predefiend method onmousemove
document.onmousemove=(a)=>{
    const X=(a.clientX * 100)/window.innerWidth+ '%';
    const Y=(a.clientY * 100)/window.innerHeight+ '%';
    for(i=0;i<100;i++)
    {
        balls[i].style.left=X;
        balls[i].style.top=Y;
        balls[i].transform='translate(-'+X+',-'+Y+')';
    }
}