const CircleButton = ({ profile }) => {
  return (
    <li className="circle-button">
      <a className="profile-button" href={profile.url}>
        <div></div>
      </a>
    </li>
  );
};

export default CircleButton;
