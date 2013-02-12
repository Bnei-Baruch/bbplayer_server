Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var stack1, escapeExpression=this.escapeExpression;


  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],data:data});
  data.buffer.push(escapeExpression(stack1));
});

Ember.TEMPLATES["channel"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, foundHelper;
  data.buffer.push("\n  ");
  foundHelper = helpers.render;
  stack1 = foundHelper ? foundHelper.call(depth0, "player", {hash:{},contexts:[depth0],data:data}) : helperMissing.call(depth0, "render", "player", {hash:{},contexts:[depth0],data:data});
  data.buffer.push(escapeExpression(stack1) + "\n");
  return buffer;}

function program3(depth0,data) {
  
  var buffer = '', stack1, foundHelper;
  data.buffer.push("\n  ");
  foundHelper = helpers.render;
  stack1 = foundHelper ? foundHelper.call(depth0, "slide", {hash:{},contexts:[depth0],data:data}) : helperMissing.call(depth0, "render", "slide", {hash:{},contexts:[depth0],data:data});
  data.buffer.push(escapeExpression(stack1) + "\n");
  return buffer;}

  data.buffer.push("version: ");
  stack1 = helpers._triageMustache.call(depth0, "version", {hash:{},contexts:[depth0],data:data});
  data.buffer.push(escapeExpression(stack1) + "<br/>\n\n\n");
  stack1 = helpers['if'].call(depth0, "readyToRenderPlayer", {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
});

Ember.TEMPLATES["player"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n  ");
  stack1 = helpers._triageMustache.call(depth0, "url", {hash:{},contexts:[depth0],data:data});
  data.buffer.push(escapeExpression(stack1) + "\n  ");
  stack1 = helpers.view.call(depth0, "BbPlayer.PlayerWrapperView", {hash:{},contexts:[depth0],data:data});
  data.buffer.push(escapeExpression(stack1) + "\n");
  return buffer;}

  stack1 = helpers['with'].call(depth0, "currentStream", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
});

Ember.TEMPLATES["slide"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression;


  data.buffer.push("browser: ");
  stack1 = helpers._triageMustache.call(depth0, "BbPlayer.BrowserDetect.browser", {hash:{},contexts:[depth0],data:data});
  data.buffer.push(escapeExpression(stack1) + "<br/>\nbrowser-Version: ");
  stack1 = helpers._triageMustache.call(depth0, "BbPlayer.BrowserDetect.browserVersion", {hash:{},contexts:[depth0],data:data});
  data.buffer.push(escapeExpression(stack1) + "<br/>\nOS: ");
  stack1 = helpers._triageMustache.call(depth0, "BbPlayer.BrowserDetect.os", {hash:{},contexts:[depth0],data:data});
  data.buffer.push(escapeExpression(stack1) + "<br/>\nOS-Version: ");
  stack1 = helpers._triageMustache.call(depth0, "BbPlayer.BrowserDetect.osVersion", {hash:{},contexts:[depth0],data:data});
  data.buffer.push(escapeExpression(stack1) + "<br/>\n<br/>\n<strong>We are inside the slide!!!</strong>\n<br/>\n<br/>");
  return buffer;
});