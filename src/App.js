import './App.css';
import React, {useEffect} from "react";
import {Layout, Typography} from "antd";
import {Content, Header} from "antd/es/layout/layout";
import Bpm from "./ui/components/Bpm";
import ControlButtons from "./ui/components/ControlButtons";
import Beat from "./ui/components/Beat";
import Duration from "./ui/components/Duration";
import Sounds from "./ui/components/Sounds";
import MetronomeHeader from "./ui/components/MetronomeHeader";
const {Title} = Typography;

function App({controller, options}) {
    useEffect(() => {
        const init = async () => {
            await controller.sequencer.loadSamples();
            await controller.storage.downloadSettings();
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
            <MetronomeHeader
                entities={{
                    bpm: controller.bpm,
                    beat: controller.beat,
                    duration: controller.duration
                }}
            />
            <Bpm controller={controller} bpmOptions={options.bpm} />
            <ControlButtons controller={controller}/>
            <Beat controller={controller}/>
            <Duration controller={controller} durationOptions={options.duration}/>
            <Sounds controller={controller} sampleOptions={options.sample}/>
          </Content>
      </Layout>
    </div>
  );
}

export default App;
