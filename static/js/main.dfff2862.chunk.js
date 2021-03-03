(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{55:function(e,t,i){},56:function(e,t,i){},57:function(e,t,i){},63:function(e,t,i){},64:function(e,t,i){},65:function(e,t,i){},70:function(e,t,i){},71:function(e,t,i){"use strict";i.r(t);var n=i(0),a=i(7),s=i.n(a),c=(i(55),i(19)),o=i(22),r=i(14),h=i(24),l=i(23),u=(i(56),i(95)),d=(i(57),i(2)),f=function(e){var t=e.changeBackgroundOn;return Object(d.jsxs)("header",{children:[Object(d.jsx)("h2",{children:"Header"}),Object(d.jsx)(u.a,{onClick:function(){return t()},children:"Background"})]})},g=i(46),j=i(15),m=i.n(j),b=i(94),p=i(93),v=i(73),O=(i(63),i.p+"static/media/draw.629a4645.ogg"),k=i.p+"static/media/win.5472aebc.ogg",y=i.p+"static/media/lose.5a7688cf.ogg",w=i.p+"static/media/modal.28183fa1.ogg",S=i.p+"static/media/theme.1c62de80.ogg",x=(i(64),["Rock","Scissors","Paper"]),C=function(e){Object(h.a)(i,e);var t=Object(l.a)(i);function i(e){var n;return Object(c.a)(this,i),(n=t.call(this,e)).state={browserChoice:"",playerChoice:"",winner:"",score:0,round:0,isThemePlay:!0,isSettingsView:!1,isHighScoreView:!1},n.closeHighScore=n.closeHighScore.bind(Object(r.a)(n)),n.closeSettings=n.closeSettings.bind(Object(r.a)(n)),n}return Object(o.a)(i,[{key:"componentDidMount",value:function(){var e=this;if(localStorage.getItem("choices-game")){var t=JSON.parse(localStorage.getItem("choices-game"));this.setState(Object(g.a)({},t))}m.a.bind(["1","2","3"],(function(t){return e.handleClick(x[t.key-1])})),m.a.bind(["shift+n"],(function(){return e.newGame()})),m.a.bind(["shift+h"],(function(){return e.viewHighScore()})),m.a.bind(["shift+s"],(function(){return e.viewSettings()})),this.setState({audioModal:new Audio(w)}),this.stopTheme(),this.setState({audioTheme:new Audio(S)})}},{key:"componentWillUnmount",value:function(){var e=this;m.a.unbind(["1","2","3"],(function(t){return e.handleClick(x[t.key-1])})),m.a.unbind(["shift+n"],(function(){return e.newGame()})),m.a.unbind(["shift+h"],(function(){return e.viewHighScore()})),m.a.unbind(["shift+s"],(function(){return e.viewSettings()})),this.stopTheme()}},{key:"componentDidUpdate",value:function(){localStorage.setItem("choices-game",JSON.stringify(this.state))}},{key:"getWinner",value:function(e,t){var i,n=x[0],a=x[1],s=x[2];switch(t){case n:i=e===a?"player":e===n?"none":"browser";break;case a:i=e===s?"player":e===a?"none":"browser";break;case s:i=e===n?"player":e===s?"none":"browser";break;default:console.log("default")}return i}},{key:"getBrowserChoice",value:function(){return x[Math.floor(3*Math.random())]}},{key:"handleClick",value:function(e){console.log("CLICK CHOICE");var t=this.getBrowserChoice(),i=e,n=this.getWinner(t,i);this.playAudioEffect("player"===n?k:"none"===n?O:y),this.setState({browserChoice:t,playerChoice:i,winner:n,score:"player"===n?this.state.score+1:"none"===n?this.state.score:this.state.score-1,round:this.state.round+1})}},{key:"newGame",value:function(){console.log("click new game"),this.setState({browserChoice:"",playerChoice:"",winner:"",score:0,round:0}),this.playAudioEffect(w)}},{key:"saveGame",value:function(){console.log("click save game"),this.playAudioEffect(w),localStorage.setItem("choices-game",JSON.stringify(this.state))}},{key:"viewHighScore",value:function(){console.log("click viewHighScore"),this.playAudioEffect(w),this.setState({isHighScoreView:!0})}},{key:"closeHighScore",value:function(){this.setState({isHighScoreView:!1})}},{key:"viewSettings",value:function(){console.log("click viewSettings"),this.playAudioEffect(w),this.setState({isSettingsView:!0})}},{key:"closeSettings",value:function(){this.setState({isSettingsView:!1})}},{key:"playAudioEffect",value:function(e){this.audioEffect&&this.audioEffect.pause(),this.audioEffect=new Audio(e),this.audioEffect.play()}},{key:"playTheme",value:function(){this.state.isThemePlay?(this.state.audioTheme.pause(),this.setState({isThemePlay:!1})):(this.setState({isThemePlay:!0}),this.state.audioTheme.play())}},{key:"stopTheme",value:function(){this.setState({isThemePlay:!1,audioTheme:null})}},{key:"render",value:function(){var e=this;console.log("render",this.state);var t=this.state,i=t.browserChoice,n=t.playerChoice,a=t.winner,s=t.score,c=t.round,o=t.isThemePlay,r=t.isHighScoreView,h=t.isSettingsView;return Object(d.jsxs)("main",{children:[Object(d.jsxs)(u.a,{onClick:function(){return e.playTheme()},children:["Music: ",o?"Play":"Pause"]}),Object(d.jsx)(u.a,{onClick:function(){return e.newGame()},children:"New Game"}),Object(d.jsx)(u.a,{onClick:function(){return e.saveGame()},children:"Save Game"}),Object(d.jsx)(u.a,{onClick:function(){return e.viewHighScore()},children:"High-score"}),Object(d.jsx)(u.a,{onClick:function(){return e.viewSettings()},children:"Settings"}),Object(d.jsxs)("div",{children:["Round: ",c]}),Object(d.jsxs)("div",{children:["Score: ",s]}),Object(d.jsxs)("div",{children:["WINNER: ",a]}),Object(d.jsxs)("div",{children:["Browser choice: ",i]}),Object(d.jsxs)("div",{children:["Player choice: ",n]}),x.map((function(t,i){return Object(d.jsx)(u.a,{onClick:function(){return e.handleClick(t)},children:t},i)})),Object(d.jsxs)("div",{className:"help",children:["hotkeys:"," ",Object(d.jsx)("ul",{children:x.map((function(e,t){return Object(d.jsxs)("li",{children:["Press ",t+1," to choose ",e]},t)}))})]}),Object(d.jsx)(b.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:"modal",open:r,onClose:this.closeHighScore,closeAfterTransition:!0,BackdropComponent:p.a,BackdropProps:{timeout:500},children:Object(d.jsx)(v.a,{in:r,children:Object(d.jsxs)("div",{className:"paper",children:[Object(d.jsx)("h2",{id:"transition-modal-title",children:"isHighScoreView"}),Object(d.jsx)("p",{id:"transition-modal-description",children:"react-transition-group animates me."})]})})}),Object(d.jsx)(b.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:"modal",open:h,onClose:this.closeSettings,closeAfterTransition:!0,BackdropComponent:p.a,BackdropProps:{timeout:500},children:Object(d.jsx)(v.a,{in:h,children:Object(d.jsxs)("div",{className:"paper",children:[Object(d.jsx)("h2",{id:"transition-modal-title",children:"isSettingsView"}),Object(d.jsx)("p",{id:"transition-modal-description",children:"react-transition-group animates me."})]})})})]})}}]),i}(n.Component),B=i(97),T=i(45),H=i.n(T),A=(i(65),i.p+"static/media/rs_school_js.ad178c0d.svg"),P=function(){return Object(d.jsx)(B.a,{href:"https://github.com/DmitryBogdan90",color:"inherit",children:Object(d.jsx)(H.a,{fontSize:"large"})})},z=function(){return Object(d.jsx)("div",{children:"2021"})},E=function(){return Object(d.jsx)(B.a,{href:"https://rs.school/js/",color:"inherit",children:Object(d.jsx)("img",{src:A,alt:"",height:50})})},I=function(){return Object(d.jsxs)("footer",{children:[Object(d.jsx)(P,{}),Object(d.jsx)(z,{}),Object(d.jsx)(E,{})]})},N=(i(70),function e(t,i){Object(c.a)(this,e),this.x=Math.random()*t,this.y=Math.random()*i,this.z=t,this.size=.6,this.radius=1.2*Math.random(),this.speed=.2}),D=function(e){Object(h.a)(i,e);var t=Object(l.a)(i);function i(e){var n;return Object(c.a)(this,i),(n=t.call(this,e)).state={counter:0,canvas:{width:1280,height:720,centerX:640,centerY:360},stars:[]},n.tick=n.tick.bind(Object(r.a)(n)),n.animationID=null,n}return Object(o.a)(i,[{key:"componentDidMount",value:function(){this.paint(),this.setState({stars:this.generateStars()}),this.animationID=window.requestAnimationFrame(this.tick)}},{key:"componentDidUpdate",value:function(e,t,i){}},{key:"componentWillUnmount",value:function(){window.cancelAnimationFrame(this.animationID)}},{key:"generateStars",value:function(){for(var e=[],t=0;t<66;t++)e[t]=new N(this.state.canvas.width,this.state.canvas.height);return e}},{key:"paint",value:function(){if(this.props.isBackgroundOn){var e=this.state,t=e.canvas,i=t.width,n=t.height,a=t.centerX,s=t.centerY,c=e.stars,o=this.refs.canvas.getContext("2d");o.fillStyle="black",o.fillRect(0,0,this.state.canvas.width,this.state.canvas.height);for(var r=0;r<c.length;r++)c[r].z=c[r].z-c[r].speed,c[r].z<=0&&(c[r].z=i),c[r].x=(c[r].x-a)*(i/c[r].z),c[r].x=c[r].x+a,c[r].y=(c[r].y-s)*(i/c[r].z),c[r].y=c[r].y+s,c[r].size=c[r].size*(i/c[r].z),(c[r].x<=0||c[r].x>i||c[r].y<=0||c[r].y>n)&&(c[r]=new N(i,n)),o.beginPath(),o.arc(c[r].x,c[r].y,c[r].size,0,360),o.fillStyle="white",o.fill()}else window.cancelAnimationFrame(this.animationID)}},{key:"tick",value:function(){var e=this;this.paint(),setTimeout((function(){e.animationID=window.requestAnimationFrame((function(){return e.tick()}))}),10)}},{key:"render",value:function(){var e=this.state.canvas,t=e.width,i=e.height;return Object(d.jsx)("canvas",{className:"background",ref:"canvas",width:t,height:i})}}]),i}(n.Component),V=function(e){Object(h.a)(i,e);var t=Object(l.a)(i);function i(){var e;return Object(c.a)(this,i),(e=t.call(this)).state={isBackgroundOn:!1},e.changeBackgroundOn=e.changeBackgroundOn.bind(Object(r.a)(e)),e}return Object(o.a)(i,[{key:"changeBackgroundOn",value:function(){console.log("click"),this.setState({isBackgroundOn:!this.state.isBackgroundOn})}},{key:"render",value:function(){var e=this.state.isBackgroundOn;return console.log("render App"),Object(d.jsxs)(d.Fragment,{children:[e?Object(d.jsx)(D,{isBackgroundOn:e}):null,Object(d.jsx)(f,{changeBackgroundOn:this.changeBackgroundOn}),Object(d.jsx)(C,{}),Object(d.jsx)(I,{})]})}}]),i}(n.Component);s.a.render(Object(d.jsx)(V,{}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.dfff2862.chunk.js.map