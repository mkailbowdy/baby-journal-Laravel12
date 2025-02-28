import alpine from 'alpinejs';
import hljs from 'highlight.js/lib/core';
import php from 'highlight.js/lib/languages/php';
import tippy from 'tippy.js';

alpine.start();

hljs.registerLanguage('php', php);

window.hljs = hljs;

hljs.highlightElement(document.querySelector('.default-highlightable-code'));

document.querySelectorAll('.highlightable-code').forEach((block) => {
    if (block.dataset.highlighted !== 'yes') {
        hljs.highlightElement(block);
    }
});

tippy('[data-tippy-content]', {
    trigger: 'click',
    arrow: true,
    theme: 'material',
    animation: 'scale',
});
