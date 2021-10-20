import React from "react";

const ClosingNote = () => {
  return (
    <div className="max-w-screen-xl  py-8 mx-4 mt-6 lg:text-2xl font-bold px-5  bg-green-700 shadow-lg text-white rounded lg:px-10 lg:mt-10 lg:py-20 lg:mx-auto">
      <p>
        We'd love to hear from you, especially if you have some feedback for us.
        Reach out to us at incepthink@gmail.com,{" "}
        <a
          href="https://twitter.com/AppreciationTok"
          target="_blank"
          className="ml-1 underline"
          rel="noopener noreferrer"
        >
          @AppreciationTok
        </a>
        . If you have a new idea for us, we might just build it out for you :)
      </p>
      <p className="mt-10">
        A little support goes a long way, give us a shout out at
        <a
          href="https://twitter.com/AppreciationTok"
          target="_blank"
          className="ml-3 underline"
          rel="noopener noreferrer"
        >
          @AppreciationTok
          <img
            width="32"
            className="inline-block ml-3"
            src="/images/twitter-48.png"
            alt=""
          />
        </a>
      </p>
    </div>
  );
};

export default ClosingNote;
