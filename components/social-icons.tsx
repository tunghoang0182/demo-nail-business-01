import facebookIcon from "../facebook-svgrepo-com (1).svg";
import instagramIcon from "../instagram-svgrepo-com.svg";

type SocialIconProps = {
  label: string;
  className?: string;
};

function getIconSource(label: string) {
  if (label === "Instagram") {
    return instagramIcon;
  }

  return facebookIcon;
}

export function SocialIcon({ label, className }: SocialIconProps) {
  const icon = getIconSource(label);
  const src = typeof icon === "string" ? icon : icon.src;

  return (
    <img
      className={className}
      aria-hidden="true"
      alt=""
      src={src}
    />
  );
}
