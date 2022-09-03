import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{o as i,c as o,a as n,b as e,d as a,e as p,r as l}from"./app.375cfaab.js";var r="/blog/assets/image-20211111204005219.4a1d8b5f.png",c="/blog/assets/image-20211111205310895.e0c02b14.png",d="/blog/assets/image-20211111212130896.c1c86990.png",u="/blog/assets/image-20211111213349000.0ef08311.png",m="/blog/assets/image-20211111215738925.260bc224.png",v="/blog/assets/image-20211101162525695.179026af.png",g="/blog/assets/image-20220407153956878.6d6db04d.png",h="/blog/assets/image-20220408133835668.ebf9feb7.png",b="/blog/assets/image-20220408134259995.fc6e1fe0.png",k="/blog/assets/image-20220408134742497.5216e525.png",_="/blog/assets/image-20220408135025278.5193396c.png";const f={},x=n("h1",{id:"idea\u548Ceclipse",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#idea\u548Ceclipse","aria-hidden":"true"},"#"),a(" IDEA\u548CEclipse")],-1),y=n("h2",{id:"\u4E00-idea\u8BBE\u7F6E",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u4E00-idea\u8BBE\u7F6E","aria-hidden":"true"},"#"),a(" \u4E00 IDEA\u8BBE\u7F6E")],-1),C=a("\u4E00\u4E2A\u795E\u5947\u7684\u7F51\u7AD9\uFF1A"),z={href:"https://zhile.io/",target:"_blank",rel:"noopener noreferrer"},A=a("https://zhile.io/"),D=a("ja-netfilter code\uFF1A"),E={href:"https://jetbra.in/s",target:"_blank",rel:"noopener noreferrer"},T=a("https://jetbra.in/s"),q=a("\u63D2\u4EF6\u5E02\u573A\uFF1A"),I={href:"https://plugins.jetbrains.com/",target:"_blank",rel:"noopener noreferrer"},S=a("https://plugins.jetbrains.com/"),j=p('<br><h3 id="_1-\u5E38\u7528\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#_1-\u5E38\u7528\u63D2\u4EF6" aria-hidden="true">#</a> 1. \u5E38\u7528\u63D2\u4EF6</h3><ul><li><p>Lombok</p></li><li><p>Maven Helper</p></li><li></li></ul><br><h3 id="_2-\u81EA\u52A8\u5BFC\u5305" tabindex="-1"><a class="header-anchor" href="#_2-\u81EA\u52A8\u5BFC\u5305" aria-hidden="true">#</a> 2. \u81EA\u52A8\u5BFC\u5305</h3><p>\u81EA\u52A8\u5BFC\u5305\u3001\u81EA\u52A8\u5220\u9664\u4E0D\u9700\u8981\u7684import\u8BED\u53E5</p><p><img src="'+r+`" alt="image-20211111204005219" loading="lazy"></p><br><h3 id="_3-\u6CE8\u91CA\u6A21\u677F" tabindex="-1"><a class="header-anchor" href="#_3-\u6CE8\u91CA\u6A21\u677F" aria-hidden="true">#</a> 3. \u6CE8\u91CA\u6A21\u677F</h3><p>\u521B\u5EFA\u7C7B\u65F6\u81EA\u52A8\u751F\u6210\u6CE8\u91CA\u7684\u6A21\u677F\u3001\u793A\u4F8B\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span> $<span class="token punctuation">{</span>NAME<span class="token punctuation">}</span>
 * <span class="token keyword">@since</span> $<span class="token punctuation">{</span>DATE<span class="token punctuation">}</span> $<span class="token punctuation">{</span>TIME<span class="token punctuation">}</span>
 * <span class="token keyword">@author</span>  idrizzle
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+c+'" alt="image-20211111205310895" loading="lazy"></p><p>\u521B\u5EFA\u65B9\u6CD5\u6A21\u677F\uFF1A</p><p><strong>File\u2013&gt;Settings\u2013&gt;Editor\u2013&gt;Live Templates\u3001\u70B9\u51FB\u53F3\u8FB9\u7684 + \u53F7, \u9009\u62E9 Template Group</strong> \u3001\u521B\u5EFA\u81EA\u5DF1\u7684\u7EC4\u540D</p><p><img src="'+d+`" alt="image-20211111212130896" loading="lazy"></p><p>\u9009\u62E9\u81EA\u5DF1\u7684\u7EC4\u540D\uFF0C\u70B9\u51FB\u201D+\u201D\u53F7\uFF0C\u9009\u62E9Live Template\u3001\u586B\u5199Abbreviation\uFF0CDescription\uFF0CTemplate text</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token operator">*</span><span class="token operator">*</span>
$params$ 
 <span class="token operator">*</span> <span class="token annotation punctuation">@author</span> itdrizzle
 <span class="token operator">*</span> <span class="token annotation punctuation">@since</span> $date$ $time$ 
 <span class="token operator">*</span> <span class="token annotation punctuation">@return</span> $<span class="token keyword">return</span>$
 <span class="token operator">*</span><span class="token operator">/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+u+'" alt="image-20211111213349000" loading="lazy"></p><p>\u70B9\u51FB Define \u9009\u62E9java\uFF0C\u4E5F\u53EF\u4EE5\u9009\u62E9everywhere \u3001\u8BBE\u7F6EEdit variables</p><p><img src="'+m+`" alt="image-20211111215738925" loading="lazy"></p><div class="language-groovy ext-groovy line-numbers-mode"><pre class="language-groovy"><code><span class="token function">groovyScript</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">&quot;def result=&#39;&#39;; def params=\\&quot;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token expression"><span class="token number">_1</span></span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\\&quot;.replaceAll(&#39;[\\\\\\\\[|\\\\\\\\]|\\\\\\\\s]&#39;, &#39;&#39;).split(&#39;,&#39;).toList(); for(i = 0; i &lt; params.size(); i++) {result+=&#39; * @param &#39; + params[i] + ((i &lt; params.size() - 1) ? &#39;\\\\r\\\\n&#39; : &#39;&#39;)}; return result&quot;</span></span><span class="token punctuation">,</span> <span class="token function">methodParameters</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-groovy ext-groovy line-numbers-mode"><pre class="language-groovy"><code><span class="token function">groovyScript</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">&quot;def result=\\&quot;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token expression"><span class="token number">_1</span></span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\\&quot;; if(result == \\&quot;void\\&quot;){return \\&quot;\\&quot;;}else{return \\&quot;{@link \\&quot;+result+\\&quot;}\\&quot;;}&quot;</span></span><span class="token punctuation">,</span> <span class="token function">methodReturnType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u3010\u6CE8\u3011\u4F7F\u7528\u65B9\u5F0F\uFF1A\u5148\u952E\u5165 /*aa \u518D\u6309tab\u5065\u5373\u53EF</p><br><h2 id="\u4E8C-\u5E38\u7528\u5FEB\u6377\u952E" tabindex="-1"><a class="header-anchor" href="#\u4E8C-\u5E38\u7528\u5FEB\u6377\u952E" aria-hidden="true">#</a> \u4E8C \u5E38\u7528\u5FEB\u6377\u952E</h2><h3 id="_1-\u7F16\u8F91\u5FEB\u6377\u952E" tabindex="-1"><a class="header-anchor" href="#_1-\u7F16\u8F91\u5FEB\u6377\u952E" aria-hidden="true">#</a> 1. \u7F16\u8F91\u5FEB\u6377\u952E</h3><table><thead><tr><th>idea\u5FEB\u6377\u952E</th><th>\u529F\u80FD\u6216\u4F5C\u7528</th><th>eclipse\u5BF9\u5E94\u5FEB\u6377\u952E</th></tr></thead><tbody><tr><td>Alt+insert</td><td>\u751F\u6210get\uFF0Cset\u65B9\u6CD5</td><td>Shift+Alt+S</td></tr><tr><td>Ctrl+Alt+L</td><td>\u683C\u5F0F\u5316\u4EE3\u7801</td><td>\u5148\u9009\u62E9\u4EE3\u7801 \u7136\u540E Ctrl+I\u683C\u5F0F\u5316\u4EE3\u7801</td></tr><tr><td>Ctrl+Alt+T</td><td>\u628A\u4EE3\u7801\u5305\u5728\u4E00\u4E2A\u5757\u5185\uFF0C\u5982\uFF1Atry/catch</td><td></td></tr><tr><td>Ctrl+Shift+U</td><td>\u5207\u6362\u4EE3\u7801\u5927\u5C0F\u5199</td><td>Ctrl+Shift+X\uFF08\u5927\u5199\uFF09 Ctrl+Shift+Y\uFF08\u5C0F\u5199\uFF09</td></tr><tr><td>Ctrl+F4</td><td>\u5173\u95ED\u5F53\u524D\u4EE3\u7801\u7A97</td><td>Ctrl+W</td></tr><tr><td>Ctrl+Alt+\u5DE6\u53F3\u952E</td><td>\u5FEB\u901F\u5B9A\u4F4D\u5230\u4E0A\u4E00\u6B21\u7F16\u8F91\u7684\u4F4D\u7F6E</td><td>Ctrl+Q</td></tr></tbody></table><p>\u3010\u6CE8\u3011Ctrl+Alt+L \u5E38\u548C\u5176\u4ED6\u5FEB\u6377\u952E\u51B2\u7A81\u3001\u6539\u7528Ctrl+Shift+Alt+L</p><br><h3 id="_2-\u5176\u4ED6\u5FEB\u6377\u952E" tabindex="-1"><a class="header-anchor" href="#_2-\u5176\u4ED6\u5FEB\u6377\u952E" aria-hidden="true">#</a> 2. \u5176\u4ED6\u5FEB\u6377\u952E</h3><br><h2 id="\u4E09-\u5E38\u89C1\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u4E09-\u5E38\u89C1\u95EE\u9898" aria-hidden="true">#</a> \u4E09 \u5E38\u89C1\u95EE\u9898</h2><h3 id="_1-cannot-download-sources" tabindex="-1"><a class="header-anchor" href="#_1-cannot-download-sources" aria-hidden="true">#</a> 1. Cannot Download Sources</h3><p>\u5229\u7528idea\u81EA\u52A8\u4E0B\u8F7D\u6E90\u7801\u65F6\uFF0C\u63D0\u793ACannot Download Sources\u3001IDEA \u51FA\u73B0Cannot Download Sources \u7684\u89E3\u51B3\u529E\u6CD5\uFF1A</p><p>\u70B9\u51FBterminal\uFF0C\u5728\u5176\u4E2D\u547D\u4EE4\u53F0\u4E2D \u8F93\u5165 \uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mvn dependency:resolve -Dclassifier=sources
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5982\u56FE\uFF1A</p><p><img src="`+v+'" alt="image-20211101162525695" loading="lazy"></p><br><p>\u56FD\u5185\u4E0B\u8F7Dvscode\u901F\u5EA6\u6162\u95EE\u9898\u89E3\u51B3</p><p><img src="'+g+`" alt="image-20220407153956878" loading="lazy"></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>
vscode.cdn.azure.cn       <span class="token comment"># &lt;--------\u5C31\u662F\u5DE6\u8FB9\u8FD9\u4E2A (\u56FD\u5185\u7684\u955C\u50CF)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h3 id="_2-\u63A7\u5236\u53F0\u4E2D\u6587\u4E71\u7801" tabindex="-1"><a class="header-anchor" href="#_2-\u63A7\u5236\u53F0\u4E2D\u6587\u4E71\u7801" aria-hidden="true">#</a> 2. \u63A7\u5236\u53F0\u4E2D\u6587\u4E71\u7801</h3><p>\u63A7\u5236\u53F0\u4E2D\u6587\u4E71\u7801\u6700\u5E38\u89C1\u7684\u5E94\u8BE5\u5C31\u662F\u5728IDEA\u4E2D\u901A\u8FC7Tomcat\u542F\u52A8\u9879\u76EE\u4E86\uFF0C</p><p>\u5F88\u591A\u6559\u7A0B\u90FD\u53EA\u662F\u968F\u610F\u5904\u7406\u4E00\u4E0BTomcat\u6216\u662FIDEA\u4E2D\u7684\u7F16\u7801\uFF0C\u4F46\u4E24\u8005\u914D\u5408\u4F7F\u7528\u65F6\uFF0C\u4E2D\u95F4\u8FD8\u8981\u7ECF\u8FC7OS\u5462\uFF01</p><p>\u60F3\u8981<code>\u6839\u6CBB\u8FD9\u4E2A\u4E71\u7801\u95EE\u9898\uFF0C\u4E0D\u5982\u8FDE\u7CFB\u7EDF\u7F16\u7801\u4E00\u8D77\u7EDF\u4E00\u4E86</code>\uFF0C\u7701\u5F97\u4EE5\u540E\u8FD8\u6709\u9EBB\u70E6</p><p>\u89E3\u51B3\u529E\u6CD5\u5982\u4E0B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>
<span class="token comment"># \u5904\u7406\u65B9\u6CD5\uFF1A\u5168\u90E8\u7F16\u7801\u7EDF\u4E00\u4E3A UTF-8</span>

<span class="token number">1</span>. \u4FEE\u6539Tomcat\u7684\u7F16\u7801 <span class="token punctuation">(</span>\u76EE\u5F55\u4F4D\u7F6E\u53C2\u8003\u4E0B\u9762<span class="token punctuation">)</span>
	<span class="token variable"><span class="token variable">\`</span>D:<span class="token punctuation">\\</span>Develop<span class="token punctuation">\\</span>env<span class="token punctuation">\\</span>tomcat<span class="token punctuation">\\</span>apache-tomcat-8.5.72<span class="token punctuation">\\</span>conf<span class="token punctuation">\\</span>logging.properties<span class="token variable">\`</span></span>
	
    java.util.logging.ConsoleHandler.encoding <span class="token operator">=</span> UTF-8

<span class="token number">2</span>. \u4FEE\u6539\u64CD\u4F5C\u7CFB\u7EDF\u7684\u7F16\u7801 \uFF08Windows\uFF09

<span class="token number">3</span>. \u4FEE\u6539idea\u7684\u7F16\u7801

<span class="token number">2018</span>\u7248\uFF1AC:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>msdri<span class="token punctuation">\\</span>.IntelliJIdea2018.3<span class="token punctuation">\\</span>config<span class="token punctuation">\\</span>idea64.exe.vmoptions 

<span class="token number">2021</span>\u7248\uFF1AC:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>msdri<span class="token punctuation">\\</span>AppData<span class="token punctuation">\\</span>Roaming<span class="token punctuation">\\</span>JetBrains<span class="token punctuation">\\</span>IntelliJIdea2021.3<span class="token punctuation">\\</span>idea64.exe.vmoptions 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><p>Tomcat\uFF1A</p><p><img src="`+h+'" alt="image-20220408133835668" loading="lazy"></p><br><p>\u4FEE\u6539Windows\u7684\u7F16\u7801\uFF1A</p><p>\u8BBE\u7F6E \u2192 \u65F6\u95F4\u548C\u8BED\u8A00 \u2014\u2014 \u8BED\u8A00 \u2014\u2014 \u7BA1\u7406\u8BED\u8A00\u8BBE\u7F6E</p><p><img src="'+b+'" alt="image-20220408134259995" loading="lazy"></p><br><p>\u4FEE\u6539IDEA\u7684\u7F16\u7801\uFF1A</p><p>\u9664\u975E\u6CA1\u6709\u542F\u52A8\u8FC7IDEA\uFF0C\u5426\u5219\u8BF7\u5728 help \u2014\u2014&gt; Edit Custom VM Options \u4E2D\u6253\u5F00\u4FEE\u6539\uFF0C\u4E0D\u7136\u4E0D\u4F1A\u751F\u6548</p><p>\u8FDB\u884C\u8FC7\uFF08\u4E0D\u660E\u9A9A\u64CD\u4F5C\u7684\uFF09\u53EF\u4EE5\u76F4\u63A5\u53BBC\u76D8\u7528\u6237\u76EE\u5F55\u4E0B\u5BFB\u627E\u5BF9\u5E94\u6587\u4EF6\uFF0C\u53C2\u8003\u8DEF\u5F84\u5982\u4E0B\uFF1A</p><p><img src="'+k+`" alt="image-20220408134742497" loading="lazy"></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>
-Dfile.encoding<span class="token operator">=</span>UTF-8
-Dconsole.encoding<span class="token operator">=</span>UTF-8

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><p>IDEA\u8BBE\u7F6E\u4E2D\u7684\u7F16\u7801\u4FEE\u6539\uFF1A</p><p><img src="`+_+'" alt="image-20220408135025278" loading="lazy"></p>',65);function $(w,L){const s=l("ExternalLinkIcon");return i(),o("div",null,[x,y,n("p",null,[C,n("a",z,[A,e(s)])]),n("p",null,[D,n("a",E,[T,e(s)])]),n("p",null,[q,n("a",I,[S,e(s)])]),j])}var N=t(f,[["render",$],["__file","idea.html.vue"]]);export{N as default};
