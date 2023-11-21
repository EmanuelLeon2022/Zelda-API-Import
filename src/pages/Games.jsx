import { Link } from "react-router-dom"
export default function Games(props){
  const boss = [
    {caliber: "games", name: "Ocarina of Time"},
    {caliber: "games", name: "Twilight Princess"},
    {caliber: "games", name: "Breath of the Wild"},
  ];
  return (
    <div className="boss">
      {boss.map((cap) => {
        const {name, caliber} = cap;
        return(
          <Link to={`/info/${caliber}`}>
          <h2>{name}</h2>
          </Link>
        );
      })}        
    </div>
  )
}