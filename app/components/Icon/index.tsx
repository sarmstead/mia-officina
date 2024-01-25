import { IconProps } from "~icon/iconProps";
import { ArrowRight } from "~icon/ArrowRight";
import { Close } from "~icon/Close";
import { Moon } from "~icon/Moon";
import { Sandwich } from "./Sandwich";
import { Sun } from "~icon/Sun";

const Icon = (props: IconProps) => {
  const { name } = props;
  switch (name.toLowerCase()) {
    case "arrowright":
      return <ArrowRight {...props} />;
    case "close":
      return <Close {...props} />;
    case "moon":
      return <Moon {...props} />;
    case "sandwich":
      return <Sandwich {...props} />;
    case "sun":
      return <Sun {...props} />;
  }
};

export { Icon };
