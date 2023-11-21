import { Link } from 'react-router-dom'

function Nav (props){
  return (
    <div className="nav">
      <Link to="/">
        <div>MAIN</div>
      </Link>
      <Link to="/Games">
        <div>GAMES</div>
      </Link>
      <Link to="/Monsters">
        <div>MONSTERS</div>
      </Link>
      <Link to="/Bosses">
        <div>BOSSES</div>
      </Link>
    </div>
  );
};
export default Nav