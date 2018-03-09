# Changelog

## [Unreleased]

### MaskedTextBox

#### Bug Fixes

- While set floatLabelType property as "Never", the placeholder not shown issue has been fixed

- While set floatLabelType property as "Auto", the value becomes "undefined" at two-way binding issue has been fixed

- While setting escape sequence in mask format, value is not updated properly issue has been fixed

- Cursor is not positioned properly while focusing the MaskedTextBox issue has been fixed

## 15.4.24-preview (2018-01-10)

### MaskedTextBox

#### Bug Fixes

- Value not maintained properly in the MaskedTextBox two-way binding

## 15.4.23-preview (2017-12-27)

### Common

#### New Features

- Added typing file for ES5 global scripts (dist/global/index.d.ts)

#### Breaking Changes

- Modified the module bundle file name for ES6 bundling

## 15.4.21-preview (2017-12-08)

### FormValidator

#### Bug Fixes

- **IE11** - Recursive call on form reset.

### TextBox

#### Bug Fixes

- Height mismatch between input and input with icon issue has fixed.

## 15.4.20-preview (2017-12-01)

### Common

#### New Features

- Upgraded TypeScript version to 2.6.2.

## 15.4.17-preview (2017-11-13)

### TextBox

TextBox is an input element that allows to get input from the user. It allows the user to edit or display the text value.

- **Groups** - Supports to group the icon element with the input

- **Floating Label** - Added option to float label always, float label on focus, and disable floating support in the input element.

- **Clear Button** - Provided option to show/hide clear button to reset the value in input element.

- **Validation States** - Provided option to indicate success, error, and warning states.

### NumericTextBox

NumericTextBox is used to get the number inputs from the user. The input values can be incremented or decremented by a predefined step value. The available key features are

- **Range Validation** - allows to set the minimum and maximum range of values in the NumericTextBox.

- **Number Formats** - supports the number display formatting with MSDN standard and custom number formats.

- **Precision Of Numbers** - allows to restrict the number precision when enters the value.

- **Keyboard Interaction** - allows users to interact with the NumericTextBox using the keyboard.

- **Accessibility** - provides built-in accessibility support which helps to access all the NumericTextBox component features through keyboard, on-screen readers or other assistive technology devices.

- **Internationalization** - library provides support for formatting and parsing number using the official Unicode CLDR JSON data.

- **Localization** - Supports to localize spin up and down buttons title for the tooltip to different cultures.

### MaskedTextBox

MaskedTextBox allows the user to enter the valid input only based on the provided mask. The available key features are

- **Custom Characters** - allows you to use your own characters as the mask elements.

- **Regular Expression** - can be used as a mask element for each character of the MaskedTextBox.

- **Accessibility** - provides built-in accessibility support which helps to access all the MaskedTextBox component features through keyboard, on-screen readers, or other assistive technology devices.
