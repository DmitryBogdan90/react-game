(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{71:function(e,t,s){},72:function(e,t,s){},73:function(e,t,s){},79:function(e,t,s){},82:function(e,t,s){},83:function(e,t,s){},84:function(e,t,s){},85:function(e,t,s){"use strict";s.r(t);var i=s(0),a=s(7),c=s.n(a),n=(s(71),s(63)),r=s(36),o=s(49),l=s(32),h=s(41),d=s(9),u=s(47),m=s(46),b=s(87),j=s(116),g=s(118),O=s(117),v=s(15),f=s.n(v),w=(s(72),s(113)),p=(s(73),s(1)),S=function(e){var t=e.changeBackgroundOn,s=e.newGame,i=e.saveGame,a=e.viewHighScore,c=e.viewSettings,n=e.deathCount,r=e.newGameCount,o=e.hardResetCount;return Object(p.jsxs)("header",{children:[Object(p.jsxs)("menu",{className:"buttons-header",children:[Object(p.jsx)(w.a,{className:"header-button",onClick:function(){return t()},children:"Background"}),Object(p.jsx)(w.a,{className:"header-button",onClick:function(){return s()},children:"New Game"}),Object(p.jsx)(w.a,{className:"header-button",onClick:function(){return i()},children:"Save Game"}),Object(p.jsx)(w.a,{className:"header-button",onClick:function(){return a()},children:"High-score"}),Object(p.jsx)(w.a,{className:"header-button",onClick:function(){return c()},children:"Settings"})]}),Object(p.jsxs)("div",{className:"globals",children:[Object(p.jsxs)("div",{className:"deaths globals-item",children:[Object(p.jsx)("div",{children:"deaths(+10)"}),Object(p.jsx)("div",{children:n})]}),Object(p.jsxs)("div",{className:"starts globals-item",children:[Object(p.jsx)("div",{children:"starts(+1)"}),Object(p.jsx)("div",{children:r})]}),Object(p.jsxs)("div",{className:"resets globals-item",children:[Object(p.jsx)("div",{children:"resets(**2)"}),Object(p.jsx)("div",{children:o})]})]})]})},x=s(119),k=s(120),y=s(61),C=s.n(y),N=(s(79),s.p+"static/media/paper.8b57a6b1.svg"),A=s.p+"static/media/scissors.3b1a5d7e.svg",M=s.p+"static/media/rock.476e90a9.svg",H=function(e){var t=e.browserChoice,s=e.playerChoice,a=e.winner,c=e.score,n=e.round,o=e.choices,l=e.handleClick,h=e.isScoreMode,d=e.playerAccumulator,u=e.browserAccumulator,m=e.drawAccumulator,b=e.resetDrawAccumulator,j=e.resetPlayerAccumulator,g=e.isFirstRound,O=e.restoredHealth,v=e.absorbedDamage,f=e.absorbBrowserScore,S=e.changeBackgroundOn,y=e.newGame,H=e.saveGame,G=e.viewHighScore,B=e.viewSettings,D=Object(i.useState)(!1),z=Object(r.a)(D,2),R=z[0],T=z[1],E=Object(i.useState)(null),P=Object(r.a)(E,2),L=P[0],F=P[1],I=function(){F(null)},U=function(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e3;return Object(p.jsxs)("div",{className:"choice-card",children:[Object(p.jsx)("div",{className:"title-choice",children:t}),Object(p.jsxs)("div",{className:"image-choice-container",children:[e&&Object(p.jsx)("img",{className:"image-choice",src:"paper"===e?N:"rock"===s?M:A,alt:""}),!h||Object(p.jsx)("div",{className:"player"===t?"player-points":"browser-points",children:i})]})]})};return Object(p.jsxs)("main",{children:[Object(p.jsxs)("div",{className:"game-info",children:[Object(p.jsxs)("div",{className:"help",children:[o.map((function(e,t){return Object(p.jsxs)("div",{children:["Press ",t+1," to choose ",e]},t)})),Object(p.jsx)("div",{children:"Press shift+m to change mode"}),Object(p.jsx)("div",{children:"Press shift+h to open/close highscore"})]}),Object(p.jsxs)("div",{className:"round ".concat("player"===a?"win":"browser"===a?"lose":"draw"),children:[Object(p.jsxs)("div",{className:"round-item",children:[Object(p.jsx)("div",{children:"Restored"}),Object(p.jsx)("div",{children:O})]}),Object(p.jsxs)("div",{className:"round-item",children:[Object(p.jsx)("div",{children:"Chances"}),Object(p.jsx)("div",{children:n})]}),Object(p.jsxs)("div",{className:"round-item",children:[Object(p.jsx)("div",{children:"Absorbed"}),Object(p.jsx)("div",{children:v})]}),Object(p.jsxs)("div",{className:"round-item burger",children:[Object(p.jsx)(w.a,{className:"burger-button","aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){T(!R),F(e.currentTarget)},children:Object(p.jsx)(C.a,{})}),Object(p.jsxs)(x.a,{id:"simple-menu",anchorEl:L,keepMounted:!0,open:Boolean(L),onClose:I,color:"primary",children:[Object(p.jsx)(k.a,{onClick:function(){return S()},children:"Background"}),Object(p.jsx)(k.a,{onClick:function(){I(),y()},children:"New Game"}),Object(p.jsx)(k.a,{onClick:function(){I(),H()},children:"Save Game"}),Object(p.jsx)(k.a,{onClick:function(){I(),G()},children:"High-score"}),Object(p.jsx)(k.a,{onClick:function(){I(),B()},children:"Settings"})]})]})]}),Object(p.jsx)("div",{className:"winner",children:!g&&(a?"player"===a?"WIN!!!!":"LOSE":"DRAW")})]}),Object(p.jsx)("div",{className:"mode-title",children:h?"Accumulation":"Confrontation"}),Object(p.jsxs)("div",{className:"game-view",children:[U(s,"Human",d),Object(p.jsxs)("div",{className:"score",children:[Object(p.jsx)("div",{className:"score-title",children:"Health"}),Object(p.jsx)("div",{className:"score-value",children:c}),!h||Object(p.jsxs)("div",{className:"reset-draw-container",children:[Object(p.jsx)(w.a,{className:"reset-draw-button",onClick:function(){return f()},children:"absorb"}),Object(p.jsxs)(w.a,{className:"reset-draw-button",onClick:function(){return j()},children:["Reset acc ",d]}),Object(p.jsxs)(w.a,{className:"reset-draw-button",onClick:function(){return b()},children:["BONUS ",m]})]})]}),U(t,"browser",u)]}),Object(p.jsx)("div",{className:"choices",children:o.map((function(e,t){return Object(p.jsx)(w.a,{className:"choice-button",size:"large",onClick:function(){return l(e)},children:e},t)}))})]})},G=s(121),B=s(62),D=s.n(B),z=(s(82),s.p+"static/media/rs_school_js.ad178c0d.svg"),R=function(){return Object(p.jsx)(G.a,{className:"github",href:"https://github.com/DmitryBogdan90",color:"inherit",children:Object(p.jsx)(D.a,{fontSize:"large"})})},T=function(){return Object(p.jsx)("div",{className:"year",children:"2021"})},E=function(){return Object(p.jsx)(G.a,{className:"logo-js",href:"https://rs.school/js/",color:"inherit",children:Object(p.jsx)("img",{className:"logo-js-image",src:z,alt:"",height:50})})},P=function(){return Object(p.jsxs)("footer",{children:[Object(p.jsx)(R,{}),Object(p.jsx)(T,{}),Object(p.jsx)(E,{})]})},L=(s(83),function e(t,s){Object(l.a)(this,e),this.x=Math.random()*t,this.y=Math.random()*s,this.z=t,this.size=.6,this.radius=1.2*Math.random(),this.speed=.2}),F=function(e){Object(u.a)(s,e);var t=Object(m.a)(s);function s(e){var i;return Object(l.a)(this,s),(i=t.call(this,e)).state={counter:0,canvas:{width:1280,height:720,centerX:640,centerY:360},stars:[]},i.tick=i.tick.bind(Object(d.a)(i)),i.animationID=null,i}return Object(h.a)(s,[{key:"componentDidMount",value:function(){this.paint(),this.setState({stars:this.generateStars()}),this.animationID=window.requestAnimationFrame(this.tick)}},{key:"componentDidUpdate",value:function(e,t,s){}},{key:"componentWillUnmount",value:function(){window.cancelAnimationFrame(this.animationID)}},{key:"generateStars",value:function(){for(var e=[],t=0;t<66;t++)e[t]=new L(this.state.canvas.width,this.state.canvas.height);return e}},{key:"paint",value:function(){if(this.props.isBackgroundOn){var e=this.state,t=e.canvas,s=t.width,i=t.height,a=t.centerX,c=t.centerY,n=e.stars,r=this.refs.canvas.getContext("2d");r.fillStyle="black",r.fillRect(0,0,this.state.canvas.width,this.state.canvas.height);for(var o=0;o<n.length;o++)n[o].z=n[o].z-n[o].speed,n[o].z<=0&&(n[o].z=s),n[o].x=(n[o].x-a)*(s/n[o].z),n[o].x=n[o].x+a,n[o].y=(n[o].y-c)*(s/n[o].z),n[o].y=n[o].y+c,n[o].size=n[o].size*(s/n[o].z),(n[o].x<=0||n[o].x>s||n[o].y<=0||n[o].y>i)&&(n[o]=new L(s,i)),r.beginPath(),r.arc(n[o].x,n[o].y,n[o].size,0,360),r.fillStyle="white",r.fill()}else window.cancelAnimationFrame(this.animationID)}},{key:"tick",value:function(){var e=this;this.paint(),setTimeout((function(){e.animationID=window.requestAnimationFrame((function(){return e.tick()}))}),10)}},{key:"render",value:function(){var e=this.state.canvas,t=e.width,s=e.height;return Object(p.jsx)("canvas",{className:"background",ref:"canvas",width:t,height:s})}}]),s}(i.Component),I=s.p+"static/media/modal.28183fa1.ogg",U=s.p+"static/media/theme.1c62de80.ogg",J=s.p+"static/media/win.5472aebc.ogg",W=s.p+"static/media/draw.629a4645.ogg",Y=s.p+"static/media/lose.5a7688cf.ogg",q=(s(84),function(e){var t=e.highScore;return Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{className:"highscore-row",children:[Object(p.jsx)("div",{className:"highscore-place highscore-item",children:"place"}),Object(p.jsx)("div",{className:"highscore-score highscore-item",children:"score"}),Object(p.jsx)("div",{className:"highscore-restore highscore-item",children:"restored"}),Object(p.jsx)("div",{className:"highscore-absorb highscore-item",children:"absorbed"}),Object(p.jsx)("div",{className:"highscore-chances highscore-item",children:"chances"})]}),t.map((function(e,t){var s=e.score,i=e.restoredHealth,a=e.round,c=e.absorbedDamage;return Object(p.jsxs)("div",{className:"highscore-row",children:[Object(p.jsx)("div",{className:"highscore-place highscore-item",children:t+1}),Object(p.jsx)("div",{className:"highscore-score highscore-item",children:s}),Object(p.jsx)("div",{className:"highscore-restore highscore-item",children:i}),Object(p.jsx)("div",{className:"highscore-absorb highscore-item",children:c}),Object(p.jsx)("div",{className:"highscore-chances highscore-item",children:a})]},t)}))]})}),X=function(e){var t=e.isMusicOn,s=e.playTheme,i=e.isLizardMode,a=e.isScoreMode,c=e.changeLizardMode,n=e.changeScoreMode,r=e.hardReset;return Object(p.jsxs)("div",{className:"settings-modal",children:[Object(p.jsx)("div",{className:"settings-title",children:"Settings"}),Object(p.jsxs)(w.a,{className:"settings-button",onClick:function(){return s()},children:["Music: ",t?"Pause":"Play"]}),Object(p.jsxs)(w.a,{disabled:!0,className:"settings-button",onClick:function(){return c()},children:["Rules: ",i?"Lizard":"Standart"]}),Object(p.jsxs)(w.a,{className:"settings-button",onClick:function(){return n()},children:["Mode: ",a?"Confrontation":"Accumulation"]}),Object(p.jsx)(w.a,{className:"settings-button",onClick:function(){return r()},children:"Hardreset"})]})},_=function(e){Object(u.a)(s,e);var t=Object(m.a)(s);function s(){var e;return Object(l.a)(this,s),(e=t.call(this)).state={isFirstRound:!0,isBackgroundOn:!1,isMusicOn:!1,isSettingsOn:!1,isHighScoreOn:!1,isLizardMode:!1,isScoreMode:!1,isDead:!1,choices:["rock","scissors","paper"],browserChoice:null,playerChoice:null,winner:null,score:5,round:0,playerAccumulator:0,browserAccumulator:10,iterationAccumulator:0,drawAccumulator:0,restoredHealth:0,absorbedDamage:0,deathCount:0,killsCount:0,newGameCount:0,hardResetCount:0,highScore:[]},e.changeBackgroundOn=e.changeBackgroundOn.bind(Object(d.a)(e)),e.closeHighScore=e.closeHighScore.bind(Object(d.a)(e)),e.closeSettings=e.closeSettings.bind(Object(d.a)(e)),e.viewHighScore=e.viewHighScore.bind(Object(d.a)(e)),e.viewSettings=e.viewSettings.bind(Object(d.a)(e)),e.playAudioEffect=e.playAudioEffect.bind(Object(d.a)(e)),e.newGame=e.newGame.bind(Object(d.a)(e)),e.saveGame=e.saveGame.bind(Object(d.a)(e)),e.handleClick=e.handleClick.bind(Object(d.a)(e)),e.playTheme=e.playTheme.bind(Object(d.a)(e)),e.stopTheme=e.stopTheme.bind(Object(d.a)(e)),e.changeLizardMode=e.changeLizardMode.bind(Object(d.a)(e)),e.changeScoreMode=e.changeScoreMode.bind(Object(d.a)(e)),e.resetDrawAccumulator=e.resetDrawAccumulator.bind(Object(d.a)(e)),e.resetPlayerAccumulator=e.resetPlayerAccumulator.bind(Object(d.a)(e)),e.absorbBrowserScore=e.absorbBrowserScore.bind(Object(d.a)(e)),e.hardReset=e.hardReset.bind(Object(d.a)(e)),e}return Object(h.a)(s,[{key:"componentDidMount",value:function(){var e=this;if(f.a.bind(["1","2","3"],(function(t){return e.handleClick(e.state.choices[t.key-1])})),f.a.bind(["shift+n"],(function(){return e.newGame()})),f.a.bind(["shift+h"],(function(){return e.viewHighScore()})),f.a.bind(["shift+s"],(function(){return e.viewSettings()})),f.a.bind(["shift+m"],(function(){return e.changeScoreMode()})),localStorage.getItem("choices-game")){var t=JSON.parse(localStorage.getItem("choices-game")),s=t.newGameCount,i=t.hardResetCount,a=10+(+s+1)+10*+t.deathCount+20*i;this.setState(Object(o.a)(Object(o.a)({},t),{},{browserHealth:a,isMusicOn:!1}))}this.state.score<=0&&this.state.isFirstRound?(console.log("human must die"),this.killHuman("human die")):this.state.browserAccumulator<=0&&this.state.isFirstRound&&(console.log("browser cant die"),this.killHuman("human die")),this.stopTheme(),this.setState({audioModal:new Audio(I),audioTheme:new Audio(U),browserHealth:+this.state.newGameCount+10+10*+this.state.deathCount+20*+this.state.hardResetCount})}},{key:"componentWillUnmount",value:function(){var e=this;f.a.unbind(["1","2","3"],(function(t){return e.handleClick(e.state.choices[t.key-1])})),f.a.unbind(["shift+n"],(function(){return e.newGame()})),f.a.unbind(["shift+h"],(function(){return e.viewHighScore()})),f.a.unbind(["shift+s"],(function(){return e.viewSettings()})),f.a.unbind(["shift+m"],(function(){return e.changeScoreMode()}))}},{key:"componentDidUpdate",value:function(){localStorage.setItem("choices-game",JSON.stringify(this.state)),this.state.score<=0&&this.state.isFirstRound&&this.killHuman()}},{key:"handleClick",value:function(e){var t=this.state,s=t.score,i=t.round,a=t.choices,c=t.isScoreMode,n=t.playerAccumulator,o=t.browserAccumulator,l=t.iterationAccumulator,h=t.drawAccumulator,d=a[Math.floor(3*Math.random())],u=e,m=function(e,t,s){var i,a=Object(r.a)(s,3),c=a[0],n=a[1],o=a[2];switch(t){case c:i=e===n?"player":e===c?null:"browser";break;case n:i=e===o?"player":e===n?null:"browser";break;case o:i=e===c?"player":e===o?null:"browser";break;default:console.log("default")}return i}(d,u,a);this.playAudioEffect("player"===m?J:null===m?W:Y),c?this.setState({isFirstRound:!1,browserChoice:d,playerChoice:u,winner:m,browserAccumulator:"browser"===m?+o+1:o,playerAccumulator:"player"===m?+n+1:n,drawAccumulator:null===m?+h+1:h,iterationAccumulator:+l+1,round:+i+1}):this.setState({isFirstRound:!1,browserChoice:d,playerChoice:u,winner:m,score:"player"===m?+s+1:null===m?s:+s-1,round:+i+1,drawAccumulator:null===m?h+1:h})}},{key:"newGame",value:function(){var e=this.state,t=e.newGameCount,s=e.hardResetCount,i=10+(+t+1)+10*+e.deathCount+20*(s+1);this.setState({newGameCount:+t+1,isFirstRound:!0,isBackgroundOn:!1,isMusicOn:!1,isSettingsOn:!1,isHighScoreOn:!1,isLizardMode:!1,isDead:!1,choices:["rock","scissors","paper"],browserChoice:null,playerChoice:null,winner:null,score:5,round:0,playerAccumulator:0,browserAccumulator:i,iterationAccumulator:0,drawAccumulator:0,restoredHealth:0,absorbedDamage:0}),this.playAudioEffect(I)}},{key:"saveGame",value:function(){var e=this.state,t=e.score,s=e.restoredHealth,i=e.round,a=e.absorbedDamage,c=e.highScore.splice(-20);this.setState({highScore:[].concat(Object(n.a)(c),[{id:Date.now(),score:t,restoredHealth:s,round:i,absorbedDamage:a}]).sort((function(e,t){return e.score<t.score?1:-1}))}),this.playAudioEffect(I),localStorage.setItem("choices-game",JSON.stringify(this.state))}},{key:"viewHighScore",value:function(){this.state.isHighScoreOn?this.setState({isHighScoreOn:!this.state.isHighScoreOn}):(this.state.isSettingsOn&&this.setState({isSettingsOn:!this.state.isSettingsOn}),this.playAudioEffect(I),this.setState({isHighScoreOn:!0}))}},{key:"closeHighScore",value:function(){this.setState({isHighScoreOn:!1})}},{key:"viewSettings",value:function(){this.state.isHighScoreOn&&this.setState({isHighScoreOn:!this.state.isHighScoreOn}),this.playAudioEffect(I),this.setState({isSettingsOn:!0})}},{key:"closeSettings",value:function(){this.setState({isSettingsOn:!1})}},{key:"playAudioEffect",value:function(e){this.audioEffect&&(this.audioEffect=null),this.audioEffect=new Audio(e),this.audioEffect.play()}},{key:"playTheme",value:function(){this.state.isMusicOn?(this.state.audioTheme.pause(),this.setState({isMusicOn:!1})):(this.setState({isMusicOn:!0}),this.state.audioTheme.play())}},{key:"stopTheme",value:function(){this.setState({isThemePlay:!1,audioTheme:null})}},{key:"changeBackgroundOn",value:function(){this.setState({isBackgroundOn:!this.state.isBackgroundOn})}},{key:"changeLizardMode",value:function(){this.setState({isLizardMode:!this.state.isLizardMode})}},{key:"changeScoreMode",value:function(){this.setState({isScoreMode:!this.state.isScoreMode})}},{key:"resetDrawAccumulator",value:function(){var e=this.state,t=e.score,s=e.drawAccumulator,i=e.restoredHealth;this.setState({score:+t+ +s,restoredHealth:+i+ +s,drawAccumulator:0}),this.playAudioEffect(I)}},{key:"resetPlayerAccumulator",value:function(){var e=this.state,t=e.score,s=e.playerAccumulator,i=e.restoredHealth;this.setState({score:+t+ +s,restoredHealth:+i+ +s,playerAccumulator:0}),this.playAudioEffect(I)}},{key:"absorbBrowserScore",value:function(){var e=this.state,t=e.score,s=e.browserAccumulator,i=e.absorbedDamage;+t-+s>0?(this.setState({score:+t-+s,browserAccumulator:0,absorbedDamage:+i+ +s}),this.playAudioEffect(I)):this.killHuman()}},{key:"killHuman",value:function(){var e=this.state.deathCount;this.setState({isDead:!0,deathCount:+e+1})}},{key:"hardReset",value:function(){var e=this.state,t=e.hardResetCount,s=e.newGameCount;this.setState({hardResetCount:+t+1,isScoreMode:!1,newGameCount:s>0?s-1:s}),this.newGame()}},{key:"render",value:function(){var e=this.state,t=e.isBackgroundOn,s=e.choices,i=e.browserChoice,a=e.playerChoice,c=e.winner,n=e.score,r=e.round,o=e.isHighScoreOn,l=e.isSettingsOn,h=e.isMusicOn,d=e.isLizardMode,u=e.isScoreMode,m=e.playerAccumulator,v=e.browserAccumulator,f=e.iterationAccumulator,w=e.drawAccumulator,x=e.restoredHealth,k=e.absorbedDamage,y=e.isDead,C=e.deathCount,N=e.newGameCount,A=e.hardResetCount,M=e.highScore;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(b.a,{in:t,children:Object(p.jsx)(j.a,{className:"background",elevation:4,children:Object(p.jsx)(F,{isBackgroundOn:t})})}),Object(p.jsx)(S,{changeBackgroundOn:this.changeBackgroundOn,newGame:this.newGame,saveGame:this.saveGame,viewHighScore:this.viewHighScore,viewSettings:this.viewSettings,deathCount:C,newGameCount:N,hardResetCount:A,choices:s,handleClick:this.handleClick}),Object(p.jsx)(H,{browserChoice:i,playerChoice:a,winner:c,score:n,round:r,choices:s,handleClick:this.handleClick,isScoreMode:u,playerAccumulator:m,browserAccumulator:v,iterationAccumulator:f,drawAccumulator:w,resetDrawAccumulator:this.resetDrawAccumulator,resetPlayerAccumulator:this.resetPlayerAccumulator,restoredHealth:x,absorbedDamage:k,absorbBrowserScore:this.absorbBrowserScore,changeBackgroundOn:this.changeBackgroundOn,newGame:this.newGame,saveGame:this.saveGame,viewHighScore:this.viewHighScore,viewSettings:this.viewSettings}),Object(p.jsx)(b.a,{in:!t,children:Object(p.jsx)(j.a,{className:"footer",elevation:4,children:Object(p.jsx)(P,{})})}),Object(p.jsx)("div",{className:"score-mode",children:Object(p.jsx)("div",{className:"big-score-mode-title",children:u?"Accumulation":"Confrontation"})}),Object(p.jsx)(g.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:"modal",open:o,onClose:this.closeHighScore,closeAfterTransition:!0,BackdropComponent:O.a,BackdropProps:{timeout:500},children:Object(p.jsx)(b.a,{in:o,children:Object(p.jsx)("div",{className:"paper high-score-table",children:Object(p.jsx)(q,{highScore:M})})})}),Object(p.jsx)(g.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:"modal",open:l,onClose:this.closeSettings,closeAfterTransition:!0,BackdropComponent:O.a,BackdropProps:{timeout:500},children:Object(p.jsx)(b.a,{in:l,children:Object(p.jsx)("div",{className:"paper",children:Object(p.jsx)(X,{isMusicOn:h,playTheme:this.playTheme,isLizardMode:d,isScoreMode:u,changeLizardMode:this.changeLizardMode,changeScoreMode:this.changeScoreMode,hardReset:this.hardReset})})})}),Object(p.jsx)(g.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:"modal",open:y,onClose:this.newGame,closeAfterTransition:!0,BackdropComponent:O.a,BackdropProps:{timeout:500},children:Object(p.jsx)(b.a,{in:y,children:Object(p.jsx)("div",{className:"end-game",children:"YOU DIE"})})})]})}}]),s}(i.Component);c.a.render(Object(p.jsx)(_,{}),document.getElementById("root"))}},[[85,1,2]]]);
//# sourceMappingURL=main.1ac3e7c3.chunk.js.map