/**
 * @api
 */
define([
    'ko',
    'jquery',
    'uiComponent',
    '../model/messageList',
    'jquery-ui-modules/effect-blind'
], function (ko, $, Component, globalMessages) {
    'use strict';

    return Component.extend({
        defaults: {
            template: 'Sandftae_BackendUiMessages/messages',
            selector: '[data-role=backend-messages]',
            isHidden: false,
            hideTimeout: 5000,
            hideSpeed: 500,
            listens: {
                isHidden: 'onHiddenChange'
            }
        },

        /** @inheritdoc */
        initialize: function (config, messageContainer) {
            this._super()
                .initObservable();
            this.messageContainer = messageContainer || config.messageContainer || globalMessages;
            return this;
        },

        /** @inheritdoc */
        initObservable: function () {
            this._super()
                .observe('isHidden');

            return this;
        },

        /**
         * Checks visibility
         *
         * @return {Boolean}
         */
        isVisible: function () {
            return this.isHidden(this.messageContainer.hasMessages());
        },

        /**
         * Remove all messages
         */
        removeAll: function () {
            this.messageContainer.clear();
        },

        /**
         * Action on changing of listen property
         *
         * @param {Boolean} isHidden
         */
        onHiddenChange: function (isHidden) {
            if (isHidden) {
                setTimeout(function () {
                    $(this.selector).hide('slow');
                }.bind(this), this.hideTimeout);
            }
        }
    });
});
