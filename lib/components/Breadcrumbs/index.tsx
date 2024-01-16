// eslint-disable-next-line no-unused-vars
import { Home } from "../../assets/home";

// eslint-disable-next-line react/prop-types
const BaseBreadcrumbs = ({ option, ...props }: { option: string[] }) => {
  return (
    <div className="ec-breadcrumbs" {...props}>
      <ul>
        {option.map((opt) => (
          <li>
            <a href={opt}>{opt}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const IconBreadcrumbs = ({
  option,
  icon,
  ...props
}: {
  option: string[];
  icon: boolean;
}) => {
  return (
    <div className="ec-breadcrumbs" {...props}>
      <ul>
        <Home />
        {option.map((opt) => (
          <li>
            <a href={opt}>{opt}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const Breadcrumbs = ({
  option,
  icon,
  ...props
}: {
  option: string[];
  icon?: boolean;
}) => {
  return (
    <div className="ec-min-w-full">
      {icon ? (
        <IconBreadcrumbs icon={icon} option={[...option]} {...props} />
      ) : (
        <BaseBreadcrumbs option={[...option]} {...props} />
      )}
    </div>
  );
};
