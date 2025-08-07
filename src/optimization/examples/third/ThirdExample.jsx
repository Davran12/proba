import {useMemo, useState} from "react"

// useMemo - кэширует результат, пока зависимости не изменились
// без useMemo, тяжелая операция будет выполняться на каждый рендер, даже если number не изменился 

function HeavyComponent({number}) {
  console.log("render child component")

  const expensiveResult = useMemo(() => {
    console.log("идет вычисление ...")
    let total = 0
    for (let i = 0; i < 1e7; i++) {
      total += 1
    }
    return total + number
  }, [number])

  return <div>Result: {expensiveResult}</div>
}

export function ShowResultFromHead() {
  const [num, setNum] = useState(1)
  const [isTurn, setIsTurn] = useState(false)
  return (
    <div>
      <p>счетчик: {isTurn ? "вкл" : "выкл"}</p>
      <button onClick={() => setIsTurn(!isTurn)}>переключить</button>
      <hr />
      <button onClick={() => setNum((prev) => prev + 1)}>+1</button>
      <HeavyComponent number={num} />
    </div>
  )
}
