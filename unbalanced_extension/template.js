(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['fox'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n				<div class=\"component entries-callout-ext-3\" data-vr-zone=\"big-top\">\n					";
  options = {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data};
  if (stack1 = helpers.article) { stack1 = stack1.call(depth0, options); }
  else { stack1 = (depth0 && depth0.article); stack1 = typeof stack1 === functionType ? stack1.call(depth0, options) : stack1; }
  if (!helpers.article) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n							";
  options = {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data};
  if (stack1 = helpers.related) { stack1 = stack1.call(depth0, options); }
  else { stack1 = (depth0 && depth0.related); stack1 = typeof stack1 === functionType ? stack1.call(depth0, options) : stack1; }
  if (!helpers.related) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n\n						</ul>\n					</div> <!-- /section section-first -->\n				";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n	 				<div class=\"section section-first\" data-vr-contentbox=\"\">\n						<h1 class=\"title lrg\">\n							<a href=\"";
  if (stack1 = helpers.link) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.link); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n								";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.title); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n							</a>\n						</h1>\n						<ul class=\"list-ext-9\">\n							<li class=\"first\">\n								<p class=\"media\">\n									<a href=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.image); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n										<img src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.image); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" style=\"width: 100%;\" alt=\"\">\n										<em class=\"credit\">Fox News</em>\n									</a>\n								</p>\n							</li>\n							<li class=\"alt\">\n								<p class=\"summary\">\n									<!-- <b>PENTAGON CONSIDERING</b> -->\n									";
  if (stack1 = helpers.content) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.content); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n								</p>\n							</li>\n							";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "";
  buffer += "\n								<li>\n									<b>\n										<a href=\"http://video.foxnews.com/v/2886120686001/\">\n											"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "\n										</a>\n									</b>\n								</li>\n							";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n					<div class=\"section ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.$last), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" data-vr-contentbox=\"\">\n						<ul class=\"list-ext-9\">\n							<li class=\"first\">\n								";
  options = {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data};
  if (stack1 = helpers.article) { stack1 = stack1.call(depth0, options); }
  else { stack1 = (depth0 && depth0.article); stack1 = typeof stack1 === functionType ? stack1.call(depth0, options) : stack1; }
  if (!helpers.article) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n								<ul class=\"list\">\n									";
  options = {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data};
  if (stack1 = helpers.related) { stack1 = stack1.call(depth0, options); }
  else { stack1 = (depth0 && depth0.related); stack1 = typeof stack1 === functionType ? stack1.call(depth0, options) : stack1; }
  if (!helpers.related) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n								</ul>\n							</li>\n						</ul> <!-- / ul class list-ext-etc. -->\n					</div> <!-- class=section -->\n				";
  return buffer;
  }
function program7(depth0,data) {
  
  
  return "section-last";
  }

function program9(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n									<p class=\"media\" style=\"height: 132px; overflow: hidden;\">\n										<a href=\"";
  if (stack1 = helpers.link) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.link); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n											<img src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.image); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" alt=\"\" width=\"212\" >\n										</a>\n									</p>\n									<h2>\n										<a href=\"";
  if (stack1 = helpers.link) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.link); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n											";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.title); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n										</a>\n									</h2>\n									<p class=\"summary\">\n										";
  if (stack1 = helpers.content) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.content); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n									</p>\n								";
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = "";
  buffer += "\n										<li>\n											<b>\n												<a href=\"http://www.foxnews.com/politics/2013/12/02/insurers-say-healthcaregov-not-fixed-yet/\">\n													"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "\n												</a>\n											</b>\n										</li>\n									";
  return buffer;
  }

function program13(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n								<li class=\"odb_li ob-recIdx-0  ob-odd\">\n									<div class=\"ob-text-content\">\n	          							<a target=\"_self\" onclick=\"\" href=\"";
  if (stack1 = helpers.link) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.link); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"rec-link\">\n	          								";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.title); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n	          							</a>\n	    								<span class=\"ob_txtual_Icon\">\n										</span>\n										<span class=\"ob_source\">\n											<span class=\"rec-src-link\">\n												(Video - Markets)\n											</span>\n										</span>\n									</div>\n								</li>\n							";
  return buffer;
  }

function program15(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n	    			<li id=\"guid-2886901888001\">\n	    				<div class=\"m\">\n	    					<a href=\"http://video.foxnews.com/v/2886901888001/issues-still-plaguing-revamped-obamacare-site/\" style=\"position: relative; display: block; padding: 0px;\">\n	    						<div class=\"media-overlay\" style=\"position: absolute; right: 4px; bottom: 4px; width: 24px; min-height: 24px; background-image: url(http://global.fncstatic.com/static/v/all/img/vd-overlay_24.png); background-position: 0px 0px; background-repeat: no-repeat no-repeat;\">\n	    						</div>\n	    						<img src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.image); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" dest_src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.image); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" width=\"144\" height=\"81\" alt=\"\">\n	    					</a>\n	    					<span style=\"display: none;\">\n	    						Live\n	    					</span>\n	    				</div>\n	    				<h3>\n	    					<a href=\"";
  if (stack1 = helpers.link) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.link); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n	    						";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.title); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n	    					</a>\n	    				</h3>\n	    			</li>\n	    		";
  return buffer;
  }

function program17(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n\n		<div class=\"section-9\">\n	    	<div class=\"component latest-news\" data-vr-zone=\"latest-news\">\n				<h2 class=\"title\">Latest News</h2>\n					\n					<ul class=\"list\">\n						";
  options = {hash:{},inverse:self.noop,fn:self.program(18, program18, data),data:data};
  if (stack1 = helpers.left) { stack1 = stack1.call(depth0, options); }
  else { stack1 = (depth0 && depth0.left); stack1 = typeof stack1 === functionType ? stack1.call(depth0, options) : stack1; }
  if (!helpers.left) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n					</ul>\n\n					<!-- NEW COLUMN -->\n					\n					<ul class=\"list last\">\n						";
  options = {hash:{},inverse:self.noop,fn:self.program(20, program20, data),data:data};
  if (stack1 = helpers.right) { stack1 = stack1.call(depth0, options); }
  else { stack1 = (depth0 && depth0.right); stack1 = typeof stack1 === functionType ? stack1.call(depth0, options) : stack1; }
  if (!helpers.right) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n					</ul>\n\n				</div> <!-- /component latest-news -->\n			</div> <!-- /section-9 -->\n\n		";
  return buffer;
  }
function program18(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n								<li data-vr-contentbox=\"\">\n									<a href=\"";
  if (stack1 = helpers.link) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.link); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n										";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.title); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n									</a>\n								</li>\n						";
  return buffer;
  }

function program20(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n							<li data-vr-contentbox=\"\">\n								<a href=\"";
  if (stack1 = helpers.link) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.link); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n									";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.title); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n								</a>\n							</li>\n						";
  return buffer;
  }

function program22(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n\n    				<div class=\"component\" data-vr-zone=\"features-faces-1\">\n        			<h2 class=\"title\">\n        				Features &amp; Faces\n        			</h2>\n        			<ul class=\"list-ext-3\">\n        				";
  options = {hash:{},inverse:self.noop,fn:self.program(23, program23, data),data:data};
  if (stack1 = helpers.row1) { stack1 = stack1.call(depth0, options); }
  else { stack1 = (depth0 && depth0.row1); stack1 = typeof stack1 === functionType ? stack1.call(depth0, options) : stack1; }
  if (!helpers.row1) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        			</ul>\n    				</div>\n\n    				<!-- NEW ROW -->\n\n    				<div class=\"component\" data-vr-zone=\"features-faces-2\">\n        			<ul class=\"list-ext-3\">\n        				";
  options = {hash:{},inverse:self.noop,fn:self.program(23, program23, data),data:data};
  if (stack1 = helpers.row2) { stack1 = stack1.call(depth0, options); }
  else { stack1 = (depth0 && depth0.row2); stack1 = typeof stack1 === functionType ? stack1.call(depth0, options) : stack1; }
  if (!helpers.row2) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        			</ul>\n						</div>\n					";
  return buffer;
  }
function program23(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n								<li class=\"first\" data-vr-contentbox=\"\">\n									<p class=\"media\">\n										<a href=\"http://www.foxnews.com/tech/2013/12/02/8-best-cyber-monday-tech-deals/?intcmp=features\">\n											<img class=\"unloaded_img\" src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.image); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" width=\"121\" original=\"/images/clear.gif\" style=\"display: block; width: 121px;\">\n										</a>\n									</p>\n									<h3 style=\"line-height: 15px;\">\n										<a href=\"";
  if (stack1 = helpers.link) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.link); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" style=\"font-size: 12px;\">\n											";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.title); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n										</a>\n									</h3>\n									<p class=\"summary\"></p>\n								</li>\n								";
  return buffer;
  }

function program25(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n	          <div class=\"section\">\n							<div data-src=\"";
  if (stack1 = helpers.link) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.link); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n								<div class=\"ob_strip_container HOP_4\">\n									<span class=\"ob_empty\">\n										<wbr>\n									</span>\n\n									<span class=\"ob_org_header\">\n										<h2 class=\"title\">\n											<a href=\"";
  if (stack1 = helpers.link) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.link); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" target=\"_top\">\n												";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.title); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n											</a>\n											<span class=\"arrow\">\n											 &#8250;\n											</span>\n										</h2>\n									</span>\n									<div class=\"ob_container\">\n										<div class=\"ob_container_recs\">\n\n											";
  options = {hash:{},inverse:self.noop,fn:self.program(26, program26, data),data:data};
  if (stack1 = helpers.first) { stack1 = stack1.call(depth0, options); }
  else { stack1 = (depth0 && depth0.first); stack1 = typeof stack1 === functionType ? stack1.call(depth0, options) : stack1; }
  if (!helpers.first) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n											";
  options = {hash:{},inverse:self.noop,fn:self.program(28, program28, data),data:data};
  stack2 = ((stack1 = helpers.foreach || (depth0 && depth0.foreach)),stack1 ? stack1.call(depth0, (depth0 && depth0.articles), options) : helperMissing.call(depth0, "foreach", (depth0 && depth0.articles), options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n\n										</div>\n									</div>\n								</div>\n							</div>\n						</div>\n					";
  return buffer;
  }
function program26(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n		                    <a class=\"item-link-container ob-odd\" href=\"";
  if (stack1 = helpers.link) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.link); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" target=\"_self\" rel=\"\">\n		    									<div class=\"item-container ob-recIdx-0   \">\n		       					 				<div class=\"ob-rec-link-img ob-tcolor\">\n		    											<img style=\"\" onload=\"this.style.visibility=''\" width=\"60\" height=\"60\" class=\"strip-img\" src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.image); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n		    										</div>\n														<div class=\"ob-text-content\">\n		            							<div class=\"strip-rec-link-title ob-tcolor\">\n		            								";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.title); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n		            							</div>\n		    										</div>\n		        							</div>\n												</a>\n											";
  return buffer;
  }

function program28(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n		                    <a class=\"item-link-container ob-odd\" href=\"";
  if (stack1 = helpers.link) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.link); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" target=\"_self\" rel=\"\">\n		    									<div class=\"item-container ob-recIdx-";
  if (stack1 = helpers.$indexhuman) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.$indexhuman); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "   \">\n														<div class=\"ob-text-content\">\n		            							<div class=\"strip-rec-link-title ob-tcolor\">\n		            								";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.title); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n		            							</div>\n		    										</div>\n		        							</div>\n												</a>\n											";
  return buffer;
  }

function program30(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n	      <a class=\"item-link-container ob-odd\" href=\"";
  if (stack1 = helpers.link) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.link); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" target=\"_self\" rel=\"\">\n	    		<div class=\"item-container ob-recIdx-0   \">\n	        	<div class=\"ob-rec-link-img ob-tcolor\">\n	    				<img style=\"\" onload=\"this.style.visibility=''\" width=\"156\" height=\"88\" title=\"Car Buying Exposed: A Salesman's Insider Tips to Saving Money and Sanity\" class=\"strip-img\" src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.image); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" onerror=\"outbrain.imageError(this)\">\n	    			</div>\n						<div class=\"ob-text-content\">\n	            <div class=\"strip-rec-link-title ob-tcolor\">\n	            	";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.title); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n	            </div>\n	    			</div>\n	        </div>\n				</a>\n			";
  return buffer;
  }

function program32(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n		                <li class=\"dv-item ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.$last), {hash:{},inverse:self.noop,fn:self.program(33, program33, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.$first), {hash:{},inverse:self.noop,fn:self.program(35, program35, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " trending-";
  if (stack1 = helpers.$indexhuman) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.$indexhuman); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n		                    <p>";
  if (stack1 = helpers.$indexhuman) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.$indexhuman); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n		                    <h3>\n		                    	<a href=\"";
  if (stack1 = helpers.link) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.link); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n		                    		";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.title); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n		                    	</a>\n		                    </h3>\n		                </li>\n	    						";
  return buffer;
  }
function program33(depth0,data) {
  
  
  return "dv-item-last";
  }

function program35(depth0,data) {
  
  
  return "dv-item-first";
  }

function program37(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n							<li>\n							    <em>\n							    	<a href=\"";
  if (stack1 = helpers.link) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.link); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" rel=\"external\">\n								    	";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.title); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n								    </a>\n								  </em>\n							    <abbr title=\"\">WNYW</abbr>\n							</li>\n						";
  return buffer;
  }

  buffer += "	<div class=\"section-14\">\n		<div class=\"ads\">\n			<div class=\"ad dc\" id=\"board1-970x66\"></div>\n			</div> \n		</div>\n		<div class=\"section-9\">\n		<!-- Big Top include: TEMPLATE -->\n\n\n\n\n			";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.main) { stack1 = stack1.call(depth0, options); }
  else { stack1 = (depth0 && depth0.main); stack1 = typeof stack1 === functionType ? stack1.call(depth0, options) : stack1; }
  if (!helpers.main) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n\n\n\n\n\n\n				";
  options = {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data};
  stack2 = ((stack1 = helpers.foreach || (depth0 && depth0.foreach)),stack1 ? stack1.call(depth0, (depth0 && depth0.secondary), options) : helperMissing.call(depth0, "foreach", (depth0 && depth0.secondary), options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n\n\n\n\n\n\n		 </div><!-- /entries-callout -->\n					\n		<script type=\"text/javascript\">\n		var secTimeStamp = \"12/02/2013 19:26\";\n		</script>\n\n					 \n				\n	</div> <!-- /section-9 -->\n\n				\n	<div class=\"section-5\">\n		<div id=\"weather-widget\" class=\"component regional active\">\n			<ul>\n	          	<li class=\"section section-first\">\n	               <div class=\"section-pr\">\n	                    <p class=\"day\">Today</p>\n	                    <p class=\"media\"><img src=\"http://global.fncstatic.com/static/v/all/img/weather/icons_24x24/97.png\" style=\"width: 24px; display: inline; opacity: 1;\"></p>\n	                    <p class=\"current\">45&deg;</p>\n	               </div>  </li>\n	     	</ul>\n	     	<div>  <form action=\"#\" method=\"get\">\n		          	<fieldset>\n		               <div style=\"display: none;\">\n		                    <input type=\"text\" value=\"Enter Zip Code\" name=\"zip\" id=\"weather_widgetInput\">\n		                    <input type=\"submit\" value=\"Save\" class=\"btn-smll\" name=\"submit\">\n		               </div>\n		               <div class=\"region\" style=\"display: block;\">\n		                    <a href=\"#\" class=\"close\">Close</a>\n		                    <label>New York, NY</label>\n		               </div>\n		          	</fieldset>\n		     	</form>\n		        <p class=\"details\"><a href=\"/weather/your-weather/index.html\">Detailed Forecast</a><span>&nbsp;&#8250;</span></p>\n		    </div>  </div>   <div class=\"advert\">\n	        <div class=\"ad off\" id=\"servpro-292x30\"></div>\n	    </div>\n			\n		<div class=\"ads\">\n			<div class=\"ad dc\" id=\"frame1-300x250\">\n 			</div>\n			<span>ADVERTISEMENT</span>\n		</div>\n\n		<div id=\"market-snapshot\" class=\"component market-snapshot\">\n			<h2 class=\"title\">Markets</h2>\n				<p class=\"external-rel\">\n					<a href=\"http://www.foxbusiness.com\" target=\"_blank\">\n						<img src=\"/i/redes/logo-foxbusiness.jpg\" alt=\"\">\n					</a>\n				</p>\n				 <div id=\"markets\">\n					<dl id=\"idji\" class=\"market-arrow-down\">\n						<dt>DJIA</dt>\n						<dd class=\"current market-down\">16,008.77</dd>\n						<dd class=\"net-change market-down\">-77.64</dd>			\n						<dd class=\"net-percentage market-down\">-0.48%</dd>\n					</dl>\n					<dl id=\"icomp\" class=\"market-arrow-down\">\n						<dt>Nasdaq</dt>			\n						<dd class=\"current market-down\">4,045.26</dd>\n						<dd class=\"net-change market-down\">-14.63</dd>\n						<dd class=\"net-percentage market-down\">-0.36%</dd>\n					</dl>		\n					<dl id=\"inx\" class=\"mlast market-arrow-down\">\n						<dt>S&amp;P 500</dt>\n						<dd class=\"current market-down\">1,800.90</dd>		\n						<dd class=\"net-change market-down\">-4.91</dd>\n						<dd class=\"net-percentage market-down\">-0.27%</dd>\n					</dl>\n				</div> <!-- /markets -->\n 			<div class=\"get-quote\">\n 				<form method=\"get\" action=\"\">\n					<fieldset>\n						<legend>Search Site</legend>\n						<input type=\"text\" value=\"Enter Stock Symbol\" class=\"get-quote-text\" size=\"50\" name=\"q\">\n						<input type=\"submit\" value=\"Get Quote\" class=\"btn-smll\" name=\"submit\">\n					</fieldset>\n				</form>\n			</div> \n		</div> \n		<div class=\"component market-snapshot-2 show\">\n			<ul class=\"list\">\n				<div id=\"ob_holder\" style=\"display: none;\">\n					<iframe id=\"ob_iframe\" src=\"http://widgets.outbrain.com/nanoWidget/3rd/comScore/comScore.htm\" style=\"display: none; width: 1px; height: 1px;\">\n					</iframe>\n				</div>\n				<div class=\"OUTBRAIN\" data-widget-type=\"hp\" data-fbk=\"foxHpMarkets\" data-src=\"http://www.foxnews.com/\" data-widget-id=\"HOP\" data-ob-template=\"foxnews\" data-ob-mark=\"true\" data-dynload=\"\" id=\"outbrain_widget_0\">\n					<div class=\"ob_box_cont HOP\">\n						<span class=\"ob_empty\">\n							<wbr>\n						</span>\n\n						<style type=\"text/css\">\n							.voterDiv .ob_bctrl{display:none;}\n							.ob_pdesc IMG{border:none;}\n							.HOP .ob_what{direction:ltr;text-align:right;clear:both;padding:5px 10px 0px;}\n							.HOP .ob_what a{color:#999;font-size:10px;font-family:arial;text-decoration: none;}\n							.HOP .ob_clear{clear:both;}\n							.HOP .ob_amelia{background:url('http://widgets.outbrain.com/images/widgetIcons/ob_logo_16x16.png') no-repeat center top;display:inline-block;width:16px;height:16px;vertical-align:text-bottom;margin-bottom:-2px;padding:0px 5px;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;}\n							.HOP:hover .ob_amelia{background-position:center bottom;}\n						</style>\n\n						<style type=\"text/css\" class=\"ob-custom-css\">\n							.HOP .ob-text-content { outline: 0 none; color: #183a52; text-decoration: none; font-size: 12px; font-family: arial,sans-serif; line-height: 1.3!important; font-weight: 800; }\n							.HOP .rec-src-link { display: none; }\n							.HOP li.odb_li { list-style: image; list-style-position: inside; padding: 0 0 2px 10px; background: url(\"http://global.fncstatic.com/static/v/fn-hp/img/bg-list-marker.gif\") no-repeat 0 5px; font-weight: bold; }\n							.HOP .ob_empty {display: none;}\n						</style>\n\n\n\n						<span class=\"ob_org_header\"></span>\n						<ul>\n\n							";
  options = {hash:{},inverse:self.noop,fn:self.program(13, program13, data),data:data};
  if (stack2 = helpers.market) { stack2 = stack2.call(depth0, options); }
  else { stack2 = (depth0 && depth0.market); stack2 = typeof stack2 === functionType ? stack2.call(depth0, options) : stack2; }
  if (!helpers.market) { stack2 = blockHelperMissing.call(depth0, stack2, options); }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n\n						</ul>\n					</div>\n				</div>\n			</ul>\n		</div>\n\n		\n\n		<!-- WATCH NOW -->\n\n\n		<div class=\"ad dc\" id=\"stocksearch-292x30\">\n		</div>\n		<div class=\"section-5\">\n			<div class=\"component watch-now\">\n				<h2 class=\"title\">Watch Now</h2>\n			<div>\n    		<ul>\n	    		";
  options = {hash:{},inverse:self.noop,fn:self.program(15, program15, data),data:data};
  if (stack2 = helpers.videos) { stack2 = stack2.call(depth0, options); }
  else { stack2 = (depth0 && depth0.videos); stack2 = typeof stack2 === functionType ? stack2.call(depth0, options) : stack2; }
  if (!helpers.videos) { stack2 = blockHelperMissing.call(depth0, stack2, options); }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n    		</ul>\n		</div>\n	</div> <!-- /watch-now --> \n\n	<!-- xyzzy -->\n	</div></div>\n\n	<div class=\"section-14\" style=\"width: auto; clear: none;\">\n		<div class=\"ads\">\n			<div class=\"ad off\" id=\"board2-970x66\" style=\"display: none;\">\n			</div>\n		</div> \n	</div>\n\n\n\n	<!-- LATEST NEWS -->\n\n\n	";
  options = {hash:{},inverse:self.noop,fn:self.program(17, program17, data),data:data};
  if (stack2 = helpers.latest) { stack2 = stack2.call(depth0, options); }
  else { stack2 = (depth0 && depth0.latest); stack2 = typeof stack2 === functionType ? stack2.call(depth0, options) : stack2; }
  if (!helpers.latest) { stack2 = blockHelperMissing.call(depth0, stack2, options); }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n\n	 \n\n	 	<!-- FEATURES AND FACES -->\n \n   \n   		<div class=\"section-14\">\n			<div class=\"section section-first\" id=\"features-faces\">\n				  ";
  options = {hash:{},inverse:self.noop,fn:self.program(22, program22, data),data:data};
  if (stack2 = helpers.features) { stack2 = stack2.call(depth0, options); }
  else { stack2 = (depth0 && depth0.features); stack2 = typeof stack2 === functionType ? stack2.call(depth0, options) : stack2; }
  if (!helpers.features) { stack2 = blockHelperMissing.call(depth0, stack2, options); }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n				</div>\n			</div>\n \n\n			<!-- SECTIONS STYLE -->\n\n			<style type=\"text/css\">\n				.voterDiv .ob_bctrl{display:none;}\n				.ob_pdesc IMG{border:none;}\n				.HOP_4 .ob_what{direction:ltr;text-align:right;clear:both;padding:5px 10px 0px;}\n				.HOP_4 .ob_what a{color:#999;font-size:10px;font-family:arial;text-decoration: none;}\n				.HOP_4 .ob_clear{clear:both;}\n				.HOP_4 .ob_amelia{background:url('http://widgets.outbrain.com/images/widgetIcons/ob_logo_16x16.png') no-repeat center top;display:inline-block;width:16px;height:16px;vertical-align:text-bottom;margin-bottom:-2px;padding:0px 5px;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;}\n				.HOP_4:hover .ob_amelia{background-position:center bottom;}\n					.HOP_4 .ob_container{width:100%;position:relative;overflow:hidden;}\n				.HOP_4 .strip-img{width:60px;height:60px;border:none !important;margin:0px !important;display:block;padding:0px !important;}\n				.HOP_4 .item-link-container{text-decoration:none;}\n				.HOP_4 .strip-rec-link-title{font-size:13px;font-weight:normal;line-height:16px;}\n				.HOP_4 .strip-rec-link-source{font-size:12px;line-height:16px}\n				.HOP_4 .strip-like{padding-bottom:4px;font-size:14px;line-height:16px;height:20px;font-weight:bold;}\n				.HOP_4 .item-container a,.HOP_4 .item-container a:hover,.HOP_4 .item-container a:visited{border:medium none;text-decoration:none;}\n				.HOP_4 .ob_video{border:medium none;position:absolute;top:38px;left:38px}\n				.HOP_4 .ob-rec-link-img{position:relative;}\n				/* .HOP_4 .wbr:before {content: \\\"\\200B\\\"} */\n				.HOP_4 .ob-rec-link-img{float:left;}\n				.HOP_4 .ob-text-content{text-align:left;padding-left:65px;}\n				.HOP_4 .item-container{position:relative;height:62px;padding-bottom:5px;width:100%;clear:both;}\n				.HOP_4 .item-container A{display:inline;}\n				.HOP_4 .item-container A.ob-text-content{display:block;}\n				.HOP_4 .ob_container_shadow_outer{display:none;}\n				.HOP_4 .item-container-ad .paid-distribution{text-decoration:none;border-color:#eee;border-style:solid;border-width:2px 2px 0 0;color:#fff;font-family:verdana,arial,sans-serif;font-size:9px;font-size-adjust:none;font-stretch:normal;font-style:normal;font-variant:normal;font-weight:normal;line-height:normal;padding:2px 4px; position:absolute; left:0;top:42px;z-index:10;}\n					</style>\n				<style type=\"text/css\" class=\"ob-custom-css\">\n				.HOP_4 .ob_video, .HOP_4 img.strip-img {display: none;}\n				.HOP_4 span.arrow {margin-left: 5px;}\n				.HOP_4 .ob_org_header {display: block!important; width: 212px;}\n				.HOP_4 .ob-recIdx-0 .ob_video, .HOP_4 .ob-recIdx-0 img.strip-img {display: block;}\n				.HOP_4 .strip-rec-link-title {font-famil: arial, sans-serif; font-size: 12px!important; font-weight: normal; line-height: 16px; font-size: 12px; color: #183A52;}\n				.HOP_4 .strip-video-img {width: 20px; height: 20px;}\n				.HOP_4 .ob_source{display: none;}\n				.HOP_4 .ob-recIdx-0 .ob-text-content {background: none repeat scroll 0% 0% transparent ! important; margin-left: 5px ! important; width: 146px;  padding: 0px ! important; font-weight: bold;  margin-right: 4px;}\n				.HOP_4 .item-container {height: 100% !important; padding-bottom: 8px !important;}\n				.HOP_4 .item-container.ob-recIdx-0{height: 60px!important; margin-left: -4px;}\n				.HOP_4 .item-container {width: 200px!important;}\n				.HOP_4 .ob_container {margin-left: 4px; overflow: visible!important;}\n				.HOP_4 .ob_empty {display: none;}\n				.ob_strip_container.HOP_4 {margin-left: 4px;}\n				.HOP_4 .ob-text-content {padding-left: 10px!important; background: url(\"http://global.fncstatic.com/static/v/fn-hp/img/bg-list-marker.gif\") no-repeat scroll 0 5px transparent;width: 190px; margin-left: -4px;}\n				.HOP_4 .ob-rec-link-img {margin-right: 6px;}\n				.HOP_4 .ob-recIdx-0 .ob-text-content {float: left;width: 120px !important;}\n				.HOP_4 .strip-rec-link-title {display: inline;}\n				.HOP_4 .ob-recIdx-0 .strip-rec-link-title {font-weight: bold;}\n				.HOP_4 .ob-recIdx-0 .strip-rec-link-title:hover {text-decoration: underline !important;}\n			</style>\n\n			<style type=\"text/css\">\n				.voterDiv .ob_bctrl{display:none;}\n				.ob_pdesc IMG{border:none;}\n				.HOP_2 .ob_what{direction:ltr;text-align:right;clear:both;padding:5px 10px 0px;}\n				.HOP_2 .ob_what a{color:#999;font-size:10px;font-family:arial;text-decoration: none;}\n				.HOP_2 .ob_clear{clear:both;}\n				.HOP_2 .ob_amelia{background:url('http://widgets.outbrain.com/images/widgetIcons/ob_logo_16x16.png') no-repeat center top;display:inline-block;width:16px;height:16px;vertical-align:text-bottom;margin-bottom:-2px;padding:0px 5px;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;}\n				.HOP_2:hover .ob_amelia{background-position:center bottom;}\n					.HOP_2 .ob_container{width:100%;position:relative;overflow:hidden;}\n				.HOP_2 .strip-img{width:60px;height:60px;border:none !important;margin:0px !important;display:block;padding:0px !important;}\n				.HOP_2 .item-link-container{text-decoration:none;}\n				.HOP_2 .strip-rec-link-title{font-size:13px;font-weight:normal;line-height:16px;}\n				.HOP_2 .strip-rec-link-source{font-size:12px;line-height:16px}\n				.HOP_2 .strip-like{padding-bottom:4px;font-size:14px;line-height:16px;height:20px;font-weight:bold;}\n				.HOP_2 .item-container a,.HOP_2 .item-container a:hover,.HOP_2 .item-container a:visited{border:medium none;text-decoration:none;}\n				.HOP_2 .ob_video{border:medium none;position:absolute;top:38px;left:38px}\n				.HOP_2 .ob-rec-link-img{position:relative;}\n				.HOP_2 .ob-rec-link-img{float:left;}\n				.HOP_2 .ob-text-content{text-align:left;padding-left:65px;}\n				.HOP_2 .item-container{position:relative;height:62px;padding-bottom:5px;width:100%;clear:both;}\n				.HOP_2 .item-container A{display:inline;}\n				.HOP_2 .item-container A.ob-text-content{display:block;}\n				.HOP_2 .ob_container_shadow_outer{display:none;}\n				.HOP_2 .item-container-ad .paid-distribution{text-decoration:none;border-color:#eee;border-style:solid;border-width:2px 2px 0 0;color:#fff;font-family:verdana,arial,sans-serif;font-size:9px;font-size-adjust:none;font-stretch:normal;font-style:normal;font-variant:normal;font-weight:normal;line-height:normal;padding:2px 4px; position:absolute; left:0;top:42px;z-index:10;}\n					</style>\n				<style type=\"text/css\" class=\"ob-custom-css\">\n				.HOP_2 .ob_video, .HOP_2 img.strip-img {display: none;}\n				.HOP_2 span.arrow {margin-left: 5px;}\n				.HOP_2 .ob_org_header {display: block!important; width: 212px;}\n				.HOP_2 .ob-recIdx-0 .ob_video, .HOP_2 .ob-recIdx-0 img.strip-img {display: block;}\n				.HOP_2 .strip-rec-link-title {font-famil: arial, sans-serif; font-size: 12px!important; font-weight: normal; line-height: 16px; font-size: 12px; color: #183A52;}\n				.HOP_2 .strip-video-img {width: 20px; height: 20px;}\n				.HOP_2 .ob_source{display: none;}\n				.HOP_2 .ob-recIdx-0 .ob-text-content {background: none repeat scroll 0% 0% transparent ! important; margin-left: 5px ! important; width: 146px;  padding: 0px ! important; font-weight: bold;  margin-right: 4px;}\n				.HOP_2 .item-container {height: 100% !important; padding-bottom: 8px !important;}\n				.HOP_2 .item-container.ob-recIdx-0{height: 60px!important; margin-left: -4px;}\n				.HOP_2 .item-container {width: 200px!important;}\n				.HOP_2 .ob_container {margin-left: 4px; overflow: visible!important;}\n				.HOP_2 .ob_empty {display: none;}\n				.ob_strip_container.HOP_2 {margin-left: 4px;}\n				.HOP_2 .ob-text-content {padding-left: 10px!important; background: url(\"http://global.fncstatic.com/static/v/fn-hp/img/bg-list-marker.gif\") no-repeat scroll 0 5px transparent;width: 190px; margin-left: -4px;}\n				.HOP_2 .ob-rec-link-img {margin-right: 6px;}\n				.HOP_2 .ob-recIdx-0 .ob-text-content {float: left;width: 120px !important;}\n				.HOP_2 .strip-rec-link-title {display: inline;}\n				.HOP_2 .ob-recIdx-0 .strip-rec-link-title {font-weight: bold;}\n				.HOP_2 .ob-recIdx-0 .strip-rec-link-title:hover {text-decoration: underline !important;}\n			</style>\n\n			<style type=\"text/css\">\n				.voterDiv .ob_bctrl{display:none;}\n				.ob_pdesc IMG{border:none;}\n				.HOP_6 .ob_what{direction:ltr;text-align:right;clear:both;padding:5px 10px 0px;}\n				.HOP_6 .ob_what a{color:#999;font-size:10px;font-family:arial;text-decoration: none;}\n				.HOP_6 .ob_clear{clear:both;}\n				.HOP_6 .ob_amelia{background:url('http://widgets.outbrain.com/images/widgetIcons/ob_logo_16x16.png') no-repeat center top;display:inline-block;width:16px;height:16px;vertical-align:text-bottom;margin-bottom:-2px;padding:0px 5px;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;}\n				.HOP_6:hover .ob_amelia{background-position:center bottom;}\n					.HOP_6 .ob_container{width:100%;position:relative;overflow:hidden;}\n				.HOP_6 .strip-img{width:60px;height:60px;border:none !important;margin:0px !important;display:block;padding:0px !important;}\n				.HOP_6 .item-link-container{text-decoration:none;}\n				.HOP_6 .strip-rec-link-title{font-size:13px;font-weight:normal;line-height:16px;}\n				.HOP_6 .strip-rec-link-source{font-size:12px;line-height:16px}\n				.HOP_6 .strip-like{padding-bottom:4px;font-size:14px;line-height:16px;height:20px;font-weight:bold;}\n				.HOP_6 .item-container a,.HOP_6 .item-container a:hover,.HOP_6 .item-container a:visited{border:medium none;text-decoration:none;}\n				.HOP_6 .ob_video{border:medium none;position:absolute;top:5px;left:5px}\n				.HOP_6 .ob-rec-link-img{position:relative;}\n				.HOP_6 .ob-rec-link-img{float:left;}\n				.HOP_6 .ob-text-content{text-align:left;padding-left:65px;}\n				.HOP_6 .item-container{position:relative;height:62px;padding-bottom:5px;width:100%;clear:both;}\n				.HOP_6 .item-container A{display:inline;}\n				.HOP_6 .item-container A.ob-text-content{display:block;}\n				.HOP_6 .ob_container_shadow_outer{display:none;}\n				.HOP_6 .item-container-ad .paid-distribution{text-decoration:none;border-color:#eee;border-style:solid;border-width:2px 2px 0 0;color:#fff;font-family:verdana,arial,sans-serif;font-size:9px;font-size-adjust:none;font-stretch:normal;font-style:normal;font-variant:normal;font-weight:normal;line-height:normal;padding:2px 4px; position:absolute; left:0;top:42px;z-index:10;}\n					</style>\n				<style type=\"text/css\" class=\"ob-custom-css\">\n				.HOP_6 .ob_video, .HOP_6 img.strip-img {display: none;}\n				.HOP_6 span.arrow {margin-left: 5px;}\n				.HOP_6 .ob_org_header {display: block!important; width: 212px;}\n				.HOP_6 .ob-recIdx-0 .ob_video, .HOP_6 .ob-recIdx-0 img.strip-img {display: block;}\n				.HOP_6 .strip-rec-link-title {font-famil: arial, sans-serif; font-size: 12px!important; font-weight: normal; line-height: 16px; font-size: 12px; color: #183A52;}\n				.HOP_6 .strip-video-img {width: 20px; height: 20px;}\n				.HOP_6 .ob_source{display: none;}\n				.HOP_6 .ob-recIdx-0 .ob-text-content {background: none repeat scroll 0% 0% transparent ! important; margin-left: 5px ! important; width: 146px;  padding: 0px ! important; font-weight: bold;  margin-right: 4px;}\n				.HOP_6 .item-container {height: 100% !important; padding-bottom: 8px !important;}\n				.HOP_6 .item-container.ob-recIdx-0{height: 60px!important; margin-left: -4px;}\n				.HOP_6 .item-container {width: 200px!important;}\n				.HOP_6 .ob_container {margin-left: 4px; overflow: visible!important;}\n				.HOP_6 .ob_empty {display: none;}\n				.ob_strip_container.HOP_6 {margin-left: 4px;}\n				.HOP_6 .ob-text-content {padding-left: 10px!important; background: url(\"http://global.fncstatic.com/static/v/fn-hp/img/bg-list-marker.gif\") no-repeat scroll 0 5px transparent;width: 190px; margin-left: -4px;}\n				.HOP_6 .ob-rec-link-img {margin-right: 6px;}\n				.HOP_6 .ob-recIdx-0 .ob-text-content {float: left;width: 120px !important;}\n				.HOP_6 .strip-rec-link-title {display: inline;}\n				.HOP_6 .ob-recIdx-0 .strip-rec-link-title {font-weight: bold;}\n				.HOP_6 .ob-recIdx-0 .strip-rec-link-title:hover {text-decoration: underline !important;}\n			</style>\n\n			<style type=\"text/css\">\n				.voterDiv .ob_bctrl{display:none;}\n				.ob_pdesc IMG{border:none;}\n				.HOP_5 .ob_what{direction:ltr;text-align:right;clear:both;padding:5px 10px 0px;}\n				.HOP_5 .ob_what a{color:#999;font-size:10px;font-family:arial;text-decoration: none;}\n				.HOP_5 .ob_clear{clear:both;}\n				.HOP_5 .ob_amelia{background:url('http://widgets.outbrain.com/images/widgetIcons/ob_logo_16x16.png') no-repeat center top;display:inline-block;width:16px;height:16px;vertical-align:text-bottom;margin-bottom:-2px;padding:0px 5px;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;}\n				.HOP_5:hover .ob_amelia{background-position:center bottom;}\n					.HOP_5 .ob_container{width:100%;position:relative;overflow:hidden;}\n				.HOP_5 .strip-img{width:60px;height:60px;border:none !important;margin:0px !important;display:block;padding:0px !important;}\n				.HOP_5 .item-link-container{text-decoration:none;}\n				.HOP_5 .strip-rec-link-title{font-size:13px;font-weight:normal;line-height:16px;}\n				.HOP_5 .strip-rec-link-source{font-size:12px;line-height:16px}\n				.HOP_5 .strip-like{padding-bottom:4px;font-size:14px;line-height:16px;height:20px;font-weight:bold;}\n				.HOP_5 .item-container a,.HOP_5 .item-container a:hover,.HOP_5 .item-container a:visited{border:medium none;text-decoration:none;}\n				.HOP_5 .ob_video{border:medium none;position:absolute;top:5px;left:5px}\n				.HOP_5 .ob-rec-link-img{position:relative;}\n				.HOP_5 .ob-rec-link-img{float:left;}\n				.HOP_5 .ob-text-content{text-align:left;padding-left:65px;}\n				.HOP_5 .item-container{position:relative;height:62px;padding-bottom:5px;width:100%;clear:both;}\n				.HOP_5 .item-container A{display:inline;}\n				.HOP_5 .item-container A.ob-text-content{display:block;}\n				.HOP_5 .ob_container_shadow_outer{display:none;}\n				.HOP_5 .item-container-ad .paid-distribution{text-decoration:none;border-color:#eee;border-style:solid;border-width:2px 2px 0 0;color:#fff;font-family:verdana,arial,sans-serif;font-size:9px;font-size-adjust:none;font-stretch:normal;font-style:normal;font-variant:normal;font-weight:normal;line-height:normal;padding:2px 4px; position:absolute; left:0;top:42px;z-index:10;}\n					</style>\n				<style type=\"text/css\" class=\"ob-custom-css\">\n				.HOP_5 .ob_video, .HOP_5 img.strip-img {display: none;}\n				.HOP_5 span.arrow {margin-left: 5px;}\n				.HOP_5 .ob_org_header {display: block!important; width: 212px;}\n				.HOP_5 .ob-recIdx-0 .ob_video, .HOP_5 .ob-recIdx-0 img.strip-img {display: block;}\n				.HOP_5 .strip-rec-link-title {font-famil: arial, sans-serif; font-size: 12px!important; font-weight: normal; line-height: 16px; font-size: 12px; color: #183A52;}\n				.HOP_5 .strip-video-img {width: 20px; height: 20px;}\n				.HOP_5 .ob_source{display: none;}\n				.HOP_5 .ob-recIdx-0 .ob-text-content {background: none repeat scroll 0% 0% transparent ! important; margin-left: 5px ! important; width: 146px;  padding: 0px ! important; font-weight: bold;  margin-right: 4px;}\n				.HOP_5 .item-container {height: 100% !important; padding-bottom: 8px !important;}\n				.HOP_5 .item-container.ob-recIdx-0{height: 60px!important; margin-left: -4px;}\n				.HOP_5 .item-container {width: 200px!important;}\n				.HOP_5 .ob_container {margin-left: 4px; overflow: visible!important;}\n				.HOP_5 .ob_empty {display: none;}\n				.ob_strip_container.HOP_5 {margin-left: 4px;}\n				.HOP_5 .ob-text-content {padding-left: 10px!important; background: url(\"http://global.fncstatic.com/static/v/fn-hp/img/bg-list-marker.gif\") no-repeat scroll 0 5px transparent;width: 190px; margin-left: -4px;}\n				.HOP_5 .ob-rec-link-img {margin-right: 6px;}\n				.HOP_5 .ob-recIdx-0 .ob-text-content {float: left;width: 120px !important;}\n				.HOP_5 .strip-rec-link-title {display: inline;}\n				.HOP_5 .ob-recIdx-0 .strip-rec-link-title {font-weight: bold;}\n				.HOP_5 .ob-recIdx-0 .strip-rec-link-title:hover {text-decoration: underline !important;}\n			</style>\n\n			<!-- SECTONS GRID -->\n\n\n\n			<div class=\"section-9\">\n				<div class=\"component entries-grid\">\n					";
  options = {hash:{},inverse:self.noop,fn:self.program(25, program25, data),data:data};
  if (stack2 = helpers.sections) { stack2 = stack2.call(depth0, options); }
  else { stack2 = (depth0 && depth0.sections); stack2 = typeof stack2 === functionType ? stack2.call(depth0, options) : stack2; }
  if (!helpers.sections) { stack2 = blockHelperMissing.call(depth0, stack2, options); }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n				</div> <!-- /component entries-grid -->\n\n				<div class=\"component entries-media\">\n<h2 class=\"title\">On Fox News Channel</h2>\n\n<div class=\"section section-first video\" style=\"width: 328px; min-height: 185px;\">\n<div class=\"homepage-video\" id=\"videoHolder:U83rpS7QQ34ip01y539Kb8OZS\"><a href=\"#\" style=\"display: block; visibility: visible; padding: 0px; position: relative;\"><span class=\"vid-overlay\"><img style=\"position: absolute; display: inline; right: 9px; bottom: 9px; width: 96px; min-height: 96px;\" src=\"http://global.fncstatic.com/static/v/all/img/vp-overlay-96.png\"></span><img src=\"http://a57.foxnews.com/media2.foxnews.com/thumbnails/i/112913/328/185/BillOreilly.jpg\" style=\"width: 328px; height: 185px; opacity: 1;\"></a></div>\n</div>\n\n\n<div class=\"section\">\n<ul class=\"list-ext-2\">\n<li class=\"first\">\n<p class=\"media\"><a href=\"#\"><img dest_src=\"http://a57.foxnews.com/media2.foxnews.com/thumbnails/i/112913/60/60/GretaVanSusteren.jpg\" class=\"unloaded_img\" original=\"/images/clear.gif\" style=\"display: block; width: 60px; height: 60px;\" src=\"http://a57.foxnews.com/media2.foxnews.com/thumbnails/i/112913/60/60/GretaVanSusteren.jpg\"></a></p>\n<h3><a href=\"#\">An Explosive On the Record!</a></h3>\n<p class=\"summary\">Monday, 7p ET: The knockout game is a real life nightmare! Greta has the latest on new attacks and warnings!</p>\n</li>\n<li>\n<p class=\"media\"><a href=\"#\"><img dest_src=\"http://a57.foxnews.com/media2.foxnews.com/thumbnails/i/112913/60/60/MegynKelly.jpg\" class=\"unloaded_img\" original=\"/images/clear.gif\" style=\"display: block; width: 60px; height: 60px;\" src=\"http://a57.foxnews.com/media2.foxnews.com/thumbnails/i/112913/60/60/MegynKelly.jpg\"></a></p>\n<h3><a href=\"#\">A Must-See Primetime!</a></h3>\n<p class=\"summary\">Monday, starting at 9p ET: Post deadline! Will the ObamaCare website doom Democrats in midterm elections?</p>\n</li>\n</ul> <!-- /list-ext-2 -->\n</div> <!-- /section -->\n</div> <!-- -- /entries-media ---->\n\n\n					 <!-- 24/7 include -->\n					 \n						<!--[if IE 5]> Vignette StoryServer 5.0 Mon Dec 02 19:07:43 2013 <![endif]-->\n   \n	\n	  \n	\n		     \n	\n		     \n	\n		     \n	\n		     \n	\n		     \n	\n		     \n	\n		     \n	\n		     \n	\n		     \n	\n		     \n	\n		     \n	\n		     \n	\n		     \n	\n		     \n	\n		     \n	\n		     \n	\n		     \n	\n		      \n	 <div class=\"component tabbed-mod\">\n						<h2 class=\"title\">Best Of Fox News Channel</h2>\n\n						<ul class=\"controller active-tab-3\">\n							<li class=\"\"><a href=\"#\">Prime Time</a></li>\n							<li><a href=\"#\">Day Time</a></li>\n							<li class=\"last-tab active\"><a href=\"#\">Other Programming</a></li>\n						</ul>\n						\n						<div class=\"section section-first gridded\" style=\"display: none;\">\n							<ul class=\"list-ext-2\">\n								 \n									 <li class=\"first\"><p class=\"media\"><a href=\"http://www.foxnews.com/on-air/oreilly/2013/11/29/bill-oreilly-are-you-happy-your-country\"><img class=\"unloaded_img\" dest_src=\"http://a57.foxnews.com/www.foxnews.com/ucat/images/root/60/60/CfakepathBILL_60_20130813_081143.jpg\" height=\"60\" width=\"60\" alt=\"\" original=\"/images/clear.gif\" style=\"display: block; width: 60px; height: 60px;\" src=\"http://a57.foxnews.com/www.foxnews.com/ucat/images/root/60/60/CfakepathBILL_60_20130813_081143.jpg\"></a></p><p class=\"relation\">O'Reilly Factor</p><h3><a href=\"http://www.foxnews.com/on-air/oreilly/2013/11/29/bill-oreilly-are-you-happy-your-country\">Talking Points</a></h3><p class=\"summary\">Are you happy with your country<br><b>• <a href=\"http://video.foxnews.com/v/2874643538001/miller-time-nuke-deal-with-iran/\">Miller Time: Nuke deal with Iran</a></b></p></li>  \n									 <li><p class=\"media\"><a href=\"http://www.foxnews.com/on-air/the-kelly-file/transcript/2013/12/02/kelly-file-robbing-our-youth\"><img class=\"unloaded_img\" dest_src=\"http://a57.foxnews.com/www.foxnews.com/ucat/images/root/60/60/Cfakepathmegynkelly_20131201_093218.jpg\" height=\"60\" width=\"60\" alt=\"\" original=\"/images/clear.gif\" style=\"display: block; width: 60px; height: 60px;\" src=\"http://a57.foxnews.com/www.foxnews.com/ucat/images/root/60/60/Cfakepathmegynkelly_20131201_093218.jpg\"></a></p><p class=\"relation\">The Kelly File</p><h3><a href=\"http://www.foxnews.com/on-air/the-kelly-file/transcript/2013/12/02/kelly-file-robbing-our-youth\">Robbing Our Youth</a></h3><p class=\"summary\">Millennials break down their biggest struggles</p></li>  \n									 <li><p class=\"media\"><a href=\"http://www.foxnews.com/on-air/hannity/2013/11/27/iran-nuclear-deal-shows-americas-weakness-world-stage\"><img class=\"unloaded_img\" dest_src=\"http://a57.foxnews.com/www.foxnews.com/ucat/images/root/60/60/Cfakepath60_112613_hannity_iran_20131127_093351.jpg\" height=\"60\" width=\"60\" alt=\"\" original=\"/images/clear.gif\" style=\"display: block; width: 60px; height: 60px;\" src=\"http://a57.foxnews.com/www.foxnews.com/ucat/images/root/60/60/Cfakepath60_112613_hannity_iran_20131127_093351.jpg\"></a></p><p class=\"relation\">Hannity</p><h3><a href=\"http://www.foxnews.com/on-air/hannity/2013/11/27/iran-nuclear-deal-shows-americas-weakness-world-stage\">Leading from Behind</a></h3><p class=\"summary\">Iran nuclear deal shows America's weakness on world stage?<br>• <a href=\"http://www.foxnews.com/hannity\" target=\"_blank\"><b>More Hannity</b></a></p></li>  \n									 <li><p class=\"media\"><a href=\"http://www.foxnews.com/on-air/on-the-record/index.html#/v/2879011560001\" onclick=\"window.open(this.href);return false;\"><img class=\"unloaded_img\" dest_src=\"http://a57.foxnews.com/www.foxnews.com/ucat/images/root/60/60/WBryan201360_112913_greta_charles_20131130_101603.jpg\" height=\"60\" width=\"60\" alt=\"\" original=\"/images/clear.gif\" style=\"display: block; width: 60px; height: 60px;\" src=\"http://a57.foxnews.com/www.foxnews.com/ucat/images/root/60/60/WBryan201360_112913_greta_charles_20131130_101603.jpg\"></a></p><p class=\"relation\">Greta</p><h3><a href=\"http://www.foxnews.com/on-air/on-the-record/index.html#/v/2879011560001\" onclick=\"window.open(this.href);return false;\">Abuse of Power</a></h3><p class=\"summary\">Krauthammer: Obama feeds lawlessness with ObamaCare 'fixes'<br>• <b><a href=\"http://tinyurl.com/qek2vup\" target=\"_blank\">ObamaCare's PR war</a></b></p></li>  \n									 <li><p class=\"media\"><a href=\"http://www.foxnews.com/on-air/special-report-bret-baier/2013/12/02/grapevine-he-said-she-said\"><img class=\"unloaded_img\" dest_src=\"http://a57.foxnews.com/www.foxnews.com/ucat/images/root/60/60/Cfakepath60_baier_new_20131202_184004.jpg\" height=\"60\" width=\"60\" alt=\"\" original=\"/images/clear.gif\" style=\"display: block; width: 60px; height: 60px;\" src=\"http://a57.foxnews.com/www.foxnews.com/ucat/images/root/60/60/Cfakepath60_baier_new_20131202_184004.jpg\"></a></p><p class=\"relation\">Special Report</p><h3><a href=\"http://www.foxnews.com/on-air/special-report-bret-baier/2013/12/02/grapevine-he-said-she-said\">Political Grapevine</a></h3><p class=\"summary\">Latest push for more gender neutral pronouns<br>• <a href=\"http://www.foxnews.com/on-air/special-report-bret-baier/index.html\" target=\"_blank\"><b>More Bret</b></a></p></li>  \n									 <li><p class=\"media\"><a href=\"http://www.foxnews.com/on-air/the-five/videos#/v/2886901890001/p/1040983441001\"><img class=\"unloaded_img\" dest_src=\"http://a57.foxnews.com/www.foxnews.com/ucat/images/root/60/60/Cfakepathobama12_2_20131202_190146.jpg\" height=\"60\" width=\"60\" alt=\"\" original=\"/images/clear.gif\" style=\"display: block; width: 60px; height: 60px;\" src=\"http://a57.foxnews.com/www.foxnews.com/ucat/images/root/60/60/Cfakepathobama12_2_20131202_190146.jpg\"></a></p><p class=\"relation\">The Five</p><h3><a href=\"http://www.foxnews.com/on-air/the-five/videos#/v/2886901890001/p/1040983441001\">ObamaCare Success?</a></h3><p class=\"summary\">Health care site shows difference between private, public standards</p></li>   </ul>\n						</div> <!-- /section section-first gridded -->\n						\n						<div class=\"section gridded\" style=\"display: none;\">\n\n							<ul class=\"list-ext-2\">\n								 \n									 <li class=\"first\"><p class=\"media\"><a href=\"http://video.foxnews.com/v/2884618032001/malcolm-gladwell-talks-underdogs-and-longshots/?playlist_id=930909787001\"><img src=\"http://a57.foxnews.com/www.foxnews.com/ucat/images/root/60/60/Cfakepath60_malcolm_gladwell_20131202_135012.jpg\" class=\"unloaded_img\" dest_src=\"http://a57.foxnews.com/www.foxnews.com/ucat/images/root/60/60/Cfakepath60_malcolm_gladwell_20131202_135012.jpg\" height=\"60\" width=\"60\" alt=\"\" original=\"/images/clear.gif\" style=\"display: block; width: 60px; height: 60px;\"></a></p><p class=\"relation\">Fox &amp; Friends</p><h3><a href=\"http://video.foxnews.com/v/2884618032001/malcolm-gladwell-talks-underdogs-and-longshots/?playlist_id=930909787001\">'David and Goliath'</a></h3><p class=\"summary\">Malcolm Gladwell pens new book on underdogs and longshots<br>• <a href=\"http://www.foxnews.com/on-air/fox-friends/index.html\"><b>More 'Friends'</b></a></p></li>  \n									 <li><p class=\"media\"><a href=\"http://www.foxnews.com/on-air/americas-newsroom/index.html#/v/2885792145001\"><img src=\"http://a57.foxnews.com/www.foxnews.com/ucat/images/root/60/60/Cfakepath60_robot_20131202_144616.jpg\" class=\"unloaded_img\" dest_src=\"http://a57.foxnews.com/www.foxnews.com/ucat/images/root/60/60/Cfakepath60_robot_20131202_144616.jpg\" height=\"60\" width=\"60\" alt=\"\" original=\"/images/clear.gif\" style=\"display: block; width: 60px; height: 60px;\"></a></p><p class=\"relation\">America's Newsroom</p><h3><a href=\"http://www.foxnews.com/on-air/americas-newsroom/index.html#/v/2885792145001\">R2D2 the Crime Fighter?</a></h3><p class=\"summary\">Robot stands watch, collects street data</p></li>  \n									 <li><p class=\"media\"><a href=\"http://www.foxnews.com/on-air/happening-now/index.html#/v/2886054654001\"><img src=\"http://a57.foxnews.com/www.foxnews.com/ucat/images/root/60/60/Cfakepath60_120213_hn_china_20131202_135228.jpg\" class=\"unloaded_img\" dest_src=\"http://a57.foxnews.com/www.foxnews.com/ucat/images/root/60/60/Cfakepath60_120213_hn_china_20131202_135228.jpg\" height=\"60\" width=\"60\" alt=\"\" original=\"/images/clear.gif\" style=\"display: block; width: 60px; height: 60px;\"></a></p><p class=\"relation\">Happening Now</p><h3><a href=\"http://www.foxnews.com/on-air/happening-now/index.html#/v/2886054654001\">Air Zone Dispute</a></h3><p class=\"summary\">Is China looking for an international confrontation?</p></li>  \n									 <li><p class=\"media\"><a href=\"http://www.foxnews.com/on-air/americas-news-hq/index.html#/v/2886120716001\"><img src=\"http://a57.foxnews.com/www.foxnews.com/ucat/images/root/60/60/Cfakepathdronedelivery_60_20131202_181313.jpg\" class=\"unloaded_img\" dest_src=\"http://a57.foxnews.com/www.foxnews.com/ucat/images/root/60/60/Cfakepathdronedelivery_60_20131202_181313.jpg\" height=\"60\" width=\"60\" alt=\"\" original=\"/images/clear.gif\" style=\"display: block; width: 60px; height: 60px;\"></a></p><p class=\"relation\">America's News HQ</p><h3><a href=\"http://www.foxnews.com/on-air/americas-news-hq/index.html#/v/2886120716001\">Drones to Deliver Gifts?</a></h3><p class=\"summary\">Amazon testing use of aerial drones</p></li>  \n									 <li><p class=\"media\"><a href=\"http://www.foxnews.com/on-air/shepard-smith/index.html#/v/2886446227001\"><img src=\"http://a57.foxnews.com/www.foxnews.com/ucat/images/root/60/60/CfakepathBottled-Water_20131202_163902.jpg\" class=\"unloaded_img\" dest_src=\"http://a57.foxnews.com/www.foxnews.com/ucat/images/root/60/60/CfakepathBottled-Water_20131202_163902.jpg\" height=\"60\" width=\"60\" alt=\"\" original=\"/images/clear.gif\" style=\"display: block; width: 60px; height: 60px;\"></a></p><p class=\"relation\">Shepard Smith Reporting</p><h3><a href=\"http://www.foxnews.com/on-air/shepard-smith/index.html#/v/2886446227001\">Water Bottle Warning</a></h3><p class=\"summary\">Study finds plastic water bottles may trigger migraines <br>• <a href=\"http://www.foxnews.com/on-air/shepard-smith/index.html\"><b>More Shep</b></a></p></li>  \n									 <li><p class=\"media\"><a href=\"http://www.foxnews.com/on-air/your-world-cavuto/index.html#/v/2886901888001\"><img src=\"http://a57.foxnews.com/www.foxnews.com/ucat/images/root/60/60/Cfakepathhealthcaredotgov_60_20131202_180939.jpg\" class=\"unloaded_img\" dest_src=\"http://a57.foxnews.com/www.foxnews.com/ucat/images/root/60/60/Cfakepathhealthcaredotgov_60_20131202_180939.jpg\" height=\"60\" width=\"60\" alt=\"\" original=\"/images/clear.gif\" style=\"display: block; width: 60px; height: 60px;\"></a></p><p class=\"relation\">Your World</p><h3><a href=\"http://www.foxnews.com/on-air/your-world-cavuto/index.html#/v/2886901888001\">ObamaCare Site Fixed?</a></h3><p class=\"summary\">Reaction to revamped healthcare.gov</p></li>   </ul>\n						</div> <!-- /section gridded -->\n						\n						<div class=\"section gridded\" style=\"display: block;\">\n							<ul class=\"list-ext-2\">\n								 \n									 <li class=\"first\"><p class=\"media\"><a href=\"http://www.foxnews.com/on-air/fox-news-sunday-chris-wallace/2013/12/01/healthcaregov-least-obamacares-worries-what-are-tehrans-nuclear-ambitions-after-deal-iran\"><img src=\"http://a57.foxnews.com/www.foxnews.com/ucat/images/root/60/60/Cfakepath60_wallace_20131125_095619.jpg\" class=\"unloaded_img\" dest_src=\"http://a57.foxnews.com/www.foxnews.com/ucat/images/root/60/60/Cfakepath60_wallace_20131125_095619.jpg\" height=\"60\" width=\"60\" alt=\"\" original=\"/images/clear.gif\" style=\"display: block; width: 60px; height: 60px;\"></a></p><p class=\"relation\">Fox News Sunday</p><h3><a href=\"http://www.foxnews.com/on-air/fox-news-sunday-chris-wallace/2013/12/01/healthcaregov-least-obamacares-worries-what-are-tehrans-nuclear-ambitions-after-deal-iran\">ObamaCare Website the Tip of the Iceberg?</a></h3><p class=\"summary\">Health care experts weigh in<br>• <a href=\"http://www.foxnews.com/on-air/fox-news-sunday/index.html\"><b>More 'FNS'</b></a></p></li>  \n									 <li><p class=\"media\"><a href=\"http://video.foxnews.com/v/2882809302001/why-politico-calls-michelle-obama-feminist-nightmare/?playlist_id=2652000093001\"><img src=\"http://a57.foxnews.com/www.foxnews.com/ucat/images/root/60/60/Cfakepath60_120113_Buzz_FirstLady_20131202_100524.jpg\" class=\"unloaded_img\" dest_src=\"http://a57.foxnews.com/www.foxnews.com/ucat/images/root/60/60/Cfakepath60_120113_Buzz_FirstLady_20131202_100524.jpg\" height=\"60\" width=\"60\" alt=\"\" original=\"/images/clear.gif\" style=\"display: block; width: 60px; height: 60px;\"></a></p><p class=\"relation\">MediaBuzz</p><h3><a href=\"http://video.foxnews.com/v/2882809302001/why-politico-calls-michelle-obama-feminist-nightmare/?playlist_id=2652000093001\">'Feminist Nightmare'?</a></h3><p class=\"summary\">Politico headline disses first lady<br>• <a href=\"http://www.foxnews.com/mediabuzz\"><b>More 'Buzz'</b></a></p></li>  \n									 <li><p class=\"media\"><a href=\"http://www.foxnews.com/on-air/huckabee/index.html#/v/2882809317001\"><img src=\"http://a57.foxnews.com/www.foxnews.com/ucat/images/root/60/60/Cfakepath60_huckabee_20131125_095736.jpg\" class=\"unloaded_img\" dest_src=\"http://a57.foxnews.com/www.foxnews.com/ucat/images/root/60/60/Cfakepath60_huckabee_20131125_095736.jpg\" height=\"60\" width=\"60\" alt=\"\" original=\"/images/clear.gif\" style=\"display: block; width: 60px; height: 60px;\"></a></p><p class=\"relation\">Huckabee</p><h3><a href=\"http://www.foxnews.com/on-air/huckabee/index.html#/v/2882809317001\">Be Thankful for the 'Sounds of Freedom'</a></h3><p class=\"summary\">Reaction to anger over noise from military installations</p></li>  \n									 <li><p class=\"media\"><a href=\"http://www.foxnews.com/on-air/cost-of-freedom/2013/12/02/big-labor-still-looking-out-workers\"><img src=\"http://a57.foxnews.com/www.foxnews.com/ucat/images/root/60/60/Cfakepath113013_BB_Unions_20131202_100632.jpg\" class=\"unloaded_img\" dest_src=\"http://a57.foxnews.com/www.foxnews.com/ucat/images/root/60/60/Cfakepath113013_BB_Unions_20131202_100632.jpg\" height=\"60\" width=\"60\" alt=\"\" original=\"/images/clear.gif\" style=\"display: block; width: 60px; height: 60px;\"></a></p><p class=\"relation\">Cost of Freedom</p><h3><a href=\"http://www.foxnews.com/on-air/cost-of-freedom/2013/12/02/big-labor-still-looking-out-workers\">Big Labor Still Looking Out for Workers?</a></h3><p class=\"summary\">Unions' motives questioned</p></li>  \n									 <li><p class=\"media\"><a href=\"http://www.foxnews.com/on-air/journal-editorial-report/2013/12/02/iran-nuclear-deal-faces-skeptical-allies-congress\"><img src=\"http://a57.foxnews.com/www.foxnews.com/ucat/images/root/60/60/Cfakepath113013_JER_Iran_20131202_100655.jpg\" class=\"unloaded_img\" dest_src=\"http://a57.foxnews.com/www.foxnews.com/ucat/images/root/60/60/Cfakepath113013_JER_Iran_20131202_100655.jpg\" height=\"60\" width=\"60\" alt=\"\" original=\"/images/clear.gif\" style=\"display: block; width: 60px; height: 60px;\"></a></p><p class=\"relation\">Journal Editorial Report</p><h3><a href=\"http://www.foxnews.com/on-air/journal-editorial-report/2013/12/02/iran-nuclear-deal-faces-skeptical-allies-congress\">Iran Nuclear Deal Skeptics</a></h3><p class=\"summary\">Sharp criticism from U.S. allies, Congress</p></li>  \n									 <li><p class=\"media\"><a href=\"http://www.foxnews.com/on-air/americas-news-hq/index.html#/v/2882961891001\"><img src=\"http://a57.foxnews.com/www.foxnews.com/ucat/images/root/60/60/Cfakepath60_shc_toys_20131202_100740.jpg\" class=\"unloaded_img\" dest_src=\"http://a57.foxnews.com/www.foxnews.com/ucat/images/root/60/60/Cfakepath60_shc_toys_20131202_100740.jpg\" height=\"60\" width=\"60\" alt=\"\" original=\"/images/clear.gif\" style=\"display: block; width: 60px; height: 60px;\"></a></p><p class=\"relation\">America's News HQ</p><h3><a href=\"http://www.foxnews.com/on-air/americas-news-hq/index.html#/v/2882961891001\">Trouble in Toyland</a></h3><p class=\"summary\">Hazardous toys for kids this holiday season</p></li>   </ul>\n\n						</div> <!-- /section gridded -->\n					</div><!-- /component tabbed-mod -->\n	\n					 </div> <!-- /section-9 -->\n\n				<div class=\"section-5\"><!-- new html comment -->\n\n\n				  <div class=\"component dont-miss\" data-vr-zone=\"dont-miss\">\n <ul class=\"list-ext-5\">\n						<div class=\"OUTBRAIN\" data-widget-type=\"hp\" data-fbk=\"foxHpDontMiss\" data-src=\"http://www.foxnews.com/\" data-widget-id=\"HOP_3\" data-ob-template=\"foxnews\" data-ob-mark=\"true\" data-dynload=\"\" id=\"outbrain_widget_5\"><div class=\"ob_strip_container HOP_3\">\n	<span class=\"ob_empty\"><wbr></span>\n<style type=\"text/css\">\n.voterDiv .ob_bctrl{display:none;}\n.ob_pdesc IMG{border:none;}\n.HOP_3 .ob_what{direction:ltr;text-align:right;clear:both;padding:5px 10px 0px;}\n.HOP_3 .ob_what a{color:#999;font-size:10px;font-family:arial;text-decoration: none;}\n.HOP_3 .ob_clear{clear:both;}\n.HOP_3 .ob_amelia{background:url('http://widgets.outbrain.com/images/widgetIcons/ob_logo_16x16.png') no-repeat center top;display:inline-block;width:16px;height:16px;vertical-align:text-bottom;margin-bottom:-2px;padding:0px 5px;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;}\n.HOP_3:hover .ob_amelia{background-position:center bottom;}\n	.HOP_3 .ob_container{width:100%;position:relative;overflow:hidden;}\n.HOP_3 .strip-img{width:156px;height:88px;border:none !important;margin:0px !important;display:block;padding:0px !important;}\n.HOP_3 .item-link-container{text-decoration:none;}\n.HOP_3 .strip-rec-link-title{font-size:13px;font-weight:normal;line-height:16px;}\n.HOP_3 .strip-rec-link-source{font-size:12px;line-height:16px}\n.HOP_3 .strip-like{padding-bottom:4px;font-size:14px;line-height:16px;height:20px;font-weight:bold;}\n.HOP_3 .item-container a,.HOP_3 .item-container a:hover,.HOP_3 .item-container a:visited{border:medium none;text-decoration:none;}\n.HOP_3 .ob_video{border:medium none;position:absolute;top:5px;left:5px}\n.HOP_3 .ob-rec-link-img{position:relative;}\n.HOP_3 .ob-rec-link-img{float:left;}\n.HOP_3 .ob-text-content{text-align:left;padding-left:161px;}\n.HOP_3 .item-container{position:relative;height:90px;padding-bottom:13px;width:100%;clear:both;}\n.HOP_3 .item-container A{display:inline;}\n.HOP_3 .item-container A.ob-text-content{display:block;}\n.HOP_3 .ob_container_shadow_outer{display:none;}\n.HOP_3 .item-container-ad .paid-distribution{text-decoration:none;border-color:#eee;border-style:solid;border-width:2px 2px 0 0;color:#fff;font-family:verdana,arial,sans-serif;font-size:9px;font-size-adjust:none;font-stretch:normal;font-style:normal;font-variant:normal;font-weight:normal;line-height:normal;padding:2px 4px; position:absolute; left:0;top:70px;z-index:10;}\n	</style>\n<style type=\"text/css\" class=\"ob-custom-css\">\n.OUTBRAIN .HOP_3 .ob_org_header h2 {\n    border-top: 2px solid #CCCCCC;\n    font-size: 13px;\n    font-weight: bold;\n    line-height: 1.3;\n    padding: 6px 0 12px;\n    text-transform: uppercase;\n}\n\n.OUTBRAIN .HOP_3 .strip-rec-link-title {display: inline;}\n\n.OUTBRAIN .HOP_3 .rec-src-link {display: none;}\n\n.OUTBRAIN .HOP_3 .strip-rec-link-title {\n    color: #183A52;\n    font-size: 14px;\n    font-weight: bold;\n}\n\n.OUTBRAIN .HOP_3 .ob_empty {display: none;}\n</style>\n\n\n	<span class=\"ob_org_header\">\n		<h2>DON'T MISS...</h2>\n	</span>\n\n	<div class=\"ob_container\">\n		<div class=\"ob_container_recs\">\n			";
  options = {hash:{},inverse:self.noop,fn:self.program(30, program30, data),data:data};
  if (stack2 = helpers.dontmiss) { stack2 = stack2.call(depth0, options); }
  else { stack2 = (depth0 && depth0.dontmiss); stack2 = typeof stack2 === functionType ? stack2.call(depth0, options) : stack2; }
  if (!helpers.dontmiss) { stack2 = blockHelperMissing.call(depth0, stack2, options); }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n		</div>\n\n			<div class=\"ob_container_shadow_outer\">\n    <div class=\"ob_container_shadow\">\n                                    <div class=\"item-container-shadow ob-recIdx-0   ob-odd\">\n    <div class=\"item-container ob-recIdx-0   \">\n        <div class=\"ob-rec-link-img ob-tcolor\">\n    <img style=\"\" onload=\"this.style.visibility=''\" width=\"156\" height=\"88\" title=\"Car Buying Exposed: A Salesman's Insider Tips to Saving Money and Sanity\" class=\"strip-img\" alt=\"Car Buying Exposed: A Salesman's Insider Tips to Saving Money and Sanity\" src=\"http://images.outbrain.com/imageserver/v2/s/7GLS/n/jsPRH/abc/csdcM/jsPRH-ebY-156x88.jpg\" onerror=\"outbrain.imageError(this)\">\n    </div>\n<div class=\"ob-text-content\">\n            <div class=\"strip-rec-link-title ob-tcolor\">Car Buying Exposed: A Salesman's Insider Tips to Saving Money and Sanity</div>\n        <span class=\"strip-rec-link-source ob-lcolor\">\n        <span class=\"ob_source\"> <span class=\"rec-src-link\">(Radio)</span></span>    </span>\n    </div>\n        </div>\n</div>                            <div class=\"item-container-shadow ob-recIdx-1  ob-even\">\n    <div class=\"item-container ob-recIdx-1    ob-last \">\n        <div class=\"ob-rec-link-img ob-tcolor\">\n    <img style=\"\" onload=\"this.style.visibility=''\" width=\"156\" height=\"88\" title=\"Positive trend for Japanese economy?\" class=\"strip-img\" alt=\"Positive trend for Japanese economy?\" src=\"http://images.outbrain.com/imageserver/v2/s/KynN/n/jisWk/abc/clNfx/jisWk-ebY-156x88.jpg\" onerror=\"outbrain.imageError(this)\">\n    	<div class=\"ob_video\">\n        </div>\n</div>\n<div class=\"ob-text-content\">\n            <div class=\"strip-rec-link-title ob-tcolor\">Positive trend for Japanese economy?</div>\n        <span class=\"strip-rec-link-source ob-lcolor\">\n            <span class=\"ob_txtual_Icon\">\n	<img class=\"textual-video-img\" src=\"http://www.foxnews.com/i/redes/icon-video.gif\" onerror=\"this.style.display=\\'none\\'\">\n</span>        <span class=\"ob_source\"> <span class=\"rec-src-link\">(Video - Economy)</span></span>    </span>\n    </div>\n        </div>\n</div>                        </div>\n</div>	</div>\n	</div></div> \n </ul>\n				</div>\n\n\n		<div class=\"component trending-descending\">\n	    <h2 class=\"title\"><a href=\"http://www.foxnews.com/trending/\">FOX NEWS NOW</a></h2>\n	    <div class=\"c-item c-item-first\">\n	        <div class=\"dv-list dv-list-2\">\n	            <ul class=\"dv-encap\">\n	            		";
  options = {hash:{},inverse:self.noop,fn:self.program(32, program32, data),data:data};
  stack2 = ((stack1 = helpers.foreach || (depth0 && depth0.foreach)),stack1 ? stack1.call(depth0, (depth0 && depth0.popular), options) : helperMissing.call(depth0, "foreach", (depth0 && depth0.popular), options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n	            </ul>\n	        </div>\n	    </div>\n\n\n\n    <div class=\"c-item c-item-last\">\n        <div class=\"c-foot\">\n            <div class=\"additional\"><a href=\"http://trending.foxnews.com\">See all trends</a><span>&nbsp;&#8250;</span></div>\n            <div class=\"ad dc\" id=\"trending-292x30\"></div>\n        </div>\n    </div>\n</div> <!-- /trending-descending -->\n  <div class=\"rrpollwidget\"><h2 class=\"title\">Question of the Day</h2><div class=\"poll-widget\"><div class=\"poll-item\"><div class=\"column1\"><p><span>Q:</span> Today is Cyber Monday, and retailers are promoting buying online. Do you feel safe making online purchases?</p><form action=\"\"><div><input type=\"radio\" name=\"Option4082893\" value=\"10130571\"><span>Yes</span></div><div><input type=\"radio\" name=\"Option4082893\" value=\"10130573\"><span>No</span></div><div><input type=\"radio\" name=\"Option4082893\" value=\"10130575\"><span>I'm not sure</span></div><input type=\"submit\" class=\"btn g\" value=\"Vote\" name=\"vote\"></form><div class=\"percentage-bars\"></div></div><div class=\"column2\"><a href=\"http://nation.foxnews.com/poll/index.html\">See All Questions <span>&#8250;</span></a>​<ul style=\"display:none;\"><li><a href=\"http://nation.foxnews.com/poll/2013/12/02/today-is-cyber-monday-and-retailers-are-promoting-buying-online-do-feel-safe/\"><img src=\"//global.fncstatic.com/static/v/all/img/right-rail-widget1.gif\">Full Details</a></li><li><a href=\"http://nation.foxnews.com/poll/2013/12/02/today-is-cyber-monday-and-retailers-are-promoting-buying-online-do-feel-safe/\"><img src=\"//global.fncstatic.com/static/v/all/img/right-rail-widget2.gif\">Discuss</a></li><li><a href=\"http://nation.foxnews.com/poll/2013/12/02/today-is-cyber-monday-and-retailers-are-promoting-buying-online-do-feel-safe/\"><img src=\"//global.fncstatic.com/static/v/all/img/right-rail-widget3.gif\">View Map</a></li></ul></div></div></div></div>  <div id=\"local-news\" class=\"component local-news\">\n			    	<h2 class=\"title\">Regional News<span class=\"local-news-zipcode-display\">&nbsp;(NY)</span></h2>\n			    	<form action=\"#\" method=\"get\">\n			          	<fieldset>\n			               <div style=\"display: none;\">\n			                    <input type=\"text\" value=\"Enter Zip Code\" name=\"zip\" id=\"weather_widgetInput\" maxlength=\"5\">\n			                    <input type=\"submit\" value=\"Save\" class=\"btn-smll\" name=\"submit\">\n			               </div>\n			               <div class=\"region\" style=\"display: block;\">\n			                    <a href=\"#\" class=\"close\">Close</a>\n			                    <label>New York, NY</label>\n			               </div>\n			          	</fieldset>\n			     	</form>\n			    	<div class=\"item-unit\"><ul class=\"list-obj\">\n			    	";
  options = {hash:{},inverse:self.noop,fn:self.program(37, program37, data),data:data};
  if (stack2 = helpers.regional) { stack2 = stack2.call(depth0, options); }
  else { stack2 = (depth0 && depth0.regional); stack2 = typeof stack2 === functionType ? stack2.call(depth0, options) : stack2; }
  if (!helpers.regional) { stack2 = blockHelperMissing.call(depth0, stack2, options); }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n</ul></div>\n			    </div> <!-- /local-news -->\n\n				\n\n\n\n\n                     <div class=\"component blogs-mod\">\n<h2 class=\"title\">Blogs</h2>\n<div class=\"section section-first\">\n<ul class=\"list-ext-4\">\n<li class=\"first\">\n  <p class=\"relation\"><a href=\"http://gretawire.foxnewsinsider.com/\">Gretawire</a></p>\n  <h3><a href=\"http://gretawire.foxnewsinsider.com/2013/12/02/what-did-you-think-of-my-off-the-record-commentary-tonight-20/\">What did you think of my OFF THE RECORD commentary tonight?</a></h3>\n</li>\n<li>\n  <p class=\"relation\"><a href=\"http://weather.blogs.foxnews.com/\">Janice Dean's Weather</a></p>\n  <h3><a href=\"http://weather.blogs.foxnews.com/2013/12/02/a-new-storm-hits-the-northwest-and-freddy-hits-the-upper-west-side/\">A new storm hits the Northwest...and Freddy hits the Upper West Side!</a></h3>\n</li>\n<li>\n  <p class=\"relation\"><a href=\"http://www.foxnews.com/on-air/happening-now/blog\">Happening Now</a></p>\n  <h3><a href=\"http://www.foxnews.com/on-air/happening-now/blog/2013/12/02/monday-december-2-2013-happening-now-cyber-monday-healthcaregov-all-better-train-ax-\">Monday December 2, 2013 Happening Now - Cyber Monday; Healthcare.gov All Better?; Train Ax Aftermath</a></h3>\n</li>\n<li>\n  <p class=\"relation\"><a href=\"http://www.foxbusiness.com/on-air/willis-report/blog\">Gerri Willis</a></p>\n  <h3><a href=\"http://www.foxbusiness.com/on-air/willis-report/blog/2013/11/27/avoid-holiday-shopping-hangover\">Avoid the Holiday Shopping Hangover</a></h3>\n</li>\n</ul>\n</div>\n</div>\n\n					\n					<div class=\"ads\">\n						<div class=\"ad dc\" id=\"frame2-300x100\">\n							<script type=\"text/javascript\">\n							 </script>						\n						</div>\n						<span>ADVERTISEMENT</span>\n					</div>\n					\n					\n					<div id=\"newsAlertsEmailSignup\" class=\"component option-int\">\n					<h2 class=\"title\">Connect With Fox News</h2>\n					\n					\n					<h3><img class=\"unloaded_img\" dest_src=\"i/redes/icon-envelope.gif\" alt=\"envelope\" original=\"/images/clear.gif\" style=\"display: inline; width: 60px; height: 38px;\" src=\"i/redes/icon-envelope.gif\"> Get Free Breaking News Alerts!</h3>\n					<form action=\"#\" method=\"get\">\n					\n					<fieldset>\n					<legend>News Alerts</legend>\n					\n					<div class=\"option\">\n					<input type=\"checkbox\" value=\"\" name=\"propID_terms\" id=\"BreakingNews\">\n					<label>Breaking News Alerts</label>\n					\n					</div>\n					\n					<div class=\"option\">\n					<input type=\"checkbox\" value=\"\" name=\"propID_terms\" id=\"BusinessNews\">\n					<label>Business News Alerts</label>\n					</div>\n					\n					<div class=\"option\">\n					<input type=\"checkbox\" value=\"\" name=\"propID_terms\" id=\"GretaWire\">\n					\n					<label>GretaWire</label>\n					</div>\n					\n					<div class=\"option\">\n					<input type=\"checkbox\" value=\"\" name=\"propID_terms\" id=\"DailyNewsletter\">\n					<label>FOX Fan Daily Scoop</label>\n					</div>\n					\n					<div class=\"option\">\n					<input type=\"checkbox\" value=\"\" name=\"propID_terms\" id=\"TopHeadlines\">\n					<label>Today's Top Headlines</label>\n					</div>\n\n					<div class=\"option\">\n					<input type=\"checkbox\" value=\"\" name=\"propID_terms\" id=\"Fox411\">\n					<label>FOX 411</label>\n					</div>\n\n					<div class=\"option\">\n					<input type=\"checkbox\" value=\"\" name=\"propID_terms\" id=\"BestOfOpinion\">\n					<label>Best of Opinion</label>\n					</div>\n					\n					<div class=\"option\">\n					<input type=\"checkbox\" value=\"\" name=\"propID_terms\" id=\"SciTechGeekSheet\">\n					<label>SciTech Geek Sheet</label>\n					</div>\n\n					<div>\n					<input type=\"text\" name=\"email\" value=\"Enter Your Email Address:\">\n					<input type=\"submit\" name=\"submit\" class=\"btn-smll\" value=\"Sign Up\">\n					</div>\n										\n					<div class=\"status\" style=\"display: block; opacity: 0;\">\n					<h2>Invalid email address.</h2>\n					<p class=\"try-again\">Please <a href=\"#\">click here</a> to try again.</p>\n					</div>\n					\n					</fieldset>\n					</form>\n					</div><!-- /option-int --> 				\n									</div><!-- /section-5 -->\n				\n";
  return buffer;
  });
})();