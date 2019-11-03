/**
 * @author: Viraj Khatri
 * @version: 1.0
 */

class EvaluationLogic {
    evaluate(expression) {
        expression = expression.split('')
        var intValues = [];
        var operators = [];
        var i = 0;
        var firstValue, secondValue, operator;
        while (i < expression.length) {
            if (expression[i] === ' ') {
                i++;
                continue;
            }
            else if (expression[i] === '(') {
                operators.push(expression[i]);
                i++;
            }
            else if (this.isNumeric(expression[i])) {
                var val = 0
                while (i < expression.length && this.isNumeric(expression[i])) {
                    val = (val * 10) + parseInt(expression[i]);
                    i++;
                }
                intValues.push(val)
            }
            else if (expression[i] === ')') {
                while (operators.length !== 0 && operators[operators.length - 1] !== '(') {
                    secondValue = intValues.pop();
                    firstValue = intValues.pop();
                    operator = operators.pop();
                    intValues.push(this.operation(firstValue, secondValue, operator))
                }
                operators.pop();
                i++;
            }
            else {
                while (operators.length !== 0 && this.precedence(operators[operators.length - 1]) >= this.precedence(expression[i])) {
                    secondValue = intValues.pop();
                    firstValue = intValues.pop();
                    operator = operators.pop();
                    intValues.push(this.operation(firstValue, secondValue, operator))
                }
                operators.push(expression[i]);
                i++;
            }
        }
        while (operators.length !== 0) {
            secondValue = intValues.pop();
            firstValue = intValues.pop();
            operator = operators.pop();
            intValues.push(this.operation(firstValue, secondValue, operator))
        }
        return intValues[intValues.length - 1];
    }

    isNumeric(char) {
        return /^\d+$/.test(char);
    }


    precedence(operator) {
        if (operator === '+' || operator === '-')
            return 1
        else if (operator === '*' || operator === '/')
            return 2
        return 0
    }

    operation(a, b, operator) {
        if (operator === '+')
            return a + b
        else if (operator === '*')
            return a * b
        else if (operator === '/')
            return a / b
        else if (operator === '-')
            return a - b
    }
}

export default EvaluationLogic;