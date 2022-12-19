import TwoPanelImageFeatures from "./TwoPanelImageFeature";

const Home = () => {
  const twoPanelImageFeatures = [
    {
      id: 1,
      title: "It's time to improve the experience of your employees",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed acmolestie risus, eu maximus dui. Donec vehicula ultriciesconsectetur. Aliquam sed nibh massa. Maecenas arcu nunc, pretium euconsequat eget, mollis id mi.",
      image: "./images/leslie_on_holiday.jpg",
      imageAlignment: "left",
    },
    {
      id: 2,
      title: "It's time to improve the experience of your employees",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed acmolestie risus, eu maximus dui. Donec vehicula ultriciesconsectetur. Aliquam sed nibh massa. Maecenas arcu nunc, pretium euconsequat eget, mollis id mi.",
      image: "./images/leslie_in_car.jpg",
      imageAlignment: "right",
    },
    {
      id: 3,
      title: "Does not show",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed acmolestie risus, eu maximus dui. Donec vehicula ultriciesconsectetur. Aliquam sed nibh massa. Maecenas arcu nunc, pretium euconsequat eget, mollis id mi.",
      image: "./images/leslie_in_car.jpg",
      imageAlignment: "right",
    },
  ];

  return (
    <div className="home">
      <button className="" openModalBtn>
        Button
      </button>
      <div className="intro">
        <h2>
          It's an employee's market out there so now is the time to act to
          ensure you are doing the best for your employees. Make your company a
          magnet for hot talent.
        </h2>
        <a className="join-cta" href="">
          Join me today
        </a>
      </div>

      <div className="colouredContainer">
        <h1>Get Experiencing Today</h1>
        <p>If there was ever a time to do it, today is that day.</p>
        <a href="">Start now</a>
      </div>

      <TwoPanelImageFeatures
        twoPanelImageFeatures={twoPanelImageFeatures.filter(
          (panel) => panel.id !== 3
        )}
      />

      <h2>Some stuff about us</h2>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac molestie
        risus, eu maximus dui. Donec vehicula ultricies consectetur. Aliquam sed
        nibh massa. Maecenas arcu nunc, pretium eu consequat eget, mollis id mi.
        Mauris sed mi et diam imperdiet hendrerit. Curabitur vel lobortis nunc.
        Aliquam bibendum enim non nisi vulputate ultrices sagittis ac nisl. In
        odio purus, laoreet ut finibus eu, pulvinar ac arcu. Sed lacinia magna
        sed rutrum facilisis. Morbi arcu dolor, varius vel lobortis blandit,
        ultricies nec ipsum. Pellentesque mattis tellus erat, sit amet commodo
        dui bibendum non.
      </p>
      <p>
        In magna arcu, rutrum a vulputate sagittis, porta eu risus. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Aliquam volutpat fringilla
        lorem non malesuada. Nullam convallis ex et auctor gravida. Donec ac
        erat aliquam, ornare ipsum a, lacinia ligula. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Donec eu scelerisque est. Curabitur
        ut iaculis urna. Nam elementum viverra scelerisque. In a odio luctus,
        lacinia turpis vel, bibendum orci. Nulla facilisi.
      </p>
      <button>click me test</button>
    </div>
  );
};

export default Home;
