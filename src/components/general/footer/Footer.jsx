import "../../../sass/footer.scss";
import CircleButton from "./CircleButton";

const githubProfiles = [
  { name: "Deiximar profile", url: "https://github.com/Deiximar" },
  { name: "Rebeca profile", url: "https://github.com/rebkg87" },
  { name: "Pablo profile", url: "https://github.com/PabloA1A" },
  { name: "Jose profile", url: "https://github.com/jmatisam" },
  { name: "Bego profile", url: "https://github.com/begoblanco" },
  { name: "Julio profile", url: "https://github.com/Lapiceros" },
];

const Profiles = githubProfiles.map((profile) => {
  return <CircleButton profile={profile} key={profile.name} />;
});

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="profile-links">{Profiles}</ul>
      <div>
        <p className="text">
          Hackathon F6 - Edición 6 - Julio 2024
        </p>
      </div>
    </footer>
  );
};

export default Footer;
