const Loading = () => {
  return (
    <>
      <p
        style={{ height: "300px" }}
        className="placeholder-glow col-md-6 d-flex flex-column  align-items-center gap-4 justify-content-center"
      >
        <span class="placeholder col-md-6 w-75 placeholder-lg  "></span>
        <span class="placeholder col-md-6 w-100 placeholder-lg  "></span>
        <span class="placeholder col-md-6 w-100 placeholder-lg  "></span>
        <div className="f-flex w-100 gap-2 justify-content-center">
          <span class="placeholder col-md-6 w-25 placeholder-lg  "></span>
          <span class="placeholder col-md-6 w-25 placeholder-lg  "></span>
        </div>
      </p>
      <span
        style={{ height: "300px" }}
        class="placeholder col-md-6 placeholder-lg rounded placeholder-wave"
      ></span>
    </>
  );
};

export default Loading;
