import {Link} from "react-router-dom"

export function NotFound() {
  return (
    <div>
      <h1>Страница не найдена</h1>
      <p>просим прощения такой страницы нет</p>
      <Link to={"/"}>Перейти на главную страницу</Link>
    </div>
  )
}
