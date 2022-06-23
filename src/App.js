import './App.css';
import React, {useEffect} from "react";
import {Layout, Typography} from "antd";
import {Content, Header} from "antd/es/layout/layout";
import Bpm from "./ui/components/Bpm";
import ControlButtons from "./ui/components/ControlButtons";
const {Title} = Typography;

function App({controller, options}) {
    useEffect(() => {
        const init = async () => {
            await controller.sequencer.loadSamples();
        };
        init();
    }, [controller]);
  return (
    <div className="App">
      <Layout>
          <Header>
              <div>
                  <Title>Metronome <span className={"subtitle"}>With voice control</span></Title>
              </div>
          </Header>
          <Content style={{width:"50%", margin:"auto"}}>
            <Bpm controller={controller} bpmOptions={options.bpm} />
            <ControlButtons controller={controller}/>
          </Content>
      </Layout>
    </div>
  );
}

export default App;
