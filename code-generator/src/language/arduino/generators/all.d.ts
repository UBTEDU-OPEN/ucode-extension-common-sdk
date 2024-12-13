import { ControlGeneratorKeys } from './control';
import { DataGeneratorKeys } from './data';
import { MathGeneratorKeys } from './math';
import { OperatorGeneratorKeys } from './operators';
import { TextGeneratorKeys } from './text';
import { CustomFieldGeneratorKeys } from './custom-fields';
import { ProcedureGeneratorKeys } from './procedure';
import { ArduinoStartGeneratorKeys } from './start';
export * from './control';
export * from './data';
export * from './math';
export * from './operators';
export * from './text';
export * from './custom-fields';
export * from './start';
export declare const ArduinoCommonGenerators: {
    common_block_arduino_setup: import("@ubt/ucode-common-types").GeneratorDefinition.BlockGenerator;
    common_block_arduino_loop: import("@ubt/ucode-common-types").GeneratorDefinition.BlockGenerator;
    procedures_definition: import("@ubt/ucode-common-types").GeneratorDefinition.BlockGenerator;
    procedures_prototype: import("@ubt/ucode-common-types").GeneratorDefinition.BlockGenerator;
    procedures_call: import("@ubt/ucode-common-types").GeneratorDefinition.BlockGenerator;
    argument_reporter_string_number: import("@ubt/ucode-common-types").GeneratorDefinition.BlockGenerator;
    argument_reporter_boolean: import("@ubt/ucode-common-types").GeneratorDefinition.BlockGenerator;
    rgb_color: import("@ubt/ucode-common-types").GeneratorDefinition.BlockGenerator;
    matrix: import("@ubt/ucode-common-types").GeneratorDefinition.BlockGenerator;
    custom_matrix: import("@ubt/ucode-common-types").GeneratorDefinition.BlockGenerator;
    operator_compare: import("@ubt/ucode-common-types").GeneratorDefinition.BlockGenerator;
    operator_add: import("@ubt/ucode-common-types").GeneratorDefinition.BlockGenerator;
    operator_subtract: import("@ubt/ucode-common-types").GeneratorDefinition.BlockGenerator;
    operator_multiply: import("@ubt/ucode-common-types").GeneratorDefinition.BlockGenerator;
    operator_divide: import("@ubt/ucode-common-types").GeneratorDefinition.BlockGenerator;
    operator_lt: import("@ubt/ucode-common-types").GeneratorDefinition.BlockGenerator;
    operator_equals: import("@ubt/ucode-common-types").GeneratorDefinition.BlockGenerator;
    operator_gt: import("@ubt/ucode-common-types").GeneratorDefinition.BlockGenerator;
    operator_and: import("@ubt/ucode-common-types").GeneratorDefinition.BlockGenerator;
    operator_or: import("@ubt/ucode-common-types").GeneratorDefinition.BlockGenerator;
    operator_not: import("@ubt/ucode-common-types").GeneratorDefinition.BlockGenerator;
    operator_random: import("@ubt/ucode-common-types").GeneratorDefinition.BlockGenerator;
    operator_join: import("@ubt/ucode-common-types").GeneratorDefinition.BlockGenerator;
    operator_letter_of: import("@ubt/ucode-common-types").GeneratorDefinition.BlockGenerator;
    operator_length: import("@ubt/ucode-common-types").GeneratorDefinition.BlockGenerator;
    operator_contains: import("@ubt/ucode-common-types").GeneratorDefinition.BlockGenerator;
    operator_mod: import("@ubt/ucode-common-types").GeneratorDefinition.BlockGenerator;
    operator_round: import("@ubt/ucode-common-types").GeneratorDefinition.BlockGenerator;
    operator_mathop: import("@ubt/ucode-common-types").GeneratorDefinition.BlockGenerator;
    operator_number: import("@ubt/ucode-common-types").GeneratorDefinition.BlockGenerator;
    operator_arithmetic: import("@ubt/ucode-common-types").GeneratorDefinition.BlockGenerator;
    operator_bit: import("@ubt/ucode-common-types").GeneratorDefinition.BlockGenerator;
    operator_left: import("@ubt/ucode-common-types").GeneratorDefinition.BlockGenerator;
    operator_right: import("@ubt/ucode-common-types").GeneratorDefinition.BlockGenerator;
    operator_to_int: import("@ubt/ucode-common-types").GeneratorDefinition.BlockGenerator;
    operator_max_min: import("@ubt/ucode-common-types").GeneratorDefinition.BlockGenerator;
    operator_operation: import("@ubt/ucode-common-types").GeneratorDefinition.BlockGenerator;
    operator_true_or_false_number: import("@ubt/ucode-common-types").GeneratorDefinition.BlockGenerator;
    operator_true_or_false_boolean: import("@ubt/ucode-common-types").GeneratorDefinition.BlockGenerator;
    operator_curr_system_time: import("@ubt/ucode-common-types").GeneratorDefinition.BlockGenerator;
    log_text: import("@ubt/ucode-common-types").GeneratorDefinition.BlockGenerator;
    log_text_char: import("@ubt/ucode-common-types").GeneratorDefinition.BlockGenerator;
    log_join: import("@ubt/ucode-common-types").GeneratorDefinition.BlockGenerator;
    variables_get_text: import("@ubt/ucode-common-types").GeneratorDefinition.BlockGenerator;
    variables_set_text: import("@ubt/ucode-common-types").GeneratorDefinition.BlockGenerator;
    number_input: import("@ubt/ucode-common-types").GeneratorDefinition.BlockGenerator;
    math_number: import("@ubt/ucode-common-types").GeneratorDefinition.BlockGenerator;
    colour_picker: import("@ubt/ucode-common-types").GeneratorDefinition.BlockGenerator;
    text: import("@ubt/ucode-common-types").GeneratorDefinition.BlockGenerator;
    math_whole_number: import("@ubt/ucode-common-types").GeneratorDefinition.BlockGenerator;
    math_positive_number: import("@ubt/ucode-common-types").GeneratorDefinition.BlockGenerator;
    math_integer: import("@ubt/ucode-common-types").GeneratorDefinition.BlockGenerator;
    note: import("@ubt/ucode-common-types").GeneratorDefinition.BlockGenerator;
    math_angle: import("@ubt/ucode-common-types").GeneratorDefinition.BlockGenerator;
    data_itemoflist: import("@ubt/ucode-common-types").GeneratorDefinition.BlockGenerator;
    data_addtolist: import("@ubt/ucode-common-types").GeneratorDefinition.BlockGenerator;
    data_lengthoflist: import("@ubt/ucode-common-types").GeneratorDefinition.BlockGenerator;
    data_setvariableto: import("@ubt/ucode-common-types").GeneratorDefinition.BlockGenerator;
    data_changevariableby: import("@ubt/ucode-common-types").GeneratorDefinition.BlockGenerator;
    data_deletealloflist: import("@ubt/ucode-common-types").GeneratorDefinition.BlockGenerator;
    data_replaceitemoflist: import("@ubt/ucode-common-types").GeneratorDefinition.BlockGenerator;
    data_variable: import("@ubt/ucode-common-types").GeneratorDefinition.BlockGenerator;
    control_wait: import("@ubt/ucode-common-types").GeneratorDefinition.BlockGenerator;
    control_repeat: import("@ubt/ucode-common-types").GeneratorDefinition.BlockGenerator;
    control_forever: import("@ubt/ucode-common-types").GeneratorDefinition.BlockGenerator;
    control_for: import("@ubt/ucode-common-types").GeneratorDefinition.BlockGenerator;
    control_if: import("@ubt/ucode-common-types").GeneratorDefinition.BlockGenerator;
    control_if_else: import("@ubt/ucode-common-types").GeneratorDefinition.BlockGenerator;
    control_wait_until: import("@ubt/ucode-common-types").GeneratorDefinition.BlockGenerator;
    control_repeat_until: import("@ubt/ucode-common-types").GeneratorDefinition.BlockGenerator;
    control_delay: import("@ubt/ucode-common-types").GeneratorDefinition.BlockGenerator;
    control_while_until: import("@ubt/ucode-common-types").GeneratorDefinition.BlockGenerator;
    control_flow_statements: import("@ubt/ucode-common-types").GeneratorDefinition.BlockGenerator;
    control_system_millis: import("@ubt/ucode-common-types").GeneratorDefinition.BlockGenerator;
    control_boolean: import("@ubt/ucode-common-types").GeneratorDefinition.BlockGenerator;
    control_not: import("@ubt/ucode-common-types").GeneratorDefinition.BlockGenerator;
};
export declare type ArduinoCommonGeneratorKeys = keyof typeof ControlGeneratorKeys | keyof typeof DataGeneratorKeys | keyof typeof MathGeneratorKeys | keyof typeof TextGeneratorKeys | keyof typeof OperatorGeneratorKeys | keyof typeof CustomFieldGeneratorKeys | keyof typeof ProcedureGeneratorKeys | keyof typeof ArduinoStartGeneratorKeys;