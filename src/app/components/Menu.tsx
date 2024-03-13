import NavLink from './NavLink'

export default function Menu() {
  return (
    <div className="space-y-2 px-2 py-3 font-medium md:space-x-2 md:space-y-0 md:px-0">
      <NavLink link="/">HOME</NavLink>
      <NavLink link="/noticias">NOTÍCIAS</NavLink>
      <NavLink link="/convenios">CONVÊNIOS</NavLink>
    </div>
  )
}
