import { BiSolidLogInCircle } from "react-icons/bi";
import { IoMdGitCompare, IoMdHeartDislike } from "react-icons/io";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Topnavbar.module.css";

let Topnavbar = () => {
  const [searchproduct, setsearchproduct] = useState("");
  const navigate = useNavigate();
  const validCategories = [
    "iphone",
    "samsung",
    "infinix",
    "xiaomi",
    "dell",
    "hp",
    "macbook",
    "lenovo",
    "applewatch",
    "samsungwatch",
    "fitbit",
    "chargers",
    "covers",
    "screenprotectors",
    "airpods",
    "galaxybuds",
    "realmebuds",
  ];

  const handleSearch = () => {
    const trimmed = searchproduct.trim();
    if (trimmed) {
      const formatted = trimmed.toLowerCase().replace(/\s+/g, "");
      if (validCategories.includes(formatted)) {
        navigate(`/category/${formatted}`);
      } else {
        navigate("/notfound"); // Custom 404 route
      }
      setsearchproduct("");
    }
  };

  const handlekeydown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.brand}>Wise Market</div>

      <div className={styles.searchbar}>
        <FaSearch />
        <input
          type="search"
          name="search"
          id="productsearch"
          placeholder="Search by Brand, Model, Color..."
          value={searchproduct}
          onChange={(event) => setsearchproduct(event.target.value)}
          onKeyDown={handlekeydown}
        />
      </div>

      <div className={styles.login}>
        <BiSolidLogInCircle />
        <p>Login</p>
        <IoMdGitCompare />
        <IoMdHeartDislike />
        <FaShoppingCart />
      </div>
    </div>
  );
};

export default Topnavbar;
