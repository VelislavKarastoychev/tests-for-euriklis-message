'use strict';
import message from '@euriklis/message';
import validator from '@euriklis/validator';
const error_message = (errMsg) => new message().set_color_red().append_not_check_mark()
.append_white_space().set_color_blue().append(errMsg).log(); 
const success_message = (msg) => new message().set_color_green().append_check_mark()
.append_white_space().set_color_cyan().append(msg).log();
const testMessageStart = new Promise((resolve, reject) => {
    const text = 'Hello from @euriklis/message';
    const message_text = new message().append(text).text;
    new validator(text).is_same(message_text)
        .on(true, () => resolve(success_message('Successfully tested @euriklis/message initialization.')))
        .on(false, () => reject(error_message('Inconsistent results in the @euriklis/message initialization')));
});
export default testMessageStart;
