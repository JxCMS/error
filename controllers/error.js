/**
 * error controller
 */

/**
 * Dependencies
 */

var Controller_Main = require('controller').Controller_Main,
    Promise = require('promise').Promise;


(function(){

    var Controller = exports.Controller = new Class({

        Extends: Controller_Main,

        '404_action': function(request, response) {
            var promise = new Promise();

            core.log('In 404_action() of error controller');
            //response.setStatus(404);

            core.debug('request has session in 404_action', !nil(request.session));
            core.debug('response has session in 404_action', !nil(response.session));

            promise.resolve('true');
            return promise;
        }

    });

    exports.routes = [
        //name, 'method regex', regex match keys, controller object, key defaults
        ['error','GET \\/error\\/(\\w+)', ['action'], new Controller(),{action: 'e404'}]
    ]

})();