$(document).ready(() => {
    if (typeof hljs !== 'undefined') {
        $('pre code').each(function(i, block) {
            hljs.highlightBlock(block);
        });
    }
});