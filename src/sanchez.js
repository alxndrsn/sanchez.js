module.exports = sanchez = (function() {
	var
	jq = function(methodName, targetSelecter, templateName, replacement) {
		$(targetSelecter)[methodName](template(templateName, replacement));
	},
	reg = function(k) { return new RegExp("((%7B%7B)|(\\{\\{))" + k + "((%7D%7D)|(\\}\\}))", "g"); },
	/** args: k is `templateName` until reuse */
	template = function(k, replacements) {
		var raw = $("#" + k).html();
		for(k in replacements) {
			raw = raw.replace(reg(k), replacements[k]);
		}
		return raw;
	};
	return {
		template:template,
		append:function(a,b,c) { jq("append", a, b, c); },
		prepend:function(a,b,c) { jq("prepend", a, b, c); },
		replace:function(a,b,c) { jq("replaceWith", a, b, c); },
		replaceContent:function(a,b,c) { jq("html", a, b, c); }
	};
}());

