;

export default function Test() {
  return (
    <div>
      <Controller>
        <Scene duration={300} triggerElement="#first-container" offset={500}>
          {(progress) => (
            <Tween
              from={{
                css: {
                  opacity: "1",
                },
                ease: "Circ.easeOutExpo",
              }}
              to={{
                css: {
                  opacity: "0.1",
                },
                ease: "Circ.easeOutExpo",
              }}
              totalProgress={progress}
              paused
            >
              <div
                id="first-container"
                style={{ backgroundColor: "blue", height: "100vh" }}
              >
                <div id="first-content">
                  <h1>Header1</h1>
                </div>
              </div>
            </Tween>
          )}
        </Scene>
      </Controller>
      <div
        id="second-container"
        style={{ backgroundColor: "red", height: "100vh" }}
      >
        <Controller>
          <Scene duration={300} triggerElement="#first-container" offset={500}>
            {(progress) => (
              <Tween
                from={{
                  css: {
                    opacity: "0",
                  },
                  ease: "Circ.easeOutExpo",
                }}
                to={{
                  css: {
                    opacity: "0.9",
                  },
                  ease: "Circ.easeOutExpo",
                }}
                totalProgress={progress}
                paused
              >
                <div id="second-content" style={{ height: "100%" }}>
                  <h1>header2</h1>
                  <p>test</p>
                </div>
              </Tween>
            )}
          </Scene>
        </Controller>
      </div>
    </div>
  );
}
