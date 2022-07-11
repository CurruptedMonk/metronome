import "./App.css";
import React, { useEffect } from "react";
import { Layout, Typography } from "antd";
import { Content, Header, Footer } from "antd/es/layout/layout";
import Metronome from "./ui/components/Metronome";
import PresetsDrawer from "./ui/components/drawer/PresetsDrawer";
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
                    <PresetsDrawer />
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
