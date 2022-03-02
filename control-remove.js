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
      ".brn-ads-box",
      ".brn-footer__select"
      ".sg-layout__footer",
		  ".brn-qpage-next-answer-box__header",
		  ".brn-qpage-next-question-box__comments",
      ".brn-qpage-next-question-box__actions",
		  ".brn-qpage-next-answer-box__actions",
		  ".brn-qpage-next-answer-box__community-banner",
		  ".brn-qpage-next-comments",
		".js-react-above-answers",
		".js-react-below-answers",
		".js-qpage-newest-question.brn-qpage-next-newest-questions__section:nth-of-type(1)",
		".js-qpage-newest-question.brn-qpage-next-newest-questions__section:nth-of-type(2)",
		".js-qpage-newest-question.brn-qpage-next-newest-questions__section:nth-of-type(3)",
		".js-qpage-newest-question.brn-qpage-next-newest-questions__section:nth-of-type(4)",
		".js-qpage-newest-question.brn-qpage-next-newest-questions__section:nth-of-type(5)"
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
