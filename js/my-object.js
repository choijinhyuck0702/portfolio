// nav Obj
let navObj = {

    showNav:function(target){
        target.classList.add('active');
    },
    closeNav:function(target){
        target.classList.remove('active');
    },
    lockWrap:function(target){
        target.classList.add('lock');
    },
    unlockWrap:function(target){
        target.classList.remove('lock');
    },
    setNav:function(navList, wrap, navContainer){
        for(let idx=0;idx<navList.length;idx++){
            navList[idx].addEventListener('click',function(){
                navObj.unlockWrap(wrap);
                navObj.closeNav(navContainer);
            });
        }
    }
}

// header obj
let headerObj = {

    lockHeader:function(target){
        target.classList.add('lock');
    },
    unlockHeader:function(target){
        target.classList.remove('lock');
    }
}