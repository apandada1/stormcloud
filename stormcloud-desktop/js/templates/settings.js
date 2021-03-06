(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['settings.template'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <li data-code=\"";
  stack1 = depth0.zip;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "\"><span class=\"name\">";
  stack1 = depth0.place;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "</span><span class=\"delete\">&#10005;</span></li>\n            ";
  return buffer;}

function program3(depth0,data) {
  
  
  return "\n          <span data-color=\"FF8E83\"></span>\n          ";}

function program5(depth0,data) {
  
  
  return "\n          <input type=\"checkbox\" id=\"desktopswitch\" checked>\n      ";}

function program7(depth0,data) {
  
  
  return "\n          <input type=\"checkbox\" id=\"desktopswitch\">\n      ";}

function program9(depth0,data) {
  
  
  return "\n          <input type=\"checkbox\" id=\"countswitch\" checked>\n      ";}

function program11(depth0,data) {
  
  
  return "\n          <input type=\"checkbox\" id=\"countswitch\">\n      ";}

function program13(depth0,data) {
  
  
  return "\n          <input type=\"checkbox\" id=\"averageswitch\" checked>\n      ";}

function program15(depth0,data) {
  
  
  return "\n          <input type=\"checkbox\" id=\"averageswitch\">\n      ";}

function program17(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\n<div id=\"proAdvert\">\n  <p>Support the development of Stormcloud and unlock extra features with a pro upgrade.</p>\n  <a class=\"btn pro\" href=\"#\">";
  foundHelper = helpers.proText;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.proText; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</a><br>\n</div>\n";
  return buffer;}

  buffer += "<div id=\"accordion\">\n  <h3>";
  foundHelper = helpers.locationsText;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.locationsText; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</h3>\n  <div>\n    <div class=\"content\">\n      <div class=\"locationSettings\">\n        <ul>\n            ";
  stack1 = depth0.location;
  stack1 = helpers.each.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            <li class=\"placeInput\"><input placeholder=\"";
  foundHelper = helpers.locationText;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.locationText; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\" type=\"text\"><span class=\"status\"></span></li>\n        </ul>\n      </div>\n    </div>\n  </div>\n  <h3>";
  foundHelper = helpers.appearanceText;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.appearanceText; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</h3>\n  <div>\n    <div class=\"content\">\n      <div class=\"toggleswitch measurement\">\n        ";
  foundHelper = helpers.measurement;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.measurement; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </div>\n      <div class=\"toggleswitch speed\">\n          ";
  foundHelper = helpers.speed;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.speed; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </div>\n      <div class=\"color boxes\">\n          <span data-color=\"gradient\"></span>\n          <span data-color=\"A200FF\"></span>\n          <span data-color=\"FF0097\"></span>\n          <span data-color=\"00ABA9\"></span>\n          <span data-color=\"8CBF26\"></span>\n          <span data-color=\"A05000\"></span>\n          <span data-color=\"333333\"></span>\n          <span data-color=\"F09609\"></span>\n          <span data-color=\"1BA1E2\"></span>\n          ";
  stack1 = depth0.proButton;
  stack1 = helpers.unless.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(3, program3, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          <span data-color=\"339933\"></span>\n      </div>\n      <label class=\"color\">Adjust background based on:</label>\n      <div class=\"toggleswitch color\">\n        ";
  foundHelper = helpers.gradient;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.gradient; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </div>\n      <select class=\"font\">\n        <option value=\"ubuntufont\">Ubuntu</option>\n        <option value=\"lato\">Lato</option>\n        <option value=\"bitter\">Bitter</option>\n        <option value=\"titillium\">Titillium Web</option>\n        <option value=\"cantarell\">Cantarell</option>\n        <option value=\"roboto\">Roboto</option>\n      </select>\n    </div>\n  </div>\n  <h3>";
  foundHelper = helpers.otherText;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.otherText; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</h3>\n  <div>\n    <div class=\"content\">\n        <div class=\"launcher\" data-boop=\"";
  foundHelper = helpers.launcher;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.launcher; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\">\n      ";
  stack1 = depth0.desktop;
  stack1 = helpers['if'].call(depth0, stack1, {hash:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          <label for=\"desktopswitch\">";
  foundHelper = helpers.charmText;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.charmText; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</label>\n      </div>\n      ";
  stack1 = depth0.count;
  stack1 = helpers['if'].call(depth0, stack1, {hash:{},inverse:self.program(11, program11, data),fn:self.program(9, program9, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      <label for=\"countswitch\">";
  foundHelper = helpers.countText;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.countText; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</label><br>\n      ";
  stack1 = depth0.average;
  stack1 = helpers['if'].call(depth0, stack1, {hash:{},inverse:self.program(15, program15, data),fn:self.program(13, program13, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      <label for=\"averageswitch\">";
  foundHelper = helpers.averageText;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.averageText; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</label>\n      <a class=\"btn website\" href=\"http://getstormcloud.com\" target=\"_blank\">";
  foundHelper = helpers.websiteText;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.websiteText; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</a> <a class=\"btn credits\" href=\"#\">";
  foundHelper = helpers.creditsText;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.creditsText; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</a><br>\n    </div>\n  </div>\n</div>\n";
  stack1 = depth0.proButton;
  stack1 = helpers['if'].call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(17, program17, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;});
})();