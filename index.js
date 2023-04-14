const Button = (props) => {
  const { text, className } = props;
  return (
    <div>
      <button className={className}>{text}</button>
    </div>
  );
};
const element = (
  <div className="main-container">
    <h1 className="heading">Social Buttons</h1>
    <div className="btn-cont">
      <Button className="btn1" text="Like" />
      <Button className="btn2" text="Comment" />
      <Button className="btn3" text="Share" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
