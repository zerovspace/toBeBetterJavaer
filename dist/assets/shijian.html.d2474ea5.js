import{r as t,o as e,c as o,a as s,b as c,F as l,e as a,d as n}from"./app.d7a66746.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";const i={},r=a(`<h1 id="java\u5F02\u5E38\u5904\u7406\u768420\u4E2A\u6700\u4F73\u5B9E\u8DF5" tabindex="-1"><a class="header-anchor" href="#java\u5F02\u5E38\u5904\u7406\u768420\u4E2A\u6700\u4F73\u5B9E\u8DF5" aria-hidden="true">#</a> Java\u5F02\u5E38\u5904\u7406\u768420\u4E2A\u6700\u4F73\u5B9E\u8DF5</h1><p>\u201C\u4E09\u59B9\u554A\uFF0C\u4ECA\u5929\u6211\u6765\u7ED9\u4F60\u4F20\u6388\u51E0\u4E2A\u5F02\u5E38\u5904\u7406\u7684\u6700\u4F73\u5B9E\u8DF5\u7ECF\u9A8C\uFF0C\u4EE5\u514D\u4F60\u4EE5\u540E\u5728\u5F00\u53D1\u4E2D\u91C7\u5751\u3002\u201D\u6211\u9762\u5E26\u7740\u5FAE\u7B11\u5BF9\u4E09\u59B9\u8BF4\u3002</p><p>\u201C\u597D\u554A\uFF0C\u4E8C\u54E5\uFF0C\u6211\u6D17\u8033\u606D\u542C\u3002\u201D\u4E09\u59B9\u4E5F\u5FAE\u5FAE\u4E00\u7B11\uFF0C\u6B23\u7136\u63A5\u53D7\u3002</p><p>\u201C\u597D\uFF0C\u90A3\u54E5\u5C31\u4E0D\u5E9F\u8BDD\u4E86\u3002\u5F00\u6574\u3002\u201D</p><hr><p><strong>1\uFF09\u5C3D\u91CF\u4E0D\u8981\u6355\u83B7 RuntimeException</strong></p><p>\u963F\u91CC\u51FA\u54C1\u7684\u5D69\u5C71\u7248 Java \u5F00\u53D1\u624B\u518C\u4E0A\u8FD9\u6837\u89C4\u5B9A\uFF1A</p><blockquote><p>\u5C3D\u91CF\u4E0D\u8981 catch RuntimeException\uFF0C\u6BD4\u5982 NullPointerException\u3001IndexOutOfBoundsException \u7B49\u7B49\uFF0C\u5E94\u8BE5\u7528\u9884\u68C0\u67E5\u7684\u65B9\u5F0F\u6765\u89C4\u907F\u3002</p></blockquote><p>\u6B63\u4F8B\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>obj <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">//...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u53CD\u4F8B\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">try</span> <span class="token punctuation">{</span> 
  obj<span class="token punctuation">.</span><span class="token function">method</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">NullPointerException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">//...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u201C\u54E6\uFF0C\u90A3\u5982\u679C\u6709\u4E9B\u5F02\u5E38\u9884\u68C0\u67E5\u4E0D\u51FA\u6765\u5462\uFF1F\u201D\u4E09\u59B9\u95EE\u3002</p><p>\u201C\u7684\u786E\u4F1A\u5B58\u5728\u8FD9\u6837\u7684\u60C5\u51B5\uFF0C\u6BD4\u5982\u8BF4 NumberFormatException\uFF0C\u867D\u7136\u4E5F\u5C5E\u4E8E RuntimeException\uFF0C\u4F46\u6CA1\u529E\u6CD5\u9884\u68C0\u67E5\uFF0C\u6240\u4EE5\u8FD8\u662F\u5E94\u8BE5\u7528 catch \u6355\u83B7\u5904\u7406\u3002\u201D\u6211\u8BF4\u3002</p><p><strong>2\uFF09\u5C3D\u91CF\u4F7F\u7528 try-with-resource \u6765\u5173\u95ED\u8D44\u6E90</strong></p><p>\u5F53\u9700\u8981\u5173\u95ED\u8D44\u6E90\u65F6\uFF0C\u5C3D\u91CF\u4E0D\u8981\u4F7F\u7528 try-catch-finally\uFF0C\u7981\u6B62\u5728 try \u5757\u4E2D\u76F4\u63A5\u5173\u95ED\u8D44\u6E90\u3002</p><p>\u53CD\u4F8B\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">doNotCloseResourceInTry</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">FileInputStream</span> inputStream <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token class-name">File</span> file <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">&quot;./tmp.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        inputStream <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">;</span>
        inputStream<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">FileNotFoundException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u201C\u4E3A\u4EC0\u4E48\u5462\uFF1F\u201D\u4E09\u59B9\u95EE\u3002</p>`,19),k=n("\u201C\u539F\u56E0\u4E5F\u5F88\u7B80\u5355\uFF0C\u56E0\u4E3A\u4E00\u65E6 "),b=s("code",null,"close()",-1),m=n(" \u4E4B\u524D\u53D1\u751F\u4E86\u5F02\u5E38\uFF0C\u90A3\u4E48\u8D44\u6E90\u5C31\u65E0\u6CD5\u5173\u95ED\u3002\u76F4\u63A5\u4F7F\u7528 "),d={href:"https://mp.weixin.qq.com/s/7yhHOG0SVCfoHdhtZHfeVg",target:"_blank",rel:"noopener noreferrer"},v=n("try-with-resource"),y=n(" \u6765\u5904\u7406\u662F\u6700\u4F73\u65B9\u5F0F\u3002\u201D\u6211\u8BF4\u3002"),g=a(`<div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">automaticallyCloseResource</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">File</span> file <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">&quot;./tmp.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">try</span> <span class="token punctuation">(</span><span class="token class-name">FileInputStream</span> inputStream <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">FileNotFoundException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u201C\u9664\u975E\u8D44\u6E90\u6CA1\u6709\u5B9E\u73B0 AutoCloseable \u63A5\u53E3\u3002\u201D\u6211\u8865\u5145\u9053\u3002</p><p>\u201C\u90A3\u8FD9\u79CD\u60C5\u51B5\u4E0B\u600E\u4E48\u529E\u5462\uFF1F\u201D\u4E09\u59B9\u95EE\u3002</p><p>\u201C\u5C31\u5728 finally \u5757\u5173\u95ED\u6D41\u3002\u201D\u6211\u8BF4\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">closeResourceInFinally</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">FileInputStream</span> inputStream <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token class-name">File</span> file <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">&quot;./tmp.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        inputStream <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">FileNotFoundException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>inputStream <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                inputStream<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                log<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p><strong>3\uFF09\u4E0D\u8981\u6355\u83B7 Throwable</strong></p><p>Throwable \u662F exception \u548C error \u7684\u7236\u7C7B\uFF0C\u5982\u679C\u5728 catch \u5B50\u53E5\u4E2D\u6355\u83B7\u4E86 Throwable\uFF0C\u5F88\u53EF\u80FD\u628A\u8D85\u51FA\u7A0B\u5E8F\u5904\u7406\u80FD\u529B\u4E4B\u5916\u7684\u9519\u8BEF\u4E5F\u6355\u83B7\u4E86\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">doNotCatchThrowable</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Throwable</span> t<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u4E0D\u8981\u8FD9\u6837\u505A</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u201C\u5230\u5E95\u4E3A\u4EC0\u4E48\u554A\uFF1F\u201D\u4E09\u59B9\u95EE\u3002</p><p>\u201C\u56E0\u4E3A\u6709\u4E9B error \u662F\u4E0D\u9700\u8981\u7A0B\u5E8F\u6765\u5904\u7406\uFF0C\u7A0B\u5E8F\u53EF\u80FD\u4E5F\u5904\u7406\u4E0D\u4E86\uFF0C\u6BD4\u5982\u8BF4 OutOfMemoryError \u6216\u8005 StackOverflowError\uFF0C\u524D\u8005\u662F\u56E0\u4E3A Java \u865A\u62DF\u673A\u65E0\u6CD5\u7533\u8BF7\u5230\u8DB3\u591F\u7684\u5185\u5B58\u7A7A\u95F4\u65F6\u51FA\u73B0\u7684\u975E\u6B63\u5E38\u7684\u9519\u8BEF\uFF0C\u540E\u8005\u662F\u56E0\u4E3A\u7EBF\u7A0B\u7533\u8BF7\u7684\u6808\u6DF1\u5EA6\u8D85\u8FC7\u4E86\u5141\u8BB8\u7684\u6700\u5927\u6DF1\u5EA6\u51FA\u73B0\u7684\u975E\u6B63\u5E38\u9519\u8BEF\uFF0C\u5982\u679C\u6355\u83B7\u4E86\uFF0C\u5C31\u63A9\u76D6\u4E86\u7A0B\u5E8F\u5E94\u8BE5\u88AB\u53D1\u73B0\u7684\u4E25\u91CD\u9519\u8BEF\u3002\u201D\u6211\u8BF4\u3002</p><p>\u201C\u6253\u4E2A\u6BD4\u65B9\uFF0C\u4E00\u5339\u9A6C\u53EA\u80FD\u62C9\u4E00\u8F66\u53A2\u7684\u8D27\u7269\uFF0C\u62C9\u4E24\u8F66\u53A2\u53EF\u80FD\u5C31\u6302\u4E86\uFF0C\u4F46\u4E00 catch\uFF0C\u5C31\u53D1\u73B0\u4E0D\u4E86\u95EE\u9898\u4E86\u3002\u201D\u6211\u8865\u5145\u9053\u3002</p><p><strong>4\uFF09\u4E0D\u8981\u7701\u7565\u5F02\u5E38\u4FE1\u606F\u7684\u8BB0\u5F55</strong></p><p>\u5F88\u591A\u65F6\u5019\uFF0C\u7531\u4E8E\u758F\u5FFD\u5927\u610F\uFF0C\u5F00\u53D1\u8005\u5F88\u5BB9\u6613\u6355\u83B7\u4E86\u5F02\u5E38\u5374\u6CA1\u6709\u8BB0\u5F55\u5F02\u5E38\u4FE1\u606F\uFF0C\u5BFC\u81F4\u7A0B\u5E8F\u4E0A\u7EBF\u540E\u771F\u7684\u51FA\u73B0\u4E86\u95EE\u9898\u5374\u6CA1\u6709\u8BB0\u5F55\u53EF\u67E5\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">doNotIgnoreExceptions</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">NumberFormatException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u6CA1\u6709\u8BB0\u5F55\u5F02\u5E38</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u5E94\u8BE5\u628A\u9519\u8BEF\u4FE1\u606F\u8BB0\u5F55\u4E0B\u6765\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">logAnException</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">NumberFormatException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;\u54E6\uFF0C\u9519\u8BEF\u7ADF\u7136\u53D1\u751F\u4E86: &quot;</span> <span class="token operator">+</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><strong>5\uFF09\u4E0D\u8981\u8BB0\u5F55\u4E86\u5F02\u5E38\u53C8\u629B\u51FA\u4E86\u5F02\u5E38</strong></p><p>\u8FD9\u7EAF\u5C5E\u753B\u86C7\u6DFB\u8DB3\uFF0C\u5E76\u4E14\u5BB9\u6613\u9020\u6210\u9519\u8BEF\u4FE1\u606F\u7684\u6DF7\u4E71\u3002</p><p>\u53CD\u4F8B\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">try</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">NumberFormatException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    log<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">throw</span> e<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u8981\u629B\u51FA\u5C31\u629B\u51FA\uFF0C\u4E0D\u8981\u8BB0\u5F55\uFF0C\u8BB0\u5F55\u4E86\u53C8\u629B\u51FA\uFF0C\u7B49\u4E8E\u591A\u6B64\u4E00\u4E3E\u3002</p><p>\u53CD\u4F8B\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">wrapException</span><span class="token punctuation">(</span><span class="token class-name">String</span> input<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">MyBusinessException</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">NumberFormatException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">MyBusinessException</span><span class="token punctuation">(</span><span class="token string">&quot;\u9519\u8BEF\u4FE1\u606F\u63CF\u8FF0\uFF1A&quot;</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u8FD9\u79CD\u4E5F\u662F\u4E00\u6837\u7684\u9053\u7406\uFF0C\u65E2\u7136\u5DF2\u7ECF\u6355\u83B7\u4E86\uFF0C\u5C31\u4E0D\u8981\u5728\u65B9\u6CD5\u7B7E\u540D\u4E0A\u629B\u51FA\u4E86\u3002</p><p><strong>6\uFF09\u4E0D\u8981\u5728 finally \u5757\u4E2D\u4F7F\u7528 return</strong></p><p>\u963F\u91CC\u51FA\u54C1\u7684\u5D69\u5C71\u7248 Java \u5F00\u53D1\u624B\u518C\u4E0A\u8FD9\u6837\u89C4\u5B9A\uFF1A</p><blockquote><p>try \u5757\u4E2D\u7684 return \u8BED\u53E5\u6267\u884C\u6210\u529F\u540E\uFF0C\u5E76\u4E0D\u4F1A\u9A6C\u4E0A\u8FD4\u56DE\uFF0C\u800C\u662F\u7EE7\u7EED\u6267\u884C finally \u5757\u4E2D\u7684\u8BED\u53E5\uFF0C\u5982\u679C finally \u5757\u4E2D\u4E5F\u5B58\u5728 return \u8BED\u53E5\uFF0C\u90A3\u4E48 try \u5757\u4E2D\u7684 return \u5C31\u5C06\u88AB\u8986\u76D6\u3002</p></blockquote><p>\u53CD\u4F8B\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">private</span> <span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">checkReturn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token operator">++</span>x<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token operator">++</span>x<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u201C\u54E6\uFF0C\u786E\u5B9E\u554A\uFF0Ctry \u5757\u4E2D x \u8FD4\u56DE\u7684\u503C\u4E3A 1\uFF0C\u5230\u4E86 finally \u5757\u4E2D\u5C31\u8FD4\u56DE 2 \u4E86\u3002\u201D\u4E09\u59B9\u8BF4\u3002</p><p>\u201C\u662F\u8FD9\u6837\u7684\u3002\u201D\u6211\u70B9\u70B9\u5934\u3002</p><hr><p>\u201C\u597D\u4E86\uFF0C\u4E09\u59B9\uFF0C\u5173\u4E8E\u5F02\u5E38\u5904\u7406\u5B9E\u8DF5\u5C31\u5148\u8BB2\u8FD9 6 \u6761\u5427\uFF0C\u5B9E\u9645\u5F00\u53D1\u4E2D\u4F60\u8FD8\u4F1A\u78B0\u5230\u5176\u4ED6\u7684\u4E00\u4E9B\u5751\uFF0C\u81EA\u5DF1\u8E29\u4E00\u8E29\u53EF\u80FD\u5370\u8C61\u66F4\u6DF1\u523B\u4E00\u4E9B\u3002\u201D\u6211\u8BF4\u3002</p><p>\u201C\u90A3\u4E07\u4E00\u5230\u65F6\u5019\u6211\u5DE5\u4F5C\u540E\u88AB\u9886\u5BFC\u9A82\u4E86\u600E\u4E48\u529E\uFF1F\u201D\u4E09\u59B9\u59D4\u5C48\u5730\u8BF4\u3002</p><p>\u201C\u65B0\u4EBA\u561B\uFF0C\u603B\u8981\u5199\u51E0\u4E2A bug \u624D\u80FD\u5BF9\u5F97\u8D77\u65B0\u4EBA\u8FD9\u4E2A\u79F0\u53F7\u561B\u3002\u201D\u6211\u8F7B\u63CF\u6DE1\u5199\u5730\u8BF4\u3002</p><p>\u201C\u597D\u5427\u3002\u201D\u4E09\u59B9\u65E0\u5948\u5730\u53F9\u4E86\u53E3\u6C14\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xingbiaogongzhonghao.png" alt=""></p>`,37);function w(h,f){const p=t("ExternalLinkIcon");return e(),o(l,null,[r,s("p",null,[k,b,m,s("a",d,[v,c(p)]),y]),g],64)}var _=u(i,[["render",w],["__file","shijian.html.vue"]]);export{_ as default};
