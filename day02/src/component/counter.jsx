import React, { useState } from "react";

function Counter() {
    // hooks 함수
    // 상태관리를 위해서 초기값을 설정
    const [number, setNumber] = useState(0);

    const plus = () => {
        setNumber(number + 1);
        console.log('더하기 1');
    }

    const minus = () => {
        setNumber(number - 1);
        console.log('빼기 1');
    }

    return (
        <div>
            <h2>{number}</h2>
            <button onClick={plus}>더하기</button>
            <button onClick={minus}>빼기</button>
        </div>
    );
}

export default Counter;