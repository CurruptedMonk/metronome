import "./App.css";
import React, { useEffect } from "react";
import { Layout, Typography } from "antd";
import { Content, Header, Footer } from "antd/es/layout/layout";
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
                    <Title>
                        Metronome <span>With voice control</span>
                    </Title>
                </Header>
                <Content>
                    <Metronome controller={controller} options={options} />
                </Content>
                <Footer />
            </Layout>
        </div>
    );
}

export default App;
