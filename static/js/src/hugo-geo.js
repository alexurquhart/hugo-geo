$(document).ready(() => {
    if (hljs) {
        $('pre code').each(function(i, block) {
            hljs.highlightBlock(block);
        });
    }
});