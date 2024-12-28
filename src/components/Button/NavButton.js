
const NavButton = (props) => {
  return (
    <li className="mr-3">
      <a
        className="transition-all inline-block py-2 px-4  text-black  lg:text-black hover:font-extrabold active:font-bold font-extrabold lg:font-medium text-lg lg:text-2xl"
        href={props.href}
      >
        {props.name}
      </a>
    </li>
  )
}
export default NavButton;