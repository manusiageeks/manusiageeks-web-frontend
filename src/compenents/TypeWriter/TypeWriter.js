import Typewriter from 'typewriter-effect';

function TypingGenerator(props) {
  return (
    <Typewriter
      options={{
        loop: true,
      }}
      onInit={(typewriter) => {
        typewriter
          .typeString(props.children)
          .pauseFor(100)
          .start();
      }}
    />
  );
}

export default TypingGenerator;
