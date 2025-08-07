import {memo, useState} from "react"

// memo - сравнивает предыдущий props и новый props, и если они не изменились - рендер пропускается
const Child = memo(({value}) => {
  console.log("child render")

  return <div>Value: {value}</div>
})

export function Parent() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <Child value={"должен ререндериться"} />
    </div>
  )
}
