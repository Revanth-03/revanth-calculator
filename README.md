# Calculator App

This is a simple calculator app built using ReactJS. It allows users to perform basic arithmetic operations like addition, subtraction, multiplication, and division, as well as calculate percentages of numbers and toggle the sign of a number. The app is designed to be user-friendly and responsive on all devices.

The app is hosted on firebase and can be accessed at [https://reavanth-calculator.web.app](https://reavanth-calculator.web.app).

## Table of Contents

- [Features](#features)
- [Getting started](#getting-started)
- [How to use](#how-to-use)
- [Code Structure](#code-structure)
- [Technologies used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)
- [Demo](#demo)
- [Acknowledgements](#acknowledgements)
- [Additional Information](#additional-information)

## Features

1. Basic arithmetic operations: addition, subtraction, multiplication, and division.
2. Percentage calculation: users can calculate the percentage of a number.

## Getting started

To use the app, simply go to the live demo or clone the repository to your local machine and run `npm start` to start the server.

## How to use

Enter a number or an arithmetic operation using the buttons on the calculator interface.

Press the equal sign (`=`) to calculate the result.

To perform a new calculation, clear the input field using the "C" button.

Use the percentage button (`%`) to calculate the percentage of a number. The percentage button only works for the last number entered.

Use the sign toggle button (`+/-`) to switch the sign of a number. 

## Code structure

The code is structured using React functional components and hooks. The main component is `Calculator`, which contains all the other components, including `Display`, `Button`, and `Keypad`.

The `useState` hook is used to manage the input and output of the calculator. The input is stored in the `input` state variable and the output is calculated using the `eval()` function.

The `handleOperator`, `handleDecimal`, `handlePercentage`, and `toggleSign` functions handle the click events for the corresponding buttons. These functions ensure that the input is valid and that the output is calculated correctly.

## Technologies used

- ReactJS


## Contributing

Contributions are welcome! If you find a bug or have a feature request, please create an issue on the GitHub repository.

## License

This app is licensed under the MIT License. See the `LICENSE` file for more information.

## Demo

You can see a live demo of the app at [here](https://youtu.be/h-uiYh8yNaE).

## Acknowledgements

We would like to thank the following individuals and organizations for their contributions to this project:

- [ReactJS](https://react.dev)

## Additional Information

For more information, please contact us at revanthsrinivaslu03@gmail.com.
