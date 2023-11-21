import { Link } from "react-router-dom"
export default function Monsters(props) {
  const boss = [
    {caliber: "monsters", name: "Stalfos"},
    {caliber: "monsters", name: "Lizalfos"},
    {caliber: "monsters", name: "Keese"},
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