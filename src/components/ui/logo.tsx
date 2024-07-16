import { Link } from "react-router-dom";

import LogoImg from "../../assets/logo.png";

export default function Logo() {
  return (
    <Link to="/" className="inline-flex" aria-label="Cruip">
      <img src={LogoImg} alt="logo image" className="h-8" />
    </Link>
  );
}
