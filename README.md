### Description

A simple module that provides the same error handling for the admin area as for checkout.
This module is built on top of Magento_Ui message handlers (literally, Ctrl + C and Ctrl + V).
When using it, you need to remember that to display error messages, you need to emulate the 
application bindings, like you do for checkout. The admin side rarely has this, so your parent component 
or the message component itself should call something like this after all the messages have been added:

```js
// for parent
 $(this.parentContainer).applyBindings();

// or
$(this.messageContainer).applyBindings();

// note: messageContainer and parentContainer are usually CSS classes
 ```

Without recalling `applyBindings` methods messages won`t be rendered.


### Installation

run this command:
```shell
composer require sandftae/module-backend-ui-messages
```