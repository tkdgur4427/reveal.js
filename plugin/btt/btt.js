fetch('/plugin/btt/btt.html')
    .then(response=>response.text())
    .then((text) =>
    {
        var template = document.querySelector('.reveal').innerText;
        var bindTemplate = Handlebars.compile(template);
        var data = {
            "content": text
        };
        var resultHtml = bindTemplate(data);
        var reveal = document.querySelector('.reveal');
        reveal.innerHTML = resultHtml

        // init reveal after we finished loading btt.html
		// - https://revealjs.com/initialization/
		// - https://revealjs.com/config/
		Reveal.initialize({
			hash: true,
			// Learn about plugins: https://revealjs.com/plugins/
			plugins: [ RevealMarkdown, RevealHighlight, RevealNotes ]
		});
    });
