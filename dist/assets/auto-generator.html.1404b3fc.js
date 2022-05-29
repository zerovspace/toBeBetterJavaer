import{r as p,o as l,c as r,a as n,b as s,w as c,F as i,d as a,e as t}from"./app.d7a66746.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";const b={},m=n("p",null,"\u4F5C\u4E3A\u4E00\u540D Java \u540E\u7AEF\u5F00\u53D1\uFF0C\u65E5\u5E38\u5DE5\u4F5C\u4E2D\u514D\u4E0D\u4E86\u8981\u751F\u6210\u6570\u636E\u5E93\u8868\u5BF9\u5E94\u7684\u6301\u4E45\u5316\u5BF9\u8C61 PO\uFF0C\u64CD\u4F5C\u6570\u636E\u5E93\u7684\u63A5\u53E3 DAO\uFF0C\u4EE5\u53CA CRUD \u7684 XML\uFF0C\u4E5F\u5C31\u662F mapper\u3002",-1),g=n("p",null,"Mybatis Generator \u662F MyBatis \u5B98\u65B9\u63D0\u4F9B\u7684\u4E00\u4E2A\u4EE3\u7801\u751F\u6210\u5DE5\u5177\uFF0C\u5B8C\u5168\u53EF\u4EE5\u80DC\u4EFB\u8FD9\u4E2A\u5DE5\u4F5C\uFF0C\u4E0D\u8FC7\u6700\u8FD1\u5728\u5F00\u53D1\u201C\u7F16\u7A0B\u55B5\u{1F431}\u201D\u5F00\u6E90\u7F51\u7AD9\u7684\u65F6\u5019\u8BD5\u7528\u4E86\u4E00\u4E0B MyBatis-Plus \u5B98\u65B9\u63D0\u4F9B AutoGenerator\uFF0C\u53D1\u73B0\u914D\u7F6E\u66F4\u7B80\u5355\uFF0C\u5F00\u53D1\u6548\u7387\u66F4\u9AD8\uFF01\u4E8E\u662F\u5C31\u6765\u7ED9\u5C0F\u4F19\u4F34\u4EEC\u5B89\u5229\u4E00\u6CE2\u3002",-1),d=n("p",null,"\u8BA9\u6211\u4EEC\u6765\u901A\u8FC7\u4E00\u4E2A gif \u611F\u53D7\u4E00\u4E0B AutoGenerator \u7684\u5F3A\u5927\u3002",-1),k=n("p",null,[n("img",{src:"http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/kaiyuan/auto-generator-1.gif",alt:""})],-1),v=n("h3",{id:"\u5BFC\u5165-sql-\u6587\u4EF6",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u5BFC\u5165-sql-\u6587\u4EF6","aria-hidden":"true"},"#"),a(" \u5BFC\u5165 SQL \u6587\u4EF6")],-1),h=n("p",null,"\u7F16\u7A0B\u55B5\u9879\u76EE\u7684 SQL \u6587\u4EF6\u6211\u5DF2\u7ECF\u540C\u6B65\u5230\u672C\u6559\u7A0B\u6240\u5728\u7684\u6E90\u7801\u5F53\u4E2D\u3002",-1),y=a("\u8DEF\u5F84\uFF1A"),f={href:"https://github.com/itwanger/codingmore-learning/tree/main/codingmore-autogenerator",target:"_blank",rel:"noopener noreferrer"},q=a("https://github.com/itwanger/codingmore-learning/tree/main/codingmore-autogenerator"),_=t(`<p>\u53EF\u4EE5\u901A\u8FC7 GitHub \u684C\u9762\u7248\u4ECE GitHub \u4E0A\u4E0B\u8F7D\u672C\u6559\u7A0B\u4E13\u5C5E\u7684\u9879\u76EE codingmore-autogenerator \u5230\u672C\u5730\uFF0CSQL \u6587\u4EF6\u7684\u4F4D\u7F6E\u53C2\u7167\u4E0B\u56FE\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/kaiyuan/auto-generator-47997c23-cb65-4801-954c-0ec611b764ad.png" alt=""></p><p>\u7F16\u7A0B\u55B5\u4F7F\u7528\u7684 MySQL \u7248\u672C\u662F 8.0\uFF0C\u53EF\u4EE5\u5728\u94FE\u63A5\u4E0A MySQL \u540E\u4F7F\u7528 <code>select version();</code> \u547D\u4EE4\u67E5\u8BE2\u7248\u672C\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/kaiyuan/auto-generator-ea5bbe50-ba28-4056-a81f-a68651a58391.png" alt=""></p><p>\u6253\u5F00 Navicat\uFF0C\u628A SQL \u6587\u4EF6\u5BFC\u5165\u5230\u672C\u5730\u6570\u636E\u5E93\uFF0C</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/kaiyuan/auto-generator-d523792f-2d55-4485-b64d-b4763ecd7b77.png" alt=""></p><p>\u5173\u95ED\u94FE\u63A5\uFF0C\u91CD\u65B0\u6253\u5F00\u5C31\u53EF\u4EE5\u770B\u5230\u5BFC\u5165\u540E\u7684\u6570\u636E\u5E93 codingmore\uFF0C\u91CC\u9762\u4E00\u5171 27 \u5F20\u8868\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/kaiyuan/auto-generator-3cda9cb7-dda5-4aca-9cea-cc400768b921.png" alt=""></p><h3 id="\u5148\u4F53\u9A8C-mybatis-generator" tabindex="-1"><a class="header-anchor" href="#\u5148\u4F53\u9A8C-mybatis-generator" aria-hidden="true">#</a> \u5148\u4F53\u9A8C Mybatis Generator</h3><p>\u7B2C\u4E00\u6B65\uFF0C\u5728 pom.xml \u6587\u4EF6\u4E2D\u6DFB\u52A0 MySQL+MyBatis \u7684\u4F9D\u8D56\uFF08Mybatis Generator \u7684\u524D\u7F6E\u6761\u4EF6\uFF09\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;dependency&gt;
    &lt;groupId&gt;org.mybatis.spring.boot&lt;/groupId&gt;
    &lt;artifactId&gt;mybatis-spring-boot-starter&lt;/artifactId&gt;
    &lt;version&gt;2.2.2&lt;/version&gt;
&lt;/dependency&gt;

&lt;dependency&gt;
    &lt;groupId&gt;mysql&lt;/groupId&gt;
    &lt;artifactId&gt;mysql-connector-java&lt;/artifactId&gt;
    &lt;scope&gt;runtime&lt;/scope&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u6DFB\u52A0\u5B8C\u6210\u540E\uFF0C\u4E00\u5B9A\u8981\u6267\u884C\u4E00\u6B21 Maven \u91CD\u8F7D\uFF08\u89C1\u4E0B\u56FE\uFF09\uFF0C\u786E\u4FDD MyBatis \u7684\u4F9D\u8D56\u52A0\u8F7D\u5B8C\u6BD5\u540E\u518D\u6267\u884C\u7B2C\u4E8C\u6B65\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/kaiyuan/auto-generator-b9dc31ee-32f4-4556-b2e8-b0ed114ec81a.png" alt=""></p><p>\u5426\u5219\u4E0B\u4E00\u6B65\u53EF\u80FD\u4E0D\u901A\u8FC7\uFF0C\u4F46\u53C8\u5F97\u4E0D\u5230\u4EFB\u4F55\u9519\u8BEF\u63D0\u793A\u3002\u4E0D\u8981\u95EE\u6211\u4E3A\u4EC0\u4E48\uFF0C\u8E29\u8FC7\u5751\u540E\u75DB\u82E6\u7684\u9886\u609F\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/kaiyuan/auto-generator-3.png" alt=""></p><p>\u6DFB\u52A0\u5B8C\u6210\u540E\uFF0C\u53EF\u4EE5\u901A\u8FC7 Maven \u63D2\u4EF6\u6765\u751F\u6210\u9AA8\u67B6\u4EE3\u7801\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7 Java \u4EE3\u7801\u6765\u751F\u6210\u9AA8\u67B6\u4EE3\u7801\uFF0C\u8FD9\u91CC\u4EE5 Maven \u63D2\u4EF6\u7684\u5F62\u5F0F\u6765\u6F14\u793A\u3002Java \u4EE3\u7801\u7684\u5F62\u5F0F\u53EF\u53C2\u7167 Mybatis Generator\uFF1A</p>`,16),j={href:"https://mybatis.org/generator/running/runningWithJava.html",target:"_blank",rel:"noopener noreferrer"},x=a("https://mybatis.org/generator/running/runningWithJava.html"),M=t(`<p>\u7B2C\u4E8C\u6B65\uFF0C\u5728 pom.xml \u6587\u4EF6\u4E2D\uFF0C\u6DFB\u52A0 MyBatis Generator \u63D2\u4EF6\uFF0C\u6CE8\u610F\u662F\u5728 <strong>build\u2192plugins</strong> \u4E0B\u8282\u70B9\u4E0B\u6DFB\u52A0\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;!-- MyBatis Generator \u63D2\u4EF6 --&gt;
&lt;plugin&gt;
    &lt;groupId&gt;org.mybatis.generator&lt;/groupId&gt;
    &lt;artifactId&gt;mybatis-generator-maven-plugin&lt;/artifactId&gt;
    &lt;version&gt;1.3.7&lt;/version&gt;
    &lt;configuration&gt;
        &lt;!-- MyBatis Generator \u751F\u6210\u5668\u7684\u914D\u7F6E\u6587\u4EF6--&gt;
        &lt;configurationFile&gt;src/main/resources/mybatis-generator-config.xml&lt;/configurationFile&gt;
        &lt;!-- \u5141\u8BB8\u8986\u76D6\u751F\u6210\u7684\u6587\u4EF6\uFF0C\u786E\u5B9A\u9AA8\u67B6\u4EE3\u7801\u540E\u5C31\u53EF\u4EE5\u8BBE\u4E3A false \u4E86\uFF0C\u514D\u5F97\u8986\u76D6\u539F\u6709\u4EE3\u7801 --&gt;
        &lt;overwrite&gt;true&lt;/overwrite&gt;
        &lt;!-- \u5C06\u5F53\u524D pom \u7684\u4F9D\u8D56\u9879\u6DFB\u52A0\u5230\u751F\u6210\u5668\u7684\u7C7B\u8DEF\u5F84\u4E2D--&gt;
        &lt;includeCompileDependencies&gt;true&lt;/includeCompileDependencies&gt;
    &lt;/configuration&gt;
&lt;/plugin&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>MyBatis Generator \u63D2\u4EF6\u76EE\u524D\u6700\u65B0\u7248\u662F 1.4.0\uFF0C\u6211\u4EEC\u91C7\u7528\u4E0A\u4E00\u4E2A\u7A33\u5B9A\u7248\u672C 1.3.7\uFF0C\u65B0\u7248\u672C\u5BB9\u6613\u6709\u5751\u3002</p><p>\u6765\u770B\u4E00\u4E0B\u6DFB\u52A0 MyBatis Generator \u63D2\u4EF6\u540E pom.xml \u6587\u4EF6\u7684\u7ED3\u6784\u56FE\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/kaiyuan/auto-generator-136e3eec-04ce-478b-aa7d-3d5913466f70.png" alt=""></p><p>\u53EA\u6DFB\u52A0\u63D2\u4EF6\u8FD8\u4E0D\u591F\uFF0C\u8FD8\u9700\u8981\u5BF9\u5176\u8FDB\u884C\u914D\u7F6E\uFF0C\u6211\u4EEC\u4F7F\u7528 configurationFile \u5143\u7D20\u6765\u6307\u5B9A\u4E00\u4E2A\u914D\u7F6E\u6587\u4EF6 mybatis-generator-config.xml\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;configurationFile&gt;src/main/resources/mybatis-generator-config.xml&lt;/configurationFile&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u7531\u4E8E\u6570\u636E\u5E93\u8868\u53EF\u80FD\u4F1A\u53D1\u751F\u53D8\u52A8\uFF0C\u56E0\u6B64\u6211\u4EEC\u9700\u8981\u8FFD\u52A0\u4E00\u4E2A\u914D\u7F6E <code>&lt;overwrite&gt;true&lt;/overwrite&gt;</code>\uFF0C\u5141\u8BB8\u8986\u76D6\u65E7\u7684\u6587\u4EF6\u3002\u4E3A\u4E86\u9632\u6B62\u6211\u4EEC\u7F16\u5199\u7684 SQL \u8BED\u53E5\u88AB\u8986\u76D6\u6389\uFF0CMyBatis Generator \u53EA\u4F1A\u8986\u76D6\u65E7\u7684 po\u3001dao\u3001\u800C *mapper.xml \u4E0D\u4F1A\u8986\u76D6\uFF0C\u800C\u662F\u8FFD\u52A0\u3002</p><p>Mybatis Generator \u9700\u8981\u8FDE\u63A5\u6570\u636E\u5E93\uFF0C\u6240\u4EE5\u8FD8\u9700\u8981\u5728 plugin \u8282\u70B9\u4E2D\u6DFB\u52A0\u6570\u636E\u5E93\u9A71\u52A8\u4F9D\u8D56\uFF0C\u5C31\u50CF\u8FD9\u6837\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;configuration&gt;
&lt;/configuration&gt;
&lt;dependency&gt;
    &lt;groupId&gt;mysql&lt;/groupId&gt;
    &lt;artifactId&gt;mysql-connector-java&lt;/artifactId&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u4F46\u6211\u4EEC\u5728 pom.xml \u6587\u4EF6\u4E2D\u5DF2\u7ECF\u6DFB\u52A0\u8FC7 MySQL \u7684\u94FE\u63A5\u9A71\u52A8\u4E86\uFF0C\u8FD9\u91CC\u518D\u6DFB\u52A0\u5C31\u4F1A\u663E\u5F97\u5F88\u591A\u4F59\u3002\u597D\u5728 Maven \u4E3A\u6211\u4EEC\u63D0\u4F9B\u4E86 includeCompileDependencies \u5C5E\u6027\uFF0C\u53EF\u4EE5\u8BA9\u6211\u4EEC\u5728\u63D2\u4EF6\u4E2D\u5F15\u7528\u4E4B\u524D\u6DFB\u52A0\u7684\u4F9D\u8D56\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;includeCompileDependencies&gt;true&lt;/includeCompileDependencies&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u6765\u770B\u4E00\u4E0B mybatis-generator-config.xml \u7684\u4F4D\u7F6E\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/kaiyuan/auto-generator-499b434d-4ae8-45c3-bfeb-9f5b4710b81e.png" alt=""></p><p>\u6765\u770B\u4E00\u4E0B mybatis-generator-config.xml \u7684\u5185\u5BB9\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;generatorConfiguration&gt;
    &lt;context id=&quot;myContext&quot; targetRuntime=&quot;MyBatis3&quot; defaultModelType=&quot;flat&quot;&gt;

        &lt;!-- \u6CE8\u91CA --&gt;
        &lt;commentGenerator&gt;
            &lt;!-- \u662F\u5426\u4E0D\u751F\u6210\u6CE8\u91CA --&gt;
            &lt;property name=&quot;suppressAllComments&quot; value=&quot;true&quot;/&gt;
        &lt;/commentGenerator&gt;

        &lt;!-- jdbc\u8FDE\u63A5 --&gt;
        &lt;jdbcConnection driverClass=&quot;com.mysql.cj.jdbc.Driver&quot;
                        connectionURL=&quot;jdbc:mysql://localhost:3306/codingmore?useUnicode=true&amp;amp;characterEncoding=utf-8&amp;amp;serverTimezone=Asia/Shanghai&amp;amp;useSSL=false&quot;
                        userId=&quot;root&quot;
                        password=&quot;Huicheng123&quot;&gt;
            &lt;!--\u9AD8\u7248\u672C\u7684 mysql-connector-java \u9700\u8981\u8BBE\u7F6E nullCatalogMeansCurrent=true--&gt;
            &lt;property name=&quot;nullCatalogMeansCurrent&quot; value=&quot;true&quot;/&gt;
        &lt;/jdbcConnection&gt;

        &lt;!-- \u7C7B\u578B\u8F6C\u6362 --&gt;
        &lt;javaTypeResolver&gt;
            &lt;!--\u662F\u5426\u4F7F\u7528bigDecimal\uFF0C\u9ED8\u8BA4false\u3002
                false\uFF0C\u628AJDBC DECIMAL \u548C NUMERIC \u7C7B\u578B\u89E3\u6790\u4E3A Integer
                true\uFF0C\u628AJDBC DECIMAL \u548C NUMERIC \u7C7B\u578B\u89E3\u6790\u4E3Ajava.math.BigDecimal--&gt;
            &lt;property name=&quot;forceBigDecimals&quot; value=&quot;true&quot;/&gt;
        &lt;/javaTypeResolver&gt;

        &lt;!-- \u751F\u6210\u5B9E\u4F53\u7C7B\u5730\u5740 --&gt;
        &lt;javaModelGenerator targetPackage=&quot;top.codingmore.mbg.po&quot; targetProject=&quot;src/main/java&quot;&gt;
            &lt;!-- \u662F\u5426\u9488\u5BF9string\u7C7B\u578B\u7684\u5B57\u6BB5\u5728set\u65B9\u6CD5\u4E2D\u8FDB\u884C\u4FEE\u526A\uFF0C\u9ED8\u8BA4false --&gt;
            &lt;property name=&quot;trimStrings&quot; value=&quot;true&quot;/&gt;
        &lt;/javaModelGenerator&gt;


        &lt;!-- \u751F\u6210Mapper.xml\u6587\u4EF6 --&gt;
        &lt;sqlMapGenerator targetPackage=&quot;top.codingmore.mbg.mapper&quot; targetProject=&quot;src/main/resources&quot;&gt;
        &lt;/sqlMapGenerator&gt;

        &lt;!-- \u751F\u6210 XxxMapper.java \u63A5\u53E3--&gt;
        &lt;javaClientGenerator targetPackage=&quot;top.codingmore.mbg.dao&quot; targetProject=&quot;src/main/java&quot; type=&quot;XMLMAPPER&quot;&gt;
        &lt;/javaClientGenerator&gt;


        &lt;!-- schema\u4E3A\u6570\u636E\u5E93\u540D\uFF0Coracle\u9700\u8981\u914D\u7F6E\uFF0Cmysql\u4E0D\u9700\u8981\u914D\u7F6E\u3002
             tableName\u4E3A\u5BF9\u5E94\u7684\u6570\u636E\u5E93\u8868\u540D
             domainObjectName \u662F\u8981\u751F\u6210\u7684\u5B9E\u4F53\u7C7B\u540D(\u53EF\u4EE5\u4E0D\u6307\u5B9A\uFF0C\u9ED8\u8BA4\u6309\u5E15\u65AF\u5361\u547D\u540D\u6CD5\u5C06\u8868\u540D\u8F6C\u6362\u6210\u7C7B\u540D)
             enableXXXByExample \u9ED8\u8BA4\u4E3A true\uFF0C \u4E3A true \u4F1A\u751F\u6210\u4E00\u4E2A\u5BF9\u5E94Example\u5E2E\u52A9\u7C7B\uFF0C\u5E2E\u52A9\u4F60\u8FDB\u884C\u6761\u4EF6\u67E5\u8BE2\uFF0C\u4E0D\u60F3\u8981\u53EF\u4EE5\u8BBE\u4E3Afalse
             --&gt;
        &lt;table schema=&quot;&quot; tableName=&quot;posts&quot; domainObjectName=&quot;Posts&quot;
               enableCountByExample=&quot;false&quot; enableDeleteByExample=&quot;false&quot; enableSelectByExample=&quot;false&quot;
               enableUpdateByExample=&quot;false&quot; selectByExampleQueryId=&quot;false&quot;&gt;
        &lt;/table&gt;
    &lt;/context&gt;
&lt;/generatorConfiguration&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br></div></div><ul><li>\u914D\u7F6E\u6587\u4EF6\u81F3\u5C11\u5F97\u5305\u542B\u4E00\u4E2Acontext</li><li>commentGenerator \u7528\u6765\u914D\u7F6E\u751F\u6210\u7684\u6CE8\u91CA</li><li>jdbcConnection \u7528\u6765\u94FE\u63A5\u6570\u636E\u5E93</li><li>javaTypeResolver \u914D\u7F6E JDBC \u4E0E Java \u7684\u7C7B\u578B\u8F6C\u6362\u89C4\u5219</li><li>javaModelGenerator \u914D\u7F6E po \u751F\u6210\u7684\u5305\u8DEF\u5F84\u548C\u9879\u76EE\u8DEF\u5F84</li><li>sqlMapGenerator \u914D\u7F6E mapper.xml \u6587\u4EF6\u751F\u6210\u7684\u76EE\u5F55</li><li>javaClientGenerator \u914D\u7F6E mapper.java \u6587\u4EF6\u751F\u6210\u7684\u76EE\u5F55</li><li>\u4E00\u4E2A table \u5BF9\u5E94\u4E00\u5F20\u8868\uFF0C\u5982\u679C\u60F3\u540C\u65F6\u751F\u6210\u591A\u5F20\u8868\uFF0C\u9700\u8981\u914D\u7F6E\u591A\u4E2A table</li></ul><p>\u66F4\u591A\u914D\u7F6E\u4FE1\u606F\u53EF\u4EE5\u53C2\u7167\u4E0B\u9762\u8FD9\u7BC7\u6587\u7AE0\uFF1A</p>`,18),G={href:"https://juejin.cn/post/6844903982582743048",target:"_blank",rel:"noopener noreferrer"},C=a("https://juejin.cn/post/6844903982582743048"),B=t(`<p>\u5230\u6B64\u4E3A\u6B62\uFF0Cmybatis-generator-maven-plugin \u5C31\u7B97\u662F\u914D\u7F6E\u5B8C\u6210\u4E86\uFF0C\u5B8C\u6574\u5185\u5BB9\u5982\u4E0B\u56FE\u6240\u793A\uFF1A</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/kaiyuan/auto-generator-c09c7dcd-ab4e-437b-a512-a9e0bf1f533c.png" alt=""></p><p>\u914D\u7F6E\u5B8C\u6210\u540E\u53EF\u4EE5\u53CC\u51FB\u8FD0\u884C Maven \u7684\u63D2\u4EF6 Mybatis Generator\uFF0C\u6CA1\u6709\u95EE\u9898\u7684\u8BDD\uFF0C\u53EF\u4EE5\u770B\u5230\u751F\u6210\u540E\u7684\u6587\u4EF6\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/kaiyuan/auto-generator-843487f6-5823-4291-b6c3-b4f69b9bba51.png" alt=""></p><h3 id="\u518D\u4F53\u9A8C-mybatis-plus-\u7684-autogenerator" tabindex="-1"><a class="header-anchor" href="#\u518D\u4F53\u9A8C-mybatis-plus-\u7684-autogenerator" aria-hidden="true">#</a> \u518D\u4F53\u9A8C MyBatis-Plus \u7684 AutoGenerator</h3><p>MyBatis-Plus\uFF08\u7B80\u5199 MP\uFF09\u662F MyBatis \u7684\u589E\u5F3A\u5DE5\u5177\uFF0C\u5B98\u65B9\u5BA3\u79F0 MP \u548C MyBatis \u7684\u5173\u7CFB\u5C31\u597D\u50CF\u9B42\u6597\u7F57\u4E2D\u7684 1P \u548C 2P\uFF0C\u53EF\u8C13\u597D\u57FA\u53CB\uFF0C\u5929\u4E0B\u8D70\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/kaiyuan/auto-generator-7.png" alt=""></p><p>AutoGenerator \u662F MyBatis-Plus \u63A8\u51FA\u7684\u4EE3\u7801\u751F\u6210\u5668\uFF0C\u53EF\u4EE5\u5FEB\u901F\u751F\u6210 Entity\u3001Mapper\u3001Mapper XML\u3001Service\u3001Controller \u7B49\u5404\u4E2A\u6A21\u5757\u7684\u4EE3\u7801\uFF0C\u6BD4 Mybatis Generator \u66F4\u5F3A\u5927\uFF0C\u5F00\u53D1\u6548\u7387\u66F4\u9AD8\u3002</p><p>\u901A\u8FC7\u524D\u9762\u7684\u4F53\u9A8C\uFF0C\u60F3\u5FC5\u5927\u5BB6\u786E\u5B9E\u611F\u89C9\u5230\u4E86 Mybatis Generator \u7684\u7E41\u7410\uFF0C\u63A5\u4E0B\u6765\uFF0C\u6211\u4EEC\u6765\u4F53\u9A8C\u4E00\u4E0B AutoGenerator\uFF0C\u5BF9\u6BD4\u8FC7\u540E\uFF0C\u5927\u5BB6\u5FC3\u91CC\u5C31\u6709\u7B54\u6848\u4E86\u3002</p><p>\u7B2C\u4E00\u6B65\uFF0C\u5728 pom.xml \u6587\u4EF6\u4E2D\u6DFB\u52A0 AutoGenerator \u7684\u4F9D\u8D56\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;dependency&gt;
    &lt;groupId&gt;com.baomidou&lt;/groupId&gt;
    &lt;artifactId&gt;mybatis-plus-generator&lt;/artifactId&gt;
    &lt;version&gt;3.4.1&lt;/version&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u7B2C\u4E8C\u6B65\uFF0C\u6DFB\u52A0\u6A21\u677F\u5F15\u64CE\u4F9D\u8D56\uFF0CMyBatis-Plus \u652F\u6301 Velocity\uFF08\u9ED8\u8BA4\uFF09\u3001Freemarker\u3001Beetl\uFF0C\u8FD9\u91CC\u4F7F\u7528 Velocity \u5F15\u64CE\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;dependency&gt;
    &lt;groupId&gt;org.apache.velocity&lt;/groupId&gt;
    &lt;artifactId&gt;velocity-engine-core&lt;/artifactId&gt;
    &lt;version&gt;2.3&lt;/version&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u7B2C\u4E09\u6B65\uFF0C\u65B0\u5EFA CodeGenerator.java \u6587\u4EF6\uFF0C\u5728 main \u65B9\u6CD5\u4E2D\u6DFB\u52A0 MyBatis-Plus \u7684 AutoGenerator \u5BF9\u8C61\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">top<span class="token punctuation">.</span>codingmore<span class="token punctuation">.</span>generator</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token namespace">com<span class="token punctuation">.</span>baomidou<span class="token punctuation">.</span>mybatisplus<span class="token punctuation">.</span>generator<span class="token punctuation">.</span></span><span class="token class-name">AutoGenerator</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * \u5FAE\u4FE1\u641C\u7D22\u300C\u6C89\u9ED8\u738B\u4E8C\u300D\uFF0C\u56DE\u590D Java
 *
 * <span class="token keyword">@author</span> \u6C89\u9ED8\u738B\u4E8C
 * <span class="token keyword">@date</span> 5/17/22
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CodeGenerator</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u4EE3\u7801\u751F\u6210\u5668</span>
        <span class="token class-name">AutoGenerator</span> mpg <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AutoGenerator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>\u5728 main \u65B9\u6CD5\u4E2D\u6DFB\u52A0\u5168\u5C40\u914D\u7F6E\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">// \u5168\u5C40\u914D\u7F6E</span>
<span class="token class-name">GlobalConfig</span> gc <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">GlobalConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> projectPath <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">getProperty</span><span class="token punctuation">(</span><span class="token string">&quot;user.dir&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
gc<span class="token punctuation">.</span><span class="token function">setOutputDir</span><span class="token punctuation">(</span>projectPath <span class="token operator">+</span> <span class="token string">&quot;/src/main/java&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
gc<span class="token punctuation">.</span><span class="token function">setAuthor</span><span class="token punctuation">(</span><span class="token string">&quot;\u6C89\u9ED8\u738B\u4E8C&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
gc<span class="token punctuation">.</span><span class="token function">setOpen</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
gc<span class="token punctuation">.</span><span class="token function">setDateType</span><span class="token punctuation">(</span><span class="token class-name">DateType</span><span class="token punctuation">.</span>ONLY_DATE<span class="token punctuation">)</span><span class="token punctuation">;</span>
gc<span class="token punctuation">.</span><span class="token function">setSwagger2</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
gc<span class="token punctuation">.</span><span class="token function">setIdType</span><span class="token punctuation">(</span><span class="token class-name">IdType</span><span class="token punctuation">.</span>AUTO<span class="token punctuation">)</span><span class="token punctuation">;</span>
gc<span class="token punctuation">.</span><span class="token function">setBaseColumnList</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
gc<span class="token punctuation">.</span><span class="token function">setBaseResultMap</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
gc<span class="token punctuation">.</span><span class="token function">setFileOverride</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

mpg<span class="token punctuation">.</span><span class="token function">setGlobalConfig</span><span class="token punctuation">(</span>gc<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>\u914D\u7F6E\u6570\u636E\u6E90\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">// \u6570\u636E\u6E90\u914D\u7F6E</span>
<span class="token class-name">DataSourceConfig</span> dsc <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DataSourceConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
dsc<span class="token punctuation">.</span><span class="token function">setUrl</span><span class="token punctuation">(</span><span class="token string">&quot;jdbc:mysql://localhost:3306/codingmore?useUnicode=true&amp;characterEncoding=utf-8&amp;serverTimezone=Asia/Shanghai&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
dsc<span class="token punctuation">.</span><span class="token function">setDriverName</span><span class="token punctuation">(</span><span class="token string">&quot;com.mysql.cj.jdbc.Driver&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
dsc<span class="token punctuation">.</span><span class="token function">setUsername</span><span class="token punctuation">(</span><span class="token string">&quot;root&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
dsc<span class="token punctuation">.</span><span class="token function">setPassword</span><span class="token punctuation">(</span><span class="token string">&quot;123456&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

mpg<span class="token punctuation">.</span><span class="token function">setDataSource</span><span class="token punctuation">(</span>dsc<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u7B2C\u4E94\u6B65\uFF0C\u914D\u7F6E\u5305\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">// \u5305\u914D\u7F6E</span>
<span class="token class-name">PackageConfig</span> pc <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PackageConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
pc<span class="token punctuation">.</span><span class="token function">setParent</span><span class="token punctuation">(</span><span class="token string">&quot;top.codingmore.mpg&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u66F4\u591A\u914D\u7F6E\u9879\u53EF\u4EE5\u5230\u5B98\u65B9\u67E5\u770B\uFF1A</p>`,22),I={href:"https://baomidou.com/pages/061573/",target:"_blank",rel:"noopener noreferrer"},w=a("https://baomidou.com/pages/061573/"),P=n("p",null,"\u5B8C\u6574\u4EE3\u7801\u5982\u4E0B\u6240\u793A\uFF1A",-1),D=n("hr",null,null,-1),S=a("\u66F4\u591A\u5185\u5BB9\uFF0C\u53EA\u9488\u5BF9\u300AJava \u7A0B\u5E8F\u5458\u8FDB\u9636\u4E4B\u8DEF\u300B\u661F\u7403\u7528\u6237\u5F00\u653E\uFF0C\u9700\u8981\u7684\u5C0F\u4F19\u4F34\u53EF\u4EE5"),L=a("\u6233\u94FE\u63A5\u{1F517}"),A=a("\u52A0\u5165\u6211\u4EEC\u7684\u661F\u7403\uFF0C\u4E00\u8D77\u5B66\u4E60\uFF0C\u4E00\u8D77\u5377\u3002\u3002"),E=n("strong",null,"\u7F16\u7A0B\u55B5",-1),N=a("\u{1F431}\u662F\u4E00\u4E2A Spring Boot+Vue \u7684\u524D\u540E\u7AEF\u5206\u79BB\u9879\u76EE\uFF0C\u878D\u5408\u4E86\u5E02\u9762\u4E0A\u7EDD\u5927\u591A\u6570\u6D41\u884C\u7684\u6280\u672F\u8981\u70B9\u3002\u901A\u8FC7\u5B66\u4E60\u5B9E\u6218\u9879\u76EE\uFF0C\u4F60\u53EF\u4EE5\u5C06\u6240\u5B66\u7684\u77E5\u8BC6\u901A\u8FC7\u5B9E\u8DF5\u8FDB\u884C\u68C0\u9A8C\u3001\u4F60\u53EF\u4EE5\u62D3\u5BBD\u81EA\u5DF1\u7684\u6280\u672F\u8FB9\u754C\uFF0C\u4F60\u53EF\u4EE5\u638C\u63E1\u4E00\u4E2A\u771F\u6B63\u7684\u5B9E\u6218\u9879\u76EE\u662F\u5982\u4F55\u4ECE 0 \u5230 1 \u7684\u3002"),T=n("hr",null,null,-1),R=n("h3",{id:"\u6E90\u7801\u5730\u5740",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u6E90\u7801\u5730\u5740","aria-hidden":"true"},"#"),a(" \u6E90\u7801\u5730\u5740\uFF1A")],-1),J=a("\u7F16\u7A0B\u55B5\uFF1A"),Q={href:"https://github.com/itwanger/coding-more",target:"_blank",rel:"noopener noreferrer"},U=a("https://github.com/itwanger/coding-more"),F=a("codingmore-autogenerator\uFF1A"),O={href:"https://github.com/itwanger/codingmore-learning/tree/main/codingmore-autogenerator",target:"_blank",rel:"noopener noreferrer"},V=a("https://github.com/itwanger/codingmore-learning"),X=n("hr",null,null,-1),z=n("p",null,[n("img",{src:"http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xingbiaogongzhonghao.png",alt:""})],-1);function H(W,Y){const e=p("ExternalLinkIcon"),o=p("RouterLink");return l(),r(i,null,[m,g,d,k,v,h,n("blockquote",null,[n("p",null,[y,n("a",f,[q,s(e)])])]),_,n("blockquote",null,[n("p",null,[n("a",j,[x,s(e)])])]),M,n("blockquote",null,[n("p",null,[n("a",G,[C,s(e)])])]),B,n("blockquote",null,[n("p",null,[n("a",I,[w,s(e)])])]),P,D,n("p",null,[S,s(o,{to:"/kaiyuan/docs/zhishixingqiu/"},{default:c(()=>[L]),_:1}),A,E,N]),T,R,n("blockquote",null,[n("ul",null,[n("li",null,[J,n("a",Q,[U,s(e)])]),n("li",null,[F,n("a",O,[V,s(e)])])])]),X,z],64)}var $=u(b,[["render",H],["__file","auto-generator.html.vue"]]);export{$ as default};
