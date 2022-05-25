import React, { useEffect } from "react";

function History({ history }) {
    // History객체는 match처럼 전달되는 props 중 하나입니다.
    // 이 객체를 통하여, 우리가 컴포넌트 내에 구현하는 메소드에서
    // 라우터에 직접 접근을 할 수 있습니다.
    // - 뒤로가기, 특정 경로로 이동, 이탈방지 등...

    const goBack = () => {
        history.goBack();
    };

    const goHome = () => {
        history.push('/');
    };

    useEffect(() => {
        console.log(history);
        const block = history.block('정말 떠나실건가요?');
        return () => {
            block();
        };
    }, [history]);

    return (
        <div>
            <h2>되돌아가기</h2>
            <button onClick={goBack}>뒤로가기</button>
            <button onClick={goHome}>홈으로</button>
        </div>
    )
}





export default History;