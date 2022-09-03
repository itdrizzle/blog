import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e}from"./app.97c01366.js";const p={},t=e(`<h1 id="java\u6CDB\u578B" tabindex="-1"><a class="header-anchor" href="#java\u6CDB\u578B" aria-hidden="true">#</a> Java\u6CDB\u578B</h1><p>\u6CDB\u578B\uFF0C\u5373\u201C\u53C2\u6570\u5316\u7C7B\u578B\u201D\u3002\u987E\u540D\u601D\u4E49\uFF0C\u5C31\u662F\u5C06\u7C7B\u578B\u7531\u539F\u6765\u7684\u5177\u4F53\u7684\u7C7B\u578B&#39;\u53C2\u6570\u5316&#39;\uFF0C\u6B64\u65F6\u7C7B\u578B\u4E5F\u5B9A\u4E49\u6210\u53C2\u6570\u5F62\u5F0F\uFF0C\u7136\u540E\u5728\u4F7F\u7528/\u8C03\u7528\u65F6\u4F20\u5165\u5177\u4F53\u7684\u7C7B\u578B\u3002\u4E8B\u5148\u4E0D\u786E\u5B9A\u7C7B\u578B, \u5148\u5199\u4E00\u4E2A\u4E1C\u897F\u4EE3\u6307, \u5728\u4F7F\u7528\u7684\u65F6\u5019\u5177\u4F53\u6307\u5B9A</p><ul><li><p>Java \u6CDB\u578B\uFF08generics\uFF09\u662F <strong>JDK 5</strong> \u4E2D\u5F15\u5165\u7684\u4E00\u4E2A\u65B0\u7279\u6027, \u6CDB\u578B\u63D0\u4F9B\u4E86\u7F16\u8BD1\u65F6\u7C7B\u578B\u5B89\u5168\u68C0\u6D4B\u673A\u5236\uFF0C\u8BE5\u673A\u5236\u5141\u8BB8\u5F00\u53D1\u8005\u5728\u7F16\u8BD1\u65F6\u68C0\u6D4B\u5230\u975E\u6CD5\u7684\u7C7B\u578B\u3002</p></li><li><p>\u6CDB\u578B\u7684\u672C\u8D28\u662F\u53C2\u6570\u5316\u7C7B\u578B\uFF0C\u4E5F\u5C31\u662F\u8BF4\u6240\u64CD\u4F5C\u7684\u6570\u636E\u7C7B\u578B\u88AB\u6307\u5B9A\u4E3A\u4E00\u4E2A\u53C2\u6570\u3002\u5728\u4F7F\u7528/\u8C03\u7528\u65F6\u4F20\u5165\u5177\u4F53\u7684\u7C7B\u578B\uFF08\u7C7B\u578B\u5B9E\u53C2\uFF09\u3002</p></li><li><p>Java\u91C7\u7528 <strong>\u7C7B\u578B\u64E6\u9664(Type erasure generics)</strong> \u7684\u65B9\u5F0F\u5B9E\u73B0\u6CDB\u578B\uFF0C\u5373\u8FD9\u4E2A\u6CDB\u578B\u53EA\u5B58\u5728\u6E90\u7801\u4E2D\u3002</p><p>java\u4E2D\u7684\u6CDB\u578B\u4EC5\u4EC5\u5B58\u5728\u4E8E\u7F16\u8BD1\u4E4B\u524D, \u7ECF\u8FC7\u7F16\u8BD1\u4E4B\u540E\u5168\u90E8\u6CDB\u578B\u53D8\u6210Object, \u4F7F\u7528\u6CDB\u578B\u53D8\u6210\u7C7B\u578B\u5F3A\u8F6C</p></li></ul><h2 id="_1-\u6CE8\u610F\u4E8B\u9879" tabindex="-1"><a class="header-anchor" href="#_1-\u6CE8\u610F\u4E8B\u9879" aria-hidden="true">#</a> 1. \u6CE8\u610F\u4E8B\u9879</h2><p>Java\u5F00\u53D1\u624B\u518C\u63A8\u8350\u4F7F\u7528\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">// \u6CDB\u578B\u7684\u5199\u6CD5: \u4E00\u822C\u5E38\u7528T E K V (\u8BED\u6CD5\u4E0A\u53EF\u4EE5\u4F7F\u7528\u522B\u7684\u5B57\u7B26\u90FD\u53EF\u4EE5, \u4F46\u662F\u4E60\u60EF\u4E0A\u7528\u8FD9\u4E9B)</span>
<span class="token comment">// T : type</span>
<span class="token comment">// E : element</span>
<span class="token comment">// K : key</span>
<span class="token comment">// V : value</span>

<span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">// \u6211\u4EEC\u53EF\u4EE5\u5728\u6CDB\u578B\u5B9A\u4E49\u7684\u65F6\u5019\u5B9A\u4E49\u591A\u4E2A\u6CDB\u578B(\u8BED\u6CD5\u5B8C\u5168\u5141\u8BB8), \u4F46\u662F\u5EFA\u8BAE\u4E0D\u8981\u8D85\u8FC7\u4E24\u4E2A </span>
<span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">,</span> <span class="token class-name">E</span><span class="token punctuation">,</span> <span class="token class-name">X</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
    <span class="token class-name">E</span> name<span class="token punctuation">;</span>
    <span class="token class-name">T</span> age<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token class-name">E</span> name<span class="token punctuation">,</span> <span class="token class-name">T</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u6CDB\u578B\u4F7F\u7528\u7684\u5199\u6CD5</strong>\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">User</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> zs1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token string">&quot;zs&quot;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// \u5728\u5F15\u7528\u4E0A \u548C  new \u7C7B\u578B\u4E0A\u90FD\u6307\u5B9A\u7C7B\u578B:  jdk1.5\u65F6\u5019\u7684\u5199\u6CD5</span>

<span class="token class-name">User</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> zs2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token string">&quot;zs&quot;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">;</span>         <span class="token comment">// \u53EA\u5199\u5F15\u7528, \u540E\u9762\u7701\u7565: jdk1.7\u65F6\u5019\u505A\u7684\u5199\u6CD5\u4F18\u5316</span>

 <span class="token comment">// \u5982\u679C\u67D0\u4E2A\u5730\u65B9\u9700\u8981\u4F20\u6CDB\u578B, \u4F46\u662F\u6211\u4EEC\u4F7F\u7528\u7684\u65F6\u5019\u6CA1\u6709\u6307\u5B9A\u5177\u4F53\u7684\u6CDB\u578B\u7C7B\u578B, \u8FD9\u4E2A\u6CDB\u578B\u5728\u8FD9\u6B21\u4F7F\u7528\u4E2D\u9ED8\u8BA4\u8868\u73B0\u4E3AObject</span>
<span class="token class-name">User</span> zs <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token string">&quot;zs&quot;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Object</span> age <span class="token operator">=</span> zs<span class="token punctuation">.</span>age<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u6CDB\u578B\u4E0D\u5141\u8BB8\u4F7F\u7528\u57FA\u672C\u7C7B\u578B</strong>\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">// \u6CDB\u578B\u7684\u4F7F\u7528\u4E0D\u5141\u8BB8\u4F7F\u7528\u57FA\u672C\u7C7B\u578B</span>
<span class="token comment">// \u62A5\u9519: User&lt;int&gt; zs3 = new User&lt;&gt;(&quot;zs&quot;, 18);</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u6CDB\u578B\u7684\u597D\u5904</strong>\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>a<span class="token punctuation">.</span> \u63D0\u9AD8\u4E86\u7A0B\u5E8F\u7684\u5B89\u5168\u6027
b<span class="token punctuation">.</span> \u5C06\u8FD0\u884C\u671F\u9047\u5230\u7684\u95EE\u9898\u8F6C\u79FB\u5230\u4E86\u7F16\u8BD1\u671F
c<span class="token punctuation">.</span> \u7701\u53BB\u4E86\u7C7B\u578B\u5F3A\u8F6C\u7684\u9EBB\u70E6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-\u6CDB\u578B\u7684\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_2-\u6CDB\u578B\u7684\u4F7F\u7528" aria-hidden="true">#</a> 2. \u6CDB\u578B\u7684\u4F7F\u7528</h2><h3 id="\u6CDB\u578B\u7C7B" tabindex="-1"><a class="header-anchor" href="#\u6CDB\u578B\u7C7B" aria-hidden="true">#</a> \u6CDB\u578B\u7C7B</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">// \u6CDB\u578B\u7C7B\uFF1A\uFF08\u5728\u5B9E\u4F8B\u5316\u6CDB\u578B\u7C7B\u65F6\uFF0C\u9700\u8981\u6307\u660E\u6CDB\u578B\u7C7B\u4E2D\u7684\u7C7B\u578B\u53C2\u6570\uFF0C\u5E76\u8D4B\u4E88\u6CDB\u578B\u7C7B\u5C5E\u6027\u76F8\u5E94\u7C7B\u578B\u7684\u503C\uFF09</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ClassName</span><span class="token operator">&lt;</span>dataType1<span class="token punctuation">,</span>dataType2<span class="token punctuation">,</span>\u2026<span class="token operator">&gt;</span><span class="token punctuation">{</span>
    <span class="token keyword">private</span> dataType1 propertyName1<span class="token punctuation">;</span>
    <span class="token keyword">private</span> dataType2 propertyName2<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u5B9A\u4E49\u4E00\u4E2A\u6CDB\u578B\u7C7B\uFF1A</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ClassName</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">T</span> data<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">T</span> <span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> data<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setData</span><span class="token punctuation">(</span><span class="token class-name">T</span> data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>data <span class="token operator">=</span> data<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u6CE8\u610F1: \u5B9A\u4E49\u4E00\u4E2A\u6CDB\u578B\u7C7B, \u8FD9\u4E2A\u6CDB\u578B\u4F5C\u7528\u57DF\u8303\u56F4, \u4EC5\u5728\u7C7B\u540D\u4E4B\u540E\u548C\u7C7B\u4F53\u4E0A</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6CDB\u578B\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#\u6CDB\u578B\u63A5\u53E3" aria-hidden="true">#</a> \u6CDB\u578B\u63A5\u53E3</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">// \u6CDB\u578B\u63A5\u53E3</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">IntercaceName</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>
    <span class="token class-name">T</span> <span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u5B9E\u73B0\u63A5\u53E3\u65F6\uFF0C\u53EF\u4EE5\u9009\u62E9\u6307\u5B9A\u6CDB\u578B\u7C7B\u578B\uFF0C\u4E5F\u53EF\u4EE5\u9009\u62E9\u4E0D\u6307\u5B9A</span>
<span class="token comment">// \u6307\u5B9A\u7C7B\u578B \u5982\u4E0B\uFF1A</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Interface1</span> <span class="token keyword">implements</span> <span class="token class-name">IntercaceName</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> text<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> text<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u4E0D\u6307\u5B9A\u7C7B\u578B\uFF1A</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Interface1</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token keyword">implements</span> <span class="token class-name">IntercaceName</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">T</span> data<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">T</span> <span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> data<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6CDB\u578B\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u6CDB\u578B\u65B9\u6CD5" aria-hidden="true">#</a> \u6CDB\u578B\u65B9\u6CD5</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">// \u6CDB\u578B\u65B9\u6CD5\uFF0C\u4F8B\u5982: </span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">List</span> <span class="token function">find</span><span class="token punctuation">(</span><span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> cs<span class="token punctuation">,</span><span class="token keyword">int</span> userId<span class="token punctuation">)</span><span class="token punctuation">{</span>

    <span class="token comment">// \u4F7F\u7528\u4E86\u6CDB\u578B\u7684\u65B9\u6CD5\u4E0D\u4E00\u5B9A\u662F\u6CDB\u578B\u65B9\u6CD5, \u5B9A\u4E49\u4E86\u6CDB\u578B\u7684\u65B9\u6CD5\u624D\u662F\u6CDB\u578B\u65B9\u6CD5</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u662F\u5426\u62E5\u6709\u6CDB\u578B\u65B9\u6CD5\uFF0C\u4E0E\u5176\u6240\u5728\u7684\u7C7B\u662F\u4E0D\u662F\u6CDB\u578B\u6CA1\u6709\u5173\u7CFB</li><li>\u5982\u679C static \u65B9\u6CD5\u9700\u8981\u4F7F\u7528\u6CDB\u578B\u80FD\u529B\uFF0C\u5C31\u5FC5\u987B\u4F7F\u5176\u6210\u4E3A\u6CDB\u578B\u65B9\u6CD5</li></ul><h2 id="_3-\u6CDB\u578B\u901A\u914D" tabindex="-1"><a class="header-anchor" href="#_3-\u6CDB\u578B\u901A\u914D" aria-hidden="true">#</a> 3. \u6CDB\u578B\u901A\u914D</h2><p>\u6CDB\u578B\u662F\u4E0D\u5141\u8BB8\u7C7B\u4F3C\u6570\u7EC4\u4E00\u6837\u534F\u53D8\u7684\uFF0C\u4F46\u662F\u6709\u7684\u65F6\u5019, \u6211\u4EEC\u53C8\u5E0C\u671B\u5B83\u80FD\u50CF\u6570\u7EC4\u4E00\u6837, \u4EA7\u751F\u7C7B\u4F3C\u534F\u53D8\u7684\u6548\u679C</p><p>\u6CDB\u578B\u901A\u914D: \u8FD9\u4E2A\u6CDB\u578B\u901A\u914D\u5C31\u662F\u4E3A\u4E86\u6A21\u62DF\u6570\u7EC4\u7684\u534F\u53D8, \u53C8\u907F\u514D\u4E86\u6570\u7EC4\u534F\u53D8\u7684\u574F\u5904(\u7C7B\u578B\u95EE\u9898)</p><ul><li><p><code>\uFF1F</code>\uFF1A\u4EFB\u610F\u7C7B\u578B\uFF0C\u5982\u679C\u6CA1\u6709\u660E\u786E\uFF0C\u90A3\u4E48\u5C31\u662FObject\u4EE5\u53CA\u4EFB\u610F\u7684Java\u7C7B\u4E86</p><p>\u8868\u793A\u4E0D\u786E\u5B9A\u7684 java \u7C7B\u578B\uFF0C\u901A\u5E38\u7528\u4E8E\u6CDB\u578B\u65B9\u6CD5\u7684\u8C03\u7528\u4EE3\u7801\u548C\u5F62\u53C2\uFF0C\u4E0D\u80FD\u7528\u4E8E\u5B9A\u4E49\u7C7B\u548C\u6CDB\u578B\u65B9\u6CD5</p></li><li><p><code>? extends E</code>\uFF08\u5411\u4E0B\u9650\u5B9A\uFF0CE\u53CA\u5176\u5B50\u7C7B\uFF09</p><p>\u4E0A\u754C\u901A\u914D\u7B26 <code>&lt; ? extends E&gt;</code>\uFF1A\u9650\u5236\u6CDB\u578B\u53EF\u7528\u7C7B\u578B, \u8868\u793A\u53C2\u6570\u5316\u7684\u7C7B\u578B\u53EF\u80FD\u662F\u6240\u6307\u5B9A\u7684\u7C7B\u578B\uFF0C\u6216\u8005\u662F\u6B64\u7C7B\u578B\u7684\u5B50\u7C7B\u3002</p><ul><li>\u5982\u679C\u4F20\u5165\u7684\u7C7B\u578B\u4E0D\u662F E \u6216\u8005 E \u7684\u5B50\u7C7B\uFF0C\u7F16\u8BD1\u4E0D\u6210\u529F</li><li>\u6CDB\u578B\u4E2D\u53EF\u4EE5\u4F7F\u7528 E \u7684\u65B9\u6CD5\uFF0C\u5426\u5219\u9700\u8981\u5F3A\u8F6C\u6210 E \u624D\u80FD\u4F7F\u7528</li></ul><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">// \u5F53\u6CA1\u6709\u4F7F\u7528 extends \u5173\u952E\u5B57\u9650\u5236\u6CDB\u578B\u7C7B\u578B\u65F6\uFF0C\u5176\u5B9E\u662F\u9ED8\u8BA4\u4F7F\u7528 Object \u7C7B\u4F5C\u4E3A\u6CDB\u578B\u7C7B\u578B/</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ClassName</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token comment">// \u7B49\u540C\u4E8E\uFF1A</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ClassName</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span> <span class="token keyword">extends</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>? super E</code> \uFF08\u5411\u4E0A\u9650\u5B9A\uFF0CE\u53CA\u5176\u7236\u7C7B\uFF09</p><p>\u4E0B\u754C\u901A\u914D\u7B26 <code>&lt; ? super E&gt;</code>\uFF1A\u8868\u793A\u53C2\u6570\u5316\u7684\u7C7B\u578B\u53EF\u80FD\u662F\u6240\u6307\u5B9A\u7684\u7C7B\u578B\uFF0C\u6216\u8005\u662F\u6B64\u7C7B\u578B\u7684\u7236\u7C7B\u578B\uFF0C\u76F4\u81F3 Object</p></li></ul>`,25),c=[t];function l(i,o){return s(),a("div",null,c)}var r=n(p,[["render",l],["__file","generics.html.vue"]]);export{r as default};
