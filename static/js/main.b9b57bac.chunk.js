(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){e.exports=a(42)},22:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(14),l=a.n(c),o=a(2),s=a(3),u=a(5),i=a(4),m=a(6),h=(a(22),a(15)),p=a.n(h),f=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={searchText:""},a.onSearchChange=function(e){a.setState({searchText:e.target.value})},a.handleSubmit=function(e){e.preventDefault(),a.props.onSearch(a.query.value),e.currentTarget.reset()},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("form",{className:"search-form",onSubmit:this.handleSubmit},r.a.createElement("label",{className:"is-hidden",htmlFor:"search"},"Search"),r.a.createElement("input",{type:"search",onChange:this.onSearchChange,name:"search",ref:function(t){return e.query=t},placeholder:"Search..."}))}}]),t}(n.Component),E=function(e){return r.a.createElement("p",null,r.a.createElement("a",{href:e.url,target:"_BLANK",rel:"noopener noreferrer"},e.name),r.a.createElement("span",null,r.a.createElement("b",null,"Description:")," ",e.description)," ",r.a.createElement("br",null),r.a.createElement("span",null,r.a.createElement("b",null,"Open Issues:"),"  ",e.issueCount),r.a.createElement("br",null),r.a.createElement("span",null,r.a.createElement("b",null,"Forks:")," ",e.forksCount),r.a.createElement("br",null),r.a.createElement("span",null,r.a.createElement("b",null,"Watchers:")," ",e.watchersCount))},d=function(e){return r.a.createElement("li",{className:"no-repos-exist"},r.a.createElement("h3",null,"No Repos match your search... Please try again."))},b=function(e){var t,a=e.data;return t=a.length?a.map(function(e){return r.a.createElement(E,{name:e.name,url:e.html_url,description:e.description,issueCount:e.open_issues_count,forksCount:e.forks_count,key:e.id,watchersCount:e.watchers_count})}):r.a.createElement(d,null),r.a.createElement("ul",{className:"repo-list"},t)},g=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(u.a)(this,Object(i.a)(t).call(this))).performSearch=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"web";p.a.get("https://api.github.com/search/repositories?q=".concat(t)).then(function(a){e.setState({query:t,repos:a.data.items,loading:!1})}).catch(function(e){console.log("Error fetching and parsing data",e)})},e.state={repos:[],loading:!0},e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.performSearch()}},{key:"render",value:function(){return console.log(this.state.repos),r.a.createElement("div",null,r.a.createElement("div",{className:"main-header"},r.a.createElement("div",{className:"inner"},r.a.createElement("h1",{className:"main-title"},"RepoSearch"),r.a.createElement(f,{onSearch:this.performSearch}))),r.a.createElement("div",{className:"main-content"},this.state.loading?r.a.createElement("p",null,"Loading..."):r.a.createElement("div",null,r.a.createElement("h2",null,this.state.query),r.a.createElement(b,{data:this.state.repos}))))}}]),t}(n.Component);l.a.render(r.a.createElement(g,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.b9b57bac.chunk.js.map