interface text {
  title: string;
  position: string;
  description: string;
}
const Experience: React.FC<text> = (props) => {
  const { title, position, description } = props;
  return <div className="bg-secondary md:bg-pdarkgreen">Selam</div>;
};
export default Experience;
