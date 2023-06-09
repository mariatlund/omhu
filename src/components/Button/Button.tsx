import React from "react";
import { clsx } from "clsx";

// STYLING
const basic = "font-body font-medium uppercase border inline-block border-2 leading-6 button";
// intent
const primary = "bg-blue text-white border-none before:bg-link after:bg-link";
const secondary = "bg-none text-blue border-blue hover:text-white before:bg-blue after:bg-blue";
const alternative = "border-white text-white hover:text-blue  before:bg-white after:bg-white";
// size
const large = "text-16 pb-3 pt-3.5";
const small = "text-14 pb-2 pt-2.5";
// icon
const hasIcon = "px-5 ";
const noIcon = "px-6";

// ICONS
const arrowIcon = (
  <svg width="23" height="23" viewBox="0 0 23 23" fill="none">
    <path d="M11.335 2L9.68971 3.64529L16.2009 10.1681H2V12.5019H16.2009L9.68971 19.0247L11.335 20.67L20.67 11.335L11.335 2Z" fill="currentColor" />
  </svg>
);
const filterIcon = (
  <svg width="23" height="22" viewBox="0 0 23 22" fill="none">
    <path
      d="M2.28125 3.8675C2.39375 4.01375 8.73875 12.1137 8.73875 12.1137V18.875C8.73875 19.4937 9.245 20 9.875 20H12.1363C12.755 20 13.2725 19.4937 13.2725 18.875V12.1025C13.2725 12.1025 19.4488 4.205 19.7413 3.845C20.0338 3.485 20 3.125 20 3.125C20 2.50625 19.4937 2 18.8638 2H3.13625C2.45 2 2 2.54 2 3.125C2 3.35 2.0675 3.62 2.28125 3.8675Z"
      fill="currentColor"
    />
  </svg>
);
const sortIcon = (
  <svg width="25" height="24" viewBox="0 0 25 24" fill="none">
    <path
      d="M15.7526 4.43299H10.8866L13.3196 2L15.7526 4.43299ZM10.9175 19.5979H15.7216L13.3196 22L10.9175 19.5979ZM6.63917 6.09278L2 17.9072H3.89691L4.84536 15.3814H10.1134L11.0619 17.9072H12.9588L8.3299 6.09278H6.63917ZM5.47423 13.6907L7.47423 8.35051L9.47423 13.6907H5.47423ZM16.567 16.268H22.8763V17.9072H14.0825V16.5773L20.1856 7.75258H14.1237V6.10309H22.6804V7.40206L16.567 16.268Z"
      fill="currentColor"
    />
  </svg>
);

const closeIcon = (
  <svg width="22" height="22" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.03006 2L2 4.03006L12.4699 14.5L2 24.9699L4.03006 27L14.5 16.5301L24.9699 27L27 24.9699L16.5301 14.5L27 4.03006L24.9699 2L14.5 12.4699L4.03006 2Z" fill="currentColor" />
  </svg>
);

interface CommonProps {
  intent: "primary" | "secondary" | "alternative";
  size: "large" | "small";
  icon?: "arrow" | "filter" | "sort" | "close";
  label: string;
  containerClass?: string;
  callback?: () => void | undefined;
  className?: string;
}

interface AnchorProps extends CommonProps {
  kind: "link";
  href: string;
  target?: "_blank" | "_self";
}

interface FormButtonProps extends CommonProps {
  kind: "submit";
}
interface BasicButtonProps extends CommonProps {
  kind: "base";
}

type ButtonProps = AnchorProps | FormButtonProps | BasicButtonProps;

function Button({ intent = "primary", size = "large", icon, label, containerClass, callback, ...props }: ButtonProps) {
  const iconInner = (
    <span className="flex flex-row items-center gap-x-4">
      {label}
      {icon === "arrow" ? arrowIcon : icon === "filter" ? filterIcon : icon === "sort" ? sortIcon : closeIcon}
    </span>
  );

  // this button is for links (page navigation or external links)
  if (props.kind === "link") {
    const { href, kind, target, ...rest } = props;
    return (
      <a href={href} target={target} className={clsx(basic, containerClass, intent === "primary" ? primary : intent === "secondary" ? secondary : alternative, size === "large" ? large : small, icon != undefined ? hasIcon : noIcon)}>
        {icon ? iconInner : label}
      </a>
    );
  }

  // this button is for forms (does it need anything else other than type="submit"?)
  if (props.kind === "submit") {
    const { kind, ...rest } = props;
    return (
      <button type="submit" className={clsx(basic, containerClass, intent === "primary" ? primary : intent === "secondary" ? secondary : alternative, size === "large" ? large : small, icon != undefined ? hasIcon : noIcon)}>
        {icon ? iconInner : label}
      </button>
    );
  }

  // this button should be able to receive an onClick function
  if (props.kind === "base") {
    const { kind, ...rest } = props;
    return (
      <button onClick={callback} className={clsx(basic, containerClass, intent === "primary" ? primary : intent === "secondary" ? secondary : alternative, size === "large" ? large : small, icon != undefined ? hasIcon : noIcon)}>
        {icon ? iconInner : label}
      </button>
    );
  }
  return (
    <button onClick={callback} className={clsx(basic, containerClass, intent === "primary" ? primary : intent === "secondary" ? secondary : alternative, size === "large" ? large : small, icon != undefined ? hasIcon : noIcon)}>
      {icon ? iconInner : label}
    </button>
  );
}

export default Button;
