import {Link, Outlet} from "react-router-dom"

export function Cart() {
  return (
    <main>
      <h1>Корзина</h1>
      <nav style={{display: "flex", gap: "20px"}}>
        <Link to={"/cart/active"}>Активные корзины</Link>
        <Link to={"/cart/archive"}>Архивные корзины</Link>
      </nav>
      <Outlet />
    </main>
  )
}
