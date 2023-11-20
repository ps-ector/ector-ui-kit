import { Next } from "../../assets/next";
import { Preview } from "../../assets/preview";

const BASE_PAGINATION_CLASSES =
  "relative block rounded-full bg-transparent px-3 py-1.5 text-sm text-text transition-all duration-300 hover:bg-primary hover:text-tertiary ";

const BASE_NAV_CLASSES =
  "relative block cursor-pointer rounded-full bg-transparent px-3 py-1.5 text-sm text-text transition-all duration-300 hover:text-primary hover:stroke-primary";

const BASE_PAGINATION_SELECTED_CLASSES =
  " relative block rounded-full px-3 py-1.5 text-sm bg-primary text-tertiary ";

// eslint-disable-next-line react/prop-types
export const Pagination = ({ label }) => {
  return (
    <>
      <label className="my-label flex flex-col">
        <span className="my-label-text">{label}</span>
      </label>
      <nav>
        <ul className="list-style-none flex items-center gap-3">
          <li>
            <a className={`${BASE_NAV_CLASSES}`} href="">
              <Preview className={`${BASE_NAV_CLASSES}`} />
            </a>
          </li>
          <li>
            <a className={`${BASE_PAGINATION_CLASSES}`} href="">
              1
            </a>
          </li>
          <li>
            <a className={`${BASE_PAGINATION_SELECTED_CLASSES}`} href="">
              2
            </a>
          </li>
          <li>
            <a className={`${BASE_PAGINATION_CLASSES}`} href="">
              3
            </a>
          </li>
          <li>
            <a className={`${BASE_NAV_CLASSES}`} href="">
              <Next className={`${BASE_NAV_CLASSES}`} />
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};
