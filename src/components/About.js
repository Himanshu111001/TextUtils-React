import React from "react";

export default function About(props) {
  let myStyle = {
    color: props.mode === "dark" ? "white" : "#042743",
    backgroundColor: props.mode === "dark" ? "rgb(36 74 104)" : "white",
  };

  return (
    <div className="container">
      <h1
        className="my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        About Us
      </h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>Analyze Your Text </strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum saepe
              rerum cum molestias qui harum ea commodi perspiciatis nulla.
              Accusamus, natus officia? Facilis illo accusamus, architecto
              quibusdam adipisci a inventore.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Free To Use </strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptate officiis libero atque! Eveniet neque commodi repudiandae
              vitae, dolorum minima exercitationem enim quasi, facere labore
              optio consectetur voluptatibus voluptas, quam officiis!
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Perferendis facere voluptates autem aliquam aspernatur accusantium
              nisi laborum, ut in obcaecati, quisquam laudantium magni qui
              nostrum. Obcaecati unde nulla sequi natus.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
