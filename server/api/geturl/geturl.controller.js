/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/geturls              ->  index
 */

'use strict';

var request = require('request');
var htmlparser = require("htmlparser2");

module.exports.getHtmlByUrl = function (req, res) {
    request(req.query.url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var videoInfo = {
                posterUrl: "",
                videoUrl: ""
            };
            var parser = new htmlparser.Parser({
                onopentag: function (name, attribs) {
                    if (name === "video" && attribs.id === "video-stream") {
                        videoInfo["posterUrl"] = attribs.poster;
                    }
                    if (name === "source" && attribs.type === "video/mp4") {
                        videoInfo["videoUrl"] = attribs.src;
                    }
                }
            }, {
                decodeEntities: true
            });
            parser.write(body);
            parser.end();

            if (videoInfo.videoUrl) {
                res.json(videoInfo);
            } else {
                res.status(500).json({
                    error: 'No video content!'
                });
            }
        }
    })
}