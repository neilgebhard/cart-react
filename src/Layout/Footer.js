import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const Footer = (props) => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      Made with ❤️ by Neil Gebhard. The code is on{" "}
      <Link color="inherit" href="https://github.com/">
        Github
      </Link>
      .
    </Typography>
  );
};

export default Footer;
