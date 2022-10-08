import { useRef, useEffect } from 'react';

const inputStyle = {
    border: '2px solid #000',
    width: 30,
    height: 30,
    fontSize: 20,
    textAlign: 'center',
    margin: 5,
};

function PinCodeInput(props) {
    const {
        digits,
        changeHandler
    } = props;
    const length = digits.length;
    // здесь будут ссылки на input-элементы
    const inputRefs = useRef([]);

    const handleChange = (index, newValue) => {
        const oldDigit = digits[index];
        // старую цифру в поле ввода убираем, оставляя только новую
        const newDigit = newValue.trim().replace(oldDigit, '');
        // если это не цифра, ничего не делаем, пока не будет цифры
        if (newDigit < '0' || newDigit > '9') return;
        // теперь вызываем callback родителя, чтобы обовить digits
        const newDigits = [...digits]; // копия digits
        newDigits[index] = newDigit;
        changeHandler(newDigits);
        // смещаем фокус на следующее поле для ввода следующей цифры
        if (index < length - 1) {
            inputRefs.current[index + 1].focus();
        } else { // или убираем фокус, если это было последнее поле
            inputRefs.current[index].blur();
        }
    }

    return (
        <div>
            {digits.map((digit, index) => (
                <input
                    key={index}
                    style={inputStyle}
                    value={digit}
                    onChange={event => handleChange(index, event.target.value)}
                    ref={element => inputRefs.current[index] = element}
                />
            ))}
        </div>
    );
}

export default PinCodeInput