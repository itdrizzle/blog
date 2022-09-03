import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";import{o as c,c as o,a as n,b as t,d as s,e,r as l}from"./app.97c01366.js";const i={},u=n("h1",{id:"reflection\u53CD\u5C04",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#reflection\u53CD\u5C04","aria-hidden":"true"},"#"),s(" Reflection\u53CD\u5C04")],-1),r=s("The Reflection API\uFF1A"),k={href:"https://docs.oracle.com/javase/tutorial/reflect/index.html",target:"_blank",rel:"noopener noreferrer"},d=s("Trail: The Reflection API (The Java\u2122 Tutorials)"),m=e(`<p>Reflection is commonly used by programs which require the ability to examine or modify the runtime behavior of applications running in the Java virtual machine.</p><h2 id="_1-class\u7C7B" tabindex="-1"><a class="header-anchor" href="#_1-class\u7C7B" aria-hidden="true">#</a> 1. Class\u7C7B</h2><p>\u5728java\u4E2D\uFF0C\u4E00\u4E2A\u666E\u901A\u4E8B\u7269\u3001\u5982\u4EBA\u7C7B\u53EF\u4EE5\u7528\u4E00\u4E2APerson\u7C7B\u6765\u8868\u793A\uFF0C\u90A3\u4E48\u4F17\u591A\u7684java\u7C7B\u7528\u4EC0\u4E48\u6765\u8868\u793A\u5462\uFF1F\u5176\u5B9E\u6240\u6709\u7684java\u7C7B\u540C\u6837\u5C5E\u4E8E\u4E00\u7C7B\u4E8B\u7269\uFF0C\u800C\u63CF\u8FF0\u8FD9\u7C7B\u4E8B\u7269\u7684java\u7C7B\u5C31\u662F Class .</p><p>\u5728\u4E00\u4E2A\u666E\u901A\u7C7B\u4E2D\uFF0C\u5982Person\u4EE3\u8868\u4E00\u4E2A\u7C7B\uFF0C\u6211\u4EEC\u901A\u8FC7new\u83B7\u5F97\u8BE5\u7C7B\u7684\u5BF9\u8C61\uFF0C\u90A3Class\u7C7B\u53C8\u5982\u4F55\u83B7\u5F97\u5176\u5BF9\u8C61\u5462\uFF1F</p><p>\u5176\u5B9E\uFF0C\u6211\u4EEC\u4E0D\u59A8\u5C06Class\u7C7B\u7684\u5B9E\u4F8B\u5BF9\u8C61\u7406\u89E3\u4E3A\u4E00\u4E2A\u7C7B\u5728\u5185\u5B58\u4E2D\u7684\u5B57\u8282\u7801\u6587\u4EF6\uFF08\u4E00\u4E2A\u7C7B\u88AB\u7C7B\u52A0\u8F7D\u5668\u52A0\u8F7D\u5230\u5185\u5B58\u4E2D\uFF0C\u5360\u7528\u4E86\u4E00\u5B9A\u7684\u5185\u5B58\u7A7A\u95F4\uFF0C\u800C\u8FD9\u7247\u5185\u5B58\u7A7A\u95F4\u5B58\u50A8\u7684\u5185\u5BB9\u5C31\u662F\u8BE5\u7C7B\u7684\u5B57\u8282\u7801\uFF0C\u800C\u4E0D\u540C\u7684\u7C7B\u5177\u6709\u4E0D\u540C\u7684\u5B57\u8282\u7801\u6587\u4EF6\uFF0C\u8FD9\u4E9B\u5C31\u662F\u4E00\u4E2A\u4E2AClass\u7C7B\u7684\u5B9E\u4F8B\u5BF9\u8C61\uFF09</p><p>\u60F3\u8981\u83B7\u5F97\u4E00\u4E2A\u7C7B\u7684 Class\u7C7B\u578B \uFF08\u5373Class\u5B9E\u4F8B\u5BF9\u8C61\u3001\u6216\u8005\u8BF4\u5185\u5B58\u4E2D\u4EE3\u8868\u8BE5\u7C7B\u7684\u5B57\u8282\u7801\u6587\u4EF6\uFF09\uFF0C\u901A\u5E38\u6709\u4EE5\u4E0B\u4E09\u79CD\u65B9\u5F0F\uFF1A</p><ul><li>Object.getClass()</li><li>The .class Syntax</li><li>Class.forName() \uFF1A This cannot be used for primitive types</li></ul><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ClassDemo</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ClassNotFoundException</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u901A\u8FC7\u5BF9\u8C61\u7684 getClass() \u65B9\u6CD5\u83B7\u53D6</span>
        <span class="token class-name">Date</span> date <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Class</span> class1 <span class="token operator">=</span> date<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// \u901A\u8FC7\u7C7B\u7684class\u5C5E\u6027\u83B7\u53D6</span>
        <span class="token class-name">Class</span> class2 <span class="token operator">=</span> <span class="token class-name">Date</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">;</span>

        <span class="token comment">// \u901A\u8FC7Class\u7C7B\u63D0\u4F9B\u7684 forName() \u65B9\u6CD5\u5C06\u6307\u5B9A\u7684\u7C7B\u52A0\u8F7D\u5230\u5185\u5B58\u4E2D</span>
        <span class="token class-name">Class</span> class3 <span class="token operator">=</span> <span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span><span class="token string">&quot;java.util.Date&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>class1 <span class="token operator">==</span> class2<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//true</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6211\u4EEC\u4E0D\u59A8\u901A\u8FC7debug\u7684\u65B9\u5F0F\u770B\u4E00\u770B\u8FD9\u4E09\u4E2AClass\u7C7B\u7684\u5B9E\u4F8B\u5BF9\u8C61\u662F\u5426\u76F8\u540C\uFF08\u6307\u5411\u540C\u4E00\u5185\u5B58\u7A7A\u95F4\uFF09\uFF1A</p><p>\u6211\u4EEC\u518D\u4E86\u89E3\u4E00\u4E0B\u57FA\u672C\u6570\u636E\u7C7B\u578B\u3001\u5305\u88C5\u7C7B\u3001\u666E\u901A\u7C7B\u548C\u6570\u7EC4\u7684Class\u7C7B\u578B\u6709\u4F55\u4E0D\u540C\uFF1A</p><p>\u5305\u88C5\u7C7B\u7684 TYPE \u5C5E\u6027\u8868\u793A\u5176\u5BF9\u5E94\u7684\u57FA\u672C\u6570\u636E\u7C7B\u578B\u3001\u6CE8\u610F\u4E0D\u8981\u4E0Eclass\u5C5E\u6027\u76F8\u6DF7\u6DC6</p><p>\u6CE8\u610F\u5B98\u65B9\u6587\u6863\u5173\u4E8E\u7C7B\u578B\u7684\u5B9A\u4E49\uFF1A\u5373Java\u4E2D\u53EA\u6709\u57FA\u672C\u6570\u636E\u7C7B\u578B\u548C\u5F15\u7528\u6570\u636E\u7C7B\u578B\uFF0C\u5F15\u7528\u6570\u636E\u7C7B\u578B\u5305\u62EC\uFF1A\u7C7B\u3001\u679A\u4E3E\u3001\u6570\u7EC4\u548C\u63A5\u53E3</p><p>Every type is either a reference or a primitive.</p>`,13),v=s("Classes, enums, and arrays (which all inherit from "),b={href:"https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"java.lang.Object",-1),h=s(") as well as interfaces are all reference types."),f=e(`<h2 id="_2-\u6784\u9020\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#_2-\u6784\u9020\u65B9\u6CD5" aria-hidden="true">#</a> 2. \u6784\u9020\u65B9\u6CD5</h2><p>Constructor\u7C7B\u4EE3\u8868\u67D0\u4E2A\u7C7B\u4E2D\u7684\u4E00\u4E2A\u6784\u9020\u65B9\u6CD5\u3001\u53EF\u4EE5\u901A\u8FC7\u53CD\u5C04\u83B7\u53D6\u6307\u5B9A\u7C7B\u7684\u6784\u9020\u65B9\u6CD5\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ConstructorDemo</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">NoSuchMethodException</span> <span class="token punctuation">{</span>
        <span class="token class-name">Class</span> stringClass <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">;</span>

        <span class="token comment">// \u83B7\u53D6\u6307\u5B9A\u53C2\u6570\u7C7B\u578B\u3001\u4E14\u8BBF\u95EE\u6743\u9650\u662Fpublic\u7684\u6784\u9020\u5668</span>
        <span class="token class-name">Constructor</span> constructor <span class="token operator">=</span> stringClass<span class="token punctuation">.</span><span class="token function">getConstructor</span><span class="token punctuation">(</span><span class="token class-name">StringBuffer</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// \u83B7\u53D6\u6240\u6709\u516C\u6709\uFF08public\uFF09\u6784\u9020\u65B9\u6CD5</span>
        <span class="token class-name">Constructor</span><span class="token punctuation">[</span><span class="token punctuation">]</span> constructors <span class="token operator">=</span> stringClass<span class="token punctuation">.</span><span class="token function">getConstructors</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// \u83B7\u53D6\u6240\u6709\u7684\u6784\u9020\u65B9\u6CD5\uFF0C\u5305\u542Bprivate\u4FEE\u9970\u7684\u6784\u9020\u65B9\u6CD5</span>
        <span class="token class-name">Constructor</span><span class="token punctuation">[</span><span class="token punctuation">]</span> declaredConstructors <span class="token operator">=</span> stringClass<span class="token punctuation">.</span><span class="token function">getDeclaredConstructors</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>stringClass<span class="token punctuation">.</span><span class="token function">getDeclaredConstructor</span><span class="token punctuation">(</span><span class="token class-name">StringBuilder</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F7F\u7528\u53CD\u5C04\u7684\u65B9\u5F0F\u521B\u5EFA\u5B9E\u4F8B\u5BF9\u8C61\u7684\u4E24\u79CD\u65B9\u5F0F\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ConstructorDemo</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span><span class="token punctuation">{</span>
        <span class="token class-name">Class</span> dateClass <span class="token operator">=</span> <span class="token class-name">Date</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">;</span>
        <span class="token class-name">Constructor</span> constructor <span class="token operator">=</span> dateClass<span class="token punctuation">.</span><span class="token function">getConstructor</span><span class="token punctuation">(</span><span class="token keyword">long</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// \u901A\u8FC7Constructor\u7C7B\u7684\u65B9\u6CD5\u521B\u5EFA\u5B9E\u4F8B\u5BF9\u8C61</span>
        <span class="token class-name">Date</span> date <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Date</span><span class="token punctuation">)</span> constructor<span class="token punctuation">.</span><span class="token function">newInstance</span><span class="token punctuation">(</span><span class="token number">3600000L</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>date<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Thu Jan 01 09:00:00 CST 1970  3600000\u6BEB\u79D2\u4E3A\u4E00\u5C0F\u65F6</span>

        <span class="token comment">// \u901A\u8FC7Class\u7C7B\u7684\u65B9\u6CD5\u521B\u5EFA\u5B9E\u4F8B\u5BF9\u8C61</span>
        <span class="token class-name">Object</span> <span class="token class-name">DateInstance</span> <span class="token operator">=</span> <span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span><span class="token string">&quot;java.util.Date&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">newInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">Date</span><span class="token punctuation">)</span> <span class="token class-name">DateInstance</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Sat Nov 06 15:40:19 CST 2021</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-\u6210\u5458\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#_3-\u6210\u5458\u53D8\u91CF" aria-hidden="true">#</a> 3. \u6210\u5458\u53D8\u91CF</h2><p>**Field ** \u63D0\u4F9B\u6709\u5173\u7C7B\u6216\u63A5\u53E3\u7684\u5355\u4E2A\u5B57\u6BB5\u7684\u4FE1\u606F\uFF0C\u4EE5\u53CA\u5BF9\u5B83\u7684\u52A8\u6001\u8BBF\u95EE\u6743\u9650\u3002\u53CD\u5C04\u7684\u5B57\u6BB5\u53EF\u80FD\u662F\u4E00\u4E2A\u7C7B\uFF08\u9759\u6001\uFF09\u5B57\u6BB5\u6216\u5B9E\u4F8B\u5B57\u6BB5</p><p><code>java.lang.reflect.Field</code> \u4E3A\u6211\u4EEC\u63D0\u4F9B\u4E86\u83B7\u53D6\u5F53\u524D\u5BF9\u8C61\u7684\u6210\u5458\u53D8\u91CF\u7684\u7C7B\u578B\uFF0C\u548C\u91CD\u65B0\u8BBE\u503C\u7684\u65B9\u6CD5</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FieldDemo</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token class-name">Class</span> personClass <span class="token operator">=</span> <span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span><span class="token string">&quot;com.example.Person&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// \u83B7\u53D6\u7C7B\u7684\u5C5E\u6027</span>
        <span class="token class-name">Field</span><span class="token punctuation">[</span><span class="token punctuation">]</span> fields <span class="token operator">=</span> personClass<span class="token punctuation">.</span><span class="token function">getFields</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Field</span><span class="token punctuation">[</span><span class="token punctuation">]</span> declaredFields <span class="token operator">=</span> personClass<span class="token punctuation">.</span><span class="token function">getDeclaredFields</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Field</span> nameField <span class="token operator">=</span> personClass<span class="token punctuation">.</span><span class="token function">getField</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Field</span> ageField <span class="token operator">=</span> personClass<span class="token punctuation">.</span><span class="token function">getDeclaredField</span><span class="token punctuation">(</span><span class="token string">&quot;age&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// \u83B7\u53D6\u5B9E\u4F8B\u5BF9\u8C61\u7684\u503C</span>
        <span class="token class-name">Person</span> tom <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&quot;tom&quot;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> name <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">)</span>nameField<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>tom<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// \u8BBF\u95EEprivate\u4FEE\u9970\u7684\u5C5E\u6027</span>
        ageField<span class="token punctuation">.</span><span class="token function">setAccessible</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        ageField<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>tom<span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>ageField<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>tom<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-\u6210\u5458\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#_4-\u6210\u5458\u65B9\u6CD5" aria-hidden="true">#</a> 4. \u6210\u5458\u65B9\u6CD5</h2><p>getDeclaredMethod()\u83B7\u53D6\u65B9\u6CD5\uFF0C\u7136\u540Einvoke\u6267\u884C\u5B9E\u4F8B\u5BF9\u5E94\u7684\u65B9\u6CD5\uFF1A</p><ul><li><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token function">getDeclaredMethod</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> parameterTypes<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">MethodName</span><span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span><span class="token class-name">Object</span> obj<span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> args<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MethodDemo</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token class-name">Class</span> personClass <span class="token operator">=</span> <span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span><span class="token string">&quot;com.example.Person&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// \u83B7\u53D6\u6307\u5B9A\u7C7B\u7684\u65B9\u6CD5</span>
        <span class="token class-name">Method</span> say <span class="token operator">=</span> personClass<span class="token punctuation">.</span><span class="token function">getDeclaredMethod</span><span class="token punctuation">(</span><span class="token string">&quot;say&quot;</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Method</span><span class="token punctuation">[</span><span class="token punctuation">]</span> methods <span class="token operator">=</span> personClass<span class="token punctuation">.</span><span class="token function">getDeclaredMethods</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// Method \u6267\u884C\u65B9\u6CD5</span>
        say<span class="token punctuation">.</span><span class="token function">setAccessible</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        say<span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;method&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>say<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>Method\u7C7B\u7684\u65B9\u6CD5</th><th>\u4F5C\u7528</th></tr></thead><tbody><tr><td><code>getName()</code></td><td>\u83B7\u53D6\u65B9\u6CD5\u540D</td></tr><tr><td><code>isVarArgs()</code></td><td>\u5982\u679C\u8BE5\u65B9\u6CD5\u58F0\u660E\u4E3A\u91C7\u7528\u53EF\u53D8\u6570\u91CF\u7684\u53C2\u6570\uFF0C\u5219\u8FD4\u56DEtrue; \u5426\u5219\u8FD4\u56DEfalse</td></tr><tr><td><code>getModifiers()</code></td><td>\u83B7\u53D6\u6743\u9650\u4FEE\u9970\u7B26</td></tr><tr><td><code>getReturnType()</code></td><td>\u83B7\u53D6\u8FD4\u56DE\u7C7B\u578B</td></tr><tr><td><code>getExceptionTypes()</code></td><td>\u83B7\u53D6\u6240\u6709\u629B\u51FA\u7684\u5F02\u5E38\u7C7B\u578B</td></tr><tr><td><code>getGenericReturnType()</code></td><td>\u8FD4\u56DEType\u7C7B\u578B</td></tr><tr><td><code>getParameterTypes()</code></td><td>\u83B7\u53D6\u6240\u6709\u53C2\u6570\u7684\u7C7B\u578B</td></tr><tr><td><code>getParameterCount()</code></td><td>\u83B7\u53D6\u6240\u6709\u53C2\u6570\u7684\u4E2A\u6570</td></tr><tr><td><code>getAnnotations()</code></td><td>\u83B7\u53D6\u65B9\u6CD5\u7EA7\u522B\u7684\u6CE8\u89E3</td></tr><tr><td><code>getDeclaringClass ()</code></td><td>\u83B7\u53D6\u65B9\u6CD5\u6240\u5728\u7684\u7C7B\u4FE1\u606F</td></tr></tbody></table><h2 id="_5-\u6CE8\u610F\u4E8B\u9879" tabindex="-1"><a class="header-anchor" href="#_5-\u6CE8\u610F\u4E8B\u9879" aria-hidden="true">#</a> 5. \u6CE8\u610F\u4E8B\u9879</h2><p><code>setAccessible()</code> \u5E76\u4E0D\u662F\u5728Field\u4E2D\u7684\uFF0C\u800C\u662F\u5728AccessibleObject\u4E2D, AccessibleObject \u7C7B\u662F Field Method Constructor \u7C7B\u7684\u57FA\u7C7B\u3002</p><ul><li><p>\u5B83\u63D0\u4F9B\u53CD\u5C04\u5BF9\u8C61\u7ED5\u8FC7Java\u8BED\u8A00 <strong>\u6743\u9650\u63A7\u5236\u68C0\u67E5</strong> \u7684\u6743\u9650\u3002</p><p>\u5F53Fields Methods Constructors\u88AB\u7528\u6765set get \u5BF9\u8C61\u57DF\uFF0C\u8C03\u7528\u65B9\u6CD5\u6216\u8005\u4EA7\u751F\u521D\u59CB\u5316\u5BF9\u8C61\u5B9E\u4F8B\u7684\u65F6\u5019\u4F1A\u8DF5\u884C\u6743\u9650\u68C0\u67E5\uFF08public default(package) protected private\uFF09</p></li><li><p><strong>\u5C06\u53CD\u5C04\u5BF9\u8C61\u4E2D\u7684 accessible \u6807\u5FD7\u4F4D\u8BBE\u7F6E\u4E3A true\uFF0C\u5C31\u610F\u5473\u7740\u5141\u8BB8\u5BA2\u6237\u7AEF\u62E5\u6709\u8D85\u7EA7\u6743\u9650\uFF0C\u6BD4\u5982Java\u5BF9\u8C61\u5E8F\u5217\u5316 \u6216\u8005 \u5176\u4ED6\u6301\u4E45\u5316\u673A\u5236\u7B49\u901A\u5E38\u7981\u6B62\u7684\u673A\u5236</strong></p></li></ul><p><strong>\u5E26declared\u8DDF\u4E0D\u5E26\u7684API\u6709\u4EC0\u4E48\u533A\u522B</strong>\uFF1F</p><blockquote><p>\u4EE5Field\u4E3A\u4F8B\uFF1A</p><p>\u200B \u5E26declared\u80FD\u65E0\u89C6\u8BBF\u95EE\u6743\u9650\u83B7\u53D6\u81EA\u8EAB\u7C7B\u7684\u5168\u90E8\u5C5E\u6027\uFF08\u5305\u62ECprivate\u3001static\u4FEE\u9970\u7684\u5C5E\u6027\uFF09\uFF0C\u4F46\u53EA\u80FD\u83B7\u53D6\u672C\u7C7B\u7684\u6210\u5458</p><p>\u200B \u4E0D\u5E26\u7684\u53EA\u80FD\u83B7\u53D6\u81EA\u8EABpublic\u6240\u4FEE\u9970\u7684\u5C5E\u6027\uFF08\u4F46\u8FD8\u80FD\u83B7\u53D6\u7EE7\u627F\u81EA\u7236\u7C7B\u7684public\u6240\u4FEE\u9970\u7684\u5C5E\u6027\u3001\u540C\u6837\u5305\u62EC\u9759\u6001\u5C5E\u6027\uFF09</p></blockquote><h2 id="_6-\u53CD\u5C04\u7684\u5E94\u7528" tabindex="-1"><a class="header-anchor" href="#_6-\u53CD\u5C04\u7684\u5E94\u7528" aria-hidden="true">#</a> 6. \u53CD\u5C04\u7684\u5E94\u7528</h2><p>\u4E0BWEB\u5F00\u53D1\u4E2D\uFF0C\u6709\u5F88\u591A\u6280\u672F\u548C\u6846\u67B6\u5E95\u5C42\u90FD\u7528\u5230\u4E86\u53CD\u5C04\uFF0C\u4F8B\u5982\uFF1A</p><ul><li>JSP\u4E2D\u7684 <code>&lt;jsp:useBean&gt;</code> \u3001<code>&lt;jsp:setProperty&gt;</code> \u3001<code>&lt;jsp:getProperty&gt;</code> \u6807\u7B7E\u7684\u5E95\u5C42\u5B9E\u73B0</li></ul>`,22);function y(C,w){const a=l("ExternalLinkIcon");return c(),o("div",null,[u,n("p",null,[r,n("a",k,[d,t(a)])]),m,n("p",null,[v,n("a",b,[g,t(a)]),h]),f])}var x=p(i,[["render",y],["__file","Reflection.html.vue"]]);export{x as default};
