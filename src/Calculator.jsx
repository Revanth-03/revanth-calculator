import { useState } from "react";

function Calculator() {
  const [input, setInput] = useState("");
  const currentNumber = input;
  const lastDig = currentNumber[currentNumber.length - 1]; //this is last unit digit number

  const operators = /[+ \- * / %]/g;

  const number = input.split(operators); //split function seperates the input with operates return numbers array  eg:[12 3 4]

  const lastNumber = number[number.length - 1]; //this is the last number what we seen in textarea
  // console.log(lastNumber);

  //This function handle the click event of operators
  const handleOperator = (e) => {
    if (currentNumber.length === 0) {
      //This check not allow the user to start with operations eg:*45 or /54 are not allowed
      return;
    } else if (
      //This check will not allow the user to enter a multiply operators eg:56*/+-%836
      lastDig === "+" ||
      lastDig === "-" ||
      lastDig === "*" ||
      lastDig === "/"
    ) {
      const newNumber =
        currentNumber.substring(0, currentNumber.length - 1) +
        e.target.innerHTML;
      setInput(newNumber);
    } else {
      setInput(input + e.target.innerHTML);
    }
  };

  // Function to handle decimal button clicks
  const handleDecimal = () => {
    // If the input is empty, add a leading zero and a decimal point
    if (currentNumber.length === 0) {
      setInput("0." + input);
    } else if (lastDig === ".") {
      //This will help in not allow multiple dots
      return;
    } else {
      setInput(input + ".");
    }
  };

  // Function to handle percentage button clicks
  const handlePercentage = () => {
    if (
      //if the last digit is operator % will not help
      currentNumber.length === 0 ||
      lastDig === "+" ||
      lastDig === "-" ||
      lastDig === "*" ||
      lastDig === "/"
    ) {
      return;
    }

    //this return last number percentage
    setInput(
      input.substring(0, input.length - lastNumber.length) +
        parseFloat(lastNumber) / 100
    );
  };

  // Function to toggle the sign of the input
  const toggleSign = () => {
    if (currentNumber === "") return;
    else if (currentNumber.length === 1 && lastDig === "0") {
      return;
    } else if (currentNumber[0] === "-") setInput(input.slice(1));
    else setInput("-" + input);
  };

  return (
    <div className="container ">
      <div className="calculator">
        <textarea
          className="input"
          value={input}
          type="text"
          rows={4}
          readOnly
        />
        <span
          onClick={() => {
            setInput(" ");
          }}
        >
          C
        </span>
        <span onClick={handleOperator} className="fa-25">
          /
        </span>
        <span onClick={handleOperator} className="fa-25">
          *
        </span>
        <span
          onClick={() => {
            if (input.length === 0) {
              return;
            }

            setInput(input.slice(0, -1));
          }}
        >
          Del
        </span>
        <span
          onClick={() => {
            setInput(input + "7");
          }}
        >
          7
        </span>
        <span
          onClick={() => {
            setInput(input + "8");
          }}
        >
          8
        </span>
        <span
          onClick={() => {
            setInput(input + "9");
          }}
        >
          9
        </span>
        <span onClick={handleOperator} className="fa-25">
          -
        </span>
        <span
          onClick={() => {
            setInput(input + "4");
          }}
        >
          4
        </span>
        <span
          onClick={() => {
            setInput(input + "5");
          }}
        >
          5
        </span>
        <span
          onClick={() => {
            setInput(input + "6");
          }}
        >
          6
        </span>
        <span onClick={handleOperator} className="fa-25">
          +
        </span>
        <span
          onClick={() => {
            setInput(input + "1");
          }}
        >
          1
        </span>
        <span
          onClick={() => {
            setInput(input + "2");
          }}
        >
          2
        </span>
        <span
          onClick={() => {
            setInput(input + "3");
          }}
        >
          3
        </span>
        <span onClick={toggleSign} className="fa-25">
          +/-
        </span>

        <span onClick={handlePercentage}>%</span>
        <span
          onClick={() => {
            if (currentNumber.length === 1 && currentNumber === "0") {
              return;
            }
            setInput(input + "0");
          }}
        >
          0
        </span>
        <span onClick={handleDecimal}>.</span>
        <span
          onClick={() => {
            if (input.length === 0) {
              return;
            }
            try {
              setInput(eval(input).toString());
            } catch (error) {
              setInput("Error");
            }
          }}
          className="fa-25"
        >
          =
        </span>
      </div>
    </div>
  );
}

export default Calculator;
