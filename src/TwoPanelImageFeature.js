const TwoPanelImageFeatures = ({ twoPanelImageFeatures }) => {
  //const twoPanelImageFeatures = props.twoPanelImageFeatures;

  return twoPanelImageFeatures.map((blog) => (
    <div
      className={`top-container top-container-${blog.imageAlignment}`}
      key={blog.id}
    >
      <div className="top-container-text">
        <h2>{blog.title}</h2>
        <p>{blog.text}</p>
        <div className="container-cta-div">
          <button className="container-cta">Explore</button>
        </div>
      </div>
      <div className="top-container-image">
        <img src={require(`${blog.image}`)} alt="Leslie in car" />
      </div>
    </div>
  ));
};

export default TwoPanelImageFeatures;
