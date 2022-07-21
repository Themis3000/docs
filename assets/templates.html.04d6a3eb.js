import{r as a,o,c as r,a as e,b as p,F as i,d as s,e as t}from"./app.9bcae948.js";import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";const u={},c=s('<h1 id="overriding-route-template" tabindex="-1"><a class="header-anchor" href="#overriding-route-template" aria-hidden="true">#</a> Overriding route template</h1><p>If you want functionality that tsoa doesn&#39;t provide, then one powerful (but potentially costly approach) is to provide tsoa with a custom handlebars template to use when generating the routes.ts file.</p><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>Using a custom template means that you will have a more difficult time migrating to new versions of tsoa since your template interacts with the tsoa internals. So, to get the newest and best features of tsoa, please use one of provided templates by selecting your chosen <code>&quot;middleware&quot;</code> (i.e. &quot;koa&quot;, &quot;express&quot;, or &quot;hapi&quot;) and by omitting <code>&quot;middlewareTemplate&quot;</code>.</p></div><p><em>Okay, but why would you want to override the route template?</em></p>',4),d=t("Are you using a server framework that we don't yet support? If so, then "),m={href:"https://github.com/lukeautry/tsoa/issues",target:"_blank",rel:"noopener noreferrer"},h=t("please open an issue first"),y=t(". It's likely that we will try to accept your custom template as one of the new standard options. If we can't support the new framework, then we'll recommend a custom route template."),b=e("li",null,"Do you have a very specific requirement? Have you already opened an issue and have the tsoa maintainers opted not to support this feature? Then a custom template might solve your needs best.",-1),k=s(`<p>Route templates are generated from predefined handlebar templates. You can override and define your own template to use by defining it in your tsoa.json configuration. Route paths are generated based on the middleware type you have defined.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;entryFile&quot;</span><span class="token operator">:</span> <span class="token string">&quot;...&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;spec&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;routes&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;routesDir&quot;</span><span class="token operator">:</span> <span class="token string">&quot;...&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;middleware&quot;</span><span class="token operator">:</span> <span class="token string">&quot;express&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;middlewareTemplate&quot;</span><span class="token operator">:</span> <span class="token string">&quot;custom-template.ts&quot;</span>
    <span class="token operator">...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div>`,2);function g(f,q){const n=a("ExternalLinkIcon");return o(),r(i,null,[c,e("ul",null,[e("li",null,[d,e("a",m,[h,p(n)]),y]),b]),k],64)}var w=l(u,[["render",g]]);export{w as default};
