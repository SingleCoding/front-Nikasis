import { useNavigate } from "react-router-dom";
import styles from "./ArrowButton.module.css";
import { HiChevronLeft } from "react-icons/hi2";

interface Props {
  className?: string;
}

export default function ({ className }: Props) {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(-1)}
      className={[styles.arrowBtn, className].join(" ")}
    >
      <HiChevronLeft />
    </button>
  );
}
