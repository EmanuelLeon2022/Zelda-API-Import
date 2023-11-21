import { Link } from "react-router-dom"
export default function Bosses(props) {
  const boss = [
    {caliber: "bosses", name: "Fireblight Ganon"},
    {caliber: "bosses", name: "Waterblight Ganon"},
    {caliber: "bosses", name: "Phantom Ganon"},
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