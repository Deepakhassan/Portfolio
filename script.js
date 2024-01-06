var tablinks=document.getElementById("tab-links");
    var tabcontents=document.getElementById("tab-contents");
    function opentab(tabname){
        for(tablink of tablinks){
            tablink.classlist.remove("active-link");
        }
        for (tabcontents of tabcontents){
            tabcontents.classlist.remove("active-tab");
        }
    }