import Link from "next/link";
import PropTypes from "prop-types";

const Header = ({ links }) => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/" passHref>
              <img src="/logo.png" alt="eom logo" width={95} height={57} />
            </Link>
          </li>
          {links?.map((item) => {
            return (
              <li>
                <Link href={`/${item}`} passHref>
                  {item}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

Header.propTypes = {
  links: PropTypes.array,
};

export default Header;
