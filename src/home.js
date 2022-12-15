import { useState } from "react";

const Home = () => {
  const [name, setName] = useState("mario");

  const clickHandler = (e) => {
    setName("wayne");
  };

  return (
    <div className="home">
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

      <div className="top-container">
        <div className="top-container-text">
          <h2>It's time to improve the experience of your employees</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
            molestie risus, eu maximus dui. Donec vehicula ultricies
            consectetur. Aliquam sed nibh massa. Maecenas arcu nunc, pretium eu
            consequat eget, mollis id mi.
          </p>
        </div>
        <div className="top-container-image">
          <img
            src={require("./images/leslie_in_car.jpg")}
            alt="Leslie in car"
          />
        </div>
      </div>

      <div className="top-container">
        <div className="top-container-image">
          <img
            src={require("./images/leslie_on_holiday.jpg")}
            alt="Leslie in car"
          />
        </div>
        <div className="top-container-text">
          <h2>It's time to improve the experience of your employees</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
            molestie risus, eu maximus dui. Donec vehicula ultricies
            consectetur. Aliquam sed nibh massa. Maecenas arcu nunc, pretium eu
            consequat eget, mollis id mi.
          </p>
        </div>
      </div>
      <h2>Some stuff about us</h2>
      <p>{name}</p>
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
      <button onClick={clickHandler}>click me test</button>
    </div>
  );
};

export default Home;
