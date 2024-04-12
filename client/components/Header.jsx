export const Header = () => {
  return (
    <div className="header">
      <ul className="navigation">
        <a href="/" style={{ textDecoration: "none", fontWeight: 200 }}>
          <li className="hvr-bounce-to-left">Today</li>
        </a>
        <a href="/#/week" style={{ textDecoration: "none", fontWeight: 200 }}>
          <li className="hvr-bounce-to-left">Week</li>
        </a>
        <a
          href="/#/month"
          style={{
            textDecoration: "none",
            fontWeight: 200,
          }}
        >
          <li className="hvr-bounce-to-left">Month</li>
        </a>
      </ul>
    </div>
  );
};
