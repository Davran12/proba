import {useDispatch, useSelector} from "react-redux"

export function TodoList() {
  const dispatch = useDispatch()
  const {goods} = useSelector((state) => state.todo)
  console.log(goods)

  return <div>app</div>
}
