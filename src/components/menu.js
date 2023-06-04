import Link from "next/link";
import { useState } from "react";
import Router from "next/router";
{/* <style>
  @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&family=Dosis:wght@500&family=Monoton&family=Roboto+Condensed:wght@700&family=Source+Code+Pro:wght@300&display=swap');
</style> */}
export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const navigateToHome = () => {
    Router.push('/');
};
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div className="mb-1 text-xl text-white-900" style={{fontFamily:'monospace', fontSize:'160%'}}>
            Culturalia 
      </div>
      {/* style={{fontFamily: "Monoton" }}>Culturalia */}
      <div>
        <button onClick={navigateToHome}>Inicio</button>
      </div>
      <div>
        <input type="text" placeholder="Buscar"/>
      </div>
      <div>
        <button onClick={toggleMenu}>Abrir menú</button>
        {isOpen && (
          <div
            style={{
              position: "absolute",
              top: "30px",
              right: "0",
              background: "#fff",
              border: "1px solid #ccc",
              padding: "10px",
              zIndex: "100",
            }}
          >
            <ul>
              <li>
                <Link href="/perfiles">Perfiles destacados</Link>
              </li>
              <li>
                <Link href="/foro">Foro</Link>
              </li>
              <li>
                <Link href="/usuario">Usuario</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
