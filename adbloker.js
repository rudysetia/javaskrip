!function(){function f(){var a=document.createElement("div");a.id="levelmaxblock";a.innerHTML='<div class="inner"> <div class="header"> <h2>Ads Blocker Detected</h2> </div> <div class="isi"> <p>Please consider supporting us by disabling your ad blocker</p><p>Dukung blog ini dengan mematikan plugins Ad blocker</p> <div class="tombol"><button class="1 active">Adblock /AdblockPlus/Ublock Origin</button></div> <div class="caranya"> <div class="1 active"> <ul> <li>Click on the AdBlock icon in your browser (see ur browser top right corner)<br></li> <li>Choose, Don\'t run on pages on this domain or click to disable<br></li> <li>A new window will appear. Click on the "Exclude" button<br></li> <li>The browser icon should have turned grey<br></li> <li>Click on "Enabled on this site" position<br></li> <li>Once clicked, it should change to "Disabled on this site"<br></li> <li>The browser icon should have turned grey<br></li> <li>Refresh the page if it didn\'t refresh automatically. Thanks!</li> </ul> </div> </div> </div> </div>';
document.body.append(a);document.body.style.overflow="hidden";var b=a.querySelectorAll("button");a.querySelector(".close");var d=a.querySelectorAll(".caranya > div");for(a=0;a<b.length;a++)b[a].addEventListener("click",function(a){a.preventDefault();a=this.getAttribute("class").split(" ")[0];for(var c=0;c<d.length;c++)d[c].classList.remove("active"),b[c].classList.remove("active");b[a-1].classList.add("active");d[a-1].classList.add("active")})}var b=document.createElement("script");b.type="text/javascript";
b.async=!0;b.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";b.onerror=function(){f();window.adblock=!0};var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(b,e)}();
