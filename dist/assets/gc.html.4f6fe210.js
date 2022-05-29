import{e as a}from"./app.d7a66746.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";const s={},p=a(`<h1 id="\u54B1\u4EEC\u4ECE\u5934\u5230\u5C3E\u8BF4\u4E00\u6B21java\u5783\u573E\u56DE\u6536" tabindex="-1"><a class="header-anchor" href="#\u54B1\u4EEC\u4ECE\u5934\u5230\u5C3E\u8BF4\u4E00\u6B21java\u5783\u573E\u56DE\u6536" aria-hidden="true">#</a> \u54B1\u4EEC\u4ECE\u5934\u5230\u5C3E\u8BF4\u4E00\u6B21Java\u5783\u573E\u56DE\u6536</h1><p>\u4E4B\u524D\u4E0A\u5B66\u7684\u65F6\u5019\u6709\u8FD9\u4E2A\u4E00\u4E2A\u6897\uFF0C\u8BF4\u5728\u98DF\u5802\u91CC\u5403\u996D\uFF0C\u5403\u5B8C\u628A\u9910\u76D8\u7AEF\u8D70\u6E05\u7406\u7684\uFF0C\u662F C++ \u7A0B\u5E8F\u5458\uFF0C\u5403\u5B8C\u76F4\u63A5\u5C31\u8D70\u7684\uFF0C\u662F Java \u7A0B\u5E8F\u5458\u3002</p><p>\u786E\u5B9E\uFF0C\u5728 Java \u7684\u4E16\u754C\u91CC\uFF0C\u4F3C\u4E4E\u6211\u4EEC\u4E0D\u7528\u5BF9\u5783\u573E\u56DE\u6536\u90A3\u4E48\u7684\u4E13\u6CE8\uFF0C\u5F88\u591A\u521D\u5B66\u8005\u4E0D\u61C2 GC\uFF0C\u4E5F\u4F9D\u7136\u80FD\u5199\u51FA\u4E00\u4E2A\u80FD\u7528\u751A\u81F3\u8FD8\u4E0D\u9519\u7684\u7A0B\u5E8F\u6216\u7CFB\u7EDF\u3002\u4F46\u5176\u5B9E\u8FD9\u5E76\u4E0D\u4EE3\u8868 Java \u7684 GC \u5C31\u4E0D\u91CD\u8981\u3002\u76F8\u53CD\uFF0C\u5B83\u662F\u90A3\u4E48\u7684\u91CD\u8981\u548C\u590D\u6742\uFF0C\u4EE5\u81F3\u4E8E\u51FA\u4E86\u95EE\u9898\uFF0C\u90A3\u4E9B\u521D\u5B66\u8005\u9664\u4E86\u6253\u5F00 GC \u65E5\u5FD7\uFF0C\u770B\u7740\u4E00\u58060101\u7684\u5929\u6587\uFF0C\u5565\u4E5F\u505A\u4E0D\u4E86\u3002</p><p>\u4ECA\u5929\u6211\u4EEC\u5C31\u4ECE\u5934\u5230\u5C3E\u5B8C\u6574\u5730\u804A\u4E00\u804A Java \u7684\u5783\u573E\u56DE\u6536\u3002</p><h3 id="\u4EC0\u4E48\u662F\u5783\u573E\u56DE\u6536" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48\u662F\u5783\u573E\u56DE\u6536" aria-hidden="true">#</a> \u4EC0\u4E48\u662F\u5783\u573E\u56DE\u6536</h3><ul><li>\u5783\u573E\u56DE\u6536\uFF08Garbage Collection\uFF0CGC\uFF09\uFF0C\u987E\u540D\u601D\u4E49\u5C31\u662F\u91CA\u653E\u5783\u573E\u5360\u7528\u7684\u7A7A\u95F4\uFF0C\u9632\u6B62\u5185\u5B58\u6CC4\u9732\u3002\u6709\u6548\u7684\u4F7F\u7528\u53EF\u4EE5\u4F7F\u7528\u7684\u5185\u5B58\uFF0C\u5BF9\u5185\u5B58\u5806\u4E2D\u5DF2\u7ECF\u6B7B\u4EA1\u7684\u6216\u8005\u957F\u65F6\u95F4\u6CA1\u6709\u4F7F\u7528\u7684\u5BF9\u8C61\u8FDB\u884C\u6E05\u9664\u548C\u56DE\u6536\u3002</li><li>Java \u8BED\u8A00\u51FA\u6765\u4E4B\u524D\uFF0C\u5927\u5BB6\u90FD\u5728\u62FC\u547D\u7684\u5199 C \u6216\u8005 C++ \u7684\u7A0B\u5E8F\uFF0C\u800C\u6B64\u65F6\u5B58\u5728\u4E00\u4E2A\u5F88\u5927\u7684\u77DB\u76FE\uFF0CC++ \u7B49\u8BED\u8A00\u521B\u5EFA\u5BF9\u8C61\u8981\u4E0D\u65AD\u7684\u53BB\u5F00\u8F9F\u7A7A\u95F4\uFF0C\u4E0D\u7528\u7684\u65F6\u5019\u53C8\u9700\u8981\u4E0D\u65AD\u7684\u53BB\u91CA\u653E\u63A7\u4EF6\uFF0C\u65E2\u8981\u5199\u6784\u9020\u51FD\u6570\uFF0C\u53C8\u8981\u5199\u6790\u6784\u51FD\u6570\uFF0C\u5F88\u591A\u65F6\u5019\u90FD\u5728\u91CD\u590D\u7684 allocated\uFF0C\u7136\u540E\u4E0D\u505C\u7684\u6790\u6784\u3002\u4E8E\u662F\uFF0C\u6709\u4EBA\u5C31\u63D0\u51FA\uFF0C\u80FD\u4E0D\u80FD\u5199\u4E00\u6BB5\u7A0B\u5E8F\u5B9E\u73B0\u8FD9\u5757\u529F\u80FD\uFF0C\u6BCF\u6B21\u521B\u5EFA\uFF0C\u91CA\u653E\u63A7\u4EF6\u7684\u65F6\u5019\u590D\u7528\u8FD9\u6BB5\u4EE3\u7801\uFF0C\u800C\u65E0\u9700\u91CD\u590D\u7684\u4E66\u5199\u5462\uFF1F</li><li>1960\u5E74\uFF0C\u57FA\u4E8E MIT \u7684 Lisp \u9996\u5148\u63D0\u51FA\u4E86\u5783\u573E\u56DE\u6536\u7684\u6982\u5FF5\uFF0C\u7528\u4E8E\u5904\u7406C\u8BED\u8A00\u7B49\u4E0D\u505C\u7684\u6790\u6784\u64CD\u4F5C\uFF0C\u800C\u8FD9\u65F6 Java \u8FD8\u6CA1\u6709\u51FA\u4E16\u5462\uFF01\u6240\u4EE5\u5B9E\u9645\u4E0A GC \u5E76\u4E0D\u662FJava\u7684\u4E13\u5229\uFF0CGC \u7684\u5386\u53F2\u8FDC\u8FDC\u5927\u4E8E Java \u7684\u5386\u53F2\uFF01</li></ul><h3 id="\u600E\u4E48\u5B9A\u4E49\u5783\u573E" tabindex="-1"><a class="header-anchor" href="#\u600E\u4E48\u5B9A\u4E49\u5783\u573E" aria-hidden="true">#</a> \u600E\u4E48\u5B9A\u4E49\u5783\u573E</h3><p>\u65E2\u7136\u6211\u4EEC\u8981\u505A\u5783\u573E\u56DE\u6536\uFF0C\u9996\u5148\u6211\u4EEC\u5F97\u641E\u6E05\u695A\u5783\u573E\u7684\u5B9A\u4E49\u662F\u4EC0\u4E48\uFF0C\u54EA\u4E9B\u5185\u5B58\u662F\u9700\u8981\u56DE\u6536\u7684\u3002</p><p><strong>\u5F15\u7528\u8BA1\u6570\u7B97\u6CD5</strong> \u5F15\u7528\u8BA1\u6570\u7B97\u6CD5\uFF08Reachability Counting\uFF09\u662F\u901A\u8FC7\u5728\u5BF9\u8C61\u5934\u4E2D\u5206\u914D\u4E00\u4E2A\u7A7A\u95F4\u6765\u4FDD\u5B58\u8BE5\u5BF9\u8C61\u88AB\u5F15\u7528\u7684\u6B21\u6570\uFF08Reference Count\uFF09\u3002\u5982\u679C\u8BE5\u5BF9\u8C61\u88AB\u5176\u5B83\u5BF9\u8C61\u5F15\u7528\uFF0C\u5219\u5B83\u7684\u5F15\u7528\u8BA1\u6570\u52A01\uFF0C\u5982\u679C\u5220\u9664\u5BF9\u8BE5\u5BF9\u8C61\u7684\u5F15\u7528\uFF0C\u90A3\u4E48\u5B83\u7684\u5F15\u7528\u8BA1\u6570\u5C31\u51CF1\uFF0C\u5F53\u8BE5\u5BF9\u8C61\u7684\u5F15\u7528\u8BA1\u6570\u4E3A0\u65F6\uFF0C\u90A3\u4E48\u8BE5\u5BF9\u8C61\u5C31\u4F1A\u88AB\u56DE\u6536\u3002</p><p><strong>String m = new String(&quot;jack&quot;);</strong></p><p>\u5148\u521B\u5EFA\u4E00\u4E2A\u5B57\u7B26\u4E32\uFF0C\u8FD9\u65F6\u5019&quot;jack&quot;\u6709\u4E00\u4E2A\u5F15\u7528\uFF0C\u5C31\u662F m\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/jvm/gc-691109d2-bee4-4a79-8da6-87c5fd233f54.jpg" alt=""></p><p>\u7136\u540E\u5C06 m \u8BBE\u7F6E\u4E3A null\uFF0C\u8FD9\u65F6\u5019&quot;jack&quot;\u7684\u5F15\u7528\u6B21\u6570\u5C31\u7B49\u4E8E0\u4E86\uFF0C\u5728\u5F15\u7528\u8BA1\u6570\u7B97\u6CD5\u4E2D\uFF0C\u610F\u5473\u7740\u8FD9\u5757\u5185\u5BB9\u5C31\u9700\u8981\u88AB\u56DE\u6536\u4E86\u3002</p><p><strong>m = null;</strong></p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/jvm/gc-74865618-4576-4f8b-baf3-17d6a71125b9.jpg" alt=""></p><p>\u5F15\u7528\u8BA1\u6570\u7B97\u6CD5\u662F\u5C06\u5783\u573E\u56DE\u6536\u5206\u644A\u5230\u6574\u4E2A\u5E94\u7528\u7A0B\u5E8F\u7684\u8FD0\u884C\u5F53\u4E2D\u4E86\uFF0C\u800C\u4E0D\u662F\u5728\u8FDB\u884C\u5783\u573E\u6536\u96C6\u65F6\uFF0C\u8981\u6302\u8D77\u6574\u4E2A\u5E94\u7528\u7684\u8FD0\u884C\uFF0C\u76F4\u5230\u5BF9\u5806\u4E2D\u6240\u6709\u5BF9\u8C61\u7684\u5904\u7406\u90FD\u7ED3\u675F\u3002\u56E0\u6B64\uFF0C\u91C7\u7528\u5F15\u7528\u8BA1\u6570\u7684\u5783\u573E\u6536\u96C6\u4E0D\u5C5E\u4E8E\u4E25\u683C\u610F\u4E49\u4E0A\u7684&quot;Stop-The-World&quot;\u7684\u5783\u573E\u6536\u96C6\u673A\u5236\u3002</p><p>\u770B\u4F3C\u5F88\u7F8E\u597D\uFF0C\u4F46\u6211\u4EEC\u77E5\u9053JVM\u7684\u5783\u573E\u56DE\u6536\u5C31\u662F&quot;Stop-The-World&quot;\u7684\uFF0C\u90A3\u662F\u4EC0\u4E48\u539F\u56E0\u5BFC\u81F4\u6211\u4EEC\u6700\u7EC8\u653E\u5F03\u4E86\u5F15\u7528\u8BA1\u6570\u7B97\u6CD5\u5462\uFF1F\u770B\u4E0B\u9762\u7684\u4F8B\u5B50\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ReferenceCountingGC</span> <span class="token punctuation">{</span>

<span class="token keyword">public</span> <span class="token class-name">Object</span> instance<span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token class-name">ReferenceCountingGC</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">testGC</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

<span class="token class-name">ReferenceCountingGC</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ReferenceCountingGC</span><span class="token punctuation">(</span><span class="token string">&quot;objA&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">ReferenceCountingGC</span> b <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ReferenceCountingGC</span><span class="token punctuation">(</span><span class="token string">&quot;objB&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

a<span class="token punctuation">.</span>instance <span class="token operator">=</span> b<span class="token punctuation">;</span>
b<span class="token punctuation">.</span>instance <span class="token operator">=</span> a<span class="token punctuation">;</span>

a <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
b <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p><strong>1. \u5B9A\u4E492\u4E2A\u5BF9\u8C61</strong><strong>2. \u76F8\u4E92\u5F15\u7528</strong><strong>3. \u7F6E\u7A7A\u5404\u81EA\u7684\u58F0\u660E\u5F15\u7528</strong></p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/jvm/gc-fe980c00-3605-4b5d-a711-7edbfd2c80b0.jpg" alt=""></p><p>\u6211\u4EEC\u53EF\u4EE5\u770B\u5230\uFF0C\u6700\u540E\u8FD92\u4E2A\u5BF9\u8C61\u5DF2\u7ECF\u4E0D\u53EF\u80FD\u518D\u88AB\u8BBF\u95EE\u4E86\uFF0C\u4F46\u7531\u4E8E\u4ED6\u4EEC\u76F8\u4E92\u5F15\u7528\u7740\u5BF9\u65B9\uFF0C\u5BFC\u81F4\u5B83\u4EEC\u7684\u5F15\u7528\u8BA1\u6570\u6C38\u8FDC\u90FD\u4E0D\u4F1A\u4E3A0\uFF0C\u901A\u8FC7\u5F15\u7528\u8BA1\u6570\u7B97\u6CD5\uFF0C\u4E5F\u5C31\u6C38\u8FDC\u65E0\u6CD5\u901A\u77E5GC\u6536\u96C6\u5668\u56DE\u6536\u5B83\u4EEC\u3002</p><p><strong>\u53EF\u8FBE\u6027\u5206\u6790\u7B97\u6CD5</strong></p><p>\u53EF\u8FBE\u6027\u5206\u6790\u7B97\u6CD5\uFF08Reachability Analysis\uFF09\u7684\u57FA\u672C\u601D\u8DEF\u662F\uFF0C\u901A\u8FC7\u4E00\u4E9B\u88AB\u79F0\u4E3A\u5F15\u7528\u94FE\uFF08GC Roots\uFF09\u7684\u5BF9\u8C61\u4F5C\u4E3A\u8D77\u70B9\uFF0C\u4ECE\u8FD9\u4E9B\u8282\u70B9\u5F00\u59CB\u5411\u4E0B\u641C\u7D22\uFF0C\u641C\u7D22\u8D70\u8FC7\u7684\u8DEF\u5F84\u88AB\u79F0\u4E3A\uFF08Reference Chain)\uFF0C\u5F53\u4E00\u4E2A\u5BF9\u8C61\u5230 GC Roots \u6CA1\u6709\u4EFB\u4F55\u5F15\u7528\u94FE\u76F8\u8FDE\u65F6\uFF08\u5373\u4ECE GC Roots \u8282\u70B9\u5230\u8BE5\u8282\u70B9\u4E0D\u53EF\u8FBE\uFF09\uFF0C\u5219\u8BC1\u660E\u8BE5\u5BF9\u8C61\u662F\u4E0D\u53EF\u7528\u7684\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/jvm/gc-1636ce77-77b3-4b10-b75a-c0c2d28912c5.jpg" alt=""></p><p>\u901A\u8FC7\u53EF\u8FBE\u6027\u7B97\u6CD5\uFF0C\u6210\u529F\u89E3\u51B3\u4E86\u5F15\u7528\u8BA1\u6570\u6240\u65E0\u6CD5\u89E3\u51B3\u7684\u95EE\u9898-\u201C\u5FAA\u73AF\u4F9D\u8D56\u201D\uFF0C\u53EA\u8981\u4F60\u65E0\u6CD5\u4E0E GC Root \u5EFA\u7ACB\u76F4\u63A5\u6216\u95F4\u63A5\u7684\u8FDE\u63A5\uFF0C\u7CFB\u7EDF\u5C31\u4F1A\u5224\u5B9A\u4F60\u4E3A\u53EF\u56DE\u6536\u5BF9\u8C61\u3002\u90A3\u8FD9\u6837\u5C31\u5F15\u7533\u51FA\u4E86\u53E6\u4E00\u4E2A\u95EE\u9898\uFF0C\u54EA\u4E9B\u5C5E\u4E8E GC Root\u3002</p><p><strong>Java \u5185\u5B58\u533A\u57DF</strong></p><p>\u5728 Java \u8BED\u8A00\u4E2D\uFF0C\u53EF\u4F5C\u4E3A GC Root \u7684\u5BF9\u8C61\u5305\u62EC\u4EE5\u4E0B4\u79CD\uFF1A</p><ul><li>\u865A\u62DF\u673A\u6808\uFF08\u6808\u5E27\u4E2D\u7684\u672C\u5730\u53D8\u91CF\u8868\uFF09\u4E2D\u5F15\u7528\u7684\u5BF9\u8C61</li><li>\u65B9\u6CD5\u533A\u4E2D\u7C7B\u9759\u6001\u5C5E\u6027\u5F15\u7528\u7684\u5BF9\u8C61</li><li>\u65B9\u6CD5\u533A\u4E2D\u5E38\u91CF\u5F15\u7528\u7684\u5BF9\u8C61</li><li>\u672C\u5730\u65B9\u6CD5\u6808\u4E2D JNI\uFF08\u5373\u4E00\u822C\u8BF4\u7684 Native \u65B9\u6CD5\uFF09\u5F15\u7528\u7684\u5BF9\u8C61</li></ul><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/jvm/gc-6abf9f50-dc53-4e8f-a7f6-3e74df8803d6.jpg" alt=""></p><p>1\u3001\u865A\u62DF\u673A\u6808\uFF08\u6808\u5E27\u4E2D\u7684\u672C\u5730\u53D8\u91CF\u8868\uFF09\u4E2D\u5F15\u7528\u7684\u5BF9\u8C61 \u6B64\u65F6\u7684 s\uFF0C\u5373\u4E3A GC Root\uFF0C\u5F53s\u7F6E\u7A7A\u65F6\uFF0ClocalParameter \u5BF9\u8C61\u4E5F\u65AD\u6389\u4E86\u4E0E GC Root \u7684\u5F15\u7528\u94FE\uFF0C\u5C06\u88AB\u56DE\u6536\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">StackLocalParameter</span> <span class="token punctuation">{</span>
<span class="token keyword">public</span> <span class="token class-name">StackLocalParameter</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">testGC</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token class-name">StackLocalParameter</span> s <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StackLocalParameter</span><span class="token punctuation">(</span><span class="token string">&quot;localParameter&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
s <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>2\u3001\u65B9\u6CD5\u533A\u4E2D\u7C7B\u9759\u6001\u5C5E\u6027\u5F15\u7528\u7684\u5BF9\u8C61 s \u4E3A GC Root\uFF0Cs \u7F6E\u4E3A null\uFF0C\u7ECF\u8FC7 GC \u540E\uFF0Cs \u6240\u6307\u5411\u7684 properties \u5BF9\u8C61\u7531\u4E8E\u65E0\u6CD5\u4E0E GC Root \u5EFA\u7ACB\u5173\u7CFB\u88AB\u56DE\u6536\u3002</p><p>\u800C m \u4F5C\u4E3A\u7C7B\u7684\u9759\u6001\u5C5E\u6027\uFF0C\u4E5F\u5C5E\u4E8E GC Root\uFF0Cparameter \u5BF9\u8C61\u4F9D\u7136\u4E0E GC root \u5EFA\u7ACB\u7740\u8FDE\u63A5\uFF0C\u6240\u4EE5\u6B64\u65F6 parameter \u5BF9\u8C61\u5E76\u4E0D\u4F1A\u88AB\u56DE\u6536\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MethodAreaStaicProperties</span> <span class="token punctuation">{</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">MethodAreaStaicProperties</span> m<span class="token punctuation">;</span>
<span class="token keyword">public</span> <span class="token class-name">MethodAreaStaicProperties</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">testGC</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token class-name">MethodAreaStaicProperties</span> s <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MethodAreaStaicProperties</span><span class="token punctuation">(</span><span class="token string">&quot;properties&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
s<span class="token punctuation">.</span>m <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MethodAreaStaicProperties</span><span class="token punctuation">(</span><span class="token string">&quot;parameter&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
s <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>3\u3001\u65B9\u6CD5\u533A\u4E2D\u5E38\u91CF\u5F15\u7528\u7684\u5BF9\u8C61 m \u5373\u4E3A\u65B9\u6CD5\u533A\u4E2D\u7684\u5E38\u91CF\u5F15\u7528\uFF0C\u4E5F\u4E3A GC Root\uFF0Cs \u7F6E\u4E3A null \u540E\uFF0Cfinal \u5BF9\u8C61\u4E5F\u4E0D\u4F1A\u56E0\u6CA1\u6709\u4E0E GC Root \u5EFA\u7ACB\u8054\u7CFB\u800C\u88AB\u56DE\u6536\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MethodAreaStaicProperties</span> <span class="token punctuation">{</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">MethodAreaStaicProperties</span> m <span class="token operator">=</span> <span class="token class-name">MethodAreaStaicProperties</span><span class="token punctuation">(</span><span class="token string">&quot;final&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">public</span> <span class="token class-name">MethodAreaStaicProperties</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">testGC</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token class-name">MethodAreaStaicProperties</span> s <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MethodAreaStaicProperties</span><span class="token punctuation">(</span><span class="token string">&quot;staticProperties&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
s <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>4\u3001\u672C\u5730\u65B9\u6CD5\u6808\u4E2D\u5F15\u7528\u7684\u5BF9\u8C61 \u4EFB\u4F55 native \u63A5\u53E3\u90FD\u4F1A\u4F7F\u7528\u67D0\u79CD\u672C\u5730\u65B9\u6CD5\u6808\uFF0C\u5B9E\u73B0\u7684\u672C\u5730\u65B9\u6CD5\u63A5\u53E3\u662F\u4F7F\u7528 C \u8FDE\u63A5\u6A21\u578B\u7684\u8BDD\uFF0C\u90A3\u4E48\u5B83\u7684\u672C\u5730\u65B9\u6CD5\u6808\u5C31\u662F C \u6808\u3002\u5F53\u7EBF\u7A0B\u8C03\u7528 Java \u65B9\u6CD5\u65F6\uFF0C\u865A\u62DF\u673A\u4F1A\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u6808\u5E27\u5E76\u538B\u5165 Java \u6808\u3002\u7136\u800C\u5F53\u5B83\u8C03\u7528\u7684\u662F\u672C\u5730\u65B9\u6CD5\u65F6\uFF0C\u865A\u62DF\u673A\u4F1A\u4FDD\u6301 Java \u6808\u4E0D\u53D8\uFF0C\u4E0D\u518D\u5728\u7EBF\u7A0B\u7684 Java \u6808\u4E2D\u538B\u5165\u65B0\u7684\u5E27\uFF0C\u865A\u62DF\u673A\u53EA\u662F\u7B80\u5355\u5730\u52A8\u6001\u8FDE\u63A5\u5E76\u76F4\u63A5\u8C03\u7528\u6307\u5B9A\u7684\u672C\u5730\u65B9\u6CD5\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/jvm/gc-a138a4b4-56cb-4d6f-a65a-7f4259977476.jpg" alt=""></p><h3 id="\u600E\u4E48\u56DE\u6536\u5783\u573E" tabindex="-1"><a class="header-anchor" href="#\u600E\u4E48\u56DE\u6536\u5783\u573E" aria-hidden="true">#</a> \u600E\u4E48\u56DE\u6536\u5783\u573E</h3><p>\u5728\u786E\u5B9A\u4E86\u54EA\u4E9B\u5783\u573E\u53EF\u4EE5\u88AB\u56DE\u6536\u540E\uFF0C\u5783\u573E\u6536\u96C6\u5668\u8981\u505A\u7684\u4E8B\u60C5\u5C31\u662F\u5F00\u59CB\u8FDB\u884C\u5783\u573E\u56DE\u6536\uFF0C\u4F46\u662F\u8FD9\u91CC\u9762\u6D89\u53CA\u5230\u4E00\u4E2A\u95EE\u9898\u662F\uFF1A\u5982\u4F55\u9AD8\u6548\u5730\u8FDB\u884C\u5783\u573E\u56DE\u6536\u3002\u7531\u4E8EJava\u865A\u62DF\u673A\u89C4\u8303\u5E76\u6CA1\u6709\u5BF9\u5982\u4F55\u5B9E\u73B0\u5783\u573E\u6536\u96C6\u5668\u505A\u51FA\u660E\u786E\u7684\u89C4\u5B9A\uFF0C\u56E0\u6B64\u5404\u4E2A\u5382\u5546\u7684\u865A\u62DF\u673A\u53EF\u4EE5\u91C7\u7528\u4E0D\u540C\u7684\u65B9\u5F0F\u6765\u5B9E\u73B0\u5783\u573E\u6536\u96C6\u5668\uFF0C\u8FD9\u91CC\u6211\u4EEC\u8BA8\u8BBA\u51E0\u79CD\u5E38\u89C1\u7684\u5783\u573E\u6536\u96C6\u7B97\u6CD5\u7684\u6838\u5FC3\u601D\u60F3\u3002</p><p><strong>\u6807\u8BB0 --- \u6E05\u9664\u7B97\u6CD5</strong></p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/jvm/gc-2001e224-0f34-4429-bc89-a8fbe8ab271c.jpg" alt=""></p><p>\u6807\u8BB0\u6E05\u9664\u7B97\u6CD5\uFF08Mark-Sweep\uFF09\u662F\u6700\u57FA\u7840\u7684\u4E00\u79CD\u5783\u573E\u56DE\u6536\u7B97\u6CD5\uFF0C\u5B83\u5206\u4E3A2\u90E8\u5206\uFF0C\u5148\u628A\u5185\u5B58\u533A\u57DF\u4E2D\u7684\u8FD9\u4E9B\u5BF9\u8C61\u8FDB\u884C\u6807\u8BB0\uFF0C\u54EA\u4E9B\u5C5E\u4E8E\u53EF\u56DE\u6536\u6807\u8BB0\u51FA\u6765\uFF0C\u7136\u540E\u628A\u8FD9\u4E9B\u5783\u573E\u62CE\u51FA\u6765\u6E05\u7406\u6389\u3002\u5C31\u50CF\u4E0A\u56FE\u4E00\u6837\uFF0C\u6E05\u7406\u6389\u7684\u5783\u573E\u5C31\u53D8\u6210\u672A\u4F7F\u7528\u7684\u5185\u5B58\u533A\u57DF\uFF0C\u7B49\u5F85\u88AB\u518D\u6B21\u4F7F\u7528\u3002</p><p>\u8FD9\u903B\u8F91\u518D\u6E05\u6670\u4E0D\u8FC7\u4E86\uFF0C\u5E76\u4E14\u4E5F\u5F88\u597D\u64CD\u4F5C\uFF0C\u4F46\u5B83\u5B58\u5728\u4E00\u4E2A\u5F88\u5927\u7684\u95EE\u9898\uFF0C\u90A3\u5C31\u662F\u5185\u5B58\u788E\u7247\u3002</p><p>\u4E0A\u56FE\u4E2D\u7B49\u65B9\u5757\u7684\u5047\u8BBE\u662F 2M\uFF0C\u5C0F\u4E00\u4E9B\u7684\u662F 1M\uFF0C\u5927\u4E00\u4E9B\u7684\u662F 4M\u3002\u7B49\u6211\u4EEC\u56DE\u6536\u5B8C\uFF0C\u5185\u5B58\u5C31\u4F1A\u5207\u6210\u4E86\u5F88\u591A\u6BB5\u3002\u6211\u4EEC\u77E5\u9053\u5F00\u8F9F\u5185\u5B58\u7A7A\u95F4\u65F6\uFF0C\u9700\u8981\u7684\u662F\u8FDE\u7EED\u7684\u5185\u5B58\u533A\u57DF\uFF0C\u8FD9\u65F6\u5019\u6211\u4EEC\u9700\u8981\u4E00\u4E2A 2M\u7684\u5185\u5B58\u533A\u57DF\uFF0C\u5176\u4E2D\u67092\u4E2A 1M \u662F\u6CA1\u6CD5\u7528\u7684\u3002\u8FD9\u6837\u5C31\u5BFC\u81F4\uFF0C\u5176\u5B9E\u6211\u4EEC\u672C\u8EAB\u8FD8\u6709\u8FD9\u4E48\u591A\u7684\u5185\u5B58\u7684\uFF0C\u4F46\u5374\u7528\u4E0D\u4E86\u3002</p><p><strong>\u590D\u5236\u7B97\u6CD5</strong></p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/jvm/gc-a2b15e6f-6921-4710-bf76-77858df38c27.jpg" alt=""></p><p>\u590D\u5236\u7B97\u6CD5\uFF08Copying\uFF09\u662F\u5728\u6807\u8BB0\u6E05\u9664\u7B97\u6CD5\u4E0A\u6F14\u5316\u800C\u6765\uFF0C\u89E3\u51B3\u6807\u8BB0\u6E05\u9664\u7B97\u6CD5\u7684\u5185\u5B58\u788E\u7247\u95EE\u9898\u3002\u5B83\u5C06\u53EF\u7528\u5185\u5B58\u6309\u5BB9\u91CF\u5212\u5206\u4E3A\u5927\u5C0F\u76F8\u7B49\u7684\u4E24\u5757\uFF0C\u6BCF\u6B21\u53EA\u4F7F\u7528\u5176\u4E2D\u7684\u4E00\u5757\u3002\u5F53\u8FD9\u4E00\u5757\u7684\u5185\u5B58\u7528\u5B8C\u4E86\uFF0C\u5C31\u5C06\u8FD8\u5B58\u6D3B\u7740\u7684\u5BF9\u8C61\u590D\u5236\u5230\u53E6\u5916\u4E00\u5757\u4E0A\u9762\uFF0C\u7136\u540E\u518D\u628A\u5DF2\u4F7F\u7528\u8FC7\u7684\u5185\u5B58\u7A7A\u95F4\u4E00\u6B21\u6E05\u7406\u6389\u3002\u4FDD\u8BC1\u4E86\u5185\u5B58\u7684\u8FDE\u7EED\u53EF\u7528\uFF0C\u5185\u5B58\u5206\u914D\u65F6\u4E5F\u5C31\u4E0D\u7528\u8003\u8651\u5185\u5B58\u788E\u7247\u7B49\u590D\u6742\u60C5\u51B5\uFF0C\u903B\u8F91\u6E05\u6670\uFF0C\u8FD0\u884C\u9AD8\u6548\u3002</p><p>\u4E0A\u9762\u7684\u56FE\u5F88\u6E05\u695A\uFF0C\u4E5F\u5F88\u660E\u663E\u7684\u66B4\u9732\u4E86\u53E6\u4E00\u4E2A\u95EE\u9898\uFF0C\u5408\u7740\u6211\u8FD9140\u5E73\u7684\u5927\u4E09\u623F\uFF0C\u53EA\u80FD\u5F5370\u5E73\u7C73\u7684\u5C0F\u4E24\u623F\u6765\u4F7F\uFF1F\u4EE3\u4EF7\u5B9E\u5728\u592A\u9AD8\u3002</p><p><strong>\u6807\u8BB0\u6574\u7406\u7B97\u6CD5</strong></p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/jvm/gc-2d47a225-ad9d-4f15-9b4d-7dce9a693adf.jpg" alt=""></p><p>\u6807\u8BB0\u6574\u7406\u7B97\u6CD5\uFF08Mark-Compact\uFF09\u6807\u8BB0\u8FC7\u7A0B\u4ECD\u7136\u4E0E\u6807\u8BB0 --- \u6E05\u9664\u7B97\u6CD5\u4E00\u6837\uFF0C\u4F46\u540E\u7EED\u6B65\u9AA4\u4E0D\u662F\u76F4\u63A5\u5BF9\u53EF\u56DE\u6536\u5BF9\u8C61\u8FDB\u884C\u6E05\u7406\uFF0C\u800C\u662F\u8BA9\u6240\u6709\u5B58\u6D3B\u7684\u5BF9\u8C61\u90FD\u5411\u4E00\u7AEF\u79FB\u52A8\uFF0C\u518D\u6E05\u7406\u6389\u7AEF\u8FB9\u754C\u4EE5\u5916\u7684\u5185\u5B58\u533A\u57DF\u3002</p><p>\u6807\u8BB0\u6574\u7406\u7B97\u6CD5\u4E00\u65B9\u9762\u5728\u6807\u8BB0-\u6E05\u9664\u7B97\u6CD5\u4E0A\u505A\u4E86\u5347\u7EA7\uFF0C\u89E3\u51B3\u4E86\u5185\u5B58\u788E\u7247\u7684\u95EE\u9898\uFF0C\u4E5F\u89C4\u907F\u4E86\u590D\u5236\u7B97\u6CD5\u53EA\u80FD\u5229\u7528\u4E00\u534A\u5185\u5B58\u533A\u57DF\u7684\u5F0A\u7AEF\u3002\u770B\u8D77\u6765\u5F88\u7F8E\u597D\uFF0C\u4F46\u4ECE\u4E0A\u56FE\u53EF\u4EE5\u770B\u5230\uFF0C\u5B83\u5BF9\u5185\u5B58\u53D8\u52A8\u66F4\u9891\u7E41\uFF0C\u9700\u8981\u6574\u7406\u6240\u6709\u5B58\u6D3B\u5BF9\u8C61\u7684\u5F15\u7528\u5730\u5740\uFF0C\u5728\u6548\u7387\u4E0A\u6BD4\u590D\u5236\u7B97\u6CD5\u8981\u5DEE\u5F88\u591A\u3002</p><p>\u5206\u4EE3\u6536\u96C6\u7B97\u6CD5\u5206\u4EE3\u6536\u96C6\u7B97\u6CD5\uFF08Generational Collection\uFF09\u4E25\u683C\u6765\u8BF4\u5E76\u4E0D\u662F\u4E00\u79CD\u601D\u60F3\u6216\u7406\u8BBA\uFF0C\u800C\u662F\u878D\u5408\u4E0A\u8FF03\u79CD\u57FA\u7840\u7684\u7B97\u6CD5\u601D\u60F3\uFF0C\u800C\u4EA7\u751F\u7684\u9488\u5BF9\u4E0D\u540C\u60C5\u51B5\u6240\u91C7\u7528\u4E0D\u540C\u7B97\u6CD5\u7684\u4E00\u5957\u7EC4\u5408\u62F3\u3002\u5BF9\u8C61\u5B58\u6D3B\u5468\u671F\u7684\u4E0D\u540C\u5C06\u5185\u5B58\u5212\u5206\u4E3A\u51E0\u5757\u3002\u4E00\u822C\u662F\u628A Java \u5806\u5206\u4E3A\u65B0\u751F\u4EE3\u548C\u8001\u5E74\u4EE3\uFF0C\u8FD9\u6837\u5C31\u53EF\u4EE5\u6839\u636E\u5404\u4E2A\u5E74\u4EE3\u7684\u7279\u70B9\u91C7\u7528\u6700\u9002\u5F53\u7684\u6536\u96C6\u7B97\u6CD5\u3002\u5728\u65B0\u751F\u4EE3\u4E2D\uFF0C\u6BCF\u6B21\u5783\u573E\u6536\u96C6\u65F6\u90FD\u53D1\u73B0\u6709\u5927\u6279\u5BF9\u8C61\u6B7B\u53BB\uFF0C\u53EA\u6709\u5C11\u91CF\u5B58\u6D3B\uFF0C\u90A3\u5C31\u9009\u7528\u590D\u5236\u7B97\u6CD5\uFF0C\u53EA\u9700\u8981\u4ED8\u51FA\u5C11\u91CF\u5B58\u6D3B\u5BF9\u8C61\u7684\u590D\u5236\u6210\u672C\u5C31\u53EF\u4EE5\u5B8C\u6210\u6536\u96C6\u3002\u800C\u8001\u5E74\u4EE3\u4E2D\u56E0\u4E3A\u5BF9\u8C61\u5B58\u6D3B\u7387\u9AD8\u3001\u6CA1\u6709\u989D\u5916\u7A7A\u95F4\u5BF9\u5B83\u8FDB\u884C\u5206\u914D\u62C5\u4FDD\uFF0C\u5C31\u5FC5\u987B\u4F7F\u7528\u6807\u8BB0-\u6E05\u7406\u6216\u8005\u6807\u8BB0 --- \u6574\u7406\u7B97\u6CD5\u6765\u8FDB\u884C\u56DE\u6536\u3002so\uFF0C\u53E6\u4E00\u4E2A\u95EE\u9898\u6765\u4E86\uFF0C\u90A3\u5185\u5B58\u533A\u57DF\u5230\u5E95\u88AB\u5206\u4E3A\u54EA\u51E0\u5757\uFF0C\u6BCF\u4E00\u5757\u53C8\u6709\u4EC0\u4E48\u7279\u522B\u9002\u5408\u4EC0\u4E48\u7B97\u6CD5\u5462\uFF1F</p><h3 id="\u5185\u5B58\u6A21\u578B\u4E0E\u56DE\u6536\u7B56\u7565" tabindex="-1"><a class="header-anchor" href="#\u5185\u5B58\u6A21\u578B\u4E0E\u56DE\u6536\u7B56\u7565" aria-hidden="true">#</a> \u5185\u5B58\u6A21\u578B\u4E0E\u56DE\u6536\u7B56\u7565</h3><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/jvm/gc-59dddea1-b6bc-4fd4-bb79-d81adbdc7bed.jpg" alt=""></p><p>Java \u5806\uFF08Java Heap\uFF09\u662FJVM\u6240\u7BA1\u7406\u7684\u5185\u5B58\u4E2D\u6700\u5927\u7684\u4E00\u5757\uFF0C\u5806\u53C8\u662F\u5783\u573E\u6536\u96C6\u5668\u7BA1\u7406\u7684\u4E3B\u8981\u533A\u57DF\uFF0C\u8FD9\u91CC\u6211\u4EEC\u4E3B\u8981\u5206\u6790\u4E00\u4E0B Java \u5806\u7684\u7ED3\u6784\u3002</p><p>Java \u5806\u4E3B\u8981\u5206\u4E3A2\u4E2A\u533A\u57DF-\u5E74\u8F7B\u4EE3\u4E0E\u8001\u5E74\u4EE3\uFF0C\u5176\u4E2D\u5E74\u8F7B\u4EE3\u53C8\u5206 Eden \u533A\u548C Survivor \u533A\uFF0C\u5176\u4E2D Survivor \u533A\u53C8\u5206 From \u548C To 2\u4E2A\u533A\u3002\u53EF\u80FD\u8FD9\u65F6\u5019\u5927\u5BB6\u4F1A\u6709\u7591\u95EE\uFF0C\u4E3A\u4EC0\u4E48\u9700\u8981 Survivor \u533A\uFF0C\u4E3A\u4EC0\u4E48Survivor \u8FD8\u8981\u52062\u4E2A\u533A\u3002\u4E0D\u7740\u6025\uFF0C\u6211\u4EEC\u4ECE\u5934\u5230\u5C3E\uFF0C\u770B\u770B\u5BF9\u8C61\u5230\u5E95\u662F\u600E\u4E48\u6765\u7684\uFF0C\u800C\u5B83\u53C8\u662F\u600E\u4E48\u6CA1\u7684\u3002</p><p><strong>Eden \u533A</strong></p><p>IBM \u516C\u53F8\u7684\u4E13\u4E1A\u7814\u7A76\u8868\u660E\uFF0C\u6709\u5C06\u8FD198%\u7684\u5BF9\u8C61\u662F\u671D\u751F\u5915\u6B7B\uFF0C\u6240\u4EE5\u9488\u5BF9\u8FD9\u4E00\u73B0\u72B6\uFF0C\u5927\u591A\u6570\u60C5\u51B5\u4E0B\uFF0C\u5BF9\u8C61\u4F1A\u5728\u65B0\u751F\u4EE3 Eden \u533A\u4E2D\u8FDB\u884C\u5206\u914D\uFF0C\u5F53 Eden \u533A\u6CA1\u6709\u8DB3\u591F\u7A7A\u95F4\u8FDB\u884C\u5206\u914D\u65F6\uFF0C\u865A\u62DF\u673A\u4F1A\u53D1\u8D77\u4E00\u6B21 Minor GC\uFF0CMinor GC \u76F8\u6BD4 Major GC \u66F4\u9891\u7E41\uFF0C\u56DE\u6536\u901F\u5EA6\u4E5F\u66F4\u5FEB\u3002</p><p>\u901A\u8FC7 Minor GC \u4E4B\u540E\uFF0CEden \u4F1A\u88AB\u6E05\u7A7A\uFF0CEden \u533A\u4E2D\u7EDD\u5927\u90E8\u5206\u5BF9\u8C61\u4F1A\u88AB\u56DE\u6536\uFF0C\u800C\u90A3\u4E9B\u65E0\u9700\u56DE\u6536\u7684\u5B58\u6D3B\u5BF9\u8C61\uFF0C\u5C06\u4F1A\u8FDB\u5230 Survivor \u7684 From \u533A\uFF08\u82E5 From \u533A\u4E0D\u591F\uFF0C\u5219\u76F4\u63A5\u8FDB\u5165 Old \u533A\uFF09\u3002</p><p><strong>Survivor \u533A</strong></p><p>Survivor \u533A\u76F8\u5F53\u4E8E\u662F Eden \u533A\u548C Old \u533A\u7684\u4E00\u4E2A\u7F13\u51B2\uFF0C\u7C7B\u4F3C\u4E8E\u6211\u4EEC\u4EA4\u901A\u706F\u4E2D\u7684\u9EC4\u706F\u3002Survivor \u53C8\u5206\u4E3A2\u4E2A\u533A\uFF0C\u4E00\u4E2A\u662F From \u533A\uFF0C\u4E00\u4E2A\u662F To \u533A\u3002\u6BCF\u6B21\u6267\u884C Minor GC\uFF0C\u4F1A\u5C06 Eden \u533A\u548C From \u5B58\u6D3B\u7684\u5BF9\u8C61\u653E\u5230 Survivor \u7684 To \u533A\uFF08\u5982\u679C To \u533A\u4E0D\u591F\uFF0C\u5219\u76F4\u63A5\u8FDB\u5165 Old \u533A\uFF09\u3002</p><p>1\u3001\u4E3A\u5565\u9700\u8981\uFF1F</p><p>\u4E0D\u5C31\u662F\u65B0\u751F\u4EE3\u5230\u8001\u5E74\u4EE3\u4E48\uFF0C\u76F4\u63A5 Eden \u5230 Old \u4E0D\u597D\u4E86\u5417\uFF0C\u4E3A\u5565\u8981\u8FD9\u4E48\u590D\u6742\u3002\u60F3\u60F3\u5982\u679C\u6CA1\u6709 Survivor \u533A\uFF0CEden \u533A\u6BCF\u8FDB\u884C\u4E00\u6B21 Minor GC\uFF0C\u5B58\u6D3B\u7684\u5BF9\u8C61\u5C31\u4F1A\u88AB\u9001\u5230\u8001\u5E74\u4EE3\uFF0C\u8001\u5E74\u4EE3\u5F88\u5FEB\u5C31\u4F1A\u88AB\u586B\u6EE1\u3002\u800C\u6709\u5F88\u591A\u5BF9\u8C61\u867D\u7136\u4E00\u6B21 Minor GC \u6CA1\u6709\u6D88\u706D\uFF0C\u4F46\u5176\u5B9E\u4E5F\u5E76\u4E0D\u4F1A\u8E66\u8DF6\u591A\u4E45\uFF0C\u6216\u8BB8\u7B2C\u4E8C\u6B21\uFF0C\u7B2C\u4E09\u6B21\u5C31\u9700\u8981\u88AB\u6E05\u9664\u3002\u8FD9\u65F6\u5019\u79FB\u5165\u8001\u5E74\u533A\uFF0C\u5F88\u660E\u663E\u4E0D\u662F\u4E00\u4E2A\u660E\u667A\u7684\u51B3\u5B9A\u3002</p><p>\u6240\u4EE5\uFF0CSurvivor \u7684\u5B58\u5728\u610F\u4E49\u5C31\u662F\u51CF\u5C11\u88AB\u9001\u5230\u8001\u5E74\u4EE3\u7684\u5BF9\u8C61\uFF0C\u8FDB\u800C\u51CF\u5C11 Major GC \u7684\u53D1\u751F\u3002Survivor \u7684\u9884\u7B5B\u9009\u4FDD\u8BC1\uFF0C\u53EA\u6709\u7ECF\u538616\u6B21 Minor GC \u8FD8\u80FD\u5728\u65B0\u751F\u4EE3\u4E2D\u5B58\u6D3B\u7684\u5BF9\u8C61\uFF0C\u624D\u4F1A\u88AB\u9001\u5230\u8001\u5E74\u4EE3\u3002</p><p>2\u3001\u4E3A\u5565\u9700\u8981\u4FE9\uFF1F</p><p>\u8BBE\u7F6E\u4E24\u4E2A Survivor \u533A\u6700\u5927\u7684\u597D\u5904\u5C31\u662F\u89E3\u51B3\u5185\u5B58\u788E\u7247\u5316\u3002</p><p>\u6211\u4EEC\u5148\u5047\u8BBE\u4E00\u4E0B\uFF0CSurvivor \u5982\u679C\u53EA\u6709\u4E00\u4E2A\u533A\u57DF\u4F1A\u600E\u6837\u3002Minor GC \u6267\u884C\u540E\uFF0CEden \u533A\u88AB\u6E05\u7A7A\u4E86\uFF0C\u5B58\u6D3B\u7684\u5BF9\u8C61\u653E\u5230\u4E86 Survivor \u533A\uFF0C\u800C\u4E4B\u524D Survivor \u533A\u4E2D\u7684\u5BF9\u8C61\uFF0C\u53EF\u80FD\u4E5F\u6709\u4E00\u4E9B\u662F\u9700\u8981\u88AB\u6E05\u9664\u7684\u3002\u95EE\u9898\u6765\u4E86\uFF0C\u8FD9\u65F6\u5019\u6211\u4EEC\u600E\u4E48\u6E05\u9664\u5B83\u4EEC\uFF1F\u5728\u8FD9\u79CD\u573A\u666F\u4E0B\uFF0C\u6211\u4EEC\u53EA\u80FD\u6807\u8BB0\u6E05\u9664\uFF0C\u800C\u6211\u4EEC\u77E5\u9053\u6807\u8BB0\u6E05\u9664\u6700\u5927\u7684\u95EE\u9898\u5C31\u662F\u5185\u5B58\u788E\u7247\uFF0C\u5728\u65B0\u751F\u4EE3\u8FD9\u79CD\u7ECF\u5E38\u4F1A\u6D88\u4EA1\u7684\u533A\u57DF\uFF0C\u91C7\u7528\u6807\u8BB0\u6E05\u9664\u5FC5\u7136\u4F1A\u8BA9\u5185\u5B58\u4EA7\u751F\u4E25\u91CD\u7684\u788E\u7247\u5316\u3002\u56E0\u4E3A Survivor \u67092\u4E2A\u533A\u57DF\uFF0C\u6240\u4EE5\u6BCF\u6B21 Minor GC\uFF0C\u4F1A\u5C06\u4E4B\u524D Eden \u533A\u548C From \u533A\u4E2D\u7684\u5B58\u6D3B\u5BF9\u8C61\u590D\u5236\u5230 To \u533A\u57DF\u3002\u7B2C\u4E8C\u6B21 Minor GC \u65F6\uFF0CFrom \u4E0E To \u804C\u8D23\u5151\u6362\uFF0C\u8FD9\u65F6\u5019\u4F1A\u5C06 Eden \u533A\u548C To \u533A\u4E2D\u7684\u5B58\u6D3B\u5BF9\u8C61\u518D\u590D\u5236\u5230 From \u533A\u57DF\uFF0C\u4EE5\u6B64\u53CD\u590D\u3002</p><p>\u8FD9\u79CD\u673A\u5236\u6700\u5927\u7684\u597D\u5904\u5C31\u662F\uFF0C\u6574\u4E2A\u8FC7\u7A0B\u4E2D\uFF0C\u6C38\u8FDC\u6709\u4E00\u4E2A Survivor space \u662F\u7A7A\u7684\uFF0C\u53E6\u4E00\u4E2A\u975E\u7A7A\u7684 Survivor space \u662F\u65E0\u788E\u7247\u7684\u3002\u90A3\u4E48\uFF0CSurvivor \u4E3A\u4EC0\u4E48\u4E0D\u5206\u66F4\u591A\u5757\u5462\uFF1F\u6BD4\u65B9\u8BF4\u5206\u6210\u4E09\u4E2A\u3001\u56DB\u4E2A\u3001\u4E94\u4E2A?\u663E\u7136\uFF0C\u5982\u679C Survivor \u533A\u518D\u7EC6\u5206\u4E0B\u53BB\uFF0C\u6BCF\u4E00\u5757\u7684\u7A7A\u95F4\u5C31\u4F1A\u6BD4\u8F83\u5C0F\uFF0C\u5BB9\u6613\u5BFC\u81F4 Survivor \u533A\u6EE1\uFF0C\u4E24\u5757 Survivor \u533A\u53EF\u80FD\u662F\u7ECF\u8FC7\u6743\u8861\u4E4B\u540E\u7684\u6700\u4F73\u65B9\u6848\u3002</p><p><strong>Old \u533A</strong></p><p>\u8001\u5E74\u4EE3\u5360\u636E\u77402/3\u7684\u5806\u5185\u5B58\u7A7A\u95F4\uFF0C\u53EA\u6709\u5728 Major GC \u7684\u65F6\u5019\u624D\u4F1A\u8FDB\u884C\u6E05\u7406\uFF0C\u6BCF\u6B21 GC \u90FD\u4F1A\u89E6\u53D1\u201CStop-The-World\u201D\u3002\u5185\u5B58\u8D8A\u5927\uFF0CSTW \u7684\u65F6\u95F4\u4E5F\u8D8A\u957F\uFF0C\u6240\u4EE5\u5185\u5B58\u4E5F\u4E0D\u4EC5\u4EC5\u662F\u8D8A\u5927\u5C31\u8D8A\u597D\u3002\u7531\u4E8E\u590D\u5236\u7B97\u6CD5\u5728\u5BF9\u8C61\u5B58\u6D3B\u7387\u8F83\u9AD8\u7684\u8001\u5E74\u4EE3\u4F1A\u8FDB\u884C\u5F88\u591A\u6B21\u7684\u590D\u5236\u64CD\u4F5C\uFF0C\u6548\u7387\u5F88\u4F4E\uFF0C\u6240\u4EE5\u8001\u5E74\u4EE3\u8FD9\u91CC\u91C7\u7528\u7684\u662F\u6807\u8BB0 --- \u6574\u7406\u7B97\u6CD5\u3002</p><p>\u9664\u4E86\u4E0A\u8FF0\u6240\u8BF4\uFF0C\u5728\u5185\u5B58\u62C5\u4FDD\u673A\u5236\u4E0B\uFF0C\u65E0\u6CD5\u5B89\u7F6E\u7684\u5BF9\u8C61\u4F1A\u76F4\u63A5\u8FDB\u5230\u8001\u5E74\u4EE3\uFF0C\u4EE5\u4E0B\u51E0\u79CD\u60C5\u51B5\u4E5F\u4F1A\u8FDB\u5165\u8001\u5E74\u4EE3\u3002</p><p>1\u3001\u5927\u5BF9\u8C61</p><p>\u5927\u5BF9\u8C61\u6307\u9700\u8981\u5927\u91CF\u8FDE\u7EED\u5185\u5B58\u7A7A\u95F4\u7684\u5BF9\u8C61\uFF0C\u8FD9\u90E8\u5206\u5BF9\u8C61\u4E0D\u7BA1\u662F\u4E0D\u662F\u201C\u671D\u751F\u5915\u6B7B\u201D\uFF0C\u90FD\u4F1A\u76F4\u63A5\u8FDB\u5230\u8001\u5E74\u4EE3\u3002\u8FD9\u6837\u505A\u4E3B\u8981\u662F\u4E3A\u4E86\u907F\u514D\u5728 Eden \u533A\u53CA2\u4E2A Survivor \u533A\u4E4B\u95F4\u53D1\u751F\u5927\u91CF\u7684\u5185\u5B58\u590D\u5236\u3002\u5F53\u4F60\u7684\u7CFB\u7EDF\u6709\u975E\u5E38\u591A\u201C\u671D\u751F\u5915\u6B7B\u201D\u7684\u5927\u5BF9\u8C61\u65F6\uFF0C\u5F97\u6CE8\u610F\u4E86\u3002</p><p>2\u3001\u957F\u671F\u5B58\u6D3B\u5BF9\u8C61</p><p>\u865A\u62DF\u673A\u7ED9\u6BCF\u4E2A\u5BF9\u8C61\u5B9A\u4E49\u4E86\u4E00\u4E2A\u5BF9\u8C61\u5E74\u9F84\uFF08Age\uFF09\u8BA1\u6570\u5668\u3002\u6B63\u5E38\u60C5\u51B5\u4E0B\u5BF9\u8C61\u4F1A\u4E0D\u65AD\u7684\u5728 Survivor \u7684 From \u533A\u4E0E To \u533A\u4E4B\u95F4\u79FB\u52A8\uFF0C\u5BF9\u8C61\u5728 Survivor \u533A\u4E2D\u6CA1\u7ECF\u5386\u4E00\u6B21 Minor GC\uFF0C\u5E74\u9F84\u5C31\u589E\u52A01\u5C81\u3002\u5F53\u5E74\u9F84\u589E\u52A0\u523015\u5C81\u65F6\uFF0C\u8FD9\u65F6\u5019\u5C31\u4F1A\u88AB\u8F6C\u79FB\u5230\u8001\u5E74\u4EE3\u3002\u5F53\u7136\uFF0C\u8FD9\u91CC\u768415\uFF0CJVM \u4E5F\u652F\u6301\u8FDB\u884C\u7279\u6B8A\u8BBE\u7F6E\u3002</p><p>3\u3001\u52A8\u6001\u5BF9\u8C61\u5E74\u9F84</p><p>\u865A\u62DF\u673A\u5E76\u4E0D\u91CD\u89C6\u8981\u6C42\u5BF9\u8C61\u5E74\u9F84\u5FC5\u987B\u523015\u5C81\uFF0C\u624D\u4F1A\u653E\u5165\u8001\u5E74\u533A\uFF0C\u5982\u679C Survivor \u7A7A\u95F4\u4E2D\u76F8\u540C\u5E74\u9F84\u6240\u6709\u5BF9\u8C61\u5927\u5C0F\u7684\u7EFC\u5408\u5927\u4E8E Survivor \u7A7A\u95F4\u7684\u4E00\u822C\uFF0C\u5E74\u9F84\u5927\u4E8E\u7B49\u4E8E\u8BE5\u5E74\u9F84\u7684\u5BF9\u8C61\u5C31\u53EF\u4EE5\u76F4\u63A5\u8FDB\u53BB\u8001\u5E74\u533A\uFF0C\u65E0\u9700\u7B49\u4F60\u201C\u6210\u5E74\u201D\u3002</p><p>\u8FD9\u5176\u5B9E\u6709\u70B9\u7C7B\u4F3C\u4E8E\u8D1F\u8F7D\u5747\u8861\uFF0C\u8F6E\u8BE2\u662F\u8D1F\u8F7D\u5747\u8861\u7684\u4E00\u79CD\uFF0C\u4FDD\u8BC1\u6BCF\u53F0\u673A\u5668\u90FD\u5206\u5F97\u540C\u6837\u7684\u8BF7\u6C42\u3002\u770B\u4F3C\u5F88\u5747\u8861\uFF0C\u4F46\u6BCF\u53F0\u673A\u7684\u786C\u4EF6\u4E0D\u901A\uFF0C\u5065\u5EB7\u72B6\u51B5\u4E0D\u540C\uFF0C\u6211\u4EEC\u8FD8\u53EF\u4EE5\u57FA\u4E8E\u6BCF\u53F0\u673A\u63A5\u53D7\u7684\u8BF7\u6C42\u6570\uFF0C\u6216\u6BCF\u53F0\u673A\u7684\u54CD\u5E94\u65F6\u95F4\u7B49\uFF0C\u6765\u8C03\u6574\u6211\u4EEC\u7684\u8D1F\u8F7D\u5747\u8861\u7B97\u6CD5\u3002</p><blockquote><ul><li>\u6574\u7406\uFF1A\u6C89\u9ED8\u738B\u4E8C\uFF0C\u539F\u6587\u94FE\u63A5\uFF1Ahttps://zhuanlan.zhihu.com/p/73628158</li><li>https://segmentfault.com/a/1190000038256027</li></ul></blockquote><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xingbiaogongzhonghao.png" alt=""></p>`,82);function e(t,o){return p}var l=n(s,[["render",e],["__file","gc.html.vue"]]);export{l as default};
