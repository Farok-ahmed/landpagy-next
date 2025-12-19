"use client";

// Test component - placeholder for react-scrollmagic animations
// The react-scrollmagic and react-gsap packages need to be installed to use this component

export default function Test() {
  return (
    <div>
      <div
        id="first-container"
        style={{ backgroundColor: "blue", height: "100vh" }}
      >
        <div id="first-content">
          <h1>Header1</h1>
        </div>
      </div>
      <div
        id="second-container"
        style={{ backgroundColor: "red", height: "100vh" }}
      >
        <div id="second-content" style={{ height: "100%" }}>
          <h1>header2</h1>
          <p>test</p>
        </div>
      </div>
    </div>
  );
}
