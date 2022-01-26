import message from '@euriklis/message';
const testAllMethods = () => {
    // test the red color for the text
    new message().set_color_red().append('this color has to be red.').reset().log();
    // test the red background color:
    new message().set_bgColor_red().set_color_black().append('The background color of this message has to be red.').reset().log();
    // test the green color:
    new message().set_color_green().append('The color of this message has to be green').reset().log();
    // test the green background color:
    new message().set_bgColor_green().set_color_black()
        .append('The background of this message has to be green').reset().log();
    // test the blue color:
    new message().set_color_blue().append('This message has to be with blue color').reset().log();
    // test the blue background color:
    new message().set_bgColor_blue().set_color_black()
        .append('The background of this message has to be blue.').reset().log();
    // test the cyan color:
    new message().set_color_cyan().append('the color of this message has to be cyanite').reset().log();
    // test the cyan background color:
    new message().set_bgColor_cyan().set_color_black()
        .append('The background color of this message has to be cyanite.').reset().log();
    // test the yellow color:
    new message().set_color_yellow().append('This message has to be in yellow text color.').reset().log();
    // test the yellow background color:
    new message().set_bgColor_yellow().set_color_black()
        .append('The background of this message has to be yellow.').reset().log();
    // test the violet color:
    new message().set_color_violet().append('This message has to be in violet color.').reset().log();
    // test the violet background color:
    new message().set_bgColor_violet().set_color_black()
        .append('This message has to be with violet background color.').reset().log();
    // test the grey color:
    new message().set_color_grey().append('This message has to be with grey color.').reset().log();
    // test the grey background:
    new message().set_bgColor_grey().set_color_black()
        .append('This message has to be with grey background color.').reset().log();
    // test the black background:
    new message().set_bgColor_black().set_color_red()
        .append('This message has to be with black background color.').reset().log();
    // test the italic style:
    new message()
        .set_color_blue().italic()
        .append('This text has to be italic').reset().log();
    // test the bold property:
    new message().bold().set_color_blue()
        .append('This message has to be with bold style.').reset().log();
    // test the underline method:
    new message().set_color_blue().underline()
        .append('This message has to be underlined.').reset().log();
    // type a check mark prepend:
    new message().set_color_green()
        .append(' This message has to be with a check mark symbol in the beginning of the text...')
        .prepend_check_mark().reset().log();
    // type a check mark append.
    new message().set_color_green()
        .append('This message has to contain a check mark in the end ')
        .bold().italic().append_check_mark().reset().log();
    // test not check mark:
    new message().set_color_blue().append('This is the not check symbol ')
        .append_not_check_mark().reset().log();
    new message().set_color_blue().append('This is the symbol of copyright - ')
        .append_copyright_symbol().reset().log();
    new message().set_color_blue().append(' This message contains the copyright symbol in the beginning.')
        .prepend_copyright_symbol().reset().log();
    new message().set_color_blue().append('This is the symbol of the registration - ')
        .append_registered_symbol().reset().log();
    new message().set_color_blue().append(' This message contains the registered symbol in the beginning.')
        .prepend_registered_symbol().reset().log();
    new message().set_color_blue().append('This is the bitcoin symbol: ')
        .append_bitcoin_symbol().reset().log();
    new message().set_color_blue().append(' This message contains the bitcoin symbol in the beginning.')
        .prepend_bitcoin_symbol().reset().log();
    new message().set_color_blue().append('This is the euro symbol - ')
        .append_euro_symbol().reset().log();
    new message().set_color_blue().append(' This message contains the euro symbol in the beginning.')
        .prepend_euro_symbol().reset().log();
    new message().set_color_blue().append('This is the corona virus symbol: ')
        .append_corona_virus_symbol().reset().log();
    new message().set_color_blue().append(' This message contains the corona virus symbol in the beginning.')
        .prepend_corona_virus_symbol().reset().log();
    new message().set_color_blue().append('This is the warning symbol - ')
        .append_warning_sign().reset().log();
    new message().set_color_blue().append(' This message contains the warning sign in the beginning.')
        .prepend_warning_sign().reset().log();
    new message().set_color_blue().append('This is the heart symbol').append_heart_symbol()
        .reset().log();
    new message().set_color_blue().append(' This message contains the heart symbol in the beginning.')
        .prepend_heart_symbol().reset().log();
    new message().set_color_blue().append('This is the heavy check mark symbol')
        .append_heavy_check_mark().reset().log();
    new message().set_color_blue().append(' This message begins with the heavy check mark symbol')
        .prepend_heavy_check_mark().reset().log();
    new message().set_color_blue().append('This is the keyboard symbol - ')
        .append_keyboard_symbol().reset().log();
    new message().set_color_blue().append(' This message begins with the keyboard symbol.')
        .prepend_keyboard_symbol().reset().log();
    new message().set_color_blue().append('This is the hourglass symbol')
        .append_hourglass_symbol().reset().log();
    new message().set_color_blue().append(' This message begins with the hourglass symbol.')
        .prepend_hourglass_symbol().reset().log();
    new message().set_color_blue().append('This is the question mark ornament - ')
        .append_question_mark_ornament().reset().log();
    new message().set_color_blue().append(' This message begins with the question mark ornament.')
        .prepend_question_mark_ornament().reset().log();
    new message().set_color_blue().append('This is the rose symbol - ')
        .append_rose_symbol().reset().log();
    new message().set_color_blue().append(' This message begins with the rose symbol.')
        .prepend_rose_symbol().reset().log();
    new message().set_color_blue().append('This is the ballot box symbol - ')
        .append_ballot_box_with_check_mark().reset().log();
    new message().set_color_blue().append(' This message begins with the ballot check mark.')
        .prepend_ballot_box_with_check_mark().reset().log();
    new message().set_color_blue().append('This is the medical mask symbol - ')
        .append_face_with_medical_mask_symbol().reset().log();
    new message().set_color_blue().append(' This message begins with the medical mask symbol.')
        .prepend_face_with_medical_mask_symbol().reset().log();
    new message().set_color_blue().append('This is the potable water symbol - ')
        .append_potable_water_symbol().reset().log();
    new message().set_color_blue().append(' This message begins with the potable water symbol.')
        .prepend_potable_water_symbol().reset().log();
    new message().set_color_blue().append('This is the ambulance symbol - ')
        .append_ambulance_symbol().reset().log();
    new message().set_color_blue().append('This message begins with the ambulance symbol.')
        .prepend_ambulance_symbol().reset().log();
    new message().set_color_blue().append('This is the mathematical partial differential symbol - ')
        .append_math_partial_differential().reset().log()
    new message().set_color_blue().append(' This message begins with the partial differential symbol.')
        .prepend_math_partial_differential().reset().log();
    new message().set_color_blue().append('This is the mathematical integral symbol - ')
        .append_math_integral_symbol().reset().log();
    new message().set_color_blue().append(' This message begins with the integral symbol.')
        .prepend_math_integral_symbol().reset().log();
    new message().set_color_blue().append('This is the mathematical double integral symbol - ')
        .append_math_double_integral_symbol().reset().log();
    new message().set_color_blue().append('This message begins with the double integral symbol.')
        .prepend_math_double_integral_symbol().reset().log();
    new message().set_color_blue().append('This is the square root symbol - ')
        .append_math_sqrt_symbol().reset().log();
    new message().set_color_blue().append(' This message starts with the square root symbol.')
        .prepend_math_sqrt_symbol().reset().log();
    new message().set_color_blue().append('This is the cubic root symbol ')
        .append_math_cube_root_symbol().reset().log();
    new message().set_color_blue().append(' This message begins with the cubic root math symbol.')
        .prepend_math_cube_root_symbol().reset().log();
    new message().set_color_blue().append('This is the forth root math symbol - ')
        .append_math_forth_root_symbol().reset().log();
    new message().set_color_blue().append(' This message begins with the forth root math symbol.')
        .prepend_math_forth_root_symbol().reset().log();
    new message().set_color_blue().append('This is the symbol of the natural numbers - ')
        .append_math_natural_numbers_symbol().reset().log();
    new message().set_color_blue().append(' This message begins with the natural numbers symbol.')
        .prepend_math_natural_numbers_symbol().reset().log();
}
const runAllMethodTests = new Promise((resolve, reject) => {
    try {
        resolve(testAllMethods());
    } catch (error) {
        reject(console.log(error.stack));
    }
});
export default runAllMethodTests;