/**
 * error controller
 */

/**
 * Dependencies
 */

var Controller_Main = require('../../../system/controller').Controller_Main,
    Settings = require('../../../system/settings').Settings,
    Promise = require('promise').Promise,
    Response = require('../../../system/response').Response;


(function(){

    var Controller = exports.Controller = new (new  Class({

        Extends: Controller_Main,

        '404_action': function(request, response) {
            var promise = new Promise();
            
            response.setStatus(Response.Codes.notFound);
            var s = new Settings();
            s.find('error.layout', request, 'base', true).then(function(result){
                response.view.set('layout',result);
                promise.resolve('true');
            });
            return promise;
        }

    }))();

    exports.routes = [
        //name, 'method regex', regex match keys, controller object, key defaults
        ['error','GET \\/error\\/(\\w+)', ['action'], Controller,{action: 'e404'}]
    ];
    
})();