import{r as t,o as r,c as p,a as n,b as s,w as c,F as i,e as l,d as a}from"./app.d7a66746.js";import{_ as b}from"./plugin-vue_export-helper.21dcd24c.js";const g={},u=l(`<h3 id="\u5173\u4E8E-logback" tabindex="-1"><a class="header-anchor" href="#\u5173\u4E8E-logback" aria-hidden="true">#</a> \u5173\u4E8E Logback</h3><p>\u65E5\u5FD7\u7CFB\u7EDF\u662F\u4E00\u4E2A\u7EBF\u4E0A\u9879\u76EE\u5FC5\u5907\u7684\u7D20\u8D28\u4E4B\u4E00\uFF0C\u4EE3\u8868\u6027\u7684\u65E5\u5FD7\u6846\u67B6 Log4j\u3001SLF4J\u3001Logback \u8FD9\u54E5\u4EE8\u7ADF\u7136\u662F\u4EB2\u5144\u5F1F\uFF0C\u4ED6\u4EEC\u6709\u4E00\u4E2A\u4EB2\u7239\uFF0C\u90A3\u5C31\u662F\u5DE8\u4F6C Ceki Gulcu\u3002</p><p>\u7531\u4E8E Spring Boot \u7684\u9ED8\u8BA4\u65E5\u5FD7\u6846\u67B6\u9009\u7528\u7684 Logback\uFF0C\u518D\u52A0\u4E0A Log4j2 \u4E4B\u524D\u7206\u8FC7\u4E25\u91CD\u7684\u6F0F\u6D1E\uFF0C\u6240\u4EE5\u6211\u4EEC\u8FD9\u6B21\u5C31\u53EA\u5173\u6CE8 Logback\u3002</p><p>1\uFF09Logback \u975E\u5E38\u81EA\u7136\u5730\u5B9E\u73B0\u4E86 SLF4J\uFF0C\u4E0D\u9700\u8981\u50CF Log4j \u548C JUL \u90A3\u6837\u52A0\u4E00\u4E2A\u9002\u914D\u5C42\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/logback-67c983bf-101d-48cc-80da-3cb031d7407b.png" alt=""></p><p>2\uFF09Spring Boot \u7684\u9ED8\u8BA4\u65E5\u5FD7\u6846\u67B6\u4F7F\u7528\u7684\u662F Logback\uFF0C\u542F\u52A8\u7F16\u7A0B\u55B5\u9879\u76EE\u7684\u65F6\u5019\u5C31\u53EF\u4EE5\u770B\u5230 Logback \u8BB0\u5F55\u7684\u65E5\u5FD7\u4E86\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/logback-a2cacfa1-484a-4904-bea3-248d12097387.png" alt=""></p><p>\u600E\u4E48\u770B\u51FA\u6765\u662F logback \u5462\uFF1F</p><p>\u8BF4\u5B9E\u8BDD\uFF0C\u770B\u4E0D\u51FA\u6765\uFF0C\u54C8\u54C8\u54C8\uFF0C\u4E0D\u8FC7\u53EF\u4EE5\u4ECE Spring Boot \u5B98\u7F51\u627E\u5230\u8BC1\u636E\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/logback-9ac58c2c-e7f9-4df7-aede-ba7d5c69741c.png" alt=""></p><p>\u8FD8\u6709\uFF0C\u901A\u8FC7\u6E90\u7801\u4E5F\u53EF\u4EE5\u7AA5\u89C1\u4E00\u4E8C\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/logback-7a10bd7b-598a-4c30-9c83-b80689671f41.png" alt=""></p><p>3\uFF09logback \u5206\u4E3A\u4E09\u4E2A\u6A21\u5757\uFF1A</p><ul><li>logback-core\uFF0C\u6838\u5FC3\u6A21\u5757\uFF0C\u63D0\u4F9B\u4E86\u5173\u952E\u7684\u901A\u7528\u673A\u5236\uFF1B</li><li>logback-classic\uFF0C\u53EF\u4EE5\u770B\u4F5C\u662F log4j \u7684\u6539\u8FDB\u7248\uFF0C\u5B9E\u73B0\u4E86\u7B80\u5355\u7684\u65E5\u5FD7\u95E8\u9762 SLF4J\uFF1B</li><li>logback-access\uFF0C\u4E3B\u8981\u7528\u6765\u548C Servlet \u5BB9\u5668\u4EA4\u4E92\uFF0C\u6BD4\u5982\u8BF4 Tomcat\uFF0C\u63D0\u4F9B\u4E86\u4E00\u4E9B HTTP \u8BBF\u95EE\u7684\u529F\u80FD\u3002</li></ul><p>\u5982\u679C\u60F3\u7814\u7A76 logback \u6E90\u7801\u7684\u8BDD\uFF0C\u53EF\u4EE5\u6309\u7167\u8FD9\u4E09\u4E2A\u6A21\u5757\u53BB\u7814\u7A76\u3002</p><h3 id="\u76F4\u63A5\u4E0A\u624B" tabindex="-1"><a class="header-anchor" href="#\u76F4\u63A5\u4E0A\u624B" aria-hidden="true">#</a> \u76F4\u63A5\u4E0A\u624B</h3><p>\u4E0D\u5E9F\u8BDD\uFF0C\u76F4\u63A5\u65B0\u5EFA\u4E00\u4E2A\u7A7A\u7684 Spring Boot \u9879\u76EE\uFF0C\u5728\u6D4B\u8BD5\u7C7B\u4E2D\u52A0\u4E0A\u4E24\u884C\u4EE3\u7801\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootTest</span>
<span class="token keyword">class</span> <span class="token class-name">CodingmoreLogbackApplicationTests</span> <span class="token punctuation">{</span>
  <span class="token keyword">static</span> <span class="token class-name">Logger</span> logger <span class="token operator">=</span> <span class="token class-name">LoggerFactory</span><span class="token punctuation">.</span><span class="token function">getLogger</span><span class="token punctuation">(</span><span class="token class-name">CodingmoreLogbackApplicationTests</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token annotation punctuation">@Test</span>
  <span class="token keyword">void</span> <span class="token function">contextLoads</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    logger<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;logback testing&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>Logger \u548C LoggerFactory \u90FD\u6765\u81EA SLF4J\uFF0C\u6240\u4EE5\u5982\u679C\u9879\u76EE\u662F\u4ECE Log4j + SLF4J \u5207\u6362\u5230 Logback \u7684\u8BDD\uFF0C\u6B64\u65F6\u7684\u4EE3\u7801\u662F\u96F6\u6539\u52A8\u7684\u3002</p><p>\u5176\u4ED6\u4EC0\u4E48\u4E5F\u4E0D\u7528\u505A\uFF0C\u8FD0\u884C\u540E\u5C31\u53EF\u4EE5\u770B\u5230 logback \u5DF2\u7ECF\u6B63\u5E38\u5DE5\u4F5C\u4E86\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/logback-07c6b600-3667-4113-bbd5-5ec25990e9dc.png" alt=""></p><p>\u5728\u6CA1\u6709\u914D\u7F6E\u6587\u4EF6\u7684\u60C5\u51B5\u4E0B\uFF0C\u4E00\u5207\u90FD\u662F\u9ED8\u8BA4\u7684\uFF0CLogback \u7684\u65E5\u5FD7\u4FE1\u606F\u4F1A\u8F93\u51FA\u5230\u63A7\u5236\u53F0\u3002\u53EF\u4EE5\u901A\u8FC7 StatusPrinter \u6765\u6253\u5370 Logback \u7684\u5185\u90E8\u4FE1\u606F\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">LoggerContext</span> lc <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">LoggerContext</span><span class="token punctuation">)</span><span class="token class-name">LoggerFactory</span><span class="token punctuation">.</span><span class="token function">getILoggerFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">StatusPrinter</span><span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>lc<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u518D\u6B21\u8FD0\u884C\u6D4B\u8BD5\u7C7B\uFF0C\u53EF\u4EE5\u5728\u63A7\u5236\u53F0\u770B\u5230\u4EE5\u4E0B\u4FE1\u606F\uFF1A</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/logback-05b134ab-b6e6-4a10-a00c-41b829938618.png" alt=""></p><p>\u4E5F\u5C31\u662F\u8BF4\uFF0CLogback \u4F1A\u5728 classpath \u8DEF\u5F84\u4E0B\u5148\u5BFB\u627E logback-test.xml \u6587\u4EF6\uFF0C\u6CA1\u6709\u627E\u5230\u7684\u8BDD\uFF0C\u5BFB\u627E logback.xml \u6587\u4EF6\uFF0C\u90FD\u627E\u4E0D\u5230\u7684\u8BDD\uFF0C\u5C31\u8F93\u51FA\u5230\u63A7\u5236\u53F0\u3002</p><p>\u5E76\u4E14\uFF0CLogger \u7684\u9ED8\u8BA4\u65E5\u5FD7\u7EA7\u522B\u662F INFO \u7EA7\u522B\u7684\uFF0C\u8FD9\u5C31\u610F\u5473\u7740\u5982\u679C\u5C1D\u8BD5\u4E0B\u9762\u7684\u4EE3\u7801\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>logger<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">&quot;\u6C89\u9ED8\u738B\u4E8C\u662F\u50BB X&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u63A7\u5236\u53F0\u662F\u770B\u4E0D\u5230\u8FD9\u884C\u65E5\u5FD7\u8F93\u51FA\u7684\u3002Logback \u7684\u65E5\u5FD7\u7EA7\u522B\u662F\u8FD9\u6837\u7684\uFF1A</p><blockquote><p>TRACE &lt; DEBUG &lt; INFO &lt; WARN &lt; ERROR</p></blockquote><p>\u4E5F\u5C31\u662F\u8BF4\u5C0F\u4E8E INFO \u7EA7\u522B\u7684\u65E5\u5FD7\u90FD\u4E0D\u4F1A\u8BB0\u5F55\uFF0C\u53EA\u6709\u5927\u4E8E\u7B49\u4E8E INFO \u7EA7\u522B\u7684\u65E5\u5FD7\u624D\u4F1A\u88AB\u8BB0\u5F55\u3002</p><h3 id="\u7F16\u7A0B\u55B5\u5B9E\u6218\u9879\u76EE\u7684\u65E5\u5FD7\u6848\u4F8B\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#\u7F16\u7A0B\u55B5\u5B9E\u6218\u9879\u76EE\u7684\u65E5\u5FD7\u6848\u4F8B\u5206\u6790" aria-hidden="true">#</a> \u7F16\u7A0B\u55B5\u5B9E\u6218\u9879\u76EE\u7684\u65E5\u5FD7\u6848\u4F8B\u5206\u6790</h3><p>\u5C3D\u7BA1\u9ED8\u8BA4\u914D\u7F6E\u5F88\u6709\u7528\uFF0C\u4F46\u5B83\u5F88\u53EF\u80FD\u4E0D\u80FD\u6EE1\u8DB3\u6211\u4EEC\u7684\u5B9E\u9645\u5F00\u53D1\u9700\u6C42\uFF0C\u4E8E\u662F\u6211\u4EEC\u9700\u8981\u627E\u5230\u4E00\u79CD\u66F4\u4F18\u96C5\u7684\u89E3\u51B3\u65B9\u6848\u3002</p><p>\u5F53 <code>src/main/resources</code> \u76EE\u5F55\u4E0B\u6709\u4EE5\u4E0B\u540D\u79F0\u4E4B\u4E00\u7684\u914D\u7F6E\u6587\u4EF6\u65F6\uFF0CSpring Boot \u5C06\u81EA\u52A8\u52A0\u8F7D\u5B83\u6765\u4F5C\u4E3A Logback \u7684\u914D\u7F6E\u9879\uFF1A</p><ul><li>logback-spring.xml</li><li>logback.xml</li><li>logback-spring.groovy</li><li>logback.groovy</li></ul><p>Spring Boot \u5EFA\u8BAE\u6211\u4EEC\u4F7F\u7528 <code>-spring</code> \u7ED3\u5C3E\u7684\u914D\u7F6E\u6587\u4EF6\uFF0C\u8FD9\u6837\u53EF\u4EE5\u4F7F\u7528 Spring Boot \u7684 Pro\uFB01le \u529F\u80FD\uFF08\u9488\u5BF9\u4E0D\u540C\u7684\u73AF\u5883\uFF08\u5F00\u53D1\u73AF\u5883\u3001\u6D4B\u8BD5\u73AF\u5883\u3001\u6B63\u5F0F\u73AF\u5883\uFF09\u63D0\u4F9B\u4E0D\u540C\u7684\u914D\u7F6E\u9879\uFF09\u3002</p><p>\u7F16\u7A0B\u55B5\u7528\u7684\u662F logback-spring.xml\uFF08\u5728 codingmore-admin \u9879\u76EE\u4E0B\u53EF\u4EE5\u627E\u5F97\u5230\uFF09\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;!--
configuration \u6709\u4E09\u4E2A\u5C5E\u6027\uFF1A
scan\uFF1A\u5F53\u6B64\u5C5E\u6027\u8BBE\u7F6E\u4E3Atrue\u65F6\uFF0C\u914D\u7F6E\u6587\u4EF6\u5982\u679C\u53D1\u751F\u6539\u53D8\uFF0C\u5C06\u4F1A\u88AB\u91CD\u65B0\u52A0\u8F7D\uFF0C\u9ED8\u8BA4\u503C\u4E3Atrue\u3002
scanPeriod\uFF1A\u8BBE\u7F6E\u76D1\u6D4B\u914D\u7F6E\u6587\u4EF6\u662F\u5426\u6709\u4FEE\u6539\u7684\u65F6\u95F4\u95F4\u9694\uFF0C\u5982\u679C\u6CA1\u6709\u7ED9\u51FA\u65F6\u95F4\u5355\u4F4D\uFF0C\u9ED8\u8BA4\u5355\u4F4D\u662F\u6BEB\u79D2\u5F53scan\u4E3Atrue\u65F6\uFF0C\u6B64\u5C5E\u6027\u751F\u6548\u3002\u9ED8\u8BA4\u7684\u65F6\u95F4\u95F4\u9694\u4E3A1\u5206\u949F\u3002
debug\uFF1A\u5F53\u6B64\u5C5E\u6027\u8BBE\u7F6E\u4E3Atrue\u65F6\uFF0C\u5C06\u6253\u5370\u51FAlogback\u5185\u90E8\u65E5\u5FD7\u4FE1\u606F\uFF0C\u5B9E\u65F6\u67E5\u770Blogback\u8FD0\u884C\u72B6\u6001\u3002\u9ED8\u8BA4\u503C\u4E3Afalse\u3002
--&gt;
&lt;configuration&gt;
    &lt;include resource=&quot;org/springframework/boot/logging/logback/defaults.xml&quot; /&gt;
    &lt;!-- \u5B9A\u4E49\u65E5\u5FD7\u6587\u4EF6\u540D\u79F0 --&gt;
    &lt;property name=&quot;APP_NAME&quot; value=&quot;codingmore-admin&quot; /&gt;
    &lt;!-- \u5B9A\u4E49\u65E5\u5FD7\u6587\u4EF6\u7684\u8DEF\u5F84 --&gt;
    &lt;property name=&quot;LOG_PATH&quot; value=&quot;\${user.home}/\${APP_NAME}/logs&quot; /&gt;
    &lt;!-- \u5B9A\u4E49\u65E5\u5FD7\u7684\u6587\u4EF6\u540D --&gt;
    &lt;property name=&quot;LOG_FILE&quot; value=&quot;\${LOG_PATH}/codingmore-admin.log&quot; /&gt;

    &lt;!-- \u6EDA\u52A8\u8BB0\u5F55\u65E5\u5FD7\uFF0C\u5148\u5C06\u65E5\u5FD7\u8BB0\u5F55\u5230\u6307\u5B9A\u6587\u4EF6\uFF0C\u5F53\u7B26\u5408\u67D0\u4E2A\u6761\u4EF6\u65F6\uFF0C\u5C06\u65E5\u5FD7\u8BB0\u5F55\u5230\u5176\u4ED6\u6587\u4EF6 --&gt;
    &lt;appender name=&quot;APPLICATION&quot;
        class=&quot;ch.qos.logback.core.rolling.RollingFileAppender&quot;&gt;
        &lt;!-- \u6307\u5B9A\u65E5\u5FD7\u6587\u4EF6\u7684\u540D\u79F0 --&gt;
        &lt;file&gt;\${LOG_FILE}&lt;/file&gt;
        &lt;!--
          \u5F53\u53D1\u751F\u6EDA\u52A8\u65F6\uFF0C\u51B3\u5B9A RollingFileAppender \u7684\u884C\u4E3A\uFF0C\u6D89\u53CA\u6587\u4EF6\u79FB\u52A8\u548C\u91CD\u547D\u540D
          TimeBasedRollingPolicy\uFF1A \u6700\u5E38\u7528\u7684\u6EDA\u52A8\u7B56\u7565\uFF0C\u5B83\u6839\u636E\u65F6\u95F4\u6765\u5236\u5B9A\u6EDA\u52A8\u7B56\u7565\uFF0C\u65E2\u8D1F\u8D23\u6EDA\u52A8\u4E5F\u8D1F\u8D23\u89E6\u53D1\u6EDA\u52A8\u3002
          --&gt;
        &lt;rollingPolicy class=&quot;ch.qos.logback.core.rolling.TimeBasedRollingPolicy&quot;&gt;
            &lt;!--
           \u6EDA\u52A8\u65F6\u4EA7\u751F\u7684\u6587\u4EF6\u7684\u5B58\u653E\u4F4D\u7F6E\u53CA\u6587\u4EF6\u540D\u79F0
           %d{yyyy-MM-dd}\uFF1A\u6309\u5929\u8FDB\u884C\u65E5\u5FD7\u6EDA\u52A8
           %i\uFF1A\u5F53\u6587\u4EF6\u5927\u5C0F\u8D85\u8FC7maxFileSize\u65F6\uFF0C\u6309\u7167i\u8FDB\u884C\u6587\u4EF6\u6EDA\u52A8
           --&gt;
            &lt;fileNamePattern&gt;\${LOG_FILE}.%d{yyyy-MM-dd}.%i.log&lt;/fileNamePattern&gt;
            &lt;!--
           \u53EF\u9009\u8282\u70B9\uFF0C\u63A7\u5236\u4FDD\u7559\u7684\u5F52\u6863\u6587\u4EF6\u7684\u6700\u5927\u6570\u91CF\uFF0C\u8D85\u51FA\u6570\u91CF\u5C31\u5220\u9664\u65E7\u6587\u4EF6\u3002\u5047\u8BBE\u8BBE\u7F6E\u6BCF\u5929\u6EDA\u52A8\uFF0C
           \u4E14maxHistory\u662F7\uFF0C\u5219\u53EA\u4FDD\u5B58\u6700\u8FD17\u5929\u7684\u6587\u4EF6\uFF0C\u5220\u9664\u4E4B\u524D\u7684\u65E7\u6587\u4EF6\u3002
           \u6CE8\u610F\uFF0C\u5220\u9664\u65E7\u6587\u4EF6\u65F6\uFF0C\u90A3\u4E9B\u4E3A\u4E86\u5F52\u6863\u800C\u521B\u5EFA\u7684\u76EE\u5F55\u4E5F\u4F1A\u88AB\u5220\u9664\u3002
           --&gt;
            &lt;maxHistory&gt;7&lt;/maxHistory&gt;
            &lt;!--
           \u5F53\u65E5\u5FD7\u6587\u4EF6\u8D85\u8FC7maxFileSize\u6307\u5B9A\u7684\u5927\u5C0F\u65F6\uFF0C\u6839\u636E\u4E0A\u9762\u63D0\u5230\u7684%i\u8FDB\u884C\u65E5\u5FD7\u6587\u4EF6\u6EDA\u52A8
           \u6CE8\u610F\u6B64\u5904\u914D\u7F6ESizeBasedTriggeringPolicy\u662F\u65E0\u6CD5\u5B9E\u73B0\u6309\u6587\u4EF6\u5927\u5C0F\u8FDB\u884C\u6EDA\u52A8\u7684\uFF0C
           \u5FC5\u987B\u914D\u7F6EtimeBasedFileNamingAndTriggeringPolicy
           --&gt;
            &lt;timeBasedFileNamingAndTriggeringPolicy class=&quot;ch.qos.logback.core.rolling.SizeAndTimeBasedFNATP&quot;&gt;
                &lt;maxFileSize&gt;50MB&lt;/maxFileSize&gt;
            &lt;/timeBasedFileNamingAndTriggeringPolicy&gt;
        &lt;/rollingPolicy&gt;
        &lt;!-- \u65E5\u5FD7\u8F93\u51FA\u683C\u5F0F\uFF1A --&gt;
        &lt;layout class=&quot;ch.qos.logback.classic.PatternLayout&quot;&gt;
            &lt;pattern&gt;%d{yyyy-MM-dd HH:mm:ss.SSS} [ %thread ] - [ %-5level ] [ %logger{50} : %line ] - %msg%n&lt;/pattern&gt;
        &lt;/layout&gt;
    &lt;/appender&gt;
    &lt;!-- ch.qos.logback.core.ConsoleAppender \u8868\u793A\u63A7\u5236\u53F0\u8F93\u51FA --&gt;
    &lt;appender name=&quot;CONSOLE&quot; class=&quot;ch.qos.logback.core.ConsoleAppender&quot;&gt;
        &lt;!--
       \u65E5\u5FD7\u8F93\u51FA\u683C\u5F0F\uFF1A
           %d\u8868\u793A\u65E5\u671F\u65F6\u95F4\uFF0C%green \u7EFF\u8272
           %thread\u8868\u793A\u7EBF\u7A0B\u540D\uFF0C%magenta \u6D0B\u7EA2\u8272
           %-5level\uFF1A\u7EA7\u522B\u4ECE\u5DE6\u663E\u793A5\u4E2A\u5B57\u7B26\u5BBD\u5EA6 %highlight \u9AD8\u4EAE\u8272
           %logger{36} \u8868\u793Alogger\u540D\u5B57\u6700\u957F36\u4E2A\u5B57\u7B26\uFF0C\u5426\u5219\u6309\u7167\u53E5\u70B9\u5206\u5272 %yellow \u9EC4\u8272
           %msg\uFF1A\u65E5\u5FD7\u6D88\u606F
           %n\u662F\u6362\u884C\u7B26
       --&gt;
        &lt;layout class=&quot;ch.qos.logback.classic.PatternLayout&quot;&gt;
            &lt;pattern&gt;%green(%d{yyyy-MM-dd HH:mm:ss.SSS}) [%magenta(%thread)] %highlight(%-5level) %yellow(%logger{36}): %msg%n&lt;/pattern&gt;
        &lt;/layout&gt;
    &lt;/appender&gt;

    &lt;!--
   root\u4E0Elogger\u662F\u7236\u5B50\u5173\u7CFB\uFF0C\u6CA1\u6709\u7279\u522B\u5B9A\u4E49\u5219\u9ED8\u8BA4\u4E3Aroot\uFF0C\u4EFB\u4F55\u4E00\u4E2A\u7C7B\u53EA\u4F1A\u548C\u4E00\u4E2Alogger\u5BF9\u5E94\uFF0C
   \u8981\u4E48\u662F\u5B9A\u4E49\u7684logger\uFF0C\u8981\u4E48\u662Froot\uFF0C\u5224\u65AD\u7684\u5173\u952E\u5728\u4E8E\u627E\u5230\u8FD9\u4E2Alogger\uFF0C\u7136\u540E\u5224\u65AD\u8FD9\u4E2Alogger\u7684appender\u548Clevel\u3002
   --&gt;
    &lt;root level=&quot;info&quot;&gt;
        &lt;appender-ref ref=&quot;CONSOLE&quot; /&gt;
        &lt;appender-ref ref=&quot;APPLICATION&quot; /&gt;
    &lt;/root&gt;
&lt;/configuration&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br></div></div><p>\u5177\u4F53\u542B\u4E49\u90FD\u5199\u5728\u4E86\u6CE8\u91CA\u91CC\uFF0C\u5927\u5BB6\u53EF\u4EE5\u7EC6\u81F4\u770B\u4E00\u4E0B\uFF0C\u4E86\u89E3\u5373\u53EF\u3002\u57FA\u672C\u4E0A\u751F\u4EA7\u73AF\u5883\u4E0B\u7684 Logback \u914D\u7F6E\u5C31\u662F\u8FD9\u6837\u7684\uFF0C\u53EF\u5FAE\u8C03\u3002</p><p>\u4E5F\u53EF\u4EE5\u4F7F\u7528\u4E0B\u9762\u8FD9\u4EFD logback-spring.xml\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;configuration &gt;
    &lt;include resource=&quot;org/springframework/boot/logging/logback/defaults.xml&quot; /&gt;

    &lt;property name=&quot;APP_NAME&quot; value=&quot;codingmore-admin&quot; /&gt;
    &lt;property name=&quot;LOG_PATH&quot; value=&quot;\${user.home}/\${APP_NAME}/logs&quot; /&gt;
    &lt;property name=&quot;LOG_FILE&quot; value=&quot;\${LOG_PATH}/codingmore-admin.log&quot; /&gt;

    &lt;appender name=&quot;APPLICATION&quot;
        class=&quot;ch.qos.logback.core.rolling.RollingFileAppender&quot;&gt;
        &lt;file&gt;\${LOG_FILE}&lt;/file&gt;
        &lt;encoder&gt;
            &lt;pattern&gt;\${FILE_LOG_PATTERN}&lt;/pattern&gt;
        &lt;/encoder&gt;
        &lt;rollingPolicy class=&quot;ch.qos.logback.core.rolling.SizeAndTimeBasedRollingPolicy&quot;&gt;
            &lt;fileNamePattern&gt;\${LOG_FILE}.%d{yyyy-MM-dd}.%i.log&lt;/fileNamePattern&gt;
            &lt;maxHistory&gt;7&lt;/maxHistory&gt;
            &lt;maxFileSize&gt;50MB&lt;/maxFileSize&gt;
            &lt;totalSizeCap&gt;2GB&lt;/totalSizeCap&gt;
        &lt;/rollingPolicy&gt;
    &lt;/appender&gt;

    &lt;appender name=&quot;CONSOLE&quot; class=&quot;ch.qos.logback.core.ConsoleAppender&quot;&gt;
        &lt;encoder&gt;
            &lt;pattern&gt;\${CONSOLE_LOG_PATTERN}&lt;/pattern&gt;
            &lt;charset&gt;utf8&lt;/charset&gt;
        &lt;/encoder&gt;
    &lt;/appender&gt;

    &lt;root level=&quot;info&quot;&gt;
        &lt;appender-ref ref=&quot;CONSOLE&quot; /&gt;
        &lt;appender-ref ref=&quot;APPLICATION&quot; /&gt;
    &lt;/root&gt;
&lt;/configuration&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><p>\u53EA\u8BF4\u51E0\u4E2A\u4E0D\u540C\u7684\u70B9\u3002</p><p><code>FILE_LOG_PATTERN</code> \u548C <code>CONSOLE_LOG_PATTERN</code> \u662F\u5728 Spring Boot \u4E2D\u9ED8\u8BA4\u5B9A\u4E49\u7684\u3002</p>`,43),m={href:"https://github.com/spring-projects/spring-boot/blob/main/spring-boot-project/spring-boot/src/main/java/org/springframework/boot/logging/logback/DefaultLogbackConfiguration.java",target:"_blank",rel:"noopener noreferrer"},d=a("https://github.com/spring-projects/spring-boot/blob/main/spring-boot-project/spring-boot/src/main/java/org/springframework/boot/logging/logback/DefaultLogbackConfiguration.java"),k=l(`<p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/logback-87217069-b756-4c0c-945e-06ecc5785b81.png" alt=""></p><p>SizeAndTimeBasedRollingPolicy \u6BD4 TimeBasedRollingPolicy \u591A\u4E86\u4E00\u4E2A\u65E5\u5FD7\u6587\u4EF6\u5927\u5C0F\u8BBE\u5B9A\u7684\u5C5E\u6027\uFF1AmaxFileSize\uFF0C\u5176\u4ED6\u5B8C\u5168\u4E00\u6837\u3002</p><p>totalSizeCap\uFF0C\u6240\u6709\u65E5\u5FD7\u6587\u4EF6\u7684\u5927\u5C0F\uFF08\u53EF\u9009\u9879\uFF09\u3002\u8D85\u51FA\u8FD9\u4E2A\u5927\u5C0F\u65F6\uFF0C\u65E7\u7684\u65E5\u5FD7\u6587\u4EF6\u5C06\u4F1A\u88AB\u5F02\u6B65\u5220\u9664\u3002\u9700\u8981\u914D\u5408 maxHistory \u5C5E\u6027\u4E00\u8D77\u4F7F\u7528\uFF0C\u5E76\u4E14\u662F\u7B2C\u4E8C\u6761\u4EF6\u3002</p><p>\u5728Intellij IDEA \u4E2D\u542F\u52A8\u9879\u76EE\uFF0C\u6211\u4EEC\u6765\u67E5\u770B\u4E00\u4E0B\u914D\u7F6E\u540E\u7684\u65E5\u5FD7\u6548\u679C\uFF08\u63A7\u5236\u53F0\u4E2D\uFF09\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/logback-1a849206-617e-45d5-b199-50787c12e9bc.png" alt=""></p><p>\u7531\u4E8E\u6211\u4EEC\u52A0\u4E86\u989C\u8272\u914D\u7F6E\uFF0C\u6240\u4EE5\u63A7\u5236\u53F0\u65E5\u5FD7\u770B\u8D77\u6765\u5BF9\u773C\u775B\u66F4\u53CB\u597D\u4E86\u4E00\u4E9B\u3002</p><p>\u90A3\u914D\u7F6E\u7684\u65E5\u5FD7\u6587\u4EF6\u5728\u54EA\u91CC\u5462\uFF1F\u5728 <code>user.home</code> \u4E0B\uFF0C\u5982\u679C\u4E0D\u786E\u5B9A\u5177\u4F53\u503C\u662F\u4EC0\u4E48\u7684\u8BDD\uFF0C\u53EF\u4EE5\u901A\u8FC7 <code>System.getProperty(&quot;user.home&quot;)</code> \u83B7\u53D6\u5230\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/logback-bdb8558e-2fd0-488e-9a0a-7c78234eae7a.png" alt=""></p><p>\u987A\u7740\u8FD9\u4E2A\u8DEF\u5F84\u5C31\u53EF\u4EE5\u627E\u5230\u751F\u6210\u7684\u65E5\u5FD7\u6587\u4EF6\u4E86\uFF0C\u5E76\u4E14\u65E5\u5FD7\u7684\u751F\u6210\u7B56\u7565\u4E5F\u662F\u7B26\u5408\u6211\u4EEC\u7684\u9884\u671F\u7684\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/logback-3e5c5534-470b-4ec4-b5fa-cb2a6fbbaee4.png" alt=""></p><h3 id="\u4F7F\u7528-lombok-\u8FDB\u884C\u65E5\u5FD7\u8BB0\u5F55" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-lombok-\u8FDB\u884C\u65E5\u5FD7\u8BB0\u5F55" aria-hidden="true">#</a> \u4F7F\u7528 lombok \u8FDB\u884C\u65E5\u5FD7\u8BB0\u5F55</h3><p>\u5728\u4E0A\u9762\u7684\u4F8B\u5B50\u4E2D\uFF0C\u6211\u4EEC\u5FC5\u987B\u5728\u7C7B\u4E2D\u58F0\u660E\u4E00\u4E2A\u9759\u6001\u7684 Logger \u5BF9\u8C61\u624D\u80FD\u5728\u9700\u8981\u8BB0\u5F55\u65E5\u5FD7\u7684\u5730\u65B9\u4F7F\u7528\u5B83\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">static</span> <span class="token class-name">Logger</span> logger <span class="token operator">=</span> <span class="token class-name">LoggerFactory</span><span class="token punctuation">.</span><span class="token function">getLogger</span><span class="token punctuation">(</span><span class="token class-name">CodingmoreLogbackApplicationTests</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u8FD9\u6837\u7684\u6837\u677F\u4EE3\u7801\u4EE4\u4EBA\u751F\u538C\uFF01</p><p>\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7 lombok \u7684\u65B9\u5F0F\u6765\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0C\u5728 pom.xml \u6587\u4EF6\u4E2D\u52A0\u5165\u4F9D\u8D56\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;dependency&gt;
  &lt;groupId&gt;org.projectlombok&lt;/groupId&gt;
  &lt;artifactId&gt;lombok&lt;/artifactId&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u7136\u540E\u5728\u7C7B\u4E0A\u52A0\u4E0A <code>@Slf4j</code> \u6CE8\u89E3\uFF0C\u4E4B\u540E\u5C31\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528 log\uFF08\u6DFB\u52A0<code>@Slf4j</code> \u6CE8\u89E3\u540E\u4F1A\u81EA\u52A8\u6DFB\u52A0\u4E00\u4E2A log \u5B57\u6BB5\uFF09\u6765\u8BB0\u5F55\u65E5\u5FD7\u4E86\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>@SpringBootTest
@Slf4j
class CodingmoreLogbackApplicationTests {

  @Test
  void testSlf4j() {
    log.info(&quot;\u6C89\u9ED8\u738B\u4E8C\u662F\u4E2A\u5927\u715E\u7B14&quot;);
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><hr>`,19),h=a("\u66F4\u591A\u5185\u5BB9\uFF0C\u53EA\u9488\u5BF9\u300AJava \u7A0B\u5E8F\u5458\u8FDB\u9636\u4E4B\u8DEF\u300B\u661F\u7403\u7528\u6237\u5F00\u653E\uFF0C\u9700\u8981\u7684\u5C0F\u4F19\u4F34\u53EF\u4EE5"),v=a("\u6233\u94FE\u63A5\u{1F517}"),q=a("\u52A0\u5165\u6211\u4EEC\u7684\u661F\u7403\uFF0C\u4E00\u8D77\u5B66\u4E60\uFF0C\u4E00\u8D77\u5377\u3002\u3002"),L=n("strong",null,"\u7F16\u7A0B\u55B5",-1),f=a("\u{1F431}\u662F\u4E00\u4E2A Spring Boot+Vue \u7684\u524D\u540E\u7AEF\u5206\u79BB\u9879\u76EE\uFF0C\u878D\u5408\u4E86\u5E02\u9762\u4E0A\u7EDD\u5927\u591A\u6570\u6D41\u884C\u7684\u6280\u672F\u8981\u70B9\u3002\u901A\u8FC7\u5B66\u4E60\u5B9E\u6218\u9879\u76EE\uFF0C\u4F60\u53EF\u4EE5\u5C06\u6240\u5B66\u7684\u77E5\u8BC6\u901A\u8FC7\u5B9E\u8DF5\u8FDB\u884C\u68C0\u9A8C\u3001\u4F60\u53EF\u4EE5\u62D3\u5BBD\u81EA\u5DF1\u7684\u6280\u672F\u8FB9\u754C\uFF0C\u4F60\u53EF\u4EE5\u638C\u63E1\u4E00\u4E2A\u771F\u6B63\u7684\u5B9E\u6218\u9879\u76EE\u662F\u5982\u4F55\u4ECE 0 \u5230 1 \u7684\u3002"),_=n("hr",null,null,-1),y=n("p",null,[n("img",{src:"http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/springboot/logback-cd491159-e48e-4c74-a67f-7962a45e847f.png",alt:""})],-1),x=n("h3",{id:"\u6E90\u7801\u8DEF\u5F84",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u6E90\u7801\u8DEF\u5F84","aria-hidden":"true"},"#"),a(" \u6E90\u7801\u8DEF\u5F84")],-1),j=a("\u7F16\u7A0B\u55B5\uFF1A"),S={href:"https://github.com/itwanger/coding-more",target:"_blank",rel:"noopener noreferrer"},P=a("https://github.com/itwanger/coding-more"),A=a("Logback \u8BE6\u7EC6\u914D\u7F6E\u4E13\u7528\uFF1A"),T={href:"https://github.com/itwanger/codingmore-learning/tree/main/codingmore-logback",target:"_blank",rel:"noopener noreferrer"},F=a("https://github.com/itwanger/coding-more"),N=n("p",null,[n("img",{src:"http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xingbiaogongzhonghao.png",alt:""})],-1);function O(E,I){const e=t("ExternalLinkIcon"),o=t("RouterLink");return r(),p(i,null,[u,n("blockquote",null,[n("p",null,[n("a",m,[d,s(e)])])]),k,n("p",null,[h,s(o,{to:"/springboot/docs/zhishixingqiu/"},{default:c(()=>[v]),_:1}),q,L,f]),_,y,x,n("blockquote",null,[n("ul",null,[n("li",null,[j,n("a",S,[P,s(e)])]),n("li",null,[A,n("a",T,[F,s(e)])])])]),N],64)}var R=b(g,[["render",O],["__file","logback.html.vue"]]);export{R as default};
