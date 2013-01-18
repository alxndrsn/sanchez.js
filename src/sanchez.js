sanchez = (function() {
	var
	R = RegExp,
	ESCAPE_PERIODS = new R("\\.", "g"),
	jq = function(methodName, targetSelecter, templateName, replacement) {
		$(targetSelecter)[methodName](template(templateName, replacement));
	},
	reg = function(k) { return new R("((%7B%7B)|(\\{\\{))" + k.replace(ESCAPE_PERIODS, "\\.") + "((%7D%7D)|(\\}\\}))", "g"); },
	process = function(raw, key, value) {
		if(typeof(value) === "object") {
			return processObject(raw, key, value);
		}
		return raw.replace(reg(key), value);
	},
	processObject = function(raw, key, value) {
		var k;
		for(k in value) {
			raw = process(raw, key? key + "." + k: k, value[k]);
		}
		return raw;
	},
	template = function(templateName, replacements) {
		return process($("#" + templateName).html(), "", replacements);
	};
	return {
		template:template,
		append:function(a,b,c) { jq("append", a, b, c); },
		prepend:function(a,b,c) { jq("prepend", a, b, c); },
		replace:function(a,b,c) { jq("replaceWith", a, b, c); },
		replaceContent:function(a,b,c) { jq("html", a, b, c); }
	};
}());

