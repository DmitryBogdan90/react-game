(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{55:function(e,t,i){},56:function(e,t,i){},57:function(e,t,i){},63:function(e,t,i){},64:function(e,t,i){},69:function(e,t,i){},70:function(e,t,i){"use strict";i.r(t);var a=i(0),c=i(8),s=i.n(c),n=(i(55),i(47)),r=i(39),o=i(25),l=i(31),u=i(6),h=i(36),d=i(35),m=i(72),b=i(91),j=i(93),g=i(92),O=i(15),f=i.n(O),p=(i(56),i(94)),v=(i(57),i(2)),w=function(e){var t=e.changeBackgroundOn,i=e.newGame,a=e.saveGame,c=e.viewHighScore,s=e.viewSettings;return Object(v.jsxs)("header",{children:[Object(v.jsx)(p.a,{onClick:function(){return t()},children:"Background"}),Object(v.jsxs)("menu",{children:[Object(v.jsx)(p.a,{onClick:function(){return i()},children:"New Game"}),Object(v.jsx)(p.a,{onClick:function(){return a()},children:"Save Game"}),Object(v.jsx)(p.a,{onClick:function(){return c()},children:"High-score"}),Object(v.jsx)(p.a,{onClick:function(){return s()},children:"Settings"})]})]})},y=(i(63),i.p+"static/media/paper.8b57a6b1.svg"),S=i.p+"static/media/scissors.3b1a5d7e.svg",k=i.p+"static/media/rock.476e90a9.svg",x=function(e){var t=e.browserChoice,i=e.playerChoice,a=e.winner,c=e.score,s=e.round,n=e.choices,r=e.handleClick,o=e.isScoreMode,l=e.playerAccumulator,u=e.browserAccumulator,h=e.drawAccumulator,d=e.resetDrawAccumulator,m=e.resetPlayerAccumulator,b=e.isFirstRound,j=e.restoredHealth,g=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e3;return Object(v.jsxs)("div",{className:"choice-card",children:[Object(v.jsx)("div",{className:"title-choice",children:t}),Object(v.jsxs)("div",{className:"image-choice-container",children:[e&&Object(v.jsx)("img",{className:"image-choice",src:"paper"===e?y:"rock"===i?k:S,alt:""}),!o||Object(v.jsx)("div",{className:"player"===t?"player-points":"browser-points",children:a})]})]})};return Object(v.jsxs)("main",{children:[Object(v.jsxs)("div",{className:"game-info",children:[Object(v.jsx)("div",{className:"help",children:n.map((function(e,t){return Object(v.jsxs)("div",{children:["Press ",t+1," to choose ",e]},t)}))}),Object(v.jsx)("div",{className:"round ".concat("player"===a?"win":"browser"===a?"lose":"draw"),id:new Date,children:o?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("span",{children:"Restored"}),Object(v.jsx)("span",{children:j})]}):Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("span",{children:"Chances"}),Object(v.jsx)("span",{children:s})]})}),Object(v.jsx)("div",{className:"winner",children:b||(a?"player"===a?"WIN!!!!":"LOSE":"DRAW")})]}),Object(v.jsx)("div",{className:"mode-title",children:o?"Accumulation":"Confrontation"}),Object(v.jsxs)("div",{className:"game-view",children:[g(i,"player",l),Object(v.jsxs)("div",{className:"score",children:[Object(v.jsx)("div",{className:"score-title",children:"Score"}),Object(v.jsx)("div",{className:"score-value",children:c}),!o||Object(v.jsxs)("div",{className:"reset-draw-container",children:[Object(v.jsxs)(p.a,{className:"reset-draw-button",onClick:function(){return m()},children:["Reset acc ",l]}),Object(v.jsxs)(p.a,{className:"reset-draw-button",onClick:function(){return d()},children:["BONUS ",h]})]})]}),g(t,"browser",u)]}),Object(v.jsx)("div",{className:"choices",children:n.map((function(e,t){return Object(v.jsx)(p.a,{className:"choice-button",size:"large",onClick:function(){return r(e)},children:e},t)}))})]})},A=i(95),M=i(46),C=i.n(M),N=(i(64),i.p+"static/media/rs_school_js.ad178c0d.svg"),z=function(){return Object(v.jsx)(A.a,{className:"github",href:"https://github.com/DmitryBogdan90",color:"inherit",children:Object(v.jsx)(C.a,{fontSize:"large"})})},H=function(){return Object(v.jsx)("div",{className:"year",children:"2021"})},B=function(){return Object(v.jsx)(A.a,{className:"logo-js",href:"https://rs.school/js/",color:"inherit",children:Object(v.jsx)("img",{className:"logo-js-image",src:N,alt:"",height:50})})},D=function(){return Object(v.jsxs)("footer",{children:[Object(v.jsx)(z,{}),Object(v.jsx)(H,{}),Object(v.jsx)(B,{})]})},T=(i(69),function e(t,i){Object(o.a)(this,e),this.x=Math.random()*t,this.y=Math.random()*i,this.z=t,this.size=.6,this.radius=1.2*Math.random(),this.speed=.2}),G=function(e){Object(h.a)(i,e);var t=Object(d.a)(i);function i(e){var a;return Object(o.a)(this,i),(a=t.call(this,e)).state={counter:0,canvas:{width:1280,height:720,centerX:640,centerY:360},stars:[]},a.tick=a.tick.bind(Object(u.a)(a)),a.animationID=null,a}return Object(l.a)(i,[{key:"componentDidMount",value:function(){this.paint(),this.setState({stars:this.generateStars()}),this.animationID=window.requestAnimationFrame(this.tick)}},{key:"componentDidUpdate",value:function(e,t,i){}},{key:"componentWillUnmount",value:function(){window.cancelAnimationFrame(this.animationID)}},{key:"generateStars",value:function(){for(var e=[],t=0;t<66;t++)e[t]=new T(this.state.canvas.width,this.state.canvas.height);return e}},{key:"paint",value:function(){if(this.props.isBackgroundOn){var e=this.state,t=e.canvas,i=t.width,a=t.height,c=t.centerX,s=t.centerY,n=e.stars,r=this.refs.canvas.getContext("2d");r.fillStyle="black",r.fillRect(0,0,this.state.canvas.width,this.state.canvas.height);for(var o=0;o<n.length;o++)n[o].z=n[o].z-n[o].speed,n[o].z<=0&&(n[o].z=i),n[o].x=(n[o].x-c)*(i/n[o].z),n[o].x=n[o].x+c,n[o].y=(n[o].y-s)*(i/n[o].z),n[o].y=n[o].y+s,n[o].size=n[o].size*(i/n[o].z),(n[o].x<=0||n[o].x>i||n[o].y<=0||n[o].y>a)&&(n[o]=new T(i,a)),r.beginPath(),r.arc(n[o].x,n[o].y,n[o].size,0,360),r.fillStyle="white",r.fill()}else window.cancelAnimationFrame(this.animationID)}},{key:"tick",value:function(){var e=this;this.paint(),setTimeout((function(){e.animationID=window.requestAnimationFrame((function(){return e.tick()}))}),10)}},{key:"render",value:function(){var e=this.state.canvas,t=e.width,i=e.height;return Object(v.jsx)("canvas",{className:"background",ref:"canvas",width:t,height:i})}}]),i}(a.Component),L=i.p+"static/media/modal.28183fa1.ogg",E=i.p+"static/media/theme.1c62de80.ogg",P=i.p+"static/media/win.5472aebc.ogg",F=i.p+"static/media/draw.629a4645.ogg",I=i.p+"static/media/lose.5a7688cf.ogg",R=function(){return Object(v.jsx)("div",{children:"Highscore"})},J=function(e){var t=e.isMusicOn,i=e.playTheme,a=e.isLizardMode,c=e.isScoreMode,s=e.changeLizardMode,n=e.changeScoreMode;return Object(v.jsxs)("div",{className:"settings-modal",children:[Object(v.jsx)("div",{className:"settings-title",children:"Settings"}),Object(v.jsxs)(p.a,{className:"settings-button",onClick:function(){return i()},children:["Music: ",t?"Pause":"Play"]}),Object(v.jsxs)(p.a,{disabled:!0,className:"settings-button",onClick:function(){return s()},children:["Rules: ",a?"Lizard":"Standart"]}),Object(v.jsxs)(p.a,{className:"settings-button",onClick:function(){return n()},children:["Mode: ",c?"Confrontation":"Accumulation"]})]})},U=function(e){Object(h.a)(i,e);var t=Object(d.a)(i);function i(){var e;return Object(o.a)(this,i),(e=t.call(this)).state={isFirstRound:!0,isBackgroundOn:!1,isMusicOn:!1,isSettingsOn:!1,isHighScoreOn:!1,isLizardMode:!1,isScoreMode:!1,choices:["rock","scissors","paper"],browserChoice:null,playerChoice:null,winner:null,score:0,round:0,playerAccumulator:0,browserAccumulator:0,iterationAccumulator:0,drawAccumulator:0,restoredHealth:0},e.changeBackgroundOn=e.changeBackgroundOn.bind(Object(u.a)(e)),e.closeHighScore=e.closeHighScore.bind(Object(u.a)(e)),e.closeSettings=e.closeSettings.bind(Object(u.a)(e)),e.viewHighScore=e.viewHighScore.bind(Object(u.a)(e)),e.viewSettings=e.viewSettings.bind(Object(u.a)(e)),e.newGame=e.newGame.bind(Object(u.a)(e)),e.saveGame=e.saveGame.bind(Object(u.a)(e)),e.handleClick=e.handleClick.bind(Object(u.a)(e)),e.playTheme=e.playTheme.bind(Object(u.a)(e)),e.stopTheme=e.stopTheme.bind(Object(u.a)(e)),e.changeLizardMode=e.changeLizardMode.bind(Object(u.a)(e)),e.changeScoreMode=e.changeScoreMode.bind(Object(u.a)(e)),e.resetDrawAccumulator=e.resetDrawAccumulator.bind(Object(u.a)(e)),e.resetPlayerAccumulator=e.resetPlayerAccumulator.bind(Object(u.a)(e)),e}return Object(l.a)(i,[{key:"componentDidMount",value:function(){var e=this;if(f.a.bind(["1","2","3"],(function(t){return e.handleClick(e.state.choices[t.key-1])})),f.a.bind(["shift+n"],(function(){return e.newGame()})),f.a.bind(["shift+h"],(function(){return e.viewHighScore()})),f.a.bind(["shift+s"],(function(){return e.viewSettings()})),localStorage.getItem("choices-game")){var t=JSON.parse(localStorage.getItem("choices-game"));this.setState(Object(r.a)(Object(r.a)({},t),{},{isMusicOn:!1}))}this.stopTheme(),this.setState({audioModal:new Audio(L),audioTheme:new Audio(E)})}},{key:"componentWillUnmount",value:function(){var e=this;f.a.unbind(["1","2","3"],(function(t){return e.handleClick(e.state.choices[t.key-1])})),f.a.unbind(["shift+n"],(function(){return e.newGame()})),f.a.unbind(["shift+h"],(function(){return e.viewHighScore()})),f.a.unbind(["shift+s"],(function(){return e.viewSettings()}))}},{key:"componentDidUpdate",value:function(){localStorage.setItem("choices-game",JSON.stringify(this.state))}},{key:"handleClick",value:function(e){var t=this.state,i=t.score,a=t.round,c=t.choices,s=t.isScoreMode,r=t.playerAccumulator,o=t.browserAccumulator,l=t.iterationAccumulator,u=t.drawAccumulator,h=c[Math.floor(3*Math.random())],d=e,m=function(e,t,i){var a,c=Object(n.a)(i,3),s=c[0],r=c[1],o=c[2];switch(t){case s:a=e===r?"player":e===s?null:"browser";break;case r:a=e===o?"player":e===r?null:"browser";break;case o:a=e===s?"player":e===o?null:"browser";break;default:console.log("default")}return a}(h,d,c);this.playAudioEffect("player"===m?P:null===m?F:I),s?this.setState({isFirstRound:!1,browserChoice:h,playerChoice:d,winner:m,browserAccumulator:"browser"===m?+o+1:o,playerAccumulator:"player"===m?+r+1:r,drawAccumulator:null===m?+u+1:u,iterationAccumulator:+l+1}):this.setState({isFirstRound:!1,browserChoice:h,playerChoice:d,winner:m,score:"player"===m?+i+1:null===m?i:+i-1,round:+a+1,drawAccumulator:null===m?u+1:u})}},{key:"newGame",value:function(){this.setState({isFirstRound:!0,isBackgroundOn:!1,isMusicOn:!1,isSettingsOn:!1,isHighScoreOn:!1,isLizardMode:!1,isScoreMode:!1,choices:["rock","scissors","paper"],browserChoice:null,playerChoice:null,winner:null,score:0,round:0,playerAccumulator:0,browserAccumulator:0,iterationAccumulator:0,drawAccumulator:0}),this.playAudioEffect(L)}},{key:"saveGame",value:function(){this.playAudioEffect(L),localStorage.setItem("choices-game",JSON.stringify(this.state))}},{key:"viewHighScore",value:function(){this.state.isSettingsOn&&this.setState({isSettingsOn:!this.state.isSettingsOn}),this.playAudioEffect(L),this.setState({isHighScoreOn:!0})}},{key:"closeHighScore",value:function(){this.setState({isHighScoreOn:!1})}},{key:"viewSettings",value:function(){this.state.isHighScoreOn&&this.setState({isHighScoreOn:!this.state.isHighScoreOn}),this.playAudioEffect(L),this.setState({isSettingsOn:!0})}},{key:"closeSettings",value:function(){this.setState({isSettingsOn:!1})}},{key:"playAudioEffect",value:function(e){this.audioEffect&&this.audioEffect.pause(),this.audioEffect=new Audio(e),this.audioEffect.play()}},{key:"playTheme",value:function(){this.state.isMusicOn?(this.state.audioTheme.pause(),this.setState({isMusicOn:!1})):(this.setState({isMusicOn:!0}),this.state.audioTheme.play())}},{key:"stopTheme",value:function(){this.setState({isThemePlay:!1,audioTheme:null})}},{key:"changeBackgroundOn",value:function(){this.setState({isBackgroundOn:!this.state.isBackgroundOn})}},{key:"changeLizardMode",value:function(){this.setState({isLizardMode:!this.state.isLizardMode})}},{key:"changeScoreMode",value:function(){this.setState({isScoreMode:!this.state.isScoreMode})}},{key:"resetDrawAccumulator",value:function(){var e=this.state,t=e.score,i=e.drawAccumulator;this.setState({score:+t+ +i,drawAccumulator:0}),this.playAudioEffect(L)}},{key:"resetPlayerAccumulator",value:function(){var e=this.state,t=e.score,i=e.playerAccumulator;this.setState({score:+t+ +i,playerAccumulator:0}),this.playAudioEffect(L)}},{key:"render",value:function(){var e=this.state,t=e.isBackgroundOn,i=e.choices,a=e.browserChoice,c=e.playerChoice,s=e.winner,n=e.score,r=e.round,o=e.isHighScoreOn,l=e.isSettingsOn,u=e.isMusicOn,h=e.isLizardMode,d=e.isScoreMode,O=e.playerAccumulator,f=e.browserAccumulator,p=e.iterationAccumulator,y=e.drawAccumulator,S=e.restoredHealth;return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(m.a,{in:t,children:Object(v.jsx)(b.a,{className:"background",elevation:4,children:Object(v.jsx)(G,{isBackgroundOn:t})})}),Object(v.jsx)(w,{changeBackgroundOn:this.changeBackgroundOn,newGame:this.newGame,saveGame:this.saveGame,viewHighScore:this.viewHighScore,viewSettings:this.viewSettings}),Object(v.jsx)(x,{browserChoice:a,playerChoice:c,winner:s,score:n,round:r,choices:i,handleClick:this.handleClick,isScoreMode:d,playerAccumulator:O,browserAccumulator:f,iterationAccumulator:p,drawAccumulator:y,resetDrawAccumulator:this.resetDrawAccumulator,resetPlayerAccumulator:this.resetPlayerAccumulator,restoredHealth:S}),Object(v.jsx)(m.a,{in:!t,children:Object(v.jsx)(b.a,{className:"footer",elevation:4,children:Object(v.jsx)(D,{})})}),Object(v.jsx)("div",{className:"score-mode",children:Object(v.jsx)("div",{className:"big-score-mode-title",children:d?"Accumulation":"Confrontation"})}),Object(v.jsx)(j.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:"modal",open:o,onClose:this.closeHighScore,closeAfterTransition:!0,BackdropComponent:g.a,BackdropProps:{timeout:500},children:Object(v.jsx)(m.a,{in:o,children:Object(v.jsx)("div",{className:"paper",children:Object(v.jsx)(R,{})})})}),Object(v.jsx)(j.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:"modal",open:l,onClose:this.closeSettings,closeAfterTransition:!0,BackdropComponent:g.a,BackdropProps:{timeout:500},children:Object(v.jsx)(m.a,{in:l,children:Object(v.jsx)("div",{className:"paper",children:Object(v.jsx)(J,{isMusicOn:u,playTheme:this.playTheme,isLizardMode:h,isScoreMode:d,changeLizardMode:this.changeLizardMode,changeScoreMode:this.changeScoreMode})})})})]})}}]),i}(a.Component);s.a.render(Object(v.jsx)(U,{}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.34fb0f11.chunk.js.map