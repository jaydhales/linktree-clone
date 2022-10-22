import slackIcon from "../assets/slack.svg";
import githubIcon from "../assets/github.svg";

const Main = () => {
  const linkData = [
    {
      id: "btn__twitter",
      text: "Twitter Link",
      href: "https://twitter.com/jaydhales1",
    },
    {
      id: "btn__zuri",
      text: "Zuri Team",
      href: "https://training.zuri.team/",
    },
    {
      id: "books",
      text: "Zuri Books",
      href: "http://books.zuri.team",
    },
    {
      id: "book__python",
      text: "Python Books",
      href: "http://books.zuri.team/python-for-beginners?ref_id=james-o",
    },
    {
      id: "pitch",
      text: "Background Check for Coders",
      href: "https://background.zuri.team",
    },
    {
      id: "book__design",
      text: "Design Books",
      href: "https://books.zuri.team/design-rules",
    },
  ];
  return (
    <section>
      {linkData.map(({ id, text, href }) => (
        <a href={href} target="_blank" id={id} className="btn">
          {text}
        </a>
      ))}
      <div className="other-links">
        <img src={slackIcon} alt="Slack Icon" />
        <img src={githubIcon} alt="Github Icon" />
      </div>
    </section>
  );
};

export default Main;
