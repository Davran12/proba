import {Provider} from "react-redux"
import {store} from "./store"
import {Counter} from "./Counter"

export function App() {
  return (
    <Provider store={store}>
      <div>
        <Counter />
      </div>
    </Provider>
  )
}
