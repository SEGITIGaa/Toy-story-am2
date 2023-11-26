const SwitchMenu = (props) => {
  return (
    <button
      onClick={() => props.showMenu(props.menu)}
      className={props.Menu === props.menu ? 'menu-show' : 'menu-hide'}
    >
      <img src={props.img} alt="" className="w-5 h-5" />
      <p
        className=" text-lg font-normal text-white
"
      >
        {props.text}
      </p>
    </button>
  );
};
export default SwitchMenu;
