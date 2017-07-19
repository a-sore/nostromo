// TODO use typedefs

exports.UPSTREAM = {
    // { type, selector, [warning] }
    SELECTOR_BECAME_VISIBLE: 'selector-became-visible',

    // { type, event: { type, selector, target, ... } }
    CAPTURED_EVENT: 'captured-event',

    // general acknowledgement { type, result }
    ACK: 'ack',

    // general failure { type, error }
    NAK: 'nak',

    // insert screenshot assert
    INSERT_SCREENSHOT_ASSERT: 'insert-screenshot-assert',
};

exports.DOWNSTREAM = {
    // { type, execId, command: { type, ... } }
    EXEC_COMMAND: 'exec-command',

    // { type, ??? }
    EXEC_FUNCTION: 'exec-function',

    // { type, selectors }
    SET_SELECTOR_BECAME_VISIBLE_DATA: 'set-selector-became-visible-data',

    // TODO use SET_*
    // { type }
    SHOW_SCREENSHOT_MARKER: 'show-screenshot-marker',
    HIDE_SCREENSHOT_MARKER: 'hide-screenshot-marker',

    // { type, value }
    SET_TRANSMIT_EVENTS: 'set-transmit-events',
};