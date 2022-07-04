import "./App.css";
import React, { useEffect } from "react";
import { Layout, Typography } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import Metronome from "./ui/components/Metronome";
const { Title } = Typography;

function App({ controller, options }) {
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
                        <Title>
                            Metronome{" "}
                            <span className={"subtitle"}>
                                With voice control
                            </span>
                        </Title>
                    </div>
                </Header>
                <Content>
                    <Metronome controller={controller} options={options} />
                </Content>
            </Layout>
        </div>
    );
}

export default App;
