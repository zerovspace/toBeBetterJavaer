import{e as n}from"./app.d7a66746.js";import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";const s={},p=n(`<h1 id="java\u53D8\u91CF\u7684\u4F5C\u7528\u57DF-\u5C40\u90E8\u53D8\u91CF\u3001\u6210\u5458\u53D8\u91CF\u3001\u9759\u6001\u53D8\u91CF\u3001\u5E38\u91CF" tabindex="-1"><a class="header-anchor" href="#java\u53D8\u91CF\u7684\u4F5C\u7528\u57DF-\u5C40\u90E8\u53D8\u91CF\u3001\u6210\u5458\u53D8\u91CF\u3001\u9759\u6001\u53D8\u91CF\u3001\u5E38\u91CF" aria-hidden="true">#</a> Java\u53D8\u91CF\u7684\u4F5C\u7528\u57DF\uFF1A\u5C40\u90E8\u53D8\u91CF\u3001\u6210\u5458\u53D8\u91CF\u3001\u9759\u6001\u53D8\u91CF\u3001\u5E38\u91CF</h1><p>\u201C\u4E8C\u54E5\uFF0C\u542C\u8BF4 Java \u53D8\u91CF\u5728\u4EE5\u540E\u7684\u65E5\u5B50\u91CC\u7ECF\u5E38\u7528\uFF0C\u80FD\u4E0D\u80FD\u63D0\u524D\u7ED9\u6211\u900F\u9732\u900F\u9732\uFF1F\u201D\u4E09\u59B9\u54AA\u4E86\u4E00\u53E3\u9EA6\u9999\u53EF\u53EF\u5976\u8336\u540E\u5BF9\u6211\u8BF4\u3002</p><p>\u201C\u4E09\u59B9\u554A\uFF0C\u642C\u4E2A\u51F3\u5B50\u5750\u6211\u65C1\u8FB9\uFF0C\u542C\u4E8C\u54E5\u6765\u7ED9\u4F60\u6162\u6162\u8BF4\u554A\u3002\u201D</p><p>Java \u53D8\u91CF\u5C31\u597D\u50CF\u4E00\u4E2A\u5BB9\u5668\uFF0C\u53EF\u4EE5\u4FDD\u5B58\u7A0B\u5E8F\u5728\u8FD0\u884C\u8FC7\u7A0B\u4E2D\u7684\u503C\uFF0C\u5B83\u5728\u58F0\u660E\u7684\u65F6\u5019\u4F1A\u5B9A\u4E49\u5BF9\u5E94\u7684\u6570\u636E\u7C7B\u578B\uFF08Java \u5206\u4E3A\u4E24\u79CD\u6570\u636E\u7C7B\u578B\uFF1A\u57FA\u672C\u6570\u636E\u7C7B\u578B\u548C\u5F15\u7528\u6570\u636E\u7C7B\u578B\uFF09\u3002\u53D8\u91CF\u6309\u7167\u4F5C\u7528\u57DF\u7684\u8303\u56F4\u53C8\u53EF\u5206\u4E3A\u4E09\u79CD\u7C7B\u578B\uFF1A\u5C40\u90E8\u53D8\u91CF\uFF0C\u6210\u5458\u53D8\u91CF\u548C\u9759\u6001\u53D8\u91CF\u3002</p><p>\u6BD4\u5982\u8BF4\uFF0C<code>int data = 88;</code>\uFF0C\u5176\u4E2D data \u5C31\u662F\u4E00\u4E2A\u53D8\u91CF\uFF0C\u5B83\u7684\u503C\u4E3A 88\uFF0C\u7C7B\u578B\u4E3A\u6574\u578B\uFF08int\uFF09\u3002</p><h3 id="_01\u3001\u5C40\u90E8\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#_01\u3001\u5C40\u90E8\u53D8\u91CF" aria-hidden="true">#</a> 01\u3001\u5C40\u90E8\u53D8\u91CF</h3><p>\u5728\u65B9\u6CD5\u4F53\u5185\u58F0\u660E\u7684\u53D8\u91CF\u88AB\u79F0\u4E3A\u5C40\u90E8\u53D8\u91CF\uFF0C\u8BE5\u53D8\u91CF\u53EA\u80FD\u5728\u8BE5\u65B9\u6CD5\u5185\u4F7F\u7528\uFF0C\u7C7B\u4E2D\u7684\u5176\u4ED6\u65B9\u6CD5\u5E76\u4E0D\u77E5\u9053\u8BE5\u53D8\u91CF\u3002\u6765\u770B\u4E0B\u9762\u8FD9\u4E2A\u793A\u4F8B\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> \u5FAE\u4FE1\u641C\u300C\u6C89\u9ED8\u738B\u4E8C\u300D\uFF0C\u56DE\u590D\u5173\u952E\u5B57 PDF
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LocalVariable</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> b <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> c <span class="token operator">=</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u5176\u4E2D a\u3001b\u3001c \u5C31\u662F\u5C40\u90E8\u53D8\u91CF\uFF0C\u5B83\u4EEC\u53EA\u80FD\u5728\u5F53\u524D\u8FD9\u4E2A main \u65B9\u6CD5\u4E2D\u4F7F\u7528\u3002</p><p>\u58F0\u660E\u5C40\u90E8\u53D8\u91CF\u65F6\u7684\u6CE8\u610F\u4E8B\u9879\uFF1A</p><ul><li>\u5C40\u90E8\u53D8\u91CF\u58F0\u660E\u5728\u65B9\u6CD5\u3001\u6784\u9020\u65B9\u6CD5\u6216\u8005\u8BED\u53E5\u5757\u4E2D\u3002</li><li>\u5C40\u90E8\u53D8\u91CF\u5728\u65B9\u6CD5\u3001\u6784\u9020\u65B9\u6CD5\u3001\u6216\u8005\u8BED\u53E5\u5757\u88AB\u6267\u884C\u7684\u65F6\u5019\u521B\u5EFA\uFF0C\u5F53\u5B83\u4EEC\u6267\u884C\u5B8C\u6210\u540E\uFF0C\u5C06\u4F1A\u88AB\u9500\u6BC1\u3002</li><li>\u8BBF\u95EE\u4FEE\u9970\u7B26\u4E0D\u80FD\u7528\u4E8E\u5C40\u90E8\u53D8\u91CF\u3002</li><li>\u5C40\u90E8\u53D8\u91CF\u53EA\u5728\u58F0\u660E\u5B83\u7684\u65B9\u6CD5\u3001\u6784\u9020\u65B9\u6CD5\u6216\u8005\u8BED\u53E5\u5757\u4E2D\u53EF\u89C1\u3002</li><li>\u5C40\u90E8\u53D8\u91CF\u662F\u5728\u6808\u4E0A\u5206\u914D\u7684\u3002</li><li>\u5C40\u90E8\u53D8\u91CF\u6CA1\u6709\u9ED8\u8BA4\u503C\uFF0C\u6240\u4EE5\u5C40\u90E8\u53D8\u91CF\u88AB\u58F0\u660E\u540E\uFF0C\u5FC5\u987B\u7ECF\u8FC7\u521D\u59CB\u5316\uFF0C\u624D\u53EF\u4EE5\u4F7F\u7528\u3002</li></ul><h3 id="_02\u3001\u6210\u5458\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#_02\u3001\u6210\u5458\u53D8\u91CF" aria-hidden="true">#</a> 02\u3001\u6210\u5458\u53D8\u91CF</h3><p>\u5728\u7C7B\u5185\u90E8\u4F46\u5728\u65B9\u6CD5\u4F53\u5916\u58F0\u660E\u7684\u53D8\u91CF\u79F0\u4E3A\u6210\u5458\u53D8\u91CF\uFF0C\u6216\u8005\u5B9E\u4F8B\u53D8\u91CF\u3002\u4E4B\u6240\u4EE5\u79F0\u4E3A\u5B9E\u4F8B\u53D8\u91CF\uFF0C\u662F\u56E0\u4E3A\u8BE5\u53D8\u91CF\u53EA\u80FD\u901A\u8FC7\u7C7B\u7684\u5B9E\u4F8B\uFF08\u5BF9\u8C61\uFF09\u6765\u8BBF\u95EE\u3002\u6765\u770B\u4E0B\u9762\u8FD9\u4E2A\u793A\u4F8B\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> \u5FAE\u4FE1\u641C\u300C\u6C89\u9ED8\u738B\u4E8C\u300D\uFF0C\u56DE\u590D\u5173\u952E\u5B57 PDF
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">InstanceVariable</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> data <span class="token operator">=</span> <span class="token number">88</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">InstanceVariable</span> iv <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">InstanceVariable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>iv<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 88</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u5176\u4E2D iv \u662F\u4E00\u4E2A\u53D8\u91CF\uFF0C\u5B83\u662F\u4E00\u4E2A\u5F15\u7528\u7C7B\u578B\u7684\u53D8\u91CF\u3002<code>new</code> \u5173\u952E\u5B57\u53EF\u4EE5\u521B\u5EFA\u4E00\u4E2A\u7C7B\u7684\u5B9E\u4F8B\uFF08\u4E5F\u79F0\u4E3A\u5BF9\u8C61\uFF09\uFF0C\u901A\u8FC7\u201C=\u201D\u64CD\u4F5C\u7B26\u8D4B\u503C\u7ED9 iv \u8FD9\u4E2A\u53D8\u91CF\uFF0Civ \u5C31\u6210\u4E86\u8FD9\u4E2A\u5BF9\u8C61\u7684\u5F15\u7528\uFF0C\u901A\u8FC7 <code>iv.data</code> \u5C31\u53EF\u4EE5\u8BBF\u95EE\u6210\u5458\u53D8\u91CF\u4E86\u3002</p><p>\u58F0\u660E\u6210\u5458\u53D8\u91CF\u65F6\u7684\u6CE8\u610F\u4E8B\u9879\uFF1A</p><ul><li>\u6210\u5458\u53D8\u91CF\u58F0\u660E\u5728\u4E00\u4E2A\u7C7B\u4E2D\uFF0C\u4F46\u5728\u65B9\u6CD5\u3001\u6784\u9020\u65B9\u6CD5\u548C\u8BED\u53E5\u5757\u4E4B\u5916\u3002</li><li>\u5F53\u4E00\u4E2A\u5BF9\u8C61\u88AB\u5B9E\u4F8B\u5316\u4E4B\u540E\uFF0C\u6BCF\u4E2A\u6210\u5458\u53D8\u91CF\u7684\u503C\u5C31\u8DDF\u7740\u786E\u5B9A\u3002</li><li>\u6210\u5458\u53D8\u91CF\u5728\u5BF9\u8C61\u521B\u5EFA\u7684\u65F6\u5019\u521B\u5EFA\uFF0C\u5728\u5BF9\u8C61\u88AB\u9500\u6BC1\u7684\u65F6\u5019\u9500\u6BC1\u3002</li><li>\u6210\u5458\u53D8\u91CF\u7684\u503C\u5E94\u8BE5\u81F3\u5C11\u88AB\u4E00\u4E2A\u65B9\u6CD5\u3001\u6784\u9020\u65B9\u6CD5\u6216\u8005\u8BED\u53E5\u5757\u5F15\u7528\uFF0C\u4F7F\u5F97\u5916\u90E8\u80FD\u591F\u901A\u8FC7\u8FD9\u4E9B\u65B9\u5F0F\u83B7\u53D6\u5B9E\u4F8B\u53D8\u91CF\u4FE1\u606F\u3002</li><li>\u6210\u5458\u53D8\u91CF\u53EF\u4EE5\u58F0\u660E\u5728\u4F7F\u7528\u524D\u6216\u8005\u4F7F\u7528\u540E\u3002</li><li>\u8BBF\u95EE\u4FEE\u9970\u7B26\u53EF\u4EE5\u4FEE\u9970\u6210\u5458\u53D8\u91CF\u3002</li><li>\u6210\u5458\u53D8\u91CF\u5BF9\u4E8E\u7C7B\u4E2D\u7684\u65B9\u6CD5\u3001\u6784\u9020\u65B9\u6CD5\u6216\u8005\u8BED\u53E5\u5757\u662F\u53EF\u89C1\u7684\u3002\u4E00\u822C\u60C5\u51B5\u4E0B\u5E94\u8BE5\u628A\u6210\u5458\u53D8\u91CF\u8BBE\u4E3A\u79C1\u6709\u3002\u901A\u8FC7\u4F7F\u7528\u8BBF\u95EE\u4FEE\u9970\u7B26\u53EF\u4EE5\u4F7F\u6210\u5458\u53D8\u91CF\u5BF9\u5B50\u7C7B\u53EF\u89C1\uFF1B\u6210\u5458\u53D8\u91CF\u5177\u6709\u9ED8\u8BA4\u503C\u3002\u6570\u503C\u578B\u53D8\u91CF\u7684\u9ED8\u8BA4\u503C\u662F 0\uFF0C\u5E03\u5C14\u578B\u53D8\u91CF\u7684\u9ED8\u8BA4\u503C\u662F false\uFF0C\u5F15\u7528\u7C7B\u578B\u53D8\u91CF\u7684\u9ED8\u8BA4\u503C\u662F null\u3002\u53D8\u91CF\u7684\u503C\u53EF\u4EE5\u5728\u58F0\u660E\u65F6\u6307\u5B9A\uFF0C\u4E5F\u53EF\u4EE5\u5728\u6784\u9020\u65B9\u6CD5\u4E2D\u6307\u5B9A\u3002</li></ul><h3 id="_03\u3001\u9759\u6001\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#_03\u3001\u9759\u6001\u53D8\u91CF" aria-hidden="true">#</a> 03\u3001\u9759\u6001\u53D8\u91CF</h3><p>\u901A\u8FC7 static \u5173\u952E\u5B57\u58F0\u660E\u7684\u53D8\u91CF\u88AB\u79F0\u4E3A\u9759\u6001\u53D8\u91CF\uFF08\u7C7B\u53D8\u91CF\uFF09\uFF0C\u5B83\u53EF\u4EE5\u76F4\u63A5\u88AB\u7C7B\u8BBF\u95EE\uFF0C\u6765\u770B\u4E0B\u9762\u8FD9\u4E2A\u793A\u4F8B\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> \u5FAE\u4FE1\u641C\u300C\u6C89\u9ED8\u738B\u4E8C\u300D\uFF0C\u56DE\u590D\u5173\u952E\u5B57 PDF
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">StaticVariable</span> <span class="token punctuation">{</span>
    <span class="token keyword">static</span> <span class="token keyword">int</span> data <span class="token operator">=</span> <span class="token number">99</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">StaticVariable</span><span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 99</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u5176\u4E2D data \u5C31\u662F\u9759\u6001\u53D8\u91CF\uFF0C\u901A\u8FC7<code>\u7C7B\u540D.\u9759\u6001\u53D8\u91CF</code>\u5C31\u53EF\u4EE5\u8BBF\u95EE\u4E86\uFF0C\u4E0D\u9700\u8981\u521B\u5EFA\u7C7B\u7684\u5B9E\u4F8B\u3002</p><p>\u58F0\u660E\u9759\u6001\u53D8\u91CF\u65F6\u7684\u6CE8\u610F\u4E8B\u9879\uFF1A</p><ul><li>\u9759\u6001\u53D8\u91CF\u5728\u7C7B\u4E2D\u4EE5 static \u5173\u952E\u5B57\u58F0\u660E\uFF0C\u4F46\u5FC5\u987B\u5728\u65B9\u6CD5\u6784\u9020\u65B9\u6CD5\u548C\u8BED\u53E5\u5757\u4E4B\u5916\u3002</li><li>\u65E0\u8BBA\u4E00\u4E2A\u7C7B\u521B\u5EFA\u4E86\u591A\u5C11\u4E2A\u5BF9\u8C61\uFF0C\u7C7B\u53EA\u62E5\u6709\u9759\u6001\u53D8\u91CF\u7684\u4E00\u4EFD\u62F7\u8D1D\u3002</li><li>\u9759\u6001\u53D8\u91CF\u9664\u4E86\u88AB\u58F0\u660E\u4E3A\u5E38\u91CF\u5916\u5F88\u5C11\u4F7F\u7528\u3002</li><li>\u9759\u6001\u53D8\u91CF\u50A8\u5B58\u5728\u9759\u6001\u5B58\u50A8\u533A\u3002</li><li>\u9759\u6001\u53D8\u91CF\u5728\u7A0B\u5E8F\u5F00\u59CB\u65F6\u521B\u5EFA\uFF0C\u5728\u7A0B\u5E8F\u7ED3\u675F\u65F6\u9500\u6BC1\u3002</li><li>\u4E0E\u6210\u5458\u53D8\u91CF\u5177\u6709\u76F8\u4F3C\u7684\u53EF\u89C1\u6027\u3002\u4F46\u4E3A\u4E86\u5BF9\u7C7B\u7684\u4F7F\u7528\u8005\u53EF\u89C1\uFF0C\u5927\u591A\u6570\u9759\u6001\u53D8\u91CF\u58F0\u660E\u4E3A public \u7C7B\u578B\u3002</li><li>\u9759\u6001\u53D8\u91CF\u7684\u9ED8\u8BA4\u503C\u548C\u5B9E\u4F8B\u53D8\u91CF\u76F8\u4F3C\u3002</li><li>\u9759\u6001\u53D8\u91CF\u8FD8\u53EF\u4EE5\u5728\u9759\u6001\u8BED\u53E5\u5757\u4E2D\u521D\u59CB\u5316\u3002</li></ul><h3 id="_04\u3001\u5E38\u91CF" tabindex="-1"><a class="header-anchor" href="#_04\u3001\u5E38\u91CF" aria-hidden="true">#</a> 04\u3001\u5E38\u91CF</h3><p>\u5728 Java \u4E2D\uFF0C\u6709\u4E9B\u6570\u636E\u7684\u503C\u662F\u4E0D\u4F1A\u53D1\u751F\u6539\u53D8\u7684\uFF0C\u8FD9\u4E9B\u6570\u636E\u88AB\u53EB\u505A\u5E38\u91CF\u2014\u2014\u4F7F\u7528 final \u5173\u952E\u5B57\u4FEE\u9970\u7684\u6210\u5458\u53D8\u91CF\u3002\u5E38\u91CF\u7684\u503C\u4E00\u65E6\u7ED9\u5B9A\u5C31\u65E0\u6CD5\u6539\u53D8\uFF01</p><p>\u5E38\u91CF\u5728\u7A0B\u5E8F\u8FD0\u884C\u8FC7\u7A0B\u4E2D\u4E3B\u8981\u6709 2 \u4E2A\u4F5C\u7528\uFF1A</p><ul><li><p>\u4EE3\u8868\u5E38\u6570\uFF0C\u4FBF\u4E8E\u4FEE\u6539\uFF08\u4F8B\u5982\uFF1A\u5706\u5468\u7387\u7684\u503C\uFF0C<code>final double PI = 3.14</code>\uFF09</p></li><li><p>\u589E\u5F3A\u7A0B\u5E8F\u7684\u53EF\u8BFB\u6027\uFF08\u4F8B\u5982\uFF1A\u5E38\u91CF UP\u3001DOWN \u7528\u6765\u4EE3\u8868\u4E0A\u548C\u4E0B\uFF0C<code>final int UP = 0</code>\uFF09</p></li></ul><p>Java \u8981\u6C42\u5E38\u91CF\u540D\u5FC5\u987B\u5927\u5199\u3002\u6765\u770B\u4E0B\u9762\u8FD9\u4E2A\u793A\u4F8B\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> \u5FAE\u4FE1\u641C\u300C\u6C89\u9ED8\u738B\u4E8C\u300D\uFF0C\u56DE\u590D\u5173\u952E\u5B57 PDF
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FinalVariable</span> <span class="token punctuation">{</span>
    <span class="token keyword">final</span> <span class="token class-name">String</span> CHEN <span class="token operator">=</span> <span class="token string">&quot;\u6C89&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> MO <span class="token operator">=</span> <span class="token string">&quot;\u9ED8&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">FinalVariable</span> fv <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FinalVariable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>fv<span class="token punctuation">.</span>CHEN<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>MO<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u201C\u597D\u4E86\uFF0C\u4E09\u59B9\uFF0C\u5173\u4E8E Java \u53D8\u91CF\u5C31\u5148\u8BF4\u8FD9\u4E48\u591A\u5427\uFF0C\u4F60\u662F\u4E0D\u662F\u5DF2\u7ECF\u6E05\u695A\u4E86\uFF1F\u201D\u8F6C\u52A8\u4E86\u4E00\u4E0B\u50F5\u786C\u7684\u8116\u5B50\u540E\uFF0C\u6211\u5BF9\u4E09\u59B9\u8BF4\u3002</p><p>\u201C\u662F\u554A\uFF0C\u4E8C\u54E5\uFF0C\u6211\u60F3\u4EE5\u540E\u8FD8\u4F1A\u518D\u89C1\u5230\u5B83\u4EEC\u5427\uFF1F\u201D</p><p>\u201C\u90A3\u89C1\u7684\u6B21\u6570\u53EF\u5C31\u591A\u4E86\uFF0C\u5C31\u597D\u50CF\u4F60\u6BCF\u5929\u7728\u773C\u7684\u6B21\u6570\u4E00\u6837\u591A\u3002\u201D</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xingbiaogongzhonghao.png" alt=""></p>`,33);function e(t,c){return p}var i=a(s,[["render",e],["__file","var.html.vue"]]);export{i as default};
