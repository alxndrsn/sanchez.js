sanchez = (function() {
	var template, reg, replaceContent;
	reg = function(k) { return new RegExp("((%7B%7B)|(\\{\\{))" + k + "((%7D%7D)|(\\}\\}))", "g"); };
	template = function(name, replacements) {
		var k, raw;
		raw = $("#" + name).html();
		for(k in replacements) {
			raw = raw.replace(reg(k), replacements[k]);
		}
		return raw;
	}
	replaceContent = function(targetSelecter, name, replacement) {
		$(targetSelecter).html(template(name, replacement));
	};
	return { template:template, replaceContent:replaceContent };
}());

