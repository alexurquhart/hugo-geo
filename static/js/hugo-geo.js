'use strict';

$(document).ready(function () {
    if (typeof hljs !== 'undefined') {
        $('pre code').each(function (i, block) {
            hljs.highlightBlock(block);
        });
    }

    // Change all href links that go out of the origin to open in a new window
    // Relative links that start with /, #, or . (ie /post/my-post or ../post/my-post or #test)
    // should be untouched
    $("a").each(function (i, el) {
        var href = $(el).attr("href");

        if (typeof href === "string" && href.indexOf(window.location.origin) === -1 && "/.#".indexOf(href[0]) === -1) {
            $(el).attr("target", "_blank");
        }
    });
});
//# sourceMappingURL=hugo-geo.js.map
