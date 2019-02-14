import React, { useState } from 'react';

export default function HookComponent() {
  const [counter, updateCounter] = useState(0);
  return (
    <div>
      <button onClick={() => updateCounter(counter + 1)}>Click me</button>I have
      been clicked {counter} times
    </div>
  );
}
