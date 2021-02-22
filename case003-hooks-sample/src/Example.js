import React, { useState, useEffect } from 'react';

export default function Example() {

  // フックは関数のトップレベルのみで呼び出す(ループや条件分岐やネストした関数の中で呼び出さない)
  // 関数コンポーネントの内部でのみ呼び出す(通常のJavaScript関数内では呼び出さない)
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  })

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}