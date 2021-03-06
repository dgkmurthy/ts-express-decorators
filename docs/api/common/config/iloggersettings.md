
<header class="symbol-info-header"><h1 id="iloggersettings">ILoggerSettings</h1><label class="symbol-info-type-label interface">Interface</label></header>
<!-- summary -->
<section class="symbol-info"><table class="is-full-width"><tbody><tr><th>Module</th><td><div class="lang-typescript"><span class="token keyword">import</span> { ILoggerSettings }&nbsp;<span class="token keyword">from</span>&nbsp;<span class="token string">"@tsed/common"</span></div></td></tr><tr><th>Source</th><td><a href="https://github.com/Romakita/ts-express-decorators/blob/v4.19.0/src//common/config/interfaces/IServerSettings.ts#L0-L0">/common/config/interfaces/IServerSettings.ts</a></td></tr></tbody></table></section>
<!-- overview -->


### Overview


<pre><code class="typescript-lang "><span class="token keyword">interface</span> ILoggerSettings <span class="token punctuation">{</span>
    debug<span class="token punctuation">:</span> <span class="token keyword">boolean</span><span class="token punctuation">;</span>
    requestFields?<span class="token punctuation">:</span> <span class="token punctuation">(</span>"reqId" | "method" | "url" | "headers" | "body" | "query" | "params" | "duration"<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    logRequest?<span class="token punctuation">:</span> <span class="token keyword">boolean</span><span class="token punctuation">;</span>
    jsonIndentation?<span class="token punctuation">:</span> <span class="token keyword">number</span><span class="token punctuation">;</span>
    reqIdBuilder?<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> => <span class="token keyword">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span></code></pre>


<!-- Parameters -->

<!-- Description -->

<!-- Members -->







### Members



<div class="method-overview">
<pre><code class="typescript-lang ">debug<span class="token punctuation">:</span> <span class="token keyword">boolean</span></code></pre>
</div>


Enable debug mode. By default debug is false.



<hr/>



<div class="method-overview">
<pre><code class="typescript-lang ">requestFields?<span class="token punctuation">:</span> <span class="token punctuation">(</span>"reqId" | "method" | "url" | "headers" | "body" | "query" | "params" | "duration"<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">]</span></code></pre>
</div>


Fields displayed when a request is logged. Possible values: `reqId`, `method`, `url`, `headers`, `body`, `query`,`params`, `duration`.



<hr/>



<div class="method-overview">
<pre><code class="typescript-lang ">logRequest?<span class="token punctuation">:</span> <span class="token keyword">boolean</span></code></pre>
</div>


Log all incoming request. By default is true and print the configured `logger.requestFields`.



<hr/>



<div class="method-overview">
<pre><code class="typescript-lang ">jsonIndentation?<span class="token punctuation">:</span> <span class="token keyword">number</span></code></pre>
</div>


The number of space characters to use as white space in JSON output. Default is 2 (0 in production).



<hr/>



<div class="method-overview">
<pre><code class="typescript-lang ">reqIdBuilder?<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> => <span class="token keyword">number</span></code></pre>
</div>


A function called for each incoming request to create a request id.







