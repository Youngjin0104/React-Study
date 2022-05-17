import React from "react";

// function Hello({ name, color, isSpecial }) {
//     return (
//         <div style={{ color }}>
//             {/* hello!! {name} */}
//             {/* {isSpecial ? <b>★</b>:null}안녕하세요 {name} */}
//             {isSpecial && <b>★★★</b>}안녕하세요 {name}
//         </div>
//     )
// }


function Hello(props) {
    // props 해당 컴포넌트에 적용되는 모든 속성을 명칭함 적용방법은 props.속성명
    // 비구조 할당
    return (
        <div style={{ color: props.color }}>안녕하세요 {props.name}</div>
    )
}

Hello.defaultProps = { // 속성을 받지 못했을 때 해당 Hello컴포넌트에 초기값 적용
    color: 'pink',
    name: '무명'
}

export default Hello;