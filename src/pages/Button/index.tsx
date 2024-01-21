import { Link } from "react-router-dom";

type Props = {
  title: string;
}

const MyButton = ({ title }: Props) => {
  return (
    <Link to="/App">
      <button>{title}</button>
    </Link>
  );
}

const Button = ({ title }: Props) => {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton title={title} />
    </div>
  );
}

export default Button
