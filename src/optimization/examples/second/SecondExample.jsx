import {memo, useCallback, useState} from "react"

const Child = memo(({onClick}) => {
  console.log("child render")
  return <button onClick={onClick}>child button</button>
})

export function Parent() {
  const [count, setCount] = useState(0)

  // без useCallback - функция создает заново на каждый рендер

  // useCallback гарантирует, что ссылка на функцию остается постоянной, пока не изменятся зависимости
  const handleClick = useCallback(() => {
    console.log("clicked!")
  }, [])
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <Child onClick={handleClick} />
    </div>
  )
}
