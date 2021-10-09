import StyledLink from "./StyledLink";

export default function Navbar({ video }) {
  return (
    <>
      <div>
        <StyledLink href={video} text="Video" />
      </div>
    </>
  );
}