'use strict';

$(document).ready(function () {
    if (typeof hljs !== 'undefined') {
        $('pre code').each(function (i, block) {
            hljs.highlightBlock(block);
        });
    }
});
//# sourceMappingURL=hugo-geo.js.map
