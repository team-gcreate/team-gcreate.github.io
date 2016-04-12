---
id: 192
title: Java Code Optimization
date: 2015-04-13T13:34:50+00:00
author: fly_lb
layout: post
guid: http://flylbblog.duapp.com/?p=192
permalink: /index.php/archives/192
categories:
  - Java
---
[Java Code Optimization](http://www.appperfect.com/support/java-coding-rules/optimization.html).

<h1 style="font-size: 18pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Java Optimization Rules
</h1>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  Rules available in this category:
</p>

<ol style="font-size: 10pt; margin-top: 1pt; margin-bottom: 1pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule1">Use_String_length_to_compare_empty_string_variables</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule2">Avoid_using_Math_class_methods_on_constants</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule3">Avoid_consecutively_invoking_StringBuffer_append_with_string_literals</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule4">Avoid_creating_thread_without_run_method</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule5">Always_reuse_immutable_constant_objects_for_better_memory_utilization</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule6">Avoid_constant_expressions_in_loops</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule7">Avoid_invoking_time_consuming_methods_in_loop</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule8">Avoid_duplication_of_code</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule9">Use_entrySet_instead_of_keySet</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule10">Ensure_efficient_removal_of_elements_in_a_collection</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule11">Ensure_efficient_removal_of_map_entries</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule12">Ensure_efficient_iteration_over_map_entries</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule13">Avoid_using_java_lang_Class_forName</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule14">Do_not_declare_members_accessed_by_inner_class_private</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule15">Avoid_synchronized_modifier_in_method</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule16">Avoid_empty_if</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule17">Avoid_empty_static_initializer</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule18">Avoid_unnecessary_if</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule19">Avoid_unnecessary_parentheses</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule20">Avoid_unnecessary_implementing_Clonable_interface</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule21">Avoid_using_MessageFormat</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule22">Avoid_writeByte_method_in_loop</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule23">Avoid_repeated_casting</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule24">Use_ternary_operator</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule25">Remove_unnecessary_if_then_else_statement</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule26">Always_dispose_SWT_Control</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule27">Always_declare_constant_field_static</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule28">Use_buffered_IO</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule29">Avoid_unnecessary_casting</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule30">Avoid_instantiation_of_class_with_only_static_members</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule31">Close_jdbc_connections</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule32">Close_jdbc_connections_Only_In_finally_Block</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule33">Avoid_synchronized_readObject_method</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule34">Avoid_boolean_array</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule35">Avoid_string_concatenation_in_loop</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule36">Avoid_method_calls_in_loop</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule37">Avoid_new_with_string</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule38">Loop_invariant_code_motion</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule39">Use_short_circuit_boolean_operators</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule40">Avoid_using_StringTokenizer</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule41">Use_instanceof_only_on_interfaces</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule42">Avoid_null_check_before_instanceof</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule43">Stream_not_closed</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule44">Close_streams_only_in_finally</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule45">Avoid_instantiation_for_getClass</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule46">Use_System_arrayCopy</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule47">Use_String_length_to_compare_empty_string</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule48">Use_String_equalsIgnoreCase</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule49">Place_try_catch_out_of_loop</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule50">Declare_inner_class_static</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule51">Declare_inner_class_using_outer_class_only_in_constructor_static</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule52">Avoid_nested_Synchronized_blocks</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule53">Avoid_empty_try_blocks</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule54">Declare_accessor_methods_final</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule55">Use_batch_update_for_sql_queries</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule56">Declare_private_constant_fields_final</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule57">Always_declare_constant_local_variables_final</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule58">Reduce_number_of_exception_creations</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule59">Reduce_switch_density</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule60">Avoid_empty_loops</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule61">Avoid_new_Integer_toString</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule62">Avoid_passing_primitive_int_to_Integer_constructor</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule63">Avoid_passing_primitive_long_to_Long_constructor</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule64">Avoid_passing_primitive_double_to_Double_constructor</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule65">Avoid_passing_primitive_short_to_Short_constructor</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule66">Avoid_passing_primitive_byte_to_Byte_constructor</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule67">Avoid_passing_primitive_char_to_Character_constructor</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule68">Avoid_using_String_toString</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule69">Avoid_unnecessary_substring</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule70">Use_toArray_with_array_as_parameter</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule71">Do_lazy_initialization</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule72">Avoid_using_Thread_yield</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule73">Avoid_unread_fields</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule74">Avoid_equality_with_boolean</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule75">Avoid_startsWith</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule76">Avoid_readByte_method_in_loop</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule77">Avoid_instantiation_of_boolean</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule78">Avoid_Synchronized_blocks</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule79">Declare_package_private_method_final</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule80">Declare_public_or_protected_method_final</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule81">Declare_public_or_protected_class_final</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule82">Use_array_of_primitive_type_insteadof_collection</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule83">Avoid_using_Double_toString</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule84">Avoid_debugging_code</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule85">Avoid_using_Thread_dumpStack</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule86">Avoid_using_java_lang_Runtime_freeMemory</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule87">Avoid_using_java_lang_Runtime_totalMemory</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule88">Avoid_using_java_lang_Runtime_traceInstructions</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule89">Avoid_using_java_lang_Runtime_traceMethodCalls</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule90">Avoid_using_java_lang_Class_getMethod</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule91">Avoid_using_java_lang_Class_getField</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule92">Avoid_using_java_lang_Class_getDeclaredMethod</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule93">Avoid_using_java_lang_Class_getDeclaredField</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule94">Always_Access_Fields_In_Same_Class_Directly</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule95">Use_arrayList_inplace_of_vector</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule96">Avoid_unnecessary_exception_throwing</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule97">Avoid_LinkedLists</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule98">Use_single_quotes_when_concatenating_character_to_String</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule99">Use_PreparedStatement_instead_of_Statement</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule100">Avoid_multi_dimensional_arrays</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule101">Avoid_empty_synchronized_block</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule102">Use_DataSource_instead_of_DriverManager</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule103">Avoid_call_to_Thread.sleep()</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule104">Use_String_instead_StringBuffer_for_constant_strings</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule105">Avoid_using_String_charAt</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule106">Avoid_Extending_java_lang_Object</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule107">Use_compound_operators</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule108">Avoid_concatenating_Strings_in_StringBuffer</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule109">Declare_package_private_class_final</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule110">Use_hashMap_inplace_of_hashTable</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule111">Avoid_creating_double_from_string</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule112">Always_use_right_shift_operator_for_division_by_powers_of_two</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule113">Use_shift_operators</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule114">Avoid_java_lang_reflect_package</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule115">Use_NIO_in_server</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule116">Avoid_object_instantiation_in_loops</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule117">Avoid_unnecessary_instanceof</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule118">Define_initial_capacities</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule119">Avoid_empty_catch_blocks</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule120">Avoid_synchronized_methods_in_loop</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule121">Avoid_synchronized_blocks_in_loop</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule122">Close_jdbc_resources</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule123">Close_jdbc_resources_only_in_finally_block</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule124">Specify_StringBuffer_capacity</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule125">Avoid_using_exponentiation</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule126">Use_transient_keyword</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule127">Avoid_new_inside_getTableCellRendererComponent</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule128">Avoid_Integer_valueOf_intValue</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule129">Use_ternary_operator_for_assignment</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule130">Avoid_Serialized_class_with_no_instance_variables</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule131">Avoid_Vector_elementAt_inside_loop</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule132">Declare_variable_final</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule133">Declare_method_arguments_final</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule134">Avoid_polling_loops</a>
  </li>
  <li style="margin-top: 3pt; margin-bottom: 3pt;">
    <a style="color: #000000;" href="http://www.appperfect.com/support/java-coding-rules/optimization.html#rule135">Avoid_Serialized_class_with_only_transient_fields</a>
  </li>
</ol>

<h2 id="rule1" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 1: Use_String_length_to_compare_empty_string_variables
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>High<br /> <b>Rule:  </b>The String.equals() method is overkill to test for an empty string. It is quicker to test if the length of the string is 0.<br /> <b>Reason:  </b>The String.equals() method is overkill to test for an empty string. It is quicker to test if the length of the string is 0.
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;
class Use_String_length_to_compare_empty_string_violation
{
	public boolean isEmpty(String str)
	{
		return str.equals("");		// VIOLATION
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;
class Use_String_length_to_compare_empty_string_correction
{
	public boolean isEmpty(String str)
	{
		return str.length()==0;		// CORRECTION
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b><a style="color: #000000;" href="http://www.onjava.com/pub/a/onjava/2002/03/20/optimization.html?page=4">http://www.onjava.com/pub/a/onjava/2002/03/20/optimization.html?page=4 </a><br /> <a style="color: #000000;" href="http://www.javaperformancetuning.com/tips/rawtips.shtml">http://www.javaperformancetuning.com/tips/rawtips.shtml </a>
</p>

<h2 id="rule2" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 2: Avoid_using_Math_class_methods_on_constants
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>Medium<br /> <b>Rule:  </b>It is quicker to determine the value statically.<br /> <b>Reason:  </b>It is quicker to determine the value statically.
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">public class Test
{
	public void fubar() 
	{
		double a;
		a = Math.abs(1.5); // VIOLATION
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">public class Test
{
	public void fubar() 
	{
		double a;
		a =1.5; // FIXED
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b>Not Available.
</p>

<h2 id="rule3" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 3: Avoid_consecutively_invoking_StringBuffer_append_with_string_literals
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>Medium<br /> <b>Rule:  </b>Doing so reduces the classfile size  by 17 bytes and eliminates a few instructions.<br /> <b>Reason:  </b>Doing so reduces the classfile size  by 17 bytes and eliminates a few instructions.
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">public class Test 
{
	private void fubar() 
	{
		StringBuffer buf = new StringBuffer();
		buf.append("Hello").append(" ").append("World");  // VIOLATION
	 }
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">public class Test 
{
	private void fubar() 
	{
		StringBuffer buf = new StringBuffer();
		buf.append("Hello World");// FIXED
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b>Not Available.
</p>

<h2 id="rule4" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 4: Avoid_creating_thread_without_run_method
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>High<br /> <b>Rule:  </b>A Thread which is created without specifying a run method does nothing other than a delay in performance.<br /> <b>Reason:  </b>A Thread which is created without specifying a run method does nothing other than a delay in performance.
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">public class Test
{
 public void method() throws Exception
 {
 	new Thread().start();  //VIOLATION
 }
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">public class Test
{
 public void method(Runnable r) throws Exception
 {
 	new Thread(r).start();  //FIXED
 }
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b>Not Available.
</p>

<h2 id="rule5" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 5: Always_reuse_immutable_constant_objects_for_better_memory_utilization
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>Medium<br /> <b>Rule:  </b>Creation of constant immutable objects that are not assigned to static final variables lead to unnecessary memory consumption.<br /> <b>Reason:  </b>Creation of constant immutable objects that are not assigned to static final variables lead to unnecessary memory consumption.
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">public class Test
{
  protected Object[] getObjects() 
 {
  return new Object[0];  // VIOLATION
  }
 
 publicstatic Integer convertToInt(String s) 
 {
  if (s == null || s.length() == 0)
	  {
return new Integer(-1);  // VIOLATION
	}
  else
	  {
return new Integer(s);
	}
 }
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">public class Test 
{
 public static final Object[] NO_OBJECTS = new Object[0];
 
 protected Object[] getObjects() 
{
  return NO_OBJECTS;  // FIXED
 }
 
 private static final Integer INT_N1 = new Integer(-1);
 
 public static Integer convertToIn(String s) {
  if (s == null || s.length() == 0)
	  {
return INT_N1;  // FIXED
	}
  else
	  {
return new Integer(s);
	}
 }
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b>Not available.
</p>

<h2 id="rule6" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 6: Avoid_constant_expressions_in_loops
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>Medium<br /> <b>Rule:  </b>It is more efficient to either simplify these expressions or move them outside the body of the loop.<br /> <b>Reason:  </b>It is more efficient to either simplify these expressions or move them outside the body of the loop.
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">public class Test
{
 public static final boolean TRUE= true;
 public static final boolean FALSE= false;
 public static final int FOO= 7;
 
 public void myMethod()
 {
  int[] x= new int[10];
  int j= 0;
  
  for(int i=0; i&lt;10; i++)
	 {
x[0]= 7+(FOO+9);// VIOLATION

for(j=0; TRUE||FALSE;)// VIOLATION
	  {
}
  }
 }
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">public class Test
{
 public void myMethod()
 {
  int[] x= new int[10];
  int j= 0;
  
  x[0]= 7+(FOO+9);//FIXED
  for(int i=0; i&lt;10; i++)
	 {
for(j=0; TRUE;)//FIXED
	  {
}
  }
 }
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b>Not Available.
</p>

<h2 id="rule7" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 7: Avoid_invoking_time_consuming_methods_in_loop
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>Medium<br /> <b>Rule:  </b>Moving method calls which may take a long time outside of loops can improve performance.<br /> <b>Reason:  </b>Moving method calls which may take a long time outside of loops can improve performance.
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">import java.util.Arrays;


public class Test
{
 public int[] sortArray(int[] a)
{
  for(int i=0; i&lt;100; i++)
  {
Arrays.sort(a);  // VIOLATION
//Some other code
  }
  return a;
 }
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">public class Test
{
 public int[] sortArray(int[] a)
{
  Arrays.sort(a);  // FIXED
  for(int i=0; i&lt;100; i++)
 {
//Some other code
  }
  return a;
 }
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b>Not Available.
</p>

<h2 id="rule8" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 8: Avoid_duplication_of_code
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>High<br /> <b>Rule:  </b>Avoid duplication of code.<br /> <b>Reason:  </b>Avoid duplication of code.
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

public class Avoid_duplication_of_code_violation
{
	public void method()
	{
		int x = getValue();

		if(x &gt; 10)
		{				// Violation.
			int j = i + 10;
			int k = j * 2;
			System.out.println(k);			
		}
		else if( x &lt; 20 )
		{				// Violation.
			int j = i + 10;
			int k = j * 2;
			System.out.println(k);			
		}
	}
		
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;"></pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b>Reference not available.
</p>

<h2 id="rule9" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 9: Use_entrySet_instead_of_keySet
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>Medium<br /> <b>Rule:  </b>Use entrySet() instead of keySet().<br /> <b>Reason:  </b>Use entrySet() instead of keySet().
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;
	
import java.util.Map;
import java.util.Set;
import java.util.HashMap;
import java.util.Iterator;

public class Use_entrySet_instead_of_keySet_violation
{
	public void method()
	{
		Map m = new HashMap();
		Iterator it = m.keySet().iterator();
		Object key = it.next();
		Object v = m.get(key);		// Violation
	
	}
		
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

public class Use_entrySet_instead_of_keySet_correction
{
	public void method()
	{
		Map m = new HashMap();
		Set set = m.entrySet();		//Correction.
		Object keyValuePair = it.next();
	}
	
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b>Reference not available.
</p>

<h2 id="rule10" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 10: Ensure_efficient_removal_of_elements_in_a_collection
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>Medium<br /> <b>Rule:  </b>Searching a collection to fetch the element to remove is inefficient.<br /> <b>Reason:  </b>Searching a collection to fetch the element to remove is inefficient.
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">public class Test 
{
	public void someMethod(Collection collection)
	{
		Iterator iter = collection.iterator();
		while (iter.hasNext()) 
		{
			Object element = iter.next();
			collection.remove(element); // VIOLATION
		}
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">public class Test 
{
	public void someMethod(Collection collection)
	{
		Iterator iter = collection.iterator();
		while (iter.hasNext()) 
		{
			iter.remove(); // FIXED
		}
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b>Not available.
</p>

<h2 id="rule11" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 11: Ensure_efficient_removal_of_map_entries
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>Medium<br /> <b>Rule:  </b>Searching a keyset/entryset to fetch the key to remove the element is inefficient.<br /> <b>Reason:  </b>Searching a keyset/entryset to fetch the key to remove the element is inefficient.
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">import java.util.*;

public class Test 
{
 public void someMethod(HashMap collection)
 {
  Set keySet = collection.keySet();
  Iterator keyIter = keySet.iterator();
  while (keyIter.hasNext()) 
	  {
Object key = keyIter.next();
collection.remove(key); // VIOLATION
  }
 }
}
or another case when we iterate on entry set:


public class Test 
{
 public void someMethod(HashMap collection)
 {
  Set entrySet = collection.entrySet();
  Iterator entriesIter = entrySet.iterator();
  while (entriesIter.hasNext()) 
	  {
(Map.Entry) entry = (Map.Entry)entriesIter.next();
Object key = entry.getKey();
collection.remove(key); // VIOLATION
  }
 }
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">public class Test 
{
 public void someMethod(HashMap collection)
 {
  Set keySet = collection.keySet();
  Iterator keyIter = keySet.iterator();
  while (keyIter.hasNext()) 
	  {
keyIter.remove(); // FIXED
  }
 }
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b>Not available.
</p>

<h2 id="rule12" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 12: Ensure_efficient_iteration_over_map_entries
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>Medium<br /> <b>Rule:  </b>Using a keyset to iterate over a map, and then requesting values for each key is inefficient.<br /> <b>Reason:  </b>Using a keyset to iterate over a map, and then requesting values for each key is inefficient.
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">import java.util.Iterator;
import java.util.Map;

public class Test
{
 public void inefficientIteration(Map map)
 {
  Iterator iter = map.keySet().iterator();
  while (iter.hasNext()) {
Object key = iter.next();
Object value = map.get(key); // VIOLATION
  }
 }
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">import java.util.Iterator;
import java.util.Map;

public class Test
{
 public void efficientIteration(Map map)
 {
  Iterator iter = map.entrySet().iterator();
  while (iter.hasNext()) {
Map.Entry entry = (Map.Entry)iter.next();
Object key = entry.getKey();
Object value = entry.getValue(); // FIXED
  }
 }
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b>Not available.
</p>

<h2 id="rule13" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 13: Avoid_using_java_lang_Class_forName
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>Medium<br /> <b>Rule:  </b>Decreases performance and could cause possible bugs.<br /> <b>Reason:  </b>Decreases performance and could cause possible bugs.
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">public class Test 
{
	private void foo()
	{
		try
		{
			System.out.println(Class.forName("java.lang.Integer")
					.getName()); // VIOLATION
		}
		catch ( ClassNotFoundException e )
		{
			e.printStackTrace();
		}
	}
		
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">public class Test 
{
	private void foo()
	{
		System.out.println(java.lang.Integer.class.getName()); // CORRECTION
	}
		
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b>No references available.
</p>

<h2 id="rule14" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 14: Do_not_declare_members_accessed_by_inner_class_private
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>High<br /> <b>Rule:  </b>Do not declare members accessed by inner class private.<br /> <b>Reason:  </b>Do not declare members accessed by inner class private.
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;
public class Do_not_declare_members_accessed_by_inner_class_private_violation 
{
	private int iVar = 0; // Violation
	class inner
	{
		int var2;
		public void foo()
		{
			var2 = iVar;
			// ...		
		}
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;
public class Do_not_declare_members_accessed_by_inner_class_private_correction 
{
	int iVar = 0; // Correction
	class inner
	{
		int var2;
		public void foo()
		{
			var2 = iVar;
			// ...		
		}
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b><a style="color: #000000;" href="http://www.glenmccl.com/jperf/#Sample1">http://www.glenmccl.com/jperf/#Sample1 </a>
</p>

<h2 id="rule15" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 15: Avoid_synchronized_modifier_in_method
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>High<br /> <b>Rule:  </b>Avoid synchronized modifier in method for performace reasons<br /> <b>Reason:  </b>Avoid synchronized modifier in method for performace reasons
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;
import java.io.ObjectOutputStream;
import java.io.IOException;

class Avoid_synchronized_modifier_in_method_violation
{
	public synchronized void writeToStream(String s)throws IOException		// VIOLATION
	{
		//....
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

import java.io.ObjectOutputStream;
import java.io.IOException;

class Avoid_synchronized_modifier_in_method_correction
{
	public void writeToStream(String s)throws IOException		// CORRECTION
	{
		//....
		synchronized (this)// CORRECTION
		{
			//....
		}

		//....
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b>Reference Not Available.
</p>

<h2 id="rule16" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 16: Avoid_empty_if
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>Low<br /> <b>Rule:  </b>Avoid empty &#8220;if&#8221; block structure.<br /> <b>Reason:  </b>Avoid empty &#8220;if&#8221; block structure.
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

class Avoid_empty_if_violation
{
	public void method()
	{
		final int ZERO = 0;
		int i = 10;
		if (i &lt; ZERO)		// VIOLATION
		{
		}
		i = ZERO;
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

class Avoid_empty_if_correction
{
	public void method()
	{
		final int ZERO = 0;
		int i = 10;
		/*
		if (i &lt; ZERO)		// CORRECTION
		{
		}
		*/
		i = ZERO;
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b>Reference Not Available.
</p>

<h2 id="rule17" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 17: Avoid_empty_static_initializer
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>Low<br /> <b>Rule:  </b>Since the static initializer contains no code, it can be safely removed.<br /> <b>Reason:  </b>Since the static initializer contains no code, it can be safely removed.
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">public class Test
{
	static  // VIOLATION
	{
  		// empty
 	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">public class Test
{
	// ...
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b>Not Available.
</p>

<h2 id="rule18" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 18: Avoid_unnecessary_if
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>Medium<br /> <b>Rule:  </b>Avoid unnecessary if statements.<br /> <b>Reason:  </b>Avoid unnecessary if statements.
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

public class Avoid_unnecessary_if_Violation
{
	public void method()
	{
		if (true)		// Violation.
		{
		 //Some Code ...
		}
		if (!true)		// Violation.
		{
			//Some Code ...
		}
	}
	
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

public class Avoid_unnecessary_if_Correction
{
	public void method()
	{
		boolean flag = true;

		if (flag)		//Correction.
		{
		 //Some Code ...
		}
	}
	
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b>Reference not available.
</p>

<h2 id="rule19" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 19: Avoid_unnecessary_parentheses
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>Medium<br /> <b>Rule:  </b>Avoid unnecessary parentheses in an expression.<br /> <b>Reason:  </b>Avoid unnecessary parentheses in an expression.
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

public class Avoid_unnecessary_parentheses_violation
{
	public void method()
	{
		if((method()))		// Violation.
		{
			// Do Something..
		}
	}
		
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

public class Avoid_unnecessary_parentheses_correction
{
	public void method()
	{
		if(method())		//Correction.		
		{
			// Do Something..		
		}
	}
	
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b>Reference not available.
</p>

<h2 id="rule20" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 20: Avoid_unnecessary_implementing_Clonable_interface
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>Medium<br /> <b>Rule:  </b>Avoid unnecessary implementing Clonable interface.<br /> <b>Reason:  </b>Avoid unnecessary implementing Clonable interface.
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

public class Avoid_unnecessary_implementing_Clonable_interface_violation implements Clonable
{
	public void method()		//Violation.
	{
	
	}
		
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

public class Avoid_unnecessary_implementing_Clonable_interface_correction implements Clonable
{
	public void method()
	{
		void_unnecessary_implementing_Clonable_interface theClone = new void_unnecessary_implementing_Clonable_interface();

		Object o = theClone.clone();		//Correction.
	}
	
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b>Reference not available.
</p>

<h2 id="rule21" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 21: Avoid_using_MessageFormat
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>Low<br /> <b>Rule:  </b>Avoid using MessageFormat as it is slow.<br /> <b>Reason:  </b>Avoid using MessageFormat as it is slow.
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

import java.text.MessageFormat;

public class Avoid_using_MessageFormat_violation
{
	public void method()
	{
		final int N = 25000;
		Object argvec[] = new Object[2];
		MessageFormat f = new MessageFormat("The square of {0,number,#} is {1,number,#}");
		for (int i = 1; i &lt;= N; i++)
		{
			argvec[0] = new Integer(i);
			argvec[1] = new Integer(i * i);
			String s = f.format(argvec);
			System.out.println(s);
		}
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;
public class Avoid_using_MessageFormat_correction
{
	public void method()
	{
		final int N = 25000;
		String s;
		for (int i = 1; i &lt;= N; i++)
		{
			s = "The square of " + i + " is " + (i * i);
			System.out.println(s);
		}
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b>Reference Not Available.
</p>

<h2 id="rule22" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 22: Avoid_writeByte_method_in_loop
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>High<br /> <b>Rule:  </b>Avoid writing single byte in loop<br /> <b>Reason:  </b>Avoid writing single byte in loop
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;
class Avoid_writeByte_method_violation
{
	public static void main(String args[])
	{
		final int ZERO = 0;
		final int ONE = 1;
		final int TEN = 10;
		String strFileName = "C:\\demo.java"; //$NON-NLS-1$
		try
		{
			java.io.FileOutputStream fos = new java.io.FileOutputStream(strFileName);
			java.io.DataOutputStream ds = new java.io.DataOutputStream(fos);

			int i = ZERO;
			while(i &lt; TEN)
			{
				ds.writeByte(ONE);	// VIOLATION
				i++;
			}

			for(i=ZERO; i&lt;TEN; i++)
			{
				ds.writeByte(ONE);	// VIOLATION
			}

			i = ZERO;

			do
			{
				ds.writeByte(ONE);	// VIOLATION
				i++;
			}
			while(i&lt;TEN);
		}
		catch(java.io.IOException e)
		{
			e.printStackTrace();
		}
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;
class Avoid_writeByte_method_correction
{
	public static void main(String args[])
	{
		final int ZERO = 0;
		final char ONE = '1';
		final int TEN = 10;

		String strFileName = "C:\\demo.java"; //$NON-NLS-1$
		byte bArr[] = new byte[10];

		try
		{
			java.io.FileOutputStream fos = new java.io.FileOutputStream(strFileName);
			java.io.DataOutputStream ds = new java.io.DataOutputStream(fos);

			int i = ZERO;
			while(i &lt; TEN)
			{
				bArr[i] = ONE;
				i++;
			}

			ds.write(bArr, ZERO, bArr.length);	// CORRECTION
		}
		catch(java.io.IOException e)
		{
			e.printStackTrace();
		}
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b>Reference Not Available.
</p>

<h2 id="rule23" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 23: Avoid_repeated_casting
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>High<br /> <b>Rule:  </b>Avoid repeated casting by casting it once and keeping its reference<br /> <b>Reason:  </b>Avoid repeated casting by casting it once and keeping its reference
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

import java.awt.Component;
import java.awt.TextField;

class Avoid_repeated_casting_violation
{
	public void method(Component comp)
	{
		((TextField) comp).setText("");		// VIOLATION
		((TextField) comp).setEditable(false);	// VIOLATION
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

import java.awt.Component;
import java.awt.TextField;

class Avoid_repeated_casting_correction
{
	public void method(Component comp)
	{
		final TextField tf = (TextField) comp;	// CORRECTION
		tf.setText("");
		tf.setEditable(false);
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b><a style="color: #000000;" href="http://www.javaperformancetuning.com/tips/rawtips.shtml">http://www.javaperformancetuning.com/tips/rawtips.shtml </a><br /> Java Performance tunning by Jack Shirazi
</p>

<h2 id="rule24" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 24: Use_ternary_operator
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>Medium<br /> <b>Rule:  </b>Use ternary operator for improved performance<br /> <b>Reason:  </b>Use ternary operator for improved performance
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;
class Use_ternary_operator_correction
{
	public boolean test(String value)
	{
		if(value.equals("AppPerfect"))		// VIOLATION
		{
			return true;
		}
		else
		{
			return false;
		}
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;
class Use_ternary_operator_correction
{
	public boolean test(String value)
	{
		return value.equals("AppPerfect"); // CORRECTION
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b>Reference Not Available.
</p>

<h2 id="rule25" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 25: Remove_unnecessary_if_then_else_statement
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>Medium<br /> <b>Rule:  </b>It could be simplified to enhance the code&#8217;s efficiency and reduce its size.<br /> <b>Reason:  </b>It could be simplified to enhance the code&#8217;s efficiency and reduce its size.
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">public class Test 
{
 boolean b;
 public boolean isTrue() 
{
  if (b) //VIOLATION
	  {
return true;
	  }
  else
	  {
return false;
	  }
 }
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">public class Test 
{
 boolean b;
 public boolean isTrue() 
{
  return b; //FIXED
 }

}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b>Not available.
</p>

<h2 id="rule26" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 26: Always_dispose_SWT_Control
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>High<br /> <b>Rule:  </b>Always dispose SWT Control.<br /> <b>Reason:  </b>Always dispose SWT Control.
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

import org.eclipse.swt.widgets.Button;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Control;

public class Always_dispose_SWT_Control_violation 
{
	public void createControl(Composite cmp, int style)
	{
		Control ct = new Button(cmp, style);  // Violation
		//...do something with ct
	
	}

}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

import org.eclipse.swt.widgets.Button;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Control;

public class Always_dispose_SWT_Control_correction 
{
	public void createControl(Composite cmp, int style)
	{
		Control ct = new Button(cmp, style);
		//...
		ct.dispose();  // Correction
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b><a style="color: #000000;" href="http://www.eclipse.org/articles/swt-design-2/swt-design-2.html">http://www.eclipse.org/articles/swt-design-2/swt-design-2.html </a>
</p>

<h2 id="rule27" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 27: Always_declare_constant_field_static
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>Medium<br /> <b>Rule:  </b>The constant fields that are declared final should be declared static.<br /> <b>Reason:  </b>The constant fields that are declared final should be declared static.
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

public class Always_declare_constant_field_static_violation
{
	final int MAX = 1000; // VIOLATION
	final String NAME = "Noname"; // VIOLATION
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

public class Always_declare_constant_field_static_correction
{
	static final int MAX = 1000; // CORRECTION
	static final String NAME = "Noname"; // VIOLATION
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b><a style="color: #000000;" href="http://www.glenmccl.com/jperf/#Sample1">http://www.glenmccl.com/jperf/#Sample1 </a>
</p>

<h2 id="rule28" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 28: Use_buffered_IO
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>Critical<br /> <b>Rule:  </b>Use BufferedInputStream and BufferedOutputStream or equivalent buffered methods wherever possible.<br /> Doing I/O a single byte at a time is generally too slow.<br /> Note that I/O operation uses lots of synchronization, hence you can get better performance by reading / writing in bulk.<br /> <b>Reason:  </b>Use BufferedInputStream and BufferedOutputStream or equivalent buffered methods wherever possible.<br /> Doing I/O a single byte at a time is generally too slow.<br /> Note that I/O operation uses lots of synchronization, hence you can get better performance by reading / writing in bulk.
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;

class Use_buffered_IO_violation
{
	public static void copy(String from, String to) throws IOException
	{
		final int NEGATIVE = -1;
	InputStream in = null;
	OutputStream out = null;
	try
	{
		in = new FileInputStream(from);		// VIOLATION
	out = new FileOutputStream(to);		// VIOLATION
	while (true)
	{
	int data = in.read();
	if (data == NEGATIVE)
	{
		break;
	}
	out.write(data);
	}
	in.close();
	out.close();
	}
	finally
	{	
		if (in != null)
	{
	in.close();
	}
	if (out != null)
	{
	out.close();
	}
	 	}
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
class Use_buffered_IO_correction
{
	public static void copy(String from, String to) throws IOException
	{
		final int NEGATIVE = -1;
	InputStream in = null;
	OutputStream out = null;
	try
	{
		in = new BufferedInputStream(new FileInputStream(from));		// CORRECTION
	out = new BufferedOutputStream(new FileOutputStream(to));		// CORRECTION
	while (true)
	{
	int data = in.read();
	if (data == NEGATIVE)
	{
	break;
	}
	out.write(data);
	}
		}
	 finally
	 {
	 	if (in != null)
	  {
	  	in.close();
	  }
	  if (out != null)
	  {
	  	out.close();
	  }
		}
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b>java.sun.com\docs\books\performance\1st_edition\html\JPIOPerformance.fm.html
</p>

<h2 id="rule29" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 29: Avoid_unnecessary_casting
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>High<br /> <b>Rule:  </b>Avoid unnecessary casting.<br /> <b>Reason:  </b>Avoid unnecessary casting.
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

class Avoid_unnecessary_casting_violation
{
	public Object method()
	{
		String str = "AppPerfect";	//$NON-NLS-1$
		Object obj = (Object)str;		// VIOLATION
		return obj;
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;
class Avoid_unnecessary_casting_correction
{
	public Object method()
	{
		String str = "AppPerfect";	//$NON-NLS-1$
		Object obj = str; 		// CORRECTION
		return obj;
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b><a style="color: #000000;" href="http://www.javaworld.com/javaworld/jw-12-1999/jw-12-performance.html">http://www.javaworld.com/javaworld/jw-12-1999/jw-12-performance.html </a>
</p>

<h2 id="rule30" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 30: Avoid_instantiation_of_class_with_only_static_members
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>Medium<br /> <b>Rule:  </b>Avoid instantiation of class with only static members.<br /> <b>Reason:  </b>Avoid instantiation of class with only static members.
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

public class Avoid_instantiation_of_static_class_violation 
{
	MyClassInner mcInner = new MyClassInner();  // Violation
}

class MyClasss
{
	public static void foo()
	{
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">Avoid instantiation of static classes having only static members.</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b>Reference not available.
</p>

<h2 id="rule31" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 31: Close_jdbc_connections
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>High<br /> <b>Rule:  </b>Always close the database connections opened.<br /> <b>Reason:  </b>Always close the database connections opened.
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class Close_Jdbc_Connections_violation
{
	public void method (String url) throws SQLException
	{
		try
		{
			Connection conn = DriverManager.getConnection(url);		// VIOLATION
			// some operations on connection
						
		}
		catch (java.lang.Exception e)
		{
			e.printStackTrace();
		}
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class Close_Jdbc_Connections_correction
{
	public void method (String url) throws SQLException
	{
		Connection conn = null;
		try
		{
			conn = DriverManager.getConnection(url);
			// some operations on connection
		}
		catch (java.lang.Exception e)
		{
			e.printStackTrace();
		}
		finally
		{
			conn.close();		// CORRECTION
		}
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b>Reference not available.
</p>

<h2 id="rule32" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 32: Close_jdbc_connections_Only_In_finally_Block
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>High<br /> <b>Rule:  </b>Always close the database connections opened. The one of the places to close the connection is in finally block.<br /> <b>Reason:  </b>Always close the database connections opened. The one of the places to close the connection is in finally block.
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class Close_Jdbc_Connections_only_in_finllay_block_violation
{
	public void method (String url) throws SQLException
	{
		try
		{
			Connection conn = DriverManager.getConnection(url);
			// some operations on connection
			
			conn.close ();		// VIOLATION
		}
		catch (java.lang.Exception e)
		{
			e.printStackTrace();
		}
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class Close_Jdbc_Connections_only_in_finllay_block_correction
{
	public void method (String url) throws SQLException
	{
		Connection conn = null;
		try
		{
			conn = DriverManager.getConnection(url);
			// some operations on connection
		}
		catch (java.lang.Exception e)
		{
			e.printStackTrace();
		}
		finally
		{
			conn.close();		// CORRECTION
		}
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b>Reference not available.
</p>

<h2 id="rule33" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 33: Avoid_synchronized_readObject_method
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>Medium<br /> <b>Rule:  </b>Avoid synchronized readObject() method.<br /> <b>Reason:  </b>Avoid synchronized readObject() method.
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;
	
import java.io.Serializable

class Avoid_synchronized_readObject_method implements Serializable
{
	private synchronized void readObject(ObjectInputStream s) throws IOException,ClassNotFoundException		//Violation
	{
	 s.defaultReadObject();
	 	 
	 // customized deserialization code
	}

}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;
	
import java.io.Serializable

class Avoid_synchronized_readObject_method implements Serializable
{
	private void readObject(java.io.ObjectInputStream in)throws IOException, ClassNotFoundException		//Correction
	{
	 s.defaultReadObject();
	 
	 // customized deserialization code
	}

}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b>Reference Not Available
</p>

<h2 id="rule34" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 34: Avoid_boolean_array
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>Low<br /> <b>Rule:  </b>Do not use array of boolean.<br /> <b>Reason:  </b>Do not use array of boolean.
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

public class Avoid_boolean_array_violation
{
	public void method()
	{
		boolean[] b = new boolean[]{true, false, true}; // VIOLATION
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

public class Avoid_boolean_array_correction
{
	public void method()
	{
		BitSet bs = new BitSet(3); // CORRECTION
		bs.set(0);
		bs.set(2);
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b><a style="color: #000000;" href="http://www.javaperformancetuning.com/tips/rawtips.shtml">http://www.javaperformancetuning.com/tips/rawtips.shtml </a>
</p>

<h2 id="rule35" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 35: Avoid_string_concatenation_in_loop
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>Critical<br /> <b>Rule:  </b>Use &#8216;StringBuffer&#8217; instead of &#8216;String&#8217; for non-constant strings.<br /> <b>Reason:  </b>Use &#8216;StringBuffer&#8217; instead of &#8216;String&#8217; for non-constant strings.
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;
class String_concatenation_violation
{
	public void concatValues()
	{
		String result = "";
		for (int i = 0; i &lt; 20; i++) 
		{
		 result += getNextString();				// VIOLATION
		}
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;
class String_concatenation_correction
{
	public void concatValues(String strMainString, String strAppend1, String strAppend2)
	{
		String result = "";
		StringBuffer buffer = new StringBuffer();
		for (int i = 0; i &lt; 20; i++) 
		{
		 buffer.append(getNextString());			// CORRECTION
		}
		result = buffer.toString();				// CORRECTION
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b><a style="color: #000000;" href="http://java.sun.com/docs/books/performance/1st_edition/html/JPMutability.fm.html">http://java.sun.com/docs/books/performance/1st_edition/html/JPMutability.fm.html </a>
</p>

<h2 id="rule36" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 36: Avoid_method_calls_in_loop
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>High<br /> <b>Rule:  </b>If possible avoid using length(), size() etc. method calls in loop condition statement, there can be a performance hit.<br /> <b>Reason:  </b>If possible avoid using length(), size() etc. method calls in loop condition statement, there can be a performance hit.
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

class Avoid_method_calls_in_loop_violation
{
	public void method()
	{
		String str = "Hello";
		for (int i = 0; i &lt; str.length(); i++)		// VIOLATION
	  	{
			i++;
		}
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

class Avoid_method_calls_in_loop_correction
{
	public void method()
	{
		String str = "Hello";
		int len = str.length();		// CORRECTION
		for (int i = 0; i &lt; len ; i++)
	  	{
			i++;
		}
 }
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b>Reference Not Available.
</p>

<h2 id="rule37" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 37: Avoid_new_with_string
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>Medium<br /> <b>Rule:  </b>Avoid using new with String objects.<br /> <b>Reason:  </b>Avoid using new with String objects.
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

class Avoid_new_with_string_violation
{
	public int action(String str)
	{
		String s = new String(str);		// VIOLATION
		return s.length();
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

class Avoid_new_with_string_correction
{
	public int action(String str)
	{
		String s = str;		// CORRECTION
		return s.length();
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b><a style="color: #000000;" href="http://www.javaworld.com/javaqa/2002-09/01-qa-0906-strings.html">http://www.javaworld.com/javaqa/2002-09/01-qa-0906-strings.html </a>
</p>

<h2 id="rule38" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 38: Loop_invariant_code_motion
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>Medium<br /> <b>Rule:  </b>The code that is going to result in same value over the iterations of loop, should be moved out of the loop.<br /> <b>Reason:  </b>The code that is going to result in same value over the iterations of loop, should be moved out of the loop.
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;
class Loop_invariant_code_motion_violation
{
	public void method(int x, int y, int[] z)
	{
		for(int i = 0; i &lt; z.length; i++)
		{
			z[i] = x * Math.abs(y);		// VIOLATION
		}
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;
class Loop_invariant_code_motion_correction
{
	public void method(int x, int y, int[] z)
	{
		int t1 = x * Math.abs(y);		// CORRECTION
		for(int i = 0; i &lt; z.length; i++)
		{
			z[i] = t1;
		}
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b>Java Performance Tunning by Jack Shirazi
</p>

<h2 id="rule39" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 39: Use_short_circuit_boolean_operators
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>High<br /> <b>Rule:  </b>Short-circuit booleans should be used as that speeds up the test slightly in almost every case.<br /> <b>Reason:  </b>Short-circuit booleans should be used as that speeds up the test slightly in almost every case.
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;
class Use_short_circuit_boolean_operators_violation
{
	public void method()
	{
		if(sValue.equals("true")  | sValue.equals("false"))	// VIOLATION
		{
			System.out.println("valid boolean");
		}
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;
class Use_short_circuit_boolean_operators_correction
{
	public void method()
	{
		if(sValue.equals("true") || sValue.equals("false"))	// CORRECTION
		{
			System.out.println("valid boolean");
		}
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b>Java Performance Tunning by Jack Shirazi<br /> <a style="color: #000000;" href="http://java.oreilly.com/news/javaperf_0900.html">http://java.oreilly.com/news/javaperf_0900.html </a>
</p>

<h2 id="rule40" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 40: Avoid_using_StringTokenizer
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>Critical<br /> <b>Rule:  </b>Avoid using StringTokenizer to improve performace<br /> <b>Reason:  </b>Avoid using StringTokenizer to improve performace
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;
class Avoid_using_StringTokenizer_violation
{
	public void method(String str)
	{
		StringTokenizer strtok = new StringTokenizer(str);	// VIOLATION
		while(strtok.hasMoreTokens())
		{
			System.out.println(strtok.nextToken());
		}
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;
class Avoid_using_StringTokenizer_correction
{
	public void method(String str)
	{
		String[] parts = breakUp(str);		// CORRECTION
		int len = parts.length;
		for(int i=len; i&gt;0; i--)
		{
			System.out.println(parts[len-i]);
		}
	}

	String[] breakUp(String str)
	{
		String strParts[];
		// break the string into parts
		return strParts;
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b><a style="color: #000000;" href="http://www.javaperformancetuning.com/tips/rawtips.shtml">http://www.javaperformancetuning.com/tips/rawtips.shtml </a>
</p>

<h2 id="rule41" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 41: Use_instanceof_only_on_interfaces
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>Medium<br /> <b>Rule:  </b>Use instanceof only on interfaces.<br /> <b>Reason:  </b>Use instanceof only on interfaces.
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

class MyClass { }

public class Use_instanceof_only_on_interfaces
{
 private void method (Object o)
 {
  if (o instanceof MyClass) { }// VIOLATION
 }
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

interface MyInterface {}
class MyClass implements MyInterface {}

public class Use_instanceof_only_on_interfaces
{
 private void method (Object o)
 {
  if (o instanceof MyInterface) { }// Correction
 }
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b>Reference not available.
</p>

<h2 id="rule42" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 42: Avoid_null_check_before_instanceof
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>Medium<br /> <b>Rule:  </b>Avoid null check before checking instanceof.<br /> <b>Reason:  </b>Avoid null check before checking instanceof.
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

public class Avoid_null_check_before_instanceof_violation
{
	public void method(Object o)
	{
		if(o != null &&  o instanceof Object)		// Violation.
		{
			// Do Something.
		}	
	}
		
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

public class Avoid_null_check_before_instanceof_correction
{
	public void method(Object o)
	{
		if(o instanceof Object)		// Correction
		{
			// Do Something.
		}	
	}
	
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b>Reference not available.
</p>

<h2 id="rule43" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 43: Stream_not_closed
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>High<br /> <b>Rule:  </b>Always close the streams opened.<br /> <b>Reason:  </b>Always close the streams opened.
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

import java.io.FileInputStream;
import java.io.IOException;

public class Stream_not_closed
{
	public void method (java.io.File f) throws IOException
	{
		FileInputStream fileInputStream = null;
		try
		{
			fileInputStream = new java.io.FileInputStream(f);		//Violation
			fileInputStream.read ();
		}
		catch (java.io.FileNotFoundException e1)
		{
			System.out.println("Exception : File not found");
		}
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

import java.io.FileInputStream;
import java.io.IOException;

public class Stream_not_closed
{
	public void method (java.io.File f) throws IOException
	{
		FileInputStream fileInputStream = null;
		try
		{
			fileInputStream = new java.io.FileInputStream(f);
			fileInputStream.read ();			
			fileInputStream.close ();		// Correction
		}
		catch (java.io.FileNotFoundException e1)
		{
			System.out.println("Exception : File not found");
		}
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b>Reference not available.
</p>

<h2 id="rule44" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 44: Close_streams_only_in_finally
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>High<br /> <b>Rule:  </b>Always close the streams opened, in finally block.<br /> <b>Reason:  </b>Always close the streams opened, in finally block.
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;
import java.io.FileInputStream;
import java.io.IOException;

public class Close_streams_only_in_finally
{
	public void method (java.io.File f) throws IOException
	{
		FileInputStream fileInputStream = null;
		try
		{
			fileInputStream = new java.io.FileInputStream(f);
			fileInputStream.read ();
			fileInputStream.close ();		// VIOLATION
		}
		catch (java.io.FileNotFoundException e1)
		{
			System.out.println("Exception : File not found");
		}
		catch (java.lang.Exception e)
		{
			e.printStackTrace();
		}
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;
import java.io.FileInputStream;
import java.io.IOException;

public class Close_streams_only_in_finally
{
	public void method (java.io.File f) throws IOException
	{
		FileInputStream fileInputStream = null;
		try
		{
			fileInputStream = new java.io.FileInputStream(f);
			fileInputStream.read ();
			
		}
		catch (java.io.FileNotFoundException e1)
		{
			System.out.println("Exception : File not found");
		}
		catch (java.lang.Exception e)
		{
			e.printStackTrace();
		}
		finally
		{
			fileInputStream.close ();		// CORRECTION
		}
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b>Reference not available.
</p>

<h2 id="rule45" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 45: Avoid_instantiation_for_getClass
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>High<br /> <b>Rule:  </b>Do not create instances just to call getClass on it.<br /> <b>Reason:  </b>Do not create instances just to call getClass on it.
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

public class Avoid_instantiation_for_getClass_violation
{
	public void method()
	{
		Class c = (new Avoid_instantiation_for_getClass_violation()).getClass(); // VIOLATION
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

public class Avoid_instantiation_for_getClass_correction
{
	public void method()
	{
		Class c = Avoid_instantiation_for_getClass_correction.class; // CORRECTION
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b><a style="color: #000000;" href="http://java.sun.com/j2se/1.4.2/docs/api/java/lang/Class.html">http://java.sun.com/j2se/1.4.2/docs/api/java/lang/Class.html </a><br /> <a style="color: #000000;" href="http://java.sun.com/docs/books/jls/second_edition/html/expressions.doc.html#251530">http://java.sun.com/docs/books/jls/second_edition/html/expressions.doc.html#251530 </a>
</p>

<h2 id="rule46" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 46: Use_System_arrayCopy
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>Critical<br /> <b>Rule:  </b>Use &#8216;System.arraycopy ()&#8217; instead of a loop to copy array. This rule disallows the copying of arrays inside a loop<br /> <b>Reason:  </b>Use &#8216;System.arraycopy ()&#8217; instead of a loop to copy array. This rule disallows the copying of arrays inside a loop
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;
class Use_System_arrayCopy_violation
{
	public int[] copyArray (int[] array)
	{
		int length = array.length;
		int[] copy = new int [length];
		for(int i=0;i&lt;length;i++)
		{
			copy [i] = array[i];		// VIOLATION
		}
		return copy;
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;
class Use_System_arrayCopy_correction
{
	public int[] copyArray (int[] array)
	{
		final int ZERO = 0;
		int length = array.length;
		int[] copy = new int [length];
		System.arraycopy(array, ZERO, copy, ZERO, length);		// CORRECTION
		return copy;
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b><a style="color: #000000;" href="http://www.cs.cmu.edu/~jch/java/speed.html">http://www.cs.cmu.edu/~jch/java/speed.html </a>
</p>

<h2 id="rule47" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 47: Use_String_length_to_compare_empty_string
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>High<br /> <b>Rule:  </b>The String.equals() method is overkill to test for an empty string. It is quicker to test if the length of the string is 0.<br /> <b>Reason:  </b>The String.equals() method is overkill to test for an empty string. It is quicker to test if the length of the string is 0.
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;
class Use_String_length_to_compare_empty_string_violation
{
	public boolean isDocEmpty()
	{
		return doc.getContents().equals("");		// VIOLATION
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;
class Use_String_length_to_compare_empty_string_correction
{
	public boolean isDocEmpty()
	{
		return doc.getContents().length() == 0;		// CORRECTION
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b><a style="color: #000000;" href="http://www.onjava.com/pub/a/onjava/2002/03/20/optimization.html?page=4">http://www.onjava.com/pub/a/onjava/2002/03/20/optimization.html?page=4 </a><br /> <a style="color: #000000;" href="http://www.javaperformancetuning.com/tips/rawtips.shtml">http://www.javaperformancetuning.com/tips/rawtips.shtml </a>
</p>

<h2 id="rule48" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 48: Use_String_equalsIgnoreCase
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>High<br /> <b>Rule:  </b>Use String.equalsIgnoreCase() method.<br /> <b>Reason:  </b>Use String.equalsIgnoreCase() method.
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

public class Use_String_equalsIgnoreCase_violation
{
	public void method()
	{
		String str = "APPPERFECT";
		String str1 = "appperfect";
	
		if(str1.toUpperCase().equals(str))		// Violation
		{
			System.out.println("Strings are equals");
		}	
	}
		
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

public class Use_String_equalsIgnoreCase_correction
{
	public void method()
	{
		String str = "APPPERFECT";
		String str1 = "appperfect";
	
		if(str1.equalsIgnoreCase(str))		// Correction.
		{
			System.out.println("Strings are equals");
		}	
	}
	
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b>Reference not available.
</p>

<h2 id="rule49" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 49: Place_try_catch_out_of_loop
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>Medium<br /> <b>Rule:  </b>Placing &#8220;try/catch/finally&#8221; blocks inside loops can slow down the execution of code.<br /> <b>Reason:  </b>Placing &#8220;try/catch/finally&#8221; blocks inside loops can slow down the execution of code.
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

import java.io.InputStream;
import java.io.IOException;

class Place_try_catch_out_of_loop_violation
{
	void method (InputStream is)
	 {
		 int ZERO = 0;
		 int TEN = 10;
		 int count = 0;

		 for (int i = ZERO; i &lt; TEN; i++)
		 {
			 try			// VIOLATION
			 {
				 count += is.read();
			 }
			 catch (IOException ioe)
			 {
			 	ioe.printStackTrace();
			 }
		 }
 }
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

import java.io.InputStream;
import java.io.IOException;

class Place_try_catch_out_of_loop_correction
{
  void method (InputStream is)
	 {
		 int ZERO = 0;
		 int TEN = 10;
		 int count = 0;

		 try			// CORRECTION
		 {
			 for (int i = ZERO; i &lt; TEN; i++)
			 {
					 count += is.read ();
			 }
		 }
		 catch (IOException ioe)
		 {
			ioe.printStackTrace();
		 }
 }
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b><a style="color: #000000;" href="http://www.precisejava.com/javaperf/j2se/Loops.htm">http://www.precisejava.com/javaperf/j2se/Loops.htm </a>
</p>

<h2 id="rule50" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 50: Declare_inner_class_static
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>Medium<br /> <b>Rule:  </b>The inner class that doesn&#8217;t require the outer class reference, should be declared static.<br /> <b>Reason:  </b>The inner class that doesn&#8217;t require the outer class reference, should be declared static.
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

public class Declare_inner_class_static_violation
{
	class Declare_inner_class_static_violation_INNER // VIOLATION
	{
		// no reference for Declare_inner_class_static_violation.this or its fields, methods.
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

public class Declare_inner_class_static_correction
{
	static class Declare_inner_class_static_correction_INNER // CORRECTION
	{
		// no reference for Declare_inner_class_static_correction.this or its fields, methods.
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b><a style="color: #000000;" href="http://java.sun.com/docs/books/tutorial/java/javaOO/nested.html">http://java.sun.com/docs/books/tutorial/java/javaOO/nested.html </a><br /> <a style="color: #000000;" href="http://www.builderau.com.au/program/java/0,39024620,39130230,00.htm">http://www.builderau.com.au/program/java/0,39024620,39130230,00.htm </a>
</p>

<h2 id="rule51" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 51: Declare_inner_class_using_outer_class_only_in_constructor_static
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>Medium<br /> <b>Rule:  </b>The inner class which uses outer class in constructor, should be declared static.<br /> <b>Reason:  </b>The inner class which uses outer class in constructor, should be declared static.
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

public class Declare_inner_class_using_outer_class_only_in_constructor_static_violation
{
	int x = 0;
	class Declare_inner_class_using_outer_class_only_in_constructor_static_violation_INNER // VIOLATION
	{
		int x = 0;
		public Declare_inner_class_using_outer_class_only_in_constructor_static_violation_INNER()
		{
			x = Declare_inner_class_using_outer_class_only_in_constructor_static_violation.this.x;		
		}			
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

public class Declare_inner_class_using_outer_class_only_in_constructor_static_correction
{
	int x = 0;		
	static class Declare_inner_class_using_outer_class_only_in_constructor_static_correction_INNER // CORRECTION
	{
		public Declare_inner_class_using_outer_class_only_in_constructor_static_correction_INNER(Declare_inner_class_using_outer_class_only_in_constructor_static_correction outer)
		{
			this.x = outer.x;
		}
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b>Reference not available.
</p>

<h2 id="rule52" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 52: Avoid_nested_Synchronized_blocks
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>Critical<br /> <b>Rule:  </b>Avoid nested Synchronized blocks to improve performance<br /> <b>Reason:  </b>Avoid nested Synchronized blocks to improve performance
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;
class Avoid_nested_synchronized_blocks_violation
{
	public void doTest()
	{
		//......
		synchronized (getClass())
		{
			//.....
			synchronized (this)	// VIOLATION
			{
				//.....
			}
			//.....
		}
		//......
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">Avoid nested synchronized blocks.</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b><a style="color: #000000;" href="http://www.darrenhobbs.com/archives/000448.html">http://www.darrenhobbs.com/archives/000448.html </a>
</p>

<h2 id="rule53" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 53: Avoid_empty_try_blocks
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>Low<br /> <b>Rule:  </b>Avoid empty &#8220;try&#8221; block structure.<br /> <b>Reason:  </b>Avoid empty &#8220;try&#8221; block structure.
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

class Avoid_empty_try_blocks_violation
{
	void method (int i, int j)
	{
		try			// VIOLATION
		{
		}
		catch(ArithmeticException ae)
		{
			i = j;
			ae.printStackTrace();
		}
	}

}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

class Avoid_empty_try_blocks_correction
{
	void method (int i, int j)
	{
		/*
		try			// CORRECTION
		{
		}
		catch(ArithmeticException ae)
		{
			i = j;
			ae.printStackTrace();
		}
		*/
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b>Reference Not Available.
</p>

<h2 id="rule54" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 54: Declare_accessor_methods_final
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>High<br /> <b>Rule:  </b>Declare accessor methods for instance fields as &#8220;final&#8221;.<br /> <b>Reason:  </b>Declare accessor methods for instance fields as &#8220;final&#8221;.
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

public class Decalre_accessor_methods_final_violation
{
	private String name;
	public String getName()		// VIOLATION
	{
		return name;
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

public class Decalre_accessor_methods_final_correction
{
	private String name;
	public final String getName()		// CORRECTION
	{
		return name;
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b><a style="color: #000000;" href="http://ccm.redhat.com/doc/core-platform/5.0/engineering-standards/s1-performance-optimization.html">http://ccm.redhat.com/doc/core-platform/5.0/engineering-standards/s1-performance-optimization.html </a>
</p>

<h2 id="rule55" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 55: Use_batch_update_for_sql_queries
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>Critical<br /> <b>Rule:  </b>Instead of calling executeUpdate, use executeBatch.<br /> <b>Reason:  </b>Instead of calling executeUpdate, use executeBatch.
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

import java.sql.Connection;
import java.sql.Statement;

public class Use_batch_update_for_sql_queries_violation
{
	public void method(Connection conn) throws Exception
	{
		String[] queries = new String[] {"query1", "query2", "query3"};
		Statement stmt = conn.createStatement();
		for (int i = 0; i &lt; queries.length; i++)
		{
			stmt.executeUpdate(queries[i]); // VIOLATION
		}
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

import java.sql.Connection;
import java.sql.Statement;

public class Use_batch_update_for_sql_queries_correction
{
	public void method(Connection conn) throws Exception
	{
		String[] queries = new String[] {"query1", "query2", "query3"};
		Statement stmt = conn.createStatement();
		for (int i = 0; i &lt; queries.length; i++)
		{
			stmt.addBatch(queries[i]); // CORRECTION
		}
		stmt.executeBatch();
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b><a style="color: #000000;" href="http://java.sun.com/docs/books/tutorial/jdbc/jdbc2dot0/batchupdates.html">http://java.sun.com/docs/books/tutorial/jdbc/jdbc2dot0/batchupdates.html </a>
</p>

<h2 id="rule56" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 56: Declare_private_constant_fields_final
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>Medium<br /> <b>Rule:  </b>A private constant fields should be declared final for performance reasons<br /> <b>Reason:  </b>A private constant fields should be declared final for performance reasons
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

class Declare_private_constant_fields_final_violation
{
	private int i = 5;  // VIOLATION
	public void method()
	{
		int j = i;
		j = j + i;
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

class Declare_private_constant_fields_final_correction
{
	private final int i = 5;  // CORRECTION
	public void method()
	{
		int j = i;
		j = j + i;
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b>Reference Not Available.
</p>

<h2 id="rule57" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 57: Always_declare_constant_local_variables_final
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>Medium<br /> <b>Rule:  </b>A constant local variable should be declared final for performance reasons<br /> <b>Reason:  </b>A constant local variable should be declared final for performance reasons
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">public class Test 
{
 private int foo (int x) 
{
		int size = 5;  // VIOLATION
  	return size + x;
 }
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">public class Test 
{
 private int foo (int x) 
{
		final int size = 5;  // FIXED
  	return size + x;
 }
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b>Not available.
</p>

<h2 id="rule58" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 58: Reduce_number_of_exception_creations
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>Low<br /> <b>Rule:  </b>Reduce number of exception creations for performace reasons<br /> <b>Reason:  </b>Reduce number of exception creations for performace reasons
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">class Reduce_number_of_exception_creations_violation
{

	public static final int TEN = 10;
	
	
	public void method() throws Exception
	{
		if(true)
		{
			throw new Exception("1");
		}
		if(true)
		{
			throw new Exception("2");
		}
		if(true)
		{
			throw new Exception("3");
		}
		if(true)
		{
			throw new Exception("4");
		}
		if(true)
		{
			throw new Exception("5");
		}
		if(true)
		{
			throw new Exception("6");
		}
		if(true)
		{
			throw new Exception("7");
		}
		if(true)
		{
			throw new Exception("8");
		}
		if(true)
		{
			throw new Exception("9");
		}
		if(true)
		{
			throw new Exception("10");
		}
		if(true)
		{
			throw new Exception("11");// VIOLATION, it is the 11th exception.
		}
	}
	
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">class Reduce_number_of_exception_creations_correction
{

	public static final int TEN = 10;
	
	
	public void method() throws Exception
	{
		if(true)
		{
			throw new Exception("1");
		}
		if(true)
		{
			throw new Exception("2");
		}
		if(true)
		{
			throw new Exception("3");
		}
		if(true)
		{
			throw new Exception("4");
		}
		if(true)
		{
			throw new Exception("5");
		}
		if(true)
		{
			throw new Exception("6");
		}
		if(true)
		{
			throw new Exception("7");
		}
		if(true)
		{
			throw new Exception("8");
		}
		if(true)
		{
			throw new Exception("9");
		}
		if(true)
		{
			throw new Exception("10");
		}
		// CORRECTION.
	}
	
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b><a style="color: #000000;" href="http://ccm.redhat.com/doc/core-platform/5.0/engineering-standards/performance-optimization.html">http://ccm.redhat.com/doc/core-platform/5.0/engineering-standards/performance-optimization.html </a>
</p>

<h2 id="rule59" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 59: Reduce_switch_density
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>Medium<br /> <b>Rule:  </b>Reduce switch density for performance reasons.<br /> <b>Reason:  </b>Reduce switch density for performance reasons.
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

public class Reduce_switch_density_violation
{
	public void method()
	{
		switch (x)	// Violation.
		{
			 case 1:
			 {
				 if(status)
				 {
					// More Statements					
				 }
			  	 break;
			 }
			 case 2:
			 {
		 	 	// More Statements		 	 	
				break;
			 }
			 default :
			 {
			 
			 }
		}
	}
		
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

public class Reduce_switch_density_correction
{
	public void method()
	{
		switch (x)			//Correction.
		{
			 case 1:
			 {
				 if(status)
				 {
					method1();					
				 }
			  	 break;
			 }
			 case 2:
			 {
				method2();
		 	 	
				break;
			 }
			 default :
			 {
			 
			 }
		}
		i--;	
	}
	public method1()
	{
		// Do Something.
	}
	public method2()
	{
		// Do Something.
	}
	
	
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b>Reference not available.
</p>

<h2 id="rule60" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 60: Avoid_empty_loops
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>Low<br /> <b>Rule:  </b>Avoid empty loops.<br /> <b>Reason:  </b>Avoid empty loops.
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

class Avoid_empty_loops_violation
{
	public void method()
	{
		int i = -5;
		final int ZERO = 0;
		final int NEGATIVE = -1;

		while (i &lt; ZERO)		// VIOLATION
		{
		}

		i = NEGATIVE;

		for(;i &lt; ZERO;)		// VIOLATION
		{
		}
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

class Avoid_empty_loops_correction
{

	public void method()
	{
		int i = -5;
		final int ZERO = 0;
		final int NEGATIVE = -1;

		/*
		while (i &lt; ZERO)		// CORRECTION
		{
		}
		*/

		i = NEGATIVE;

		/*
		for(;i &lt; ZERO;)		// CORRECTION
		{
		}
		*/
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b>Reference Not Available.
</p>

<h2 id="rule61" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 61: Avoid_new_Integer_toString
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>High<br /> <b>Rule:  </b>Avoid creating objects of primitive types to call the toString() method instead use valueOf(&#8230;) in String class to convert primitive types into their String equivalent.<br /> <b>Reason:  </b>Avoid creating objects of primitive types to call the toString() method instead use valueOf(&#8230;) in String class to convert primitive types into their String equivalent.
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

class Avoid_new_Integer_toString_violation
{
	public void print()
	{
		String str = new Integer(1).toString();		// VIOLATION
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

class Avoid_new_Integer_toString_correction
{
	public void print()
	{
		String str = String.valueOf(1);		// CORRECTION
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b>Reference Not Available.
</p>

<h2 id="rule62" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 62: Avoid_passing_primitive_int_to_Integer_constructor
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>High<br /> <b>Rule:  </b>Avoid creating objects of primitive types using the constructor.<br /> <b>Reason:  </b>Avoid creating objects of primitive types using the constructor.
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">public class Test
{
	public void fubar()
	{
		Integer i = new Integer(3); // VIOLATION
		//...
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">public class Test
{
	public void fubar()
	{
		Integer i = Integer.valueOf(3); // FIXED
		//...
	}	
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b>Not Available.
</p>

<h2 id="rule63" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 63: Avoid_passing_primitive_long_to_Long_constructor
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>High<br /> <b>Rule:  </b>Avoid creating objects of primitive types using the constructor.<br /> <b>Reason:  </b>Avoid creating objects of primitive types using the constructor.
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">public class Test
{
	public void fubar()
	{
		Long i = new Long(3); // VIOLATION
		//...
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">public class Test
{
	public void fubar()
	{
		Long i = Long.valueOf(3); // FIXED
		//...
	}	
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b>Not Available.
</p>

<h2 id="rule64" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 64: Avoid_passing_primitive_double_to_Double_constructor
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>High<br /> <b>Rule:  </b>Avoid creating objects of primitive types using the constructor.<br /> <b>Reason:  </b>Avoid creating objects of primitive types using the constructor.
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">public class Test
{
	public void fubar()
	{
		Double i = new Double(3.0); // VIOLATION
		//...
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">public class Test
{
	public void fubar()
	{
		Double i = Double.valueOf(3.0); // FIXED
		//...
	}	
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b>Not Available.
</p>

<h2 id="rule65" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 65: Avoid_passing_primitive_short_to_Short_constructor
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>High<br /> <b>Rule:  </b>Avoid creating objects of primitive types using the constructor.<br /> <b>Reason:  </b>Avoid creating objects of primitive types using the constructor.
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">public class Test
{
	public void fubar()
	{
		Short i = new Short(3); // VIOLATION
		//...
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">public class Test
{
	public void fubar()
	{
		Short i = Short.valueOf(3); // FIXED
		//...
	}	
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b>Not Available.
</p>

<h2 id="rule66" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 66: Avoid_passing_primitive_byte_to_Byte_constructor
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>High<br /> <b>Rule:  </b>Avoid creating objects of primitive types using the constructor.<br /> <b>Reason:  </b>Avoid creating objects of primitive types using the constructor.
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">public class Test
{
	public void fubar()
	{
		Byte i = new Byte(3); // VIOLATION
		//...
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">public class Test
{
	public void fubar()
	{
		Byte i = Byte.valueOf(3); // FIXED
		//...
	}	
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b>Not Available.
</p>

<h2 id="rule67" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 67: Avoid_passing_primitive_char_to_Character_constructor
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>High<br /> <b>Rule:  </b>Avoid creating objects of primitive types using the constructor.<br /> <b>Reason:  </b>Avoid creating objects of primitive types using the constructor.
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">public class Test
{
	public void fubar()
	{
		Character i = new Character('a'); // VIOLATION
		//...
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">public class Test
{
	public void fubar()
	{
		Character i = Character.valueOf('a'); // FIXED
		//...
	}	
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b>Not Available.
</p>

<h2 id="rule68" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 68: Avoid_using_String_toString
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>High<br /> <b>Rule:  </b>Avoid calling toString() on Strings.Instead use String.<br /> <b>Reason:  </b>Avoid calling toString() on Strings.Instead use String.
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

class Avoid_using_String_toString
{
	public void print()
	{
		String str="AppPerfect";

		System.out.println(str.toString());		// Violation.
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

class Avoid_using_String_toString
{
	public void print()
	{
		String str="AppPerfect";

		System.out.println(str);		// Correction
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b>Reference Not Available.
</p>

<h2 id="rule69" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 69: Avoid_unnecessary_substring
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>High<br /> <b>Rule:  </b>Avoid using String.substring(0).<br /> <b>Reason:  </b>Avoid using String.substring(0).
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

public class Avoid_unnecessary_substring_violation
{
	public void method()
	{
		String str="AppPerfect";

		String str1 = str.substring(0);		// Violation.
	}
		
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

public class Avoid_unnecessary_substring_correction
{
	public void method()
	{
		String str="AppPerfect";

		String str1 = str;		//Correction.		
	}
	
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b>Reference not available.
</p>

<h2 id="rule70" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 70: Use_toArray_with_array_as_parameter
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>High<br /> <b>Rule:  </b>Use toArray(Object[] ) instead of toArray() on collection.<br /> <b>Reason:  </b>Use toArray(Object[] ) instead of toArray() on collection.
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

import java.util.Collection;
import java.util.List;
import java.util.ArrayList;

class Use_toArray_with_array_as_parameter
{
	public void print()
	{
		Collection c = new ArrayList();
		
		c.add("AppPerfect");
		c.add("TestStudio");

		Object[] obj  = c.toArray();		// Violation
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

import java.util.Collection;
import java.util.List;
import java.util.ArrayList;

class Use_toArray_with_array_as_parameter
{
	public void print()
	{
		Collection c = new ArrayList();
		
		c.add("AppPerfect");
		c.add("TestStudio");
			
		String[] x = (String[]) c.toArray(new String[2]);		//Correction
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b>Reference Not Available.
</p>

<h2 id="rule71" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 71: Do_lazy_initialization
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>High<br /> <b>Rule:  </b>Do Lazy initialization.<br /> <b>Reason:  </b>Do Lazy initialization.
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

public class Do_lazy_initialization_violation
{
	private Do_lazy_initialization_violation  instance  =  new Do_lazy_initialization_violation();  //Violation
	
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

public class Do_lazy_initialization_correction
{
	private Do_lazy_initialization_violation instance;
	
	public Do_lazy_initialization_violation getInstance()
	{
		if(doLazy == null)
			instance  =  new Do_lazy_initialization_violation();  // Correction
		return instance;
	}
	
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b><a style="color: #000000;" href="http://www.javapractices.com/Topic34.cjp">http://www.javapractices.com/Topic34.cjp </a>
</p>

<h2 id="rule72" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 72: Avoid_using_Thread_yield
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>Medium<br /> <b>Rule:  </b>Avoid using Thread.yield().<br /> <b>Reason:  </b>Avoid using Thread.yield().
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;
public class Avoid_using_Thread_yield_violation
{
	public void method()
	{
		//......
		Thread.yield(); // VIOLATION
		//......
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;
public class Avoid_using_Thread_yield_correction
{
	public void method()
	{
		//......
		this.wait(); // CORRECTION
		//......
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b><a style="color: #000000;" href="http://forum.java.sun.com/thread.jspa?threadID=167194&messageID=2645189">http://forum.java.sun.com/thread.jspa?threadID=167194&messageID=2645189 </a>
</p>

<h2 id="rule73" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 73: Avoid_unread_fields
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>Medium<br /> <b>Rule:  </b>Avoid unread fields.<br /> <b>Reason:  </b>Avoid unread fields.
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

public class Avoid_unread_fields_violation
{
	private static String name = "AppPerfect";		//Violation.
	private static int i = 10;
	
	public static void method()
	{
		name = "AppPerfect USA";
		System.out.println(i);
	}
		
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;"></pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b>Reference not available.
</p>

<h2 id="rule74" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 74: Avoid_equality_with_boolean
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>Medium<br /> <b>Rule:  </b>Avoid comparing a boolean with &#8220;true&#8221;.<br /> <b>Reason:  </b>Avoid comparing a boolean with &#8220;true&#8221;.
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

class Avoid_equality_with_boolean_violation
{
	boolean method(String value)
	{
		boolean b = false;
		String str = "S";

		if (value.endsWith(str) == true)		// VIOLATION
		{
			b = true;
		}

		return b;
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

class Avoid_equality_with_boolean_correction
{
	boolean method(String value)
	{
		boolean b = false;
		String str = "S";
		//....
		//........
		if ( value.endsWith(str) )		// CORRECTION
		{
			b = true;
		}

		return b;
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b>Reference Not Available.
</p>

<h2 id="rule75" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 75: Avoid_startsWith
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>Critical<br /> <b>Rule:  </b>Avoid calling String.startsWith() for performance reasons<br /> <b>Reason:  </b>Avoid calling String.startsWith() for performance reasons
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;
class Avoid_startsWith_violation
{
	public void method()
	{
		String sTemp="Data";
		if (sTemp.startsWith("D")) // VIOLATION
		{
			sTemp = "data";
		}
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

class Avoid_startsWith_correction
{
	public void method()
	{
		final int ZERO = 0;
		final char D = 'D';
		String sTemp="Data"; 

		if (sTemp.length () &gt; ZERO && sTemp.charAt(ZERO) == D)  // CORRECTION
		{
			sTemp = "data"; 
		}
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b><a style="color: #000000;" href="http://www.javacommerce.com/displaypage.jsp?name=java_performance.sql&id=18264">http://www.javacommerce.com/displaypage.jsp?name=java_performance.sql&id=18264 </a>
</p>

<h2 id="rule76" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 76: Avoid_readByte_method_in_loop
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>High<br /> <b>Rule:  </b>Avoid reading single byte in loop<br /> <b>Reason:  </b>Avoid reading single byte in loop
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

class Avoid_readByte_method_in_loop_violation
{
	public static void main(String args[])
	{
		String strFilePath = "c:\temp.java"; //$NON-NLS-1$
		final int ZERO = 0;
		final int TEN = 10;

		try
		{

			java.io.FileInputStream fis = new java.io.FileInputStream(strFilePath);
			java.io.DataInputStream ds = new java.io.DataInputStream(fis);

			int i = ZERO;
			while(i &lt; TEN)
			{
				ds.readByte();		// VIOLATION
				i++;
			}

			for(i=ZERO; i&lt;TEN; i++)
			{
				ds.readByte();		// VIOLATION
			}

			i = ZERO;

			do
			{
				ds.readByte();		// VIOLATION
				i++;
			}
			while(i&lt;TEN);
		}
		catch(java.io.IOException e)
		{
			e.printStackTrace();
		}
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

class Avoid_readByte_method_in_loop_correction
{
	public static void main(String args[])
	{

		final int TEN = 10;
		byte bArr[] = new byte[TEN];
		String strFilePath = "c:\temp.java"; //$NON-NLS-1$

		try
		{
			java.io.FileInputStream fis = new java.io.FileInputStream(strFilePath);
			java.io.DataInputStream ds = new java.io.DataInputStream(fis);

			ds.read(bArr);		// CORRECTION

		}
		catch(java.io.IOException e)
		{
			e.printStackTrace();
		}
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b>Reference Not Available.
</p>

<h2 id="rule77" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 77: Avoid_instantiation_of_boolean
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>High<br /> <b>Rule:  </b>Avoid instantiation of Boolean instead use the static constants defined in Boolean class.<br /> <b>Reason:  </b>Avoid instantiation of Boolean instead use the static constants defined in Boolean class.
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

class Avoid_instantiation_of_boolean_violation
{
	public Boolean method()
	{
		Boolean b = new Boolean(true);		// VIOLATION
		return b;
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

class Avoid_instantiation_of_boolean_correction
{
	public Boolean method()
	{
		Boolean b = Boolean.TRUE;		// CORRECTION
		return b;
 }
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b>Reference Not Available.
</p>

<h2 id="rule78" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 78: Avoid_Synchronized_blocks
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>Critical<br /> <b>Rule:  </b>Do not use synchronized blocks to avoid synchronization overheads<br /> <b>Reason:  </b>Do not use synchronized blocks to avoid synchronization overheads
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;
class Avoid_synchronized_blocks_violation
{
	public void doTest()
	{
		synchronized (getClass())	// VIOLATION
		{
			//.....
		}
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

class Avoid_synchronized_blocks_correction
{
	public synchronized void doTest()	// CORRECTION
	{
		//.....
	}

}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b><a style="color: #000000;" href="http://www-2.cs.cmu.edu/~jch/java/speed.html">http://www-2.cs.cmu.edu/~jch/java/speed.html </a>
</p>

<h2 id="rule79" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 79: Declare_package_private_method_final
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>Medium<br /> <b>Rule:  </b>A package-private method that is not overridden should be declared final.<br /> <b>Reason:  </b>A package-private method that is not overridden should be declared final.
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

class Declare_package_private_method_final_violation
{
	void method()		// VIOLATION
	{
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

class Declare_package_private_method_final_correction
{
	final void method()	// CORRECTION
	{
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b><a style="color: #000000;" href="http://www.javaworld.com/javaworld/jw-12-1998/jw-12-securityrules_p.html">http://www.javaworld.com/javaworld/jw-12-1998/jw-12-securityrules_p.html </a>
</p>

<h2 id="rule80" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 80: Declare_public_or_protected_method_final
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>Medium<br /> <b>Rule:  </b>It optimizes the code and makes the code self documenting.<br /> <b>Reason:  </b>It optimizes the code and makes the code self documenting.
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">class Declare_public_or_protected_method_final_violation
{
	public void method()		// VIOLATION
	{
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">class Declare_public_or_protected_method_final_correction
{
	public final void method()	// CORRECTION
	{
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b><a style="color: #000000;" href="http://www.javaworld.com/javaworld/jw-12-1998/jw-12-securityrules_p.html">http://www.javaworld.com/javaworld/jw-12-1998/jw-12-securityrules_p.html </a>
</p>

<h2 id="rule81" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 81: Declare_public_or_protected_class_final
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>Medium<br /> <b>Rule:  </b>It optimizes the code and makes the code self documenting.<br /> <b>Reason:  </b>It optimizes the code and makes the code self documenting.
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">public class Test // VIOLATION
{
	public void fubar()
	{
		//....
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">public final class Test // FIXED
{
	public void fubar()
	{
		//....
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b><a style="color: #000000;" href="http://www.javaworld.com/javaworld/jw-12-1998/jw-12-securityrules_p.html">http://www.javaworld.com/javaworld/jw-12-1998/jw-12-securityrules_p.html </a>
</p>

<h2 id="rule82" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 82: Use_array_of_primitive_type_insteadof_collection
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>Medium<br /> <b>Rule:  </b>Instead of using some &#8216;Collection&#8217; for wrapper classes of primitive types, use arrays of primitive types.<br /> <b>Reason:  </b>Instead of using some &#8216;Collection&#8217; for wrapper classes of primitive types, use arrays of primitive types.
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

import java.util.Vector;

public class Use_array_of_primitive_type_insteadof_collection_violation
{
	public void method()
	{
		Vector vInt = new Vector(); // VIOLATION
		vInt.add(new Integer(1));
		vInt.add(new Integer(2));
		vInt.add(new Integer(3));
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

public class Use_array_of_primitive_type_insteadof_collection_correction
{
	public void method()
	{
		int[] arrInt = new int[3]; // CORRECTION
		arrInt[0] = 1;
		arrInt[1] = 2;
		arrInt[2] = 3;
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b>No reference available.
</p>

<h2 id="rule83" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 83: Avoid_using_Double_toString
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>High<br /> <b>Rule:  </b>Avoid using Double toString for performance reasons<br /> <b>Reason:  </b>Avoid using Double toString for performance reasons
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;
class Avoid_using_Double_toString_violation
{
	public void method(double d)
	{
		String dStr = Double.toString(d);		// VIOLATION
		System.out.println(dStr);
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">Avoid Using Double.toString() instead use custom conversion algorithm.</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b><a style="color: #000000;" href="http://www.onjava.com/pub/a/onjava/2000/12/15/formatting_doubles.html">http://www.onjava.com/pub/a/onjava/2000/12/15/formatting_doubles.html </a>
</p>

<h2 id="rule84" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 84: Avoid_debugging_code
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>Low<br /> <b>Rule:  </b>Avoid debugging code.<br /> <b>Reason:  </b>Avoid debugging code.
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

public void Avoid_debugging_code_violation
{
	private int count =0;
	public int getCount()
	{
		//...
		System.out.println("count ="+count);  // Violation
		return count;
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

public void Avoid_debugging_code_correction
{
	private int count =0;
	public int getCount()
	{
		if (Debug.ON) 
		{
			System.out.println("count ="+count);  //correction
		}
		return count;
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b><a style="color: #000000;" href="http://www.rgagnon.com/javadetails/java-0130.html">http://www.rgagnon.com/javadetails/java-0130.html </a>
</p>

<h2 id="rule85" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 85: Avoid_using_Thread_dumpStack
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>Low<br /> <b>Rule:  </b>Avoid using Thread.dumpStack() in production code since it is typically associated at the time of manual profiling activities.<br /> <b>Reason:  </b>Avoid using Thread.dumpStack() in production code since it is typically associated at the time of manual profiling activities.
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">public class Test 
{
	public static void main( String[] args ) 
	{
		for ( int i = 0; i &lt; args.length; i++ ) 
		{
			System.out.println( args[ i ] );
		}
		Thread.dumpStack(); // VIOLATION
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">Use some profiling tool instead.</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b>No references available.
</p>

<h2 id="rule86" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 86: Avoid_using_java_lang_Runtime_freeMemory
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>Low<br /> <b>Rule:  </b>Avoid using java.lang.Runtime.freeMemory() in production code since it is typically associated at the time of manual profiling activities.<br /> <b>Reason:  </b>Avoid using java.lang.Runtime.freeMemory() in production code since it is typically associated at the time of manual profiling activities.
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">public class Test 
{
	public static void main(String[] args) 
	{
		System.out.println( Runtime.getRuntime().freeMemory() ); // VIOLATION
		int[] values = new int[ args.length ];
		for ( int i = 0; i &lt; values.length; i++ ) 
		{
			values[ i ] = Integer.parseInt( args[ i ] );
		}
		System.out.println( Runtime.getRuntime().freeMemory() ); // VIOLATION
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">Use some profiling tool instead.</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b>No references available.
</p>

<h2 id="rule87" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 87: Avoid_using_java_lang_Runtime_totalMemory
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>Low<br /> <b>Rule:  </b>Avoid using java.lang.Runtime.totalMemory() in production code since it is typically associated at the time of manual profiling activities.<br /> <b>Reason:  </b>Avoid using java.lang.Runtime.totalMemory() in production code since it is typically associated at the time of manual profiling activities.
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">public class Test 
{
	public static void main(String[] args) 
	{
		System.out.println( Runtime.getRuntime().totalMemory() ); // VIOLATION
		int[] values = new int[ args.length ];
		for ( int i = 0; i &lt; values.length; i++ ) 
		{
			values[ i ] = Integer.parseInt( args[ i ] );
		}
		System.out.println( Runtime.getRuntime().totalMemory() ); // VIOLATION
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">Use some profiling tool instead.</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b>No references available.
</p>

<h2 id="rule88" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 88: Avoid_using_java_lang_Runtime_traceInstructions
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>Low<br /> <b>Rule:  </b>Avoid using java.lang.Runtime.traceInstructions(boolean on) in production code since it is typically associated at the time of manual profiling activities.<br /> <b>Reason:  </b>Avoid using java.lang.Runtime.traceInstructions(boolean on) in production code since it is typically associated at the time of manual profiling activities.
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">public class Test 
{
	public static void main(String[] args) 
	{
		Runtime.getRuntime().traceInstructions(true); // VIOLATION
		traced();
	}

	private static void traced() 
	{
		System.out.println( "Traced" );  //$NON-NLS-1$
	}

}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">Use some profiling tool instead.</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b>No references available.
</p>

<h2 id="rule89" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 89: Avoid_using_java_lang_Runtime_traceMethodCalls
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>Low<br /> <b>Rule:  </b>Avoid using java.lang.Runtime.traceMethodCalls(boolean on) in production code since it is typically associated at the time of manual profiling activities.<br /> <b>Reason:  </b>Avoid using java.lang.Runtime.traceMethodCalls(boolean on) in production code since it is typically associated at the time of manual profiling activities.
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">public class Test 
{
	public static void main(String[] args) 
	{
		Runtime.getRuntime().traceMethodCalls(true); // VIOLATION
		traced();
	}

	private static void traced() 
	{
		System.out.println( "Traced" );  //$NON-NLS-1$
	}

}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">Use some profiling tool instead.</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b>No references available.
</p>

<h2 id="rule90" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 90: Avoid_using_java_lang_Class_getMethod
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>Low<br /> <b>Rule:  </b>Instead of hardcoding the method name, directly invoking the method would improve performance and reduce the chances of possible bugs.<br /> <b>Reason:  </b>Instead of hardcoding the method name, directly invoking the method would improve performance and reduce the chances of possible bugs.
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

public class Test 
{
	public static void main(String[] args)
	{
		try 
		{
			Method method = GetMethod.class.getMethod( "setValue", new Class[] { int.class } ); // VIOLATION  //$NON-NLS-1$
			GetMethod obj = new GetMethod();
			method.invoke( obj, new Object[] {new Integer(1)} );
					System.out.println( obj.getValue() );
		}
		catch (IllegalAccessException e) 
		{
			System.out.println( "Can't access private method 'getValue'"); //$NON-NLS-1$
		} 
		catch (InvocationTargetException e1) 
		{
			System.out.println( "Problem calling method" ); //$NON-NLS-1$
		} 
		catch (NoSuchMethodException e2) 
		{
			System.out.println( "No method getValue"); //$NON-NLS-1$
		}
	}
}

class GetMethod
{
	public void setValue( int value ) 
	{
		this.value = value;
	}

	public int getValue() 
	{
		return value;
	}

	private int value;
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">public class Test 
{
	public static void main(String[] args)
	{
		GetMethod obj = new GetMethod();
		obj.setValue(1); // CORRECTION
		System.out.println( obj.getValue() );
	}
}

class GetMethod
{
	public void setValue( int value ) 
	{
		this.value = value;
	}

	public int getValue() 
	{
		return value;
	}

	private int value;
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b>No references available.
</p>

<h2 id="rule91" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 91: Avoid_using_java_lang_Class_getField
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>Low<br /> <b>Rule:  </b>Instead of hardcoding the field name, directly accessing the field would improve performance and reduce the chances of possible bugs.<br /> <b>Reason:  </b>Instead of hardcoding the field name, directly accessing the field would improve performance and reduce the chances of possible bugs.
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">import java.lang.reflect.Field;


public class Test 
{

	public static void main(String[] args)
	{
		try 
		{
			Field field = GetField.class.getField( "value" );  // VIOLATION //$NON-NLS-1$
			GetField obj = new GetField();
			field.set( obj, new Integer( 1 ) );
			System.out.println( obj.getValue() );
		} 
		catch (SecurityException e) 
		{
			System.out.println( "Can't access field 'value'"); //$NON-NLS-1$
		} 
		catch (NoSuchFieldException e1) 
		{
			System.out.println( "No field 'value'"); //$NON-NLS-1$
		} 
		catch (IllegalArgumentException e2) 
		{
			System.out.println( e2.getMessage() );
		} 
		catch (IllegalAccessException e3) 
		{
			System.out.println( "Can't access private field 'value'" ); //$NON-NLS-1$
		}
	}

}


class GetField
{
	public int value;
	
	public void setValue( int value ) 
	{
		this.value = value;
	}

	public int getValue() 
	{
		return value;
	}
	
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">public class Test 
{

	public static void main(String[] args)
	{
		GetField obj = new GetField();
		obj.setValue(1);
		System.out.println( obj.getValue() );
	}

}


class GetField
{
	public int value;
	
	public void setValue( int value ) 
	{
		this.value = value;
	}

	public int getValue() 
	{
		return value;
	}
	
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b>No references available.
</p>

<h2 id="rule92" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 92: Avoid_using_java_lang_Class_getDeclaredMethod
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>Low<br /> <b>Rule:  </b>Instead of hardcoding the method name, directly invoking the method would improve performance and reduce the chances of possible bugs.<br /> <b>Reason:  </b>Instead of hardcoding the method name, directly invoking the method would improve performance and reduce the chances of possible bugs.
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

public class Test 
{
	public static void main(String[] args)
	{
		try 
		{
			Method method = GetMethod.class.getDeclaredMethod( "setValue", new Class[] { int.class } ); // VIOLATION  //$NON-NLS-1$
			GetMethod obj = new GetMethod();
			method.invoke( obj, new Object[] {new Integer(1)} );
					System.out.println( obj.getValue() );
		}
		catch (IllegalAccessException e) 
		{
			System.out.println( "Can't access private method 'getValue'"); //$NON-NLS-1$
		} 
		catch (InvocationTargetException e1) 
		{
			System.out.println( "Problem calling method" ); //$NON-NLS-1$
		} 
		catch (NoSuchMethodException e2) 
		{
			System.out.println( "No method getValue"); //$NON-NLS-1$
		}
	}
}

class GetMethod
{
	public void setValue( int value ) 
	{
		this.value = value;
	}

	public int getValue() 
	{
		return value;
	}

	private int value;
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">public class Test 
{
	public static void main(String[] args)
	{
		GetMethod obj = new GetMethod();
		obj.setValue(1); // CORRECTION
		System.out.println( obj.getValue() );
	}
}

class GetMethod
{
	public void setValue( int value ) 
	{
		this.value = value;
	}

	public int getValue() 
	{
		return value;
	}

	private int value;
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b>No references available.
</p>

<h2 id="rule93" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 93: Avoid_using_java_lang_Class_getDeclaredField
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>Low<br /> <b>Rule:  </b>Instead of hardcoding the field name, directly accessing the field would improve performance and reduce the chances of possible bugs.<br /> <b>Reason:  </b>Instead of hardcoding the field name, directly accessing the field would improve performance and reduce the chances of possible bugs.
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">import java.lang.reflect.Field;

public class Test 
{

	public static void main(String[] args)
	{
		try 
		{
			Field field = GetField.class.getDeclaredField( "value" );  // VIOLATION //$NON-NLS-1$
			GetField obj = new GetField();
			field.set( obj, new Integer( 1 ) );
			System.out.println( obj.getValue() );
		} 
		catch (SecurityException e) 
		{
			System.out.println( "Can't access field 'value'"); //$NON-NLS-1$
		} 
		catch (NoSuchFieldException e1) 
		{
			System.out.println( "No field 'value'"); //$NON-NLS-1$
		} 
		catch (IllegalArgumentException e2) 
		{
			System.out.println( e2.getMessage() );
		} 
		catch (IllegalAccessException e3) 
		{
			System.out.println( "Can't access private field 'value'" ); //$NON-NLS-1$
		}
	}

}


class GetField
{
	public int value;
	
	public void setValue( int value ) 
	{
		this.value = value;
	}

	public int getValue() 
	{
		return value;
	}
	
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">public class Test 
{

	public static void main(String[] args)
	{
		GetField obj = new GetField();
		obj.setValue(1);
		System.out.println( obj.getValue() );
	}

}


class GetField
{
	public int value;
	
	public void setValue( int value ) 
	{
		this.value = value;
	}

	public int getValue() 
	{
		return value;
	}
	
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b>No references available.
</p>

<h2 id="rule94" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 94: Always_Access_Fields_In_Same_Class_Directly
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>Medium<br /> <b>Rule:  </b>Avoid accessing fields in the same class through accessor methods.<br /> <b>Reason:  </b>Avoid accessing fields in the same class through accessor methods.
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">class Always_Access_Fields_In_SameClass_Directly_Violation
{
	boolean bModified = false;

	public boolean isModified()
	{
		return bModified;
	}

	public void save()
	{
		if (isModified()) //violation
		{
			//..save
		}
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">class Always_Access_Fields_In_SameClass_Directly_Correction
	{
		boolean bModified = false;
	
		public boolean isModified()
		{
			return bModified;
		}
	
		public void save()
		{
			if (bModified) //correction
			{
				//..save
			}
		}
	}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b>No reference
</p>

<h2 id="rule95" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 95: Use_arrayList_inplace_of_vector
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>Medium<br /> <b>Rule:  </b>Use &#8216;ArrayList&#8217; in place of &#8216;Vector&#8217; wherever possible ArrayList is faster than Vector except when there is no lock acquisition required in HotSpot JVMs (when they have about the same performance)<br /> <b>Reason:  </b>Use &#8216;ArrayList&#8217; in place of &#8216;Vector&#8217; wherever possible ArrayList is faster than Vector except when there is no lock acquisition required in HotSpot JVMs (when they have about the same performance)
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;
import java.util.Vector;

class Use_arrayList_inplace_of_vector_violation
{
  final int SIZE = 10;
  private Vector v = new Vector(SIZE);		// VIOLATION

  public int method()
  {
	 	return v.size();
	 }
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;
import java.util.ArrayList;
class Use_arrayList_inplace_of_vector_correction
{
	final int SIZE = 10;
	private ArrayList al = new ArrayList(SIZE);		// CORRECTION

	public int method()
	{
		return al.size();
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b>www.javaperformancetuning.com/tips/rawtips.shtml<br /> <a style="color: #000000;" href="http://www.onjava.com/pub/a/onjava/2001/05/30/optimization.html">http://www.onjava.com/pub/a/onjava/2001/05/30/optimization.html </a><br /> <a style="color: #000000;" href="http://www.glenmccl.com/jperf/">http://www.glenmccl.com/jperf/ </a>
</p>

<h2 id="rule96" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 96: Avoid_unnecessary_exception_throwing
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>Low<br /> <b>Rule:  </b>Avoid unnecessary exception throwing for performance reasons<br /> <b>Reason:  </b>Avoid unnecessary exception throwing for performance reasons
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">class Avoid_unnecessary_exception_throwing_violation
{
	public void method() throws java.io.IOException		// VIOLATION
	{
		// no code that throws IOException
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">class Avoid_unnecessary_exception_throwing_correction
{
	public void method() // CORRECTION
	{
		// no code that throws IOException
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b>Reference Not Available.
</p>

<h2 id="rule97" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 97: Avoid_LinkedLists
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>High<br /> <b>Rule:  </b>Avoid LinkedLists instead use Vector / ArrayList as LinkedList implementation has a performance overhead for indexed access.<br /> <b>Reason:  </b>Avoid LinkedLists instead use Vector / ArrayList as LinkedList implementation has a performance overhead for indexed access.
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

import java.util.LinkedList;		// VIOLATION

class Avoid_LinkedLists_violation
{
	public void method()
	{
		LinkedList list = new LinkedList();
		if(list != null)
		{
			list = null;
		}
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

import java.util.ArrayList;		// CORRECTION

class Avoid_LinkedLists_correction
{
	public void method()
	{
		 final int SIZE = 10;
		 ArrayList list = new ArrayList(SIZE);

		 if(list != null)
		 {
		 	list = null;
		 }
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b>www.onjava.com/pub/a/onjava/2001/05/30/optimization.html
</p>

<h2 id="rule98" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 98: Use_single_quotes_when_concatenating_character_to_String
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>Medium<br /> <b>Rule:  </b>Use single quotes instead of double qoutes when concatenating single character to a String.<br /> <b>Reason:  </b>Use single quotes instead of double qoutes when concatenating single character to a String.
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;
public class Use_single_quotes_when_concatenating_character_to_String_violation
{
	Use_single_quotes_when_concatenating_character_to_String_violation()
	{
		String s = "a";
		s = s + "a"; // VIOLATION
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;
public class Use_single_quotes_when_concatenating_character_to_String_correction
{
	Use_single_quotes_when_concatenating_character_to_String_correction()
	{
		String s = "a";
		s = s + 'a'; // CORRECTION
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b>Reference Not Available.
</p>

<h2 id="rule99" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 99: Use_PreparedStatement_instead_of_Statement
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>High<br /> <b>Rule:  </b>PreparedStatements should be used where dynamic queries are involved.<br /> <b>Reason:  </b>PreparedStatements should be used where dynamic queries are involved.
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

import java.sql.Connection;
import java.sql.Statement;

public class Use_PreparedStatement_instead_of_Statement_violation
{
	public void method(Connection conn) throws Exception
	{
		Statement stmt = conn.createStatement();
		for (int i = 0; i &lt; empCount; i++)
		{
			String sQry = "SELECT * FROM employee WHERE id = " + i;
			ReultSet rs = stmt.execute(sQry);
			//...
		}
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

import java.sql.Connection;
import java.sql.PreparedStatement;

public class Use_PreparedStatement_instead_of_Statement_correction
{
	public void method(Connection conn) throws Exception
	{
		String sQry = "SELECT * FROM employee WHERE id = ?";
		PreparedStatement pstmt = con.prepareStatement(sQry);
		for (int i = 0; i &lt; empCount; i++)
		{
			pstmt.setString(1,""+i);
			ResultSet rs = pstmt.executeQuery();
			//...
		}
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b><a style="color: #000000;" href="http://www.javaworld.com/javaworld/jw-01-2002/jw-0125-overpower.html">http://www.javaworld.com/javaworld/jw-01-2002/jw-0125-overpower.html </a>
</p>

<h2 id="rule100" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 100: Avoid_multi_dimensional_arrays
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>Medium<br /> <b>Rule:  </b>Try to use single dimensional arrays inplace of multidimensional arrays.<br /> <b>Reason:  </b>Try to use single dimensional arrays inplace of multidimensional arrays.
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

public class Aviod_multidimensional_arrays_violation
{
	public void method1(int[][] values) // VIOLATION
	{
		for (int i = 0; i &lt; values.length; i++)
		{
			System.out.println(values[i][0] + ":" + values[i][1]);
		}
	}
	
	public void method2()
	{
		int[][] arr = new int[][]{ // VIOLATION
			{1,2},
			{2,4},
			{3,6},
			{4,8}
		};
		method1(arr);
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

public class Aviod_multidimensional_arrays_correction
{
	public void method1(int[] values1, int[] values2) // CORRECTION
	{
		for (int i = 0; i &lt; values1.length; i++)
		{
			System.out.println(values1[i] + ":" + values2[i]);
		}
	}
	
	public void method2()
	{
		int[] arr1 = new int[]{1,2,3,4}; // CORRECTION
		int[] arr2 = new int[]{2,4,6,8}; // CORRECTION
		method1(arr1, arr2);
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b><a style="color: #000000;" href="http://www.wildtangent.com/developer/downloads/overviews/BestPractices/chapter5">http://www.wildtangent.com/developer/downloads/overviews/BestPractices/chapter5 </a>
</p>

<h2 id="rule101" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 101: Avoid_empty_synchronized_block
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>Low<br /> <b>Rule:  </b>Remove empty synchronized blocks to avoid unnecessary overheads<br /> <b>Reason:  </b>Remove empty synchronized blocks to avoid unnecessary overheads
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

class Avoid_empty_synchronized_block_violation
{
	void method()
	{
		synchronized(this)
		{
		}
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

class Avoid_empty_synchronized_block_violation
{
	void method()
	{
		/*
		synchronized(this)
		{
		}
		*/
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b>Reference Not Available.
</p>

<h2 id="rule102" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 102: Use_DataSource_instead_of_DriverManager
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>High<br /> <b>Rule:  </b>Using DataSource is a preferred way for obtaining the Connection objects.<br /> <b>Reason:  </b>Using DataSource is a preferred way for obtaining the Connection objects.
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class Use_DataSource_instead_of_DriverManager_violation
{
	public void method(String url) throws SQLException
	{
		Connection conn = DriverManager.getConnection(url); // VIOLATION
		// use conn
	}
	
	public void initDriverManager()
	{
		// load driver class
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

import java.sql.Connection;
import java.sql.SQLException;
import javax.sql.DataSource;

class Use_DataSource_instead_of_DriverManager_correction
{
	DataSource ds;

	public void method() throws SQLException
	{
		Connection conn = ds.getConnection(); // CORRECTION
		// use conn
	}
	
	public void initDataSource()
	{
		// initialize ds
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b><a style="color: #000000;" href="http://java.sun.com/j2se/1.4.2/docs/guide/jdbc/getstart/drivermanager.html">http://java.sun.com/j2se/1.4.2/docs/guide/jdbc/getstart/drivermanager.html </a><br /> <a style="color: #000000;" href="http://java.sun.com/j2se/1.4.2/docs/guide/jdbc/getstart/datasource.html">http://java.sun.com/j2se/1.4.2/docs/guide/jdbc/getstart/datasource.html </a><br /> <a style="color: #000000;" href="http://www.javapractices.com/Topic127.cjp">http://www.javapractices.com/Topic127.cjp </a>
</p>

<h2 id="rule103" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 103: Avoid_call_to_Thread.sleep()
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>Critical<br /> <b>Rule:  </b>Do not call Thread.sleep() for performance reasons<br /> <b>Reason:  </b>Do not call Thread.sleep() for performance reasons
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;
class Avoid_call_to_Thread_sleep_violation
{
	public void doTest() throws InterruptedException
	{
		//......
		Thread.sleep(100); // VIOLATION
		//......
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;
class Avoid_call_to_Thread_sleep_correction
{
	public void doTest()
	{
		//......
		this.wait(100); // CORRECTION
		//......
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b>Reference Not Available.
</p>

<h2 id="rule104" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 104: Use_String_instead_StringBuffer_for_constant_strings
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>Critical<br /> <b>Rule:  </b>Use String instead of StringBuffer for constant Strings<br /> <b>Reason:  </b>Use String instead of StringBuffer for constant Strings
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

class Use_String_instead_StringBuffer_for_constant_strings_violation
{
	public String getSign(int i)
	{
		final StringBuffer even = new StringBuffer("EVEN");	// violation
		final StringBuffer odd = new StringBuffer("ODD");	// violation
		final StringBuffer msg = new StringBuffer("The number is ");
		if ((i / 2)*i == i)
		{
			msg.append(even);
		}
		else
		{
			msg.append(odd);
		}
		return msg.toString();
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

class Use_String_instead_StringBuffer_for_constant_strings_correction
{
	public String getSign(int i)
	{
		final String even = "EVEN";	  // correction
		final String odd = "ODD";	  // correction
		final StringBuffer msg = new StringBuffer("The number is ");
		if ((i / 2)*i == i)
		{
			msg = msg.append(even);
		}
		else
		{
			msg.append(odd);
		}
		return msg.toString();
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b><a style="color: #000000;" href="http://java.sun.com/docs/books/tutorial/java/data/whytwo.html">http://java.sun.com/docs/books/tutorial/java/data/whytwo.html </a>
</p>

<h2 id="rule105" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 105: Avoid_using_String_charAt
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>High<br /> <b>Rule:  </b>Use char[] representation of the string instead of using String.charAt().<br /> <b>Reason:  </b>Use char[] representation of the string instead of using String.charAt().
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;
class Avoid_using_String_charAt_violation
{
	public void method(String str)
	{
		for(int i=0; i&lt;str.length(); i++)
		{
			System.out.println(str.charAt(i));	// VIOLATION
		}
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;
class Avoid_using_String_charAt_correction
{
	public void method(String str)
	{
		char[] carr = str.toCharArray();		// CORRECTION
		for(int i=0; i&lt;carr.length; i++)
		{
			System.out.println(carr[i]);		// CORRECTION
		}
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b>ftp://ftp.glenmccl.com/pub/free/jperf.pdf<br /> <a style="color: #000000;" href="http://www.javaperformancetuning.com/tips/rawtips.shtml">http://www.javaperformancetuning.com/tips/rawtips.shtml </a>
</p>

<h2 id="rule106" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 106: Avoid_Extending_java_lang_Object
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>Low<br /> <b>Rule:  </b>Avoid empty &#8220;finally&#8221; block structure.<br /> <b>Reason:  </b>Avoid empty &#8220;finally&#8221; block structure.
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

class Avoid_empty_finally_blocks_violation
{
	void method (int i)
	{
		final int ZERO =0;
		try
		{
		i = ZERO;
		}
		catch(ArithmeticException ae)
		{
			ae.printStackTrace();
		}
		finally		// VIOLATION
		{
		}
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

class Avoid_empty_finally_blocks_correction
{
	void method (int i)
	{
		final int ZERO = 0;
		try
		{
		i = ZERO;
		}
		catch(ArithmeticException ae)
		{
			ae.printStackTrace();
		}
		/*
		finally		// COORECTION
		{

		}
		*/
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b>Reference Not Available.
</p>

<h2 id="rule107" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 107: Use_compound_operators
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>Medium<br /> <b>Rule:  </b>Use compound operators for improved performance<br /> <b>Reason:  </b>Use compound operators for improved performance
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;
class Use_compound_operators_violation
{
	public void method(int[] a, int x)
	{
		for (int i = 0; i &lt; a.length; i++)
		{
			a[i] = a[i] + x;		// VIOLATION
		}
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;
class Use_compound_operators_correction
{
	public void method(int[] a, int x)
	{
		for (int i = 0; i &lt; a.length; i++)
		{
			a[i] += x;			// CORRECTION
		}
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b><a style="color: #000000;" href="http://www.patrick.net/jpt/index.html">http://www.patrick.net/jpt/index.html </a>
</p>

<h2 id="rule108" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 108: Avoid_concatenating_Strings_in_StringBuffer
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>Medium<br /> <b>Rule:  </b>Avoid concatenating Strings in StringBuffer&#8217;s constructor or append(..) method.<br /> <b>Reason:  </b>Avoid concatenating Strings in StringBuffer&#8217;s constructor or append(..) method.
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">public class AvoidStringConcat
{
	public void aMethod()
	{
		StringBuffer sb = new StringBuffer("Hello" + getWorld()); // VIOLATION
		sb.append("Calling From " + getJava()); // VIOLATION
	}

	public String getWorld()
	{
		return " World";
	}

	public String getJava()
	{
		return " Java";
	 }
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">public class AvoidStringConcat
{
	public void aMethod()
	{
		StringBuffer sb = new StringBuffer("Hello");
		sb.append(getWorld());
		sb.append("Calling From ");
		sb.append(getJava());
	}

	public String getWorld()
	{
		return " World";
	}

	public String getJava()
	{
		return " Java";
	 }
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b><a style="color: #000000;" href="http://java.sun.com/developer/JDCTechTips/2002/tt0305.html#tip1">http://java.sun.com/developer/JDCTechTips/2002/tt0305.html#tip1 </a>
</p>

<h2 id="rule109" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 109: Declare_package_private_class_final
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>Medium<br /> <b>Rule:  </b>Declare package private class as final.<br /> <b>Reason:  </b>Declare package private class as final.
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

class Declare_package_private_method_final_Violation  // Violation
{
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

final class Declare_package_private_method_final_Correction  // Correction
{
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b><a style="color: #000000;" href="http://www.javaworld.com/javaworld/jw-12-1998/jw-12-securityrules_p.html">http://www.javaworld.com/javaworld/jw-12-1998/jw-12-securityrules_p.html </a>
</p>

<h2 id="rule110" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 110: Use_hashMap_inplace_of_hashTable
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>Medium<br /> <b>Rule:  </b>Use &#8216;HashMap&#8217; in place of &#8216;HashTable&#8217; wherever possible<br /> <b>Reason:  </b>Use &#8216;HashMap&#8217; in place of &#8216;HashTable&#8217; wherever possible
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;
import java.util.Hashtable;
class Use_hashMap_inplace_of_hashTable_violation
{
	private static final int SIZE = 10;
	private Hashtable ht = new Hashtable(SIZE);		// VIOLATION

	public void method()
	{
		ht.clear();
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;
import java.util.HashMap;
class Use_hashMap_inplace_of_hashTable_correction
{
	private static final int SIZE = 10;
	private HashMap ht = new HashMap(SIZE);			// CORRECTION

	public void method()
	{
		ht.clear();
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b>Reference Not Available.
</p>

<h2 id="rule111" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 111: Avoid_creating_double_from_string
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>High<br /> <b>Rule:  </b>Avoid creating double from string for improved performance<br /> <b>Reason:  </b>Avoid creating double from string for improved performance
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">public class Avoid_creating_double_from_string_violation 
{

		public void method()
		{
			Double db = new Double("3.44");  // VIOLATION
			Double.valueOf("3.44");			// VIOLATION
			
			if(db == null)
			{
				// Do Something
				db = null;
			}
		}	
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">Avoid converting String to Double</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b><a style="color: #000000;" href="http://www.javaperformancetuning.com/tips/rawtips.shtml">http://www.javaperformancetuning.com/tips/rawtips.shtml </a><br /> <a style="color: #000000;" href="http://www.glenmccl.com/jperf/">http://www.glenmccl.com/jperf/ </a>
</p>

<h2 id="rule112" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 112: Always_use_right_shift_operator_for_division_by_powers_of_two
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>Low<br /> <b>Rule:  </b>It is more efficient and improves performance if shift operators are used.<br /> <b>Reason:  </b>It is more efficient and improves performance if shift operators are used.
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">public class Test
{
	public int calculate (int num) 
	{
	  return num / 4;  // VIOLATION
 	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">public class Test
{
	public int calculate (int num) 
	{
 	 return num &gt;&gt; 2;  // FIXED *
}

}

// * Replace the division with an equivalent '&gt;&gt; power', where 'power' is the power
// of two such that 2 ^ power = divisor.</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b>Not available.
</p>

<h2 id="rule113" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 113: Use_shift_operators
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>High<br /> <b>Rule:  </b>Shift operators are faster than multiplication and division<br /> <b>Reason:  </b>Shift operators are faster than multiplication and division
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;
class Use_shift_operators_violation
{
	public void method()
	{
		int x = 0;
		int X = x / 4;		// VIOLATION
		int Y = x * 2;		// VIOLATION
		X++;
		Y++;
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;
class Use_shift_operators_correction
{
	public void method()
	{
		int x = 0;
		int X = x &gt;&gt; 2;		// CORRECTION
		int Y = x &lt;&lt; 1;		// CORRECTION
		X++;
		Y++;
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b>www.javaworld.com/javaworld/jw-04-1997/jw-04-optimize_p.html
</p>

<h2 id="rule114" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 114: Avoid_java_lang_reflect_package
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>High<br /> <b>Rule:  </b>Avoid java.lang.reflect package.<br /> <b>Reason:  </b>Avoid java.lang.reflect package.
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

public class Avoid_java_lang_reflect_package_violation
{
 public Object getData(String classname)
 {
  try 
  {
  	 Class c = Class.forName(classname);
		 Method m = c.getMethod("getData",null);
	 	 m.invoke(c.newInstance(), null);// Violation
  }
  catch (Exception e)
  {
			//....
  }
 }
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

public class Avoid_java_lang_reflect_package_correction
{
 public Object getData(String classname)
 {
  try {
Class c = Class.forName(classname);
IDataProvider dataprovider = (IDataProvider) c.newInstance();  // Correction
return dataprovider.getData();
  }
  catch (Exception e)
  {
  }
 }
}

interface IDataProvider
{
	Object getData(String name);
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b>Reference not available.
</p>

<h2 id="rule115" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 115: Use_NIO_in_server
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>High<br /> <b>Rule:  </b>Using NIO for server is better than using traditional java.net package.<br /> <b>Reason:  </b>Using NIO for server is better than using traditional java.net package.
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

import java.io.IOException;
import java.net.ServerSocket;
import java.net.Socket;

public class Use_NIO_in_server_violation
{
	public void method(ServerSocket ss) throws IOException
	{
		Socket soc = ss.accept(); // VIOLATION
		// use soc
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">Use classes in java.nio.channels in the server code.</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b><a style="color: #000000;" href="http://www-106.ibm.com/developerworks/java/library/j-javaio/">http://www-106.ibm.com/developerworks/java/library/j-javaio/ </a><br /> <a style="color: #000000;" href="http://www.onjava.com/pub/a/onjava/2002/10/02/javanio.html?page=4">http://www.onjava.com/pub/a/onjava/2002/10/02/javanio.html?page=4 </a>
</p>

<h2 id="rule116" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 116: Avoid_object_instantiation_in_loops
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>Critical<br /> <b>Rule:  </b>Avoid object instantiation in frequently executed code for performance reasons<br /> <b>Reason:  </b>Avoid object instantiation in frequently executed code for performance reasons
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

import java.util.ArrayList;

class Avoid_object_instantiation_violation
{
	public void action()
	{
		ArrayList al = getNameAndValues();
		for (int i = 0; i &lt; al.size(); i++)
		{
			ClassName cn = (ClassName) al.get(i);
			String sArr[] = new String[] { cn.getName(), cn.getValue() }; //Violation
			//...
		}
	}
	
	private ArrayList getNameAndValues()
	{
		ArrayList al = new ArrayList();
		// populate list
		return al;
	}
	
	private class ClassName
	{
		String name;
		String value;
		
		String getName()
		{
			return name;
		}
		String getValue()
		{
			return value;
		}
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

import java.util.ArrayList;

class Avoid_object_instantiation_correction
{
	public void action()
	{
		ArrayList al = getNameAndValues();
		String sArr[] = new String[2]; //Correction
		for (int i = 0; i &lt; al.size(); i++)
		{
			ClassName cn = (ClassName) al.get(i);
			sArr[0] = cn.getName();
			sArr[1] = cn.getValue();
			//...
		}
	}
	
	private ArrayList getNameAndValues()
	{
		ArrayList al = new ArrayList();
		// populate list
		return al;
	}
	
	private class ClassName
	{
		String name;
		String value;
		
		String getName()
		{
			return name;
		}
		String getValue()
		{
			return value;
		}
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b><a style="color: #000000;" href="http://www.oreilly.com/catalog/javapt/chapter/ch04.html">http://www.oreilly.com/catalog/javapt/chapter/ch04.html </a>
</p>

<h2 id="rule117" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 117: Avoid_unnecessary_instanceof
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>High<br /> <b>Rule:  </b>Avoid unnecessary &#8220;instanceof&#8221; evaluations.<br /> <b>Reason:  </b>Avoid unnecessary &#8220;instanceof&#8221; evaluations.
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

class Avoid_unnecessary_instanceof_violation
{
	private String obj = "String"; //$NON-NLS-1$
	public void method()
	{
		if (obj instanceof Object)		// VIOLATION
		{
			obj.getClass();
		}
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

class Avoid_unnecessary_instanceof_correction
{
	private String obj = "String"; //$NON-NLS-1$

	public void method()
	{
		/*							// CORRECTION
		if (obj instanceof Object)		
		{
			obj.getClass();
		}
		*/
		obj.getClass();
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b>Reference Not Available.
</p>

<h2 id="rule118" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 118: Define_initial_capacities
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>Medium<br /> <b>Rule:  </b>Expansion of array capacity involves allocating a larger array and copying the contents of the old array to a new one.<br /> Eventually, the old array object gets reclaimed by the garbage collector. Array expansion is an expensive operation.<br /> Usually one may have a pretty good guess at the expected size which should be used instead of the default.<br /> <b>Reason:  </b>Expansion of array capacity involves allocating a larger array and copying the contents of the old array to a new one.<br /> Eventually, the old array object gets reclaimed by the garbage collector. Array expansion is an expensive operation.<br /> Usually one may have a pretty good guess at the expected size which should be used instead of the default.
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

import java.util.ArrayList;

class Define_initial_capacities_violation
{
	private ArrayList al = new ArrayList();		// VIOLATION

	public int method()
	{
		return al.size();
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

import java.util.ArrayList;

class Define_initial_capacities_correction
{
	private final int SIZE = 10;
	private ArrayList al = new ArrayList(SIZE);		// CORRECTION

	public int method()
	{
		return al.size();
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b><a style="color: #000000;" href="http://www.oreilly.com/catalog/javapt/chapter/ch04.html">http://www.oreilly.com/catalog/javapt/chapter/ch04.html </a><br /> Dov Bulka, &#8220;Java Performance and Scalability Volume 1: Server-Side Programming Techniques&#8221; Addison Wesley, ISBN: 0-201-70429-3 pp.55 57<br /> Neal Ford, &#8220;Performance Tuning With Java Technology&#8221; JavaOne 2001 Conference
</p>

<h2 id="rule119" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 119: Avoid_empty_catch_blocks
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>Low<br /> <b>Rule:  </b>Avoid empty &#8220;catch&#8221; block structure.<br /> <b>Reason:  </b>Avoid empty &#8220;catch&#8221; block structure.
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

class Avoid_empty_catch_blocks_violation
{
	void method(int i)
	{
		try
		{
			i++;
		}
		catch(ArithmeticException ae)		// VIOLATION
		{
		}
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

class Avoid_empty_catch_blocks_correction
{
	void method (int i)
	{
		try
		{
			i++;
		}
		catch(ArithmeticException ae)
		{
			ae.printStackTrace();		// CORRECTION
		}
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b>Reference Not Available.
</p>

<h2 id="rule120" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 120: Avoid_synchronized_methods_in_loop
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>High<br /> <b>Rule:  </b>Avoid synchronized methods in loop for performance reasons<br /> <b>Reason:  </b>Avoid synchronized methods in loop for performance reasons
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;
class Avoid_synchronized_methods_in_loop_violation
{
	public synchronized Object remove()
	{
		Object obj = null;
		//...
		return obj;
	}
	public void removeAll()
	{
		for(;;)
		{
			remove();		// VIOLATION
		}
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;
class Avoid_synchronized_methods_in_loop_correction
{
	public Object remove()		// CORRECTION
	{
		Object obj = null;
		//....
		return obj;
	}
	public synchronized void removeAll()
	{
		for(;;)
		{
			remove();		// CORRECTION
		}
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b>Reference Not Available.
</p>

<h2 id="rule121" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 121: Avoid_synchronized_blocks_in_loop
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>High<br /> <b>Rule:  </b>Avoid synchronized blocks in loop for performance reasons<br /> <b>Reason:  </b>Avoid synchronized blocks in loop for performance reasons
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;
class Avoid_synchronized_blocks_in_loop_violation
{
	public static void main(String[] args)
	{
		Object lock = new Object();
 
		for ( int i = &lt; 0; i &lt; args.length; i ++)
		{
			synchronized ( lock ) // VIOLATION
			{
				System.out.println( args[ i ] );
			}
		}
	}

}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;
class Avoid_synchronized_blocks_in_loop_correction
{
	public static void main(String[] args)
	{
		Object lock = new Object();
 
		synchronized ( lock ) // CORRECTION
		{
			for ( int i = &lt; 0; i &lt; args.length; i ++)
			{
				System.out.println( args[ i ] );
			}
		}
	}
	
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b>Reference Not Available.
</p>

<h2 id="rule122" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 122: Close_jdbc_resources
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>High<br /> <b>Rule:  </b>Always close the JDBC resources opened.<br /> <b>Reason:  </b>Always close the JDBC resources opened.
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

public class Close_jdbc_resources_violation
{
	public void method(String url, String query)
	{
		Connection conn = null;
		Statement stmt = null;
		ResultSet rs = null;
		try
		{
			conn = DriverManager.getConnection(url);
			stmt = conn.createStatement();	// VIOLATION
			rs = stmt.executeQuery(query);	// VIOLATION
		}
		catch (Exception e)
		{
		}
		finally
		{
			try
			{
				conn.close();
			}
			catch (Exception e)
			{
			}
		}
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

public class Close_jdbc_resources_correction
{
	public void method(String url, String query)
	{
		Connection conn = null;
		Statement stmt = null;
		ResultSet rs = null;
		
		try
		{
			conn = DriverManager.getConnection(url);
			stmt = conn.createStatement();
			rs = stmt.executeQuery(query);
		}
		catch (Exception e)
		{
		}
		finally
		{
			try
			{
				rs.close();		// CORRECTION
				stmt.close();	// CORRECTION
				conn.close();
			}
			catch (Exception e)
			{
			}
		}
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b>Reference not available.
</p>

<h2 id="rule123" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 123: Close_jdbc_resources_only_in_finally_block
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>High<br /> <b>Rule:  </b>The place to close jdbc resources is finally block.<br /> <b>Reason:  </b>The place to close jdbc resources is finally block.
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

public class Close_jdbc_resources_only_in_finally_block_violation
{
	public void method(String url, String query)
	{
		Connection conn = null;
		Statement stmt = null;
		ResultSet rs = null;
		try
		{
			conn = DriverManager.getConnection(url);
			stmt = conn.createStatement();
			rs = stmt.executeQuery(query);
			
			rs.close();	// VIOLATION
			stmt.close();	// VIOLATION
			conn.close();	// VIOLATION		
			
		}
		catch (Exception e)
		{
		}
		finally
		{
		
		}
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

public class Close_jdbc_resources_only_in_finally_block_correction
{
	public void method(String url, String query)
	{
		Connection conn = null;
		Statement stmt = null;
		ResultSet rs = null;
		
		try
		{
			conn = DriverManager.getConnection(url);
			stmt = conn.createStatement();
			rs = stmt.executeQuery(query);
		}
		catch (Exception e)
		{
		}
		finally
		{
			try
			{
				rs.close();		// CORRECTION
				stmt.close();	// CORRECTION
				conn.close();	// CORRECTION
			}
			catch (Exception e)
			{
			}
		}
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b>Reference not available.
</p>

<h2 id="rule124" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 124: Specify_StringBuffer_capacity
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>Medium<br /> <b>Rule:  </b>The Default &#8216;StringBuffer&#8217; constructor will create a character array of a default size(16).<br /> When size exceeds its capacity, it has to allocate a new character array with a larger capacity, it copies the old contents into the new array,<br /> and eventually discard the old array.By specifying enough capacity during construction prevents the &#8216;StringBuffer&#8217; from ever needing expansion.<br /> <b>Reason:  </b>The Default &#8216;StringBuffer&#8217; constructor will create a character array of a default size(16).<br /> When size exceeds its capacity, it has to allocate a new character array with a larger capacity, it copies the old contents into the new array,<br /> and eventually discard the old array.By specifying enough capacity during construction prevents the &#8216;StringBuffer&#8217; from ever needing expansion.
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

class Specify_StringBuffer_capacity_violation
{
	private StringBuffer sb = new StringBuffer();		// VIOLATION

	public void method(int i)
	{
		sb.append(i);
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

class Specify_StringBuffer_capacity_correction
{
	private final int SIZE = 10;
	private StringBuffer sb = new StringBuffer(SIZE);		// CORRECTION

	public void method(int i)
	{
		sb.append(i);
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b>Reference Not Available.
</p>

<h2 id="rule125" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 125: Avoid_using_exponentiation
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>Medium<br /> <b>Rule:  </b>Do not use exponentiation.<br /> <b>Reason:  </b>Do not use exponentiation.
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

public class Avoid_using_exponentiation_violation
{
	public int getPower(int iBase, int iPow)
	{
		int iRet = (int) Math.pow(iBase, iPow); // VIOLATION
		return iRet;
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

public class Avoid_using_exponentiation_correction
{
	public int getPower(int iBase, int iPow)
	{
		int iRet = 1;
		for (int i = 0; i &lt; iPow; i++) // CORRECTION
		{
			iRet *= iBase;
		}
		return iRet;
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b>www.javaperformancetuning.com/tips/rawtips.shtml
</p>

<h2 id="rule126" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 126: Use_transient_keyword
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>High<br /> <b>Rule:  </b>Serialization can be very costly. Using the transient keyword reduces the amount of data serialized<br /> <b>Reason:  </b>Serialization can be very costly. Using the transient keyword reduces the amount of data serialized
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;
import java.io.Serializable;
class Use_transient_keyword_violation implements Serializable
{
	final String field1;		// VIOLATION
	private String field2;		
	private String field3;		
	
	Use_transient_keyword_violation(int i, int j)
	{
		field2 = i;
		field3 = j;
		field1 = field2 + field3;
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

import java.io.Serializable;
class Use_transient_keyword_correction implements Serializable
{
	final transient String field1;	// CORRECTION 
	private String field2;		
	private String field3;		

	Use_transient_keyword_violation(int i, int j)
	{
		field2 = i;
		field3 = j;
		field1 = field2 + field3;
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b>java.sun.com\docs\books\performance\1st_edition\html\JPIOPerformance.fm.html
</p>

<h2 id="rule127" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 127: Avoid_new_inside_getTableCellRendererComponent
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>Critical<br /> <b>Rule:  </b>Avoid new inside the method getTableCellRendererComponent.<br /> <b>Reason:  </b>Avoid new inside the method getTableCellRendererComponent.
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

import javax.swing.table.*;
import javax.swing.*;
import java.awt.*;

public class AvoidNewInside_getTableCellRendererComponent_violation extends DefaultTableCellRenderer
{
  public Component getTableCellRendererComponent(JTable aTable, Object 	aNumberValue,boolean aIsSelected,boolean aHasFocus,int aRow, int aColumn)
  {
		test tt =new test();  // Violation
		tt.fillColour();
		return aTable;
  }
}
class test
{
	public void fillColour()
	{
		//...
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">Avoid new inside getTableCellRendererComponent.</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b><a style="color: #000000;" href="http://www.javapractices.com/Topic168.cjp">http://www.javapractices.com/Topic168.cjp </a>
</p>

<h2 id="rule128" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 128: Avoid_Integer_valueOf_intValue
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>High<br /> <b>Rule:  </b>Avoid using Integer.valueOf(String).intValue() instead call Integer.parseInt(String).<br /> <b>Reason:  </b>Avoid using Integer.valueOf(String).intValue() instead call Integer.parseInt(String).
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

class Avoid_Integer_valueOf_intValue_violation
{
	public int getValue(String s)
	{
		return Integer.valueOf(s).intValue();		// VIOLATION
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

class Avoid_Integer_valueOf_intValue_correction
{
	public int getValue(String s)
	{
		return Integer.parseInt(s);		// CORRECTION
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b>Reference Not Available.
</p>

<h2 id="rule129" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 129: Use_ternary_operator_for_assignment
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>Medium<br /> <b>Rule:  </b>Use ternary operator for assignment.<br /> <b>Reason:  </b>Use ternary operator for assignment.
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

public class Use_ternary_operator_for_assignment_violation 
{
	int iVal;
	private void foo(int a, int b)
	{
		if(a&lt;b) // Violation
		{
			iVal = a;
		}
		else
		{
			iVal = b;
		}
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

public class Use_ternary_operator_for_assignment_violation 
{
	int iVal;
	private void foo(int a, int b)
	{
		iVal = (a&lt;b )? a:b;// Correction
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b>Reference not available.
</p>

<h2 id="rule130" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 130: Avoid_Serialized_class_with_no_instance_variables
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>Low<br /> <b>Rule:  </b>A class with no instance variables, doesn&#8217;t have any state information that needs to be preserved<br /> <b>Reason:  </b>A class with no instance variables, doesn&#8217;t have any state information that needs to be preserved
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

import java.io.Serializable;

class Avoid_Serialized_class_with_no_instance_variables_violation implements Serializable
{
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

import java.io.Serializable;

class Avoid_Serialized_class_with_no_instance_variables_violation // implements Serializable
{
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b>Reference Not Available.
</p>

<h2 id="rule131" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 131: Avoid_Vector_elementAt_inside_loop
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>Medium<br /> <b>Rule:  </b>Avoid calling Vector.elementAt() inside loop<br /> <b>Reason:  </b>Avoid calling Vector.elementAt() inside loop
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

import java.util.Vector;

class Avoid_Vector_elementAt_inside_loop_violation
{
	public void method(Vector v)
	{
		int size = v.size();
		for(int i=size; i&gt;0; i--)
		{
			System.out.println((String) v.elementAt(size-i));	// VIOLATION
		}
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

import java.util.Vector;

class Avoid_Vector_elementAt_inside_loop_correction
{
	public void method(Vector v)
	{
		int size = v.size();
		Object vArr[] = v.toArray();
		for(int i=0; i&lt;size; i++)
		{
			System.out.println((String) vArr[i]);		// CORRECTION
		}
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b><a style="color: #000000;" href="http://www.javaperformancetuning.com/tips/rawtips.shtml">http://www.javaperformancetuning.com/tips/rawtips.shtml </a><br /> <a style="color: #000000;" href="http://jsl.jcon.org/javaperformance.html">http://jsl.jcon.org/javaperformance.html </a>
</p>

<h2 id="rule132" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 132: Declare_variable_final
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>Medium<br /> <b>Rule:  </b>Any variable that is initialized and never assigned to should be declared final.<br /> <b>Reason:  </b>Any variable that is initialized and never assigned to should be declared final.
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

class Declare_variable_final_violation
{
	public void method()
	{
		int i = 5;  // VIOLATION
		int j = i;
		j = j + i;
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

class Declare_variable_final_correction
{
	public void method()
	{
		final int i = 5;  // CORRECTION
		int j = i;
		j = j + i;
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b>Reference Not Available.
</p>

<h2 id="rule133" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 133: Declare_method_arguments_final
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>Medium<br /> <b>Rule:  </b>Any method argument which is neither used nor assigned should be declared final.<br /> <b>Reason:  </b>Any method argument which is neither used nor assigned should be declared final.
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

class Declare_method_arguments_final_violation
{
	public void method(int i,int j)  // VIOLATION
	{
		j = j + i;
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

class Declare_method_arguments_final_correction
{
	public void method(final int i,int j)  // CORRECTION
	{
		j = j + i;
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b>Reference not available.
</p>

<h2 id="rule134" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 134: Avoid_polling_loops
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>High<br /> <b>Rule:  </b>Do not use polling loops / busy waiting.<br /> <b>Reason:  </b>Do not use polling loops / busy waiting.
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

public class Avoid_polling_loops_violation
{
	boolean bContinue;
	
	void doSomething()
	{
		while(!bContinue)
		{
			try
			{
				Thread.sleep(250); // VIOLATION
			}
			catch (InterruptedException e)
			{ }
		}
		
		// take action
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

public class Avoid_polling_loops_correction
{
	boolean bContinue;
	Object objLock; // notifyAll() will be called on this object from some other thread
	
	void doSomething()
	{
		synchronized(objLock)
		{
			while(!bContinue)
			{
				try
				{
					objLock.wait(); // CORRECTION
				}
				catch (InterruptedException e)
				{ }
			}
		}
		
		// take action
	}
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference: </b>
</p>

<h2 id="rule135" style="font-size: 14pt; color: #ffffff; font-weight: normal; font-family: Arial, sans-serif; line-height: normal; background-color: #177bb4;">
  Rule 135: Avoid_Serialized_class_with_only_transient_fields
</h2>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Severity:  </b>Low<br /> <b>Rule:  </b>The class with only transient fields doesn&#8217;t have any state information that needs to be preserved<br /> <b>Reason:  </b>The class with only transient fields doesn&#8217;t have any state information that needs to be preserved
</p>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Usage Example: </b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

import java.io.Serializable;

class Avoid_Serialized_class_with_only_transient_fields_violation implements Serializable
 //Violation
{
	transient int count = 0;
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Should be written as:</b>
</p>

<pre style="color: #000000; line-height: normal;">package com.rule;

import java.io.Serializable;

class Avoid_Serialized_class_with_only_transient_fields_violation // implements Serializable 
//Correction
{
	transient int count = 0;
}</pre>

<p style="font-size: 10pt; color: #000000; font-family: Arial, sans-serif; line-height: normal;">
  <b>Reference:  </b>Reference Not Available.
</p>