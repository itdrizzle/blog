import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as a,c as n,e as s}from"./app.375cfaab.js";var r="/blog/assets/2467802020864.afa40fc9.png";const t={},i=s('<h1 id="vmware\u7684\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#vmware\u7684\u4F7F\u7528" aria-hidden="true">#</a> VMware\u7684\u4F7F\u7528</h1><h2 id="\u4E00-vmware\u7F51\u7EDC\u6A21\u5F0F\u76F8\u5173" tabindex="-1"><a class="header-anchor" href="#\u4E00-vmware\u7F51\u7EDC\u6A21\u5F0F\u76F8\u5173" aria-hidden="true">#</a> \u4E00 VMware\u7F51\u7EDC\u6A21\u5F0F\u76F8\u5173</h2><p>vmware\u4E3A\u6211\u4EEC\u63D0\u4F9B\u4E86\u4E09\u79CD\u7F51\u7EDC\u5DE5\u4F5C\u6A21\u5F0F\uFF0C\u5B83\u4EEC\u5206\u522B\u662F\uFF1ABridged(\u6865\u63A5\u6A21\u5F0F)\u3001NAT(\u7F51\u7EDC\u5730\u5740\u8F6C\u6362\u6A21\u5F0F)\u3001Host-Only(\u4EC5\u4E3B\u673A\u6A21\u5F0F)\u3002</p><p>\u6240\u6709\u7684\u865A\u62DF\u7CFB\u7EDF\u662F\u53EF\u4EE5\u76F8\u4E92\u901A\u4FE1\u7684\uFF0C\u4F46\u865A\u62DF\u7CFB\u7EDF\u548C\u771F\u5B9E\u7684\u7F51\u7EDC\u662F\u88AB\u9694\u79BB\u5F00\u7684\u3002 \u7406\u89E3\uFF1A<strong>VM\u4E2D</strong>\u6240\u6709\u865A\u62DF\u673A\u53EF\u76F8\u4E92\u901A\u4FE1\uFF0C\u4F46\u771F\u5B9E\u673A\u5668\u4E0E\u865A\u62DF\u673A\u4E4B\u95F4\u4E0D\u80FD<strong>\u76F8\u4E92</strong>\u8BBF\u95EE</p><h3 id="_1-nat\u4E0E\u6865\u63A5\u7F51\u7EDC\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#_1-nat\u4E0E\u6865\u63A5\u7F51\u7EDC\u6A21\u5F0F" aria-hidden="true">#</a> 1. NAT\u4E0E\u6865\u63A5\u7F51\u7EDC\u6A21\u5F0F</h3><h4 id="vmware\u76F8\u5173\u865A\u62DF\u8BBE\u5907" tabindex="-1"><a class="header-anchor" href="#vmware\u76F8\u5173\u865A\u62DF\u8BBE\u5907" aria-hidden="true">#</a> VMware\u76F8\u5173\u865A\u62DF\u8BBE\u5907</h4><p>VMnet0\uFF1A\u8FD9\u662FVMware\u7528\u4E8E\u865A\u62DF <code>\u6865\u63A5\u7F51\u7EDC</code> \u4E0B\u7684\u865A\u62DF\u4EA4\u6362\u673A;</p><p>VMnet1\uFF1A\u8FD9\u662FVMware\u7528\u4E8E\u865A\u62DF <code>Host-Only</code> \u7F51\u7EDC\u4E0B\u7684\u865A\u62DF\u4EA4\u6362\u673A;</p><p>VMnet8\uFF1A\u8FD9\u662FVMware\u7528\u4E8E\u865A\u62DF <code>NAT\u7F51\u7EDC</code> \u4E0B\u7684\u865A\u62DF\u4EA4\u6362\u673A;</p><p>VMware Network Adapter VMnet1\uFF1A\u8FD9\u662FHost\u7528\u4E8E\u4E0EHost-Only\u865A\u62DF\u7F51\u7EDC\u8FDB\u884C\u901A\u4FE1\u7684\u865A\u62DF\u7F51\u5361;</p><p>VMware Network Adapter VMnet8\uFF1A\u8FD9\u662FHost\u7528\u4E8E\u4E0ENAT\u865A\u62DF\u7F51\u7EDC\u8FDB\u884C\u901A\u4FE1\u7684\u865A\u62DF\u7F51\u5361;</p><p>\u5728\u4E3B\u673A\u4E2DCMD \u547D\u4EE4\u63D0\u793A\u7B26\u7684\u60C5\u51B5\u4E0B\uFF0C\u8F93\u5165ipconfig\u4FBF\u53EF\u4EE5\u67E5\u8BE2\u5230 <code>VMware Network Adapter VMnet1</code>\u3001<code>VMware Network Adapter VMnet8</code> \u7684IP\u5730\u5740\uFF0Cwin10\u7CFB\u7EDF\u76F4\u63A5\u641C\u7D22 <code>\u7F51\u7EDC\u8FDE\u63A5</code> \u5373\u53EF\u67E5\u770B\u76F8\u5173\u7F51\u5361\u4FE1\u606F</p><br><h4 id="\u6865\u63A5\u7F51\u7EDC\u6A21\u5F0F\u53CA\u8BBE\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u6865\u63A5\u7F51\u7EDC\u6A21\u5F0F\u53CA\u8BBE\u7F6E" aria-hidden="true">#</a> \u6865\u63A5\u7F51\u7EDC\u6A21\u5F0F\u53CA\u8BBE\u7F6E</h4><p>\u5728\u6865\u63A5\u6A21\u5F0F\u4E0B\uFF0CVMware\u865A\u62DF\u51FA\u6765\u7684\u64CD\u4F5C\u7CFB\u7EDF\u5C31\u50CF\u662F\u5C40\u57DF\u7F51\u4E2D\u7684\u4E00\u72EC\u7ACB\u7684\u4E3B\u673A\uFF0C\u5B83\u53EF\u4EE5\u8BBF\u95EE\u8BE5\u7C7B\u7F51\u6BB5\u5185\u4EFB\u4F55\u4E00\u53F0\u673A\u5668\u3002</p><p>\u6865\u63A5\u7F51\u7EDC\u73AF\u5883\u4E0B\u9700\u8981\u505A\u5230\uFF1A</p><p>1.\u4E3A\u865A\u62DF\u673A\u7CFB\u7EDF\u914D\u7F6EIP\u5730\u5740\u3001\u5B50\u7F51\u63A9\u7801\u3002</p><p>2.\u5728\u6865\u63A5\u7684\u6A21\u5F0F\u4E0B\u865A\u62DF\u673A\u5FC5\u987B\u4E0E\u7269\u7406\u673A\u5904\u4E8E\u540C\u4E00\u7F51\u6BB5\uFF0C(\u4E3E\u4E2A\u4F8B\u5B50,\u7269\u7406\u673AIP:192.168.1.2\uFF0C\u865A\u62DF\u673AIP:192.168.1.3)\u8FD9\u6837\u865A\u62DF\u7CFB\u7EDF\u624D\u80FD\u548C\u771F\u5B9E\u4E3B\u673A\u8FDB\u884C\u901A\u4FE1\u3002</p><p>\u5173\u4E8E\u6865\u63A5\u7F51\u7EDC\u7684\u5C0F\u77E5\u8BC6\uFF1A</p><p>\u5F53\u4F60\u60F3\u5229\u7528VMware\u5728\u5C40\u57DF\u7F51\u5185\u65B0\u5EFA\u4E00\u4E2A\u865A\u62DF\u670D\u52A1\u5668\uFF0C\u4E3A\u5C40\u57DF\u7F51\u7528\u6237\u63D0\u4F9B\u7F51\u7EDC\u670D\u52A1\uFF0C\u5C31\u5E94\u8BE5\u9009\u62E9\u6865\u63A5\u6A21\u5F0F\u3002\u53EF\u5C06\u865A\u62DF\u673A\u6A21\u62DF\u63A5\u5165\u4E3B\u673A\u6240\u5728\u7684\u5C40\u57DF\u7F51\u3002\u6865\u63A5\u7F51\u7EDC\uFF0C\u76F8\u5F53\u4E8E\uFF0C\u865A\u62DF\u673A\u4E0E\u4E3B\u673A\u540C\u63A5\u5728\u4E00\u53F0\u4EA4\u6362\u673A\u4E0A\uFF0C\u540C\u65F6\u4E0A\u7F51\uFF0C\u865A\u62DF\u673A\u5BF9\u7269\u7406\u673A\u7F51\u7EDC\u7684\u76F4\u63A5\u5F71\u54CD\u8F83\u5C0F~</p><br><h4 id="nat\u7F51\u7EDC\u6A21\u5F0F\u53CA\u8BBE\u7F6E" tabindex="-1"><a class="header-anchor" href="#nat\u7F51\u7EDC\u6A21\u5F0F\u53CA\u8BBE\u7F6E" aria-hidden="true">#</a> NAT\u7F51\u7EDC\u6A21\u5F0F\u53CA\u8BBE\u7F6E</h4><p>\u5728NAT\u7F51\u7EDC\u4E2D\uFF0C\u4F1A\u4F7F\u7528\u5230VMnet8\u865A\u62DF\u4EA4\u6362\u673A\uFF0C\u7269\u7406\u673A\u4E0A\u7684 <code>VMware Network Adapter VMnet8 \u865A\u62DF\u7F51\u5361</code> \u5C06\u4F1A\u548C <code>VMnet8\u4EA4\u6362\u673A</code>\u76F8\u8FDE\u63A5\uFF0C\u6765\u5B9E\u73B0\u7269\u7406\u673A\u4E0E\u865A\u62DF\u673A\u4E4B\u95F4\u7684\u901A\u4FE1\u3002</p><p>\u6CE8\u610F\uFF1A<code>VMware Network Adapter VMnet8 \u865A\u62DF\u7F51\u5361</code> \u4EC5\u4EC5\u662F\u7528\u4E8E\u4E3B\u673A\u548CVMnet8\u7F51\u6BB5\u901A\u4FE1\u4F7F\u7528\uFF0C\u5B83\u5E76\u4E0D\u4E3AVMnet8\u7F51\u6BB5\u63D0\u4F9B\u8DEF\u7531\u529F\u80FD\uFF0C\u5904\u4E8E\u865A\u62DFNAT\u7F51\u7EDC\u4E0B\u7684Guest\u662F\u4F7F\u7528\u865A\u62DF\u7684NAT\u670D\u52A1\u5668\u8FDE\u63A5\u7684Internet\u7684\u3002</p><p>VMware Network Adapter VMnet8\u865A\u62DF\u7F51\u5361\u5B83\u4EC5\u4EC5\u662F\u4E3AHost\u548CNAT\u865A\u62DF\u7F51\u7EDC\u4E0B\u7684Guest\u901A\u4FE1\u63D0\u4F9B\u4E00\u4E2A\u63A5\u53E3\uFF0C\u6240\u4EE5\uFF0C\u5373\u4FBF\u53BB\u6389\u8FD9\u5757\u865A\u62DF\u7F51\u5361\uFF0C\u865A\u62DF\u673A\u4ECD\u7136\u662F\u53EF\u4EE5\u4E0A\u7F51\u7684\uFF0C\u53EA\u662F\u7269\u7406\u673A\u5C06\u65E0\u6CD5\u518D\u8BBF\u95EEVMnet8\u7F51\u6BB5\u800C\u5DF2\u3002</p><p><strong>NAT\u7F51\u7EDC\u73AF\u5883\u4E0B\u9700\u8981\u505A\u5230</strong>\uFF1A</p><p>1.\u4E3B\u673A\u9700\u8981\u5F00\u542Fvmdhcp\u548Cvmnat\u670D\u52A1\u3002(\u670D\u52A1\u7684\u5F00\u542F\uFF0C\u5728\u6211\u7684\u7535\u8111\u5F53\u4E2D\u53F3\u952E\u201C\u7BA1\u7406\u201D\u53EF\u4EE5\u8BBE\u7F6E)</p><p>2.NAT\u6A21\u5F0F\u4E0B\u7684\u865A\u62DF\u673A\u7684TCP/IP\u914D\u7F6E\u4FE1\u606F\u5C06\u7531VMnet8(NAT)\u865A\u62DF\u7F51\u7EDC\u7684DHCP\u670D\u52A1\u5668\u81EA\u52A8\u5206\u914D\uFF0C\u9700\u8981\u5F00\u542FDHCP\u529F\u80FD\u3002</p><p><strong>\u5173\u4E8ENAT\u7F51\u7EDC\u7684\u5C0F\u77E5\u8BC6</strong>\uFF1A</p><p>\u4F7F\u7528NAT\u6A21\u5F0F\uFF0C\u5C31\u662F\u8BA9\u865A\u62DF\u7CFB\u7EDF\u501F\u52A9NAT(\u7F51\u7EDC\u5730\u5740\u8F6C\u6362)\u529F\u80FD\uFF0C\u901A\u8FC7\u7269\u7406\u673A\u6240\u5728\u7684\u7F51\u7EDC\u6765\u8BBF\u95EE\u5916\u7F51\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C\u4F7F\u7528NAT\u6A21\u5F0F\u53EF\u4EE5\u5B9E\u73B0\u5728\u865A\u62DF\u673A\u91CC\u8BBF\u95EE\u5230\u4E92\u8054\u7F51\u3002NAT\u6A21\u5F0F\u4E0B\u7684\u865A\u62DF\u673A\u7684TCP/IP\u914D\u7F6E\u4FE1\u606F\u662F\u7531VMnet8(NAT)\u865A\u62DF\u7F51\u7EDC\u7684DHCP\u670D\u52A1\u5668(\u4E5F\u5C31\u662F\u81EA\u52A8\u5206\u914D\uFF0C\u65E0\u9700\u624B\u52A8\u5206\u914D)\u63D0\u4F9B\u7684\uFF0C\u65E0\u6CD5\u8FDB\u884C\u624B\u5DE5\u4FEE\u6539\uFF0C\u56E0\u6B64\u865A\u62DF\u7CFB\u7EDF\u4E5F\u5C31\u65E0\u6CD5\u548C\u672C\u5C40\u57DF\u7F51\u4E2D\u7684\u5176\u4ED6\u771F\u5B9E\u4E3B\u673A\u8FDB\u884C\u901A\u8BAF\u3002\u91C7\u7528NAT\u6A21\u5F0F\u6700\u5927\u7684\u4F18\u52BF\u662F\u865A\u62DF\u7CFB\u7EDF\u63A5\u5165\u4E92\u8054\u7F51\u975E\u5E38\u7B80\u5355\uFF0C\u4F60\u4E0D\u9700\u8981\u8FDB\u884C\u4EFB\u4F55\u5176\u4ED6\u7684\u914D\u7F6E\uFF0C\u53EA\u9700\u8981\u5BBF\u4E3B\u673A\u5668\u80FD\u8BBF\u95EE\u4E92\u8054\u7F51\u5373\u53EF\u3002</p><p>NAT \u6A21\u5F0F\u4E0B\u7684\u7F51\u7EDC\uFF0C\u76F8\u5F53\u4E8E\u8BF4\u865A\u62DF\u673A\u662F\u901A\u8FC7\u63A5\u5165\u7269\u7406\u673A\u8FDE\u63A5\u4E0A\u7684\u7F51\u7EDC\uFF0C\u7B49\u4E8E\u7269\u7406\u673A\u662F\u4E2A\u8DEF\u7531\u5668\uFF0C\u7533\u8BF7\u5230\u4E00\u4E2A\u4E0A\u7F51\u540D\u989D\uFF0C\u5E26\u7740\u9690\u85CF\u5728\u5B83\u4E0B\u9762\u7684\u865A\u62DF\u673A\u4E0A\u7F51\u3002\u81EA\u7136\u6240\u6709\u865A\u62DF\u673A\u4F7F\u7528\u7684\u7F51\u7EDC\u603B\u548C\u90FD\u9650\u5236\u5728\u5B9E\u673A\u4E00\u4E2A\u7F51\u7EDC\u901A\u9053\u5185\u3002\u865A\u62DF\u673A\u4F1A\u62A2\u5360\u7269\u7406\u673A\u7684\u7F51\u7EDC~\u5BF9\u7269\u7406\u673A\u4E0A\u7F51\u4F1A\u6709\u5F88\u5927\u7684\u5F71\u54CD!</p><br><h3 id="_2-\u8BBE\u7F6E\u865A\u62DF\u673A\u9759\u6001\u7F51\u7EDCip" tabindex="-1"><a class="header-anchor" href="#_2-\u8BBE\u7F6E\u865A\u62DF\u673A\u9759\u6001\u7F51\u7EDCip" aria-hidden="true">#</a> 2. \u8BBE\u7F6E\u865A\u62DF\u673A\u9759\u6001\u7F51\u7EDCIP</h3><p>NAT\u6A21\u5F0F\u4E0B\u865A\u62DF\u673AIP\u53EF\u80FD\u4F1A\u53D8\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E\u9759\u6001 IP \uFF0C\u8FD9\u6837\u7684\u8BDD IP \u5C31\u4E0D\u4F1A\u53D1\u751F\u6539\u53D8</p><p>VMware \u70B9\u51FB \u7F16\u8F91 \u2014\u2014&gt; \u865A\u62DF\u7F51\u7EDC\u7F16\u8F91\u5668 (\u5982\u56FE\uFF1A)</p><p><img src="'+r+`" alt="" loading="lazy"></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">ip</span> addr

<span class="token function">vi</span> /etc/sysconfig/network-scripts/ifcfg-ens33

<span class="token function">service</span> network restart  <span class="token comment"># \u5237\u65B0\u7F51\u7EDC\u670D\u52A1 centos8\u4F7F\u7528: ifup  ens33</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><br><h2 id="\u4E8C-\u865A\u62DF\u673A\u5E38\u89C1\u8BBE\u7F6E\u9879" tabindex="-1"><a class="header-anchor" href="#\u4E8C-\u865A\u62DF\u673A\u5E38\u89C1\u8BBE\u7F6E\u9879" aria-hidden="true">#</a> \u4E8C \u865A\u62DF\u673A\u5E38\u89C1\u8BBE\u7F6E\u9879</h2><h3 id="_1-\u865A\u62DF\u673A\u81EA\u542F\u52A8\u8BBE\u7F6E" tabindex="-1"><a class="header-anchor" href="#_1-\u865A\u62DF\u673A\u81EA\u542F\u52A8\u8BBE\u7F6E" aria-hidden="true">#</a> 1. \u865A\u62DF\u673A\u81EA\u542F\u52A8\u8BBE\u7F6E</h3><h4 id="\u521B\u5EFA\u542F\u52A8-\u5173\u95ED\u811A\u672C" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u542F\u52A8-\u5173\u95ED\u811A\u672C" aria-hidden="true">#</a> \u521B\u5EFA\u542F\u52A8/\u5173\u95ED\u811A\u672C</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5728\u7CFB\u7EDF\u7684\u67D0\u4E2A\u5B89\u9759\u7684\u76D8\u4E2D\u521B\u5EFA\u4E00\u4E2Avm_start.bat\u6587\u4EF6\uFF0C\u7136\u540E\u4F7F\u7528\u7F16\u8F91\u5668\u6253\u5F00\u3002\u5199\u5165: </span>
<span class="token string">&quot;C:\\Program Files (x86)\\VMware\\VMware Workstation<span class="token entity" title="\\v">\\v</span>mrun.exe&quot;</span> start <span class="token string">&quot;D:\\VirtualMachines\\DevMachines\\DevMachines.vmx&quot;</span> nogui


<span class="token comment"># \u518D\u6B21\u521B\u5EFA\u4E00\u4E2Avm_stop.bat\u6587\u4EF6</span>
<span class="token string">&quot;C:\\Program Files (x86)\\VMware\\VMware Workstation<span class="token entity" title="\\v">\\v</span>mrun.exe&quot;</span> stop <span class="token string">&quot;D:\\VirtualMachines\\DevMachines\\DevMachines.vmx&quot;</span>

<span class="token comment">#\u6D4B\u8BD5\u8FD0\u884C\u6587\u4EF6: \u53CC\u51FB\u542F\u52A8\u6587\u4EF6vm_start.bat\uFF0C\u5982\u679C\u5F39\u51FAdos\u7A97\u53E3\u4E14\u865A\u62DF\u673A\u542F\u52A8\u5219\u65E0\u8BEF,\u53CC\u51FB\u505C\u6B62\u6587\u4EF6vm_stop.bat\uFF0C\u5982\u679C\u5F39\u51FAdos\u7A97\u53E3\u4E14\u865A\u62DF\u673A\u505C\u6B62\u5219\u65E0\u8BEF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h4 id="\u6DFB\u52A0\u5230\u81EA\u542F\u52A8\u4EFB\u52A1" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0\u5230\u81EA\u542F\u52A8\u4EFB\u52A1" aria-hidden="true">#</a> \u6DFB\u52A0\u5230\u81EA\u542F\u52A8\u4EFB\u52A1</h4><p><code>Win+ R</code> -&gt; <code>gpedit.msc</code> -&gt; \u7528\u6237\u914D\u7F6E -&gt; windows\u8BBE\u7F6E -&gt; \u9F20\u6807\u53CC\u51FB\u811A\u672C(\u767B\u5F55/\u6CE8\u9500) -&gt; \u9F20\u6807\u53CC\u51FB\u201C\u767B\u5F55\u201D\u6216\u201C\u6CE8\u9500\u201D\u5206\u522B\u6DFB\u52A0\u542F\u52A8\u3001\u5173\u95ED\u811A\u672C</p><p>\u3010Q\u3011\u4E3B\u673A\u8BBF\u95EE\u4E0D\u5230\u865A\u62DF\u673A\u7684\u670D\u52A1\u7684\u89E3\u51B3\u529E\u6CD5: \u68C0\u67E5\u9632\u706B\u5899\u72B6\u6001</p><br><h3 id="_2-linux\u9632\u706B\u5899\u8BBE\u7F6E" tabindex="-1"><a class="header-anchor" href="#_2-linux\u9632\u706B\u5899\u8BBE\u7F6E" aria-hidden="true">#</a> 2. Linux\u9632\u706B\u5899\u8BBE\u7F6E</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>firewall-cmd --query-port<span class="token operator">=</span><span class="token number">9200</span>/tcp                           <span class="token comment">#\u67E5\u770B\u7AEF\u53E3\u53F7\u662F\u5426\u5F00\u542F,\u5982\u679C\u662Fno\uFF0C\u5C31\u8BF4\u660E\u6CA1\u6709\u5F00\u653E</span>

firewall-cmd --zone<span class="token operator">=</span>public --add-port<span class="token operator">=</span><span class="token number">6379</span>/tcp --permanent   <span class="token comment">#\u5F00\u901A6379\u7AEF\u53E3(redis)</span>

firewall-cmd --zone<span class="token operator">=</span>public --add-port<span class="token operator">=</span><span class="token number">8848</span>/tcp --permanent   <span class="token comment">#\u5F00\u901A8848\u7AEF\u53E3(nacos)</span>

firewall-cmd --zone<span class="token operator">=</span>public --add-port<span class="token operator">=</span><span class="token number">3306</span>/tcp --permanent   <span class="token comment">#\u5F00\u901A3306\u7AEF\u53E3(mysql)</span>



firewall-cmd --reload                                        <span class="token comment">#\u91CD\u542F\u9632\u706B\u5899\uFF0C\u7AEF\u53E3\u6B63\u5E38\u5F00\u542F</span>

systemctl restart <span class="token function">docker</span>                                     <span class="token comment">#\u5982\u679C\u662Fdocker\u5BB9\u5668\u7684\u5316\u5219\u8981\u91CD\u542F\u4E0Bdocker\u670D\u52A1 </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br>`,51),d=[i];function c(o,p){return a(),n("div",null,d)}var h=e(t,[["render",c],["__file","VMware.html.vue"]]);export{h as default};