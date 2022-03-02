const dataRemove = [
  {
    "target":"brainly.co.id",
    "selector":[
      ".brn-placeholder__animation-box",
      ".sg-space-ignore",
      "header",
      ".brn-placeholder__animation",
      ".brn-header-container",
      ".brn-ads-mobile-container",
      ".sg-layout__footer",
      ".brn-ads-box",
      ".brn-footer__select"
    ]
  }
];

(()=>{
  for(let aa of dataRemove){
    let tAA = aa.target;
    if(window.location.href.indexOf(tAA)>0){
      let sAA = aa.selector;
      for(let bb of sAA){
        let getSelect = document.querySelectorAll(bb);
        for(let cc of getSelect){
          if(cc){
            cc.remove();
          };
        };
      };
    };
  };
})();
