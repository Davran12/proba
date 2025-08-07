import {memo, useEffect, useMemo, useState} from "react"

const Child = memo(({data}) => {
  console.log("Рендер компонент-ребенок")
  return <div>{data.label}</div>
})

const ChildArray = memo(({products}) => {
  console.log("Рендер компонента-ребенка с массивом")
  return (
    <>
      <h1>Массив товаров:</h1>
      {products.map((el, idx) => {
        return (
          <div key={idx}>
            <h3>{el.name}</h3>
            <p>{el.description}</p>
          </div>
        )
      })}
    </>
  )
})

function Parent() {
  const [isTurn, setIsTurn] = useState(false)
  const [reRender, setReRender] = useState(false)
  const [products, setProducts] = useState([])
  //   const data = {
  //     label: "Объект-label",
  //   };

  const memoData = useMemo(() => ({label: "Мемоизированный объект"}), [])

  //   const products = [
  //     {
  //       name: "Товар 1",
  //       description: "Описание товара",
  //     },
  //     {
  //       name: "Товар 2",
  //       description: "Описание товара",
  //     },
  //     {
  //       name: "Товар 3",
  //       description: "Описание товара",
  //     },
  //     {
  //       name: "Товар 4",
  //       description: "Описание товара",
  //     },
  //     {
  //       name: "Товар 5",
  //       description: "Описание товара",
  //     },
  //     {
  //       name: "Товар 6",
  //       description: "Описание товара",
  //     },
  //   ];

  useEffect(() => {
    setProducts([
      {
        name: "Товар 1",
        description: "Описание товара",
      },
      {
        name: "Товар 2",
        description: "Описание товара",
      },
      {
        name: "Товар 3",
        description: "Описание товара",
      },
      {
        name: "Товар 4",
        description: "Описание товара",
      },
      {
        name: "Товар 5",
        description: "Описание товара",
      },
      {
        name: "Товар 6",
        description: "Описание товара",
      },
    ])
  }, [])

  const memoProducts = useMemo(() => products, [products])

  return (
    <>
      <p>Свет: {isTurn ? "вкл" : "выкл"}</p>
      <button onClick={() => setIsTurn(!isTurn)}>переключить</button>
      <hr />

      <p>Ре-рендер</p>
      <button
        onClick={() =>
          setProducts([
            {
              name: "Товар 1",
              description: "Описание товара",
            },
            {
              name: "Товар 2",
              description: "Описание товара",
            },
            {
              name: "Товар 3",
              description: "Описание товара",
            },
          ])
        }
      >
        нажми на меня!
      </button>
      <hr />

      <h1>Четвертый пример</h1>
      {/* <Child data={memoData} /> */}
      <ChildArray products={memoProducts} />
    </>
  )
}

export default Parent
